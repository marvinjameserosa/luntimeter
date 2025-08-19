"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ChatbotButton() {
  const [open, setOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello! I'm your LuntiMeter AI assistant. How can I help you improve your ESG performance today?",
    },
  ]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatMessages, open]);

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    setChatMessages((prev) => [...prev, { role: "user", content: chatInput }]);
    setChatInput(""); // Clear input immediately for better UX

    setTimeout(() => {
      let response = "";
      if (
        chatInput.toLowerCase().includes("improvement") ||
        chatInput.toLowerCase().includes("suggest")
      ) {
        response =
          "Based on your recent data, I recommend improving energy efficiency in your west wing operations. Our sensors detected a 15% higher energy consumption compared to industry benchmarks. Would you like me to generate a detailed improvement plan?";
      } else if (chatInput.toLowerCase().includes("report")) {
        response =
          "I can generate comprehensive ESG reports tailored to various frameworks including GRI, SASB, and TCFD. Which reporting standard would you like to use?";
      } else {
        response =
          "I'd be happy to help with that. Would you like me to analyze your current ESG metrics and provide actionable insights?";
      }
      setChatMessages((prev) => [
        ...prev,
        { role: "assistant", content: response },
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {!open && (
          <motion.button
            key="chatbot-btn"
            initial={{ scale: 0.7, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.7, opacity: 0, y: 40 }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 18,
              mass: 0.7,
            }}
            className="size-16 rounded-full flex items-center justify-center
              bg-primary/10 backdrop-blur-md shadow-xl border border-primary/30
              hover:shadow-2xl hover:ring-4 hover:ring-primary/20
              transition-all duration-300
              group"
            onClick={() => setOpen(true)}
            aria-label="Open LuntiMeter AI Assistant"
            style={{
              boxShadow:
                "0 8px 32px 0 rgba(34, 197, 94, 0.15), 0 1.5px 4px 0 rgba(0,0,0,0.08)",
              border: "1.5px solid rgba(34,197,94,0.18)",
            }}
          >
            <img
              src="/luntimeter_logo.png"
              alt="LuntiMeter Logo"
              className="w-10 h-10 rounded-full shadow-md group-hover:scale-110 transition-transform duration-300"
              style={{
                filter:
                  "drop-shadow(0 2px 8px rgba(34,197,94,0.10)) drop-shadow(0 0px 2px rgba(0,0,0,0.05))",
              }}
            />
          </motion.button>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {open && (
          <motion.div
            key="chatbot-box"
            initial={{ scale: 0.85, opacity: 0, y: 60 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 60 }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 18,
              mass: 0.7,
            }}
            className="w-80 sm:w-96 max-w-[95vw] h-[520px] rounded-3xl shadow-2xl border bg-background/90 backdrop-blur-md flex flex-col overflow-hidden"
            style={{
              boxShadow:
                "0 8px 32px 0 rgba(34, 197, 94, 0.15), 0 1.5px 4px 0 rgba(0,0,0,0.08)",
              border: "1.5px solid rgba(34,197,94,0.18)",
            }}
          >
            <div className="flex items-center justify-between px-4 py-3 border-b bg-primary/10 rounded-t-3xl">
              <div className="flex items-center gap-2">
                <img
                  src="/luntimeter_logo.png"
                  alt="LuntiMeter Logo"
                  className="w-7 h-7 rounded-full"
                />
                <span className="font-semibold">LuntiMeter AI Assistant</span>
                <Badge variant="outline" className="rounded-xl ml-2">
                  <Bot className="mr-1 h-3 w-3" /> AI Powered
                </Badge>
              </div>
              <button
                className="text-muted-foreground hover:text-primary transition-colors text-2xl font-bold"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                style={{ lineHeight: "1" }}
              >
                ×
              </button>
            </div>
            <div className="flex flex-col flex-1 h-0">
              <div className="flex-1 overflow-y-auto p-4">
                <div className="space-y-4">
                  {chatMessages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`flex ${
                        msg.role === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl p-3 ${
                          msg.role === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted"
                        }`}
                      >
                        {msg.role === "assistant" && (
                          <div className="flex items-center gap-2 mb-1">
                            <Bot className="h-4 w-4" />
                            <span className="font-medium">LuntiMeter AI</span>
                          </div>
                        )}
                        <p>{msg.content}</p>
                      </div>
                    </div>
                  ))}
                  <div ref={chatEndRef} />
                </div>
              </div>
              <div className="border-t p-4 bg-background">
                <form onSubmit={handleChatSubmit} className="flex gap-2">
                  <Input
                    placeholder="Ask about ESG improvements..."
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    className="flex-1 rounded-2xl"
                    autoFocus
                    disabled={false}
                  />
                  <Button
                    type="submit"
                    size="icon"
                    className="rounded-2xl"
                    disabled={!chatInput.trim()}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
