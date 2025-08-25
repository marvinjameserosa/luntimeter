"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Bell,
  ChevronDown,
  Cloud,
  Grid,
  Leaf,
  Menu,
  MessageSquare,
  PanelLeft,
  Plus,
  Search,
  Settings,
  TrendingUp,
  Users,
  X,
  Download,
  Sparkles,
  ArrowRight,
  FileText,
  Calendar,
  DollarSign,
  ClipboardList,
  Phone,
  Mail,
  BarChart,
  Briefcase,
  Award,
  Clock,
  CheckCircle2,
  AlertCircle,
  ChartPie,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import { recentReports } from "@/dummydata/data";
import { sidebarItems } from "@/dummydata/data";
import ChatbotButton from "@/components/sections/dashboard/ChatbotButton";

import { Project, sensors } from "@/dummydata/data";
import sampleProjectsJSON from "@/dummydata/sample-projects.json";
import {
  ProjectsTab,
  projectStatuses,
} from "@/components/sections/ProjectsTab";
import { ProjectCard } from "@/components/ProjectCard";

// Updated sidebar navigation items to match the four core modules
const luntiModules = [
  {
    title: "Lead & Client Hub",
    description: "Manage your contacts, leads, and client relationships",
    icon: <Users className="h-6 w-6 text-primary" />,
    value: "crm",
  },
  {
    title: "Smart Estimator & Proposal",
    description: "Create professional estimates and proposals",
    icon: <FileText className="h-6 w-6 text-primary" />,
    value: "estimator",
  },
  {
    title: "Field Operations Hub",
    description: "Manage on-site projects, tasks, and crews",
    icon: <Calendar className="h-6 w-6 text-primary" />,
    value: "operations",
  },
  {
    title: "Live Financial Dashboard",
    description: "Track your business finances in real-time",
    icon: <DollarSign className="h-6 w-6 text-primary" />,
    value: "finance",
  },
  {
    title: "Lunti ESG Score",
    description: "Track your environmental and social impact metrics",
    icon: <Leaf className="h-6 w-6 text-primary" />,
    value: "lunti-score",
  },
];

export default function LuntiMeterDashboard() {
  const [progress, setProgress] = useState(0);
  const [notifications, setNotifications] = useState(3);
  const [activeTab, setActiveTab] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>(
    {}
  );
  const [activeModule, setActiveModule] = useState("crm");
  const [sampleProjects, setSampleProjects] = useState<Project[]>(
    sampleProjectsJSON as Project[]
  );
  const [viewAll, setViewAll] = useState<string | null>(null);
  const [projectView, setProjectView] = useState("kanban");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const handleViewAll = (tab: string, subtab?: string) => {
    if (
      tab === "projects" &&
      subtab &&
      ["active", "completed", "archived"].includes(subtab)
    ) {
      setActiveTab(tab);
      setViewAll(subtab);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setProgress(100), 1000);
    return () => clearTimeout(timer);
  }, []);

  const toggleExpanded = (title: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* LuntiMeter: Animated gradient background */}
      <motion.div
        className="absolute inset-0 -z-10 opacity-10"
        animate={{
          background: [
            "radial-gradient(circle at 50% 50%, rgba(106, 207, 48, 0.4) 0%, rgba(176, 235, 142, 0.2) 50%, rgba(0, 0, 0, 0) 100%)",
            "radial-gradient(circle at 30% 70%, rgba(135, 246, 70, 0.4) 0%, rgba(106, 207, 48, 0.2) 50%, rgba(0, 0, 0, 0) 100%)",
            "radial-gradient(circle at 70% 30%, rgba(176, 235, 142, 0.4) 0%, rgba(135, 246, 70, 0.2) 50%, rgba(0, 0, 0, 0) 100%)",
            "radial-gradient(circle at 50% 50%, rgba(106, 207, 48, 0.4) 0%, rgba(176, 235, 142, 0.2) 50%, rgba(0, 0, 0, 0) 100%)",
          ],
        }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar - Mobile */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 transform bg-background transition-transform duration-300 ease-in-out md:hidden",
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col border-r">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <div className="flex aspect-square size-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6ACF30] to-[#87F646] text-white">
                <Leaf className="size-5" />
              </div>
              <div>
                <h2 className="font-semibold">Lunti Platform</h2>
                <p className="text-xs text-muted-foreground">Business Tools</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <div className="px-3 py-2">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-full rounded-2xl bg-muted pl-9 pr-4 py-2"
              />
            </div>
          </div>

          <ScrollArea className="flex-1 px-3 py-2">
            <div className="space-y-1">
              {sidebarItems.map((item) => (
                <div key={item.title} className="mb-1">
                  <button
                    className={cn(
                      "flex w-full items-center justify-between rounded-2xl px-3 py-2 text-sm font-medium",
                      item.isActive
                        ? "bg-primary/10 text-primary"
                        : "hover:bg-muted"
                    )}
                    onClick={() => {
                      item.onClick && item.onClick();
                      item.items && toggleExpanded(item.title);
                    }}
                  >
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <span>{item.title}</span>
                    </div>
                    {item.badge && (
                      <Badge
                        variant="outline"
                        className="ml-auto rounded-full px-2 py-0.5 text-xs"
                      >
                        {item.badge}
                      </Badge>
                    )}
                    {item.items && (
                      <ChevronDown
                        className={cn(
                          "ml-2 h-4 w-4 transition-transform",
                          expandedItems[item.title] ? "rotate-180" : ""
                        )}
                      />
                    )}
                  </button>

                  {item.items && expandedItems[item.title] && (
                    <div className="mt-1 ml-6 space-y-1 border-l pl-3">
                      {item.items.map((subItem) => (
                        <a
                          key={subItem.title}
                          href={subItem.url}
                          className="flex items-center justify-between rounded-2xl px-3 py-2 text-sm hover:bg-muted"
                        >
                          {subItem.title}
                          {subItem.badge && (
                            <Badge
                              variant="outline"
                              className="ml-auto rounded-full px-2 py-0.5 text-xs"
                            >
                              {subItem.badge}
                            </Badge>
                          )}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="border-t p-3">
            <div className="space-y-1">
              <button className="flex w-full items-center gap-3 rounded-2xl px-3 py-2 text-sm font-medium hover:bg-muted">
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </button>
              <button className="flex w-full items-center justify-between rounded-2xl px-3 py-2 text-sm font-medium hover:bg-muted">
                <div className="flex items-center gap-3">
                  <Avatar className="h-6 w-6">
                    <AvatarImage
                      src="/placeholder.svg?height=32&width=32"
                      alt="User"
                    />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <span>Juan Dela Cruz</span>
                </div>
                <Badge variant="outline" className="ml-auto">
                  Admin
                </Badge>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar - Desktop */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-30 hidden w-64 transform border-r bg-background transition-transform duration-300 ease-in-out md:block",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col">
          <div className="p-4">
            <div className="flex items-center gap-3">
              <div className="flex aspect-square size-10 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6ACF30] to-[#87F646] text-white">
                <Leaf className="size-5" />
              </div>
              <div>
                <h2 className="font-semibold">Lunti Platform</h2>
                <p className="text-xs text-muted-foreground">Business Tools</p>
              </div>
            </div>
          </div>

          <div className="px-3 py-2">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-full rounded-2xl bg-muted pl-9 pr-4 py-2"
              />
            </div>
          </div>

          <ScrollArea className="flex-1 px-3 py-2">
            <div className="space-y-1">
              {sidebarItems.map((item) => (
                <div key={item.title} className="mb-1">
                  <button
                    className={cn(
                      "flex w-full items-center justify-between rounded-2xl px-3 py-2 text-sm font-medium",
                      item.isActive
                        ? "bg-primary/10 text-primary"
                        : "hover:bg-muted"
                    )}
                    onClick={() => item.items && toggleExpanded(item.title)}
                  >
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <span>{item.title}</span>
                    </div>
                    {item.badge && (
                      <Badge
                        variant="outline"
                        className="ml-auto rounded-full px-2 py-0.5 text-xs"
                      >
                        {item.badge}
                      </Badge>
                    )}
                    {item.items && (
                      <ChevronDown
                        className={cn(
                          "ml-2 h-4 w-4 transition-transform",
                          expandedItems[item.title] ? "rotate-180" : ""
                        )}
                      />
                    )}
                  </button>

                  {item.items && expandedItems[item.title] && (
                    <div className="mt-1 ml-6 space-y-1 border-l pl-3">
                      {item.items.map((subItem) => (
                        <a
                          key={subItem.title}
                          href={subItem.url}
                          className="flex items-center justify-between rounded-2xl px-3 py-2 text-sm hover:bg-muted"
                        >
                          {subItem.title}
                          {subItem.badge && (
                            <Badge
                              variant="outline"
                              className="ml-auto rounded-full px-2 py-0.5 text-xs"
                            >
                              {subItem.badge}
                            </Badge>
                          )}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="border-t p-3">
            <div className="space-y-1">
              <button className="flex w-full items-center gap-3 rounded-2xl px-3 py-2 text-sm font-medium hover:bg-muted">
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </button>
              <button className="flex w-full items-center justify-between rounded-2xl px-3 py-2 text-sm font-medium hover:bg-muted">
                <div className="flex items-center gap-3">
                  <Avatar className="h-6 w-6">
                    <AvatarImage
                      src="/placeholder.svg?height=32&width=32"
                      alt="User"
                    />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <span>Juan Dela Cruz</span>
                </div>
                <Badge variant="outline" className="ml-auto">
                  Admin
                </Badge>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={cn(
          "min-h-screen transition-all duration-300 ease-in-out",
          sidebarOpen ? "md:pl-64" : "md:pl-0"
        )}
      >
        <header className="sticky top-0 z-10 flex h-16 items-center gap-3 border-b bg-background/95 px-4 backdrop-blur">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="hidden md:flex"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <PanelLeft className="h-5 w-5" />
          </Button>
          <div className="flex flex-1 items-center justify-between">
            <h1 className="text-xl font-semibold">Lunti Business Platform</h1>
            <div className="flex items-center gap-3">
              {/* LuntiAI Assistant Trigger */}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-2xl bg-primary/10 text-primary border-0"
                    >
                      <Sparkles className="h-4 w-4 mr-2" />
                      Ask LuntiAI
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    Ask questions to your AI assistant
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-2xl">
                      <Cloud className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Cloud Sync</TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-2xl">
                      <MessageSquare className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Messages</TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-2xl relative"
                    >
                      <Bell className="h-5 w-5" />
                      {notifications > 0 && (
                        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                          {notifications}
                        </span>
                      )}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Notifications</TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <Avatar className="h-9 w-9 border-2 border-primary">
                <AvatarImage
                  src="/placeholder.svg?height=40&width=40"
                  alt="User"
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 md:p-6">
          <Tabs
            defaultValue="overview"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <TabsList className="grid w-full max-w-[700px] grid-cols-6 rounded-2xl p-1">
                <TabsTrigger
                  value="overview"
                  className="rounded-xl data-[state=active]:rounded-xl"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="crm"
                  className="rounded-xl data-[state=active]:rounded-xl"
                >
                  Clients
                </TabsTrigger>
                <TabsTrigger
                  value="estimator"
                  className="rounded-xl data-[state=active]:rounded-xl"
                >
                  Proposals
                </TabsTrigger>
                <TabsTrigger
                  value="operations"
                  className="rounded-xl data-[state=active]:rounded-xl"
                >
                  Projects
                </TabsTrigger>
                <TabsTrigger
                  value="finance"
                  className="rounded-xl data-[state=active]:rounded-xl"
                >
                  Financials
                </TabsTrigger>
                <TabsTrigger
                  value="lunti-score"
                  className="rounded-xl data-[state=active]:rounded-xl"
                >
                  Lunti Score
                </TabsTrigger>
              </TabsList>
              <div className="hidden md:flex gap-2">
                <Button variant="outline" className="rounded-2xl">
                  <Download className="mr-2 h-4 w-4" />
                  Export Data
                </Button>
                <Button className="rounded-2xl">
                  <Plus className="mr-2 h-4 w-4" />
                  New Lead
                </Button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {/* Overview Dashboard */}
                <TabsContent value="overview" className="space-y-8 mt-0">
                  {/* Welcome Banner */}
                  <section>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="overflow-hidden rounded-3xl bg-gradient-to-r from-[#6ACF30] via-green-500 to-[#87F646] p-8 text-white"
                    >
                      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                        <div className="space-y-4">
                          <Badge className="bg-white/20 text-white hover:bg-white/30 rounded-xl">
                            Financing Readiness Score: 78/100
                          </Badge>
                          <h2 className="text-3xl font-bold">
                            Welcome to your Lunti Business Platform
                          </h2>
                          <p className="max-w-[600px] text-white/80">
                            All your business tools in one place - from leads to
                            payments, with built-in ESG tracking for better
                            financing.
                          </p>
                          <div className="flex flex-wrap gap-3">
                            <Button className="rounded-2xl bg-white text-green-700 hover:bg-white/90">
                              <Sparkles className="mr-2 h-4 w-4" />
                              Ask LuntiAI
                            </Button>
                            <Button
                              variant="outline"
                              className="rounded-2xl bg-transparent border-white text-white hover:bg-white/10"
                            >
                              Business Health Report
                            </Button>
                          </div>
                        </div>
                        <div className="hidden lg:block">
                          <div className="relative h-40 w-40 bg-white/20 rounded-full flex items-center justify-center">
                            <div className="text-2xl font-bold">78%</div>
                            <div className="absolute inset-0 rounded-full border-4 border-white/30" />
                            <div
                              className="absolute top-0 left-0 w-40 h-40 border-4 border-white rounded-full"
                              style={{
                                clipPath:
                                  "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                                transform: "rotate(280deg)",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </section>

                  {/* Four Core Modules */}
                  <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {luntiModules.map((module) => (
                      <Card
                        key={module.value}
                        className={cn(
                          "rounded-3xl cursor-pointer hover:border-primary transition-all duration-300",
                          activeModule === module.value
                            ? "border-2 border-primary"
                            : ""
                        )}
                        onClick={() => {
                          setActiveModule(module.value);
                          setActiveTab(module.value);
                        }}
                      >
                        <CardHeader>
                          <div className="flex items-center gap-4">
                            <div className="p-2 rounded-xl bg-primary/10">
                              {module.icon}
                            </div>
                            <CardTitle>{module.title}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-sm">
                            {module.description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    ))}
                  </section>

                  {/* Quick Stats */}
                  <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="rounded-3xl">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between">
                          <CardTitle className="text-lg">
                            Active Leads
                          </CardTitle>
                          <Badge variant="outline">3 New</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold">12</div>
                        <div className="text-sm text-muted-foreground flex items-center">
                          <TrendingUp className="h-4 w-4 mr-1 text-green-500" />
                          +3 this week
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="rounded-3xl">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between">
                          <CardTitle className="text-lg">
                            Estimates Sent
                          </CardTitle>
                          <Badge variant="outline">5 Pending</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold">8</div>
                        <div className="text-sm text-muted-foreground">
                          $123,500 total value
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="rounded-3xl">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between">
                          <CardTitle className="text-lg">
                            Active Projects
                          </CardTitle>
                          <Badge variant="outline">2 Due This Week</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-bold">5</div>
                        <div className="text-sm text-muted-foreground">
                          $78,300 in progress
                        </div>
                      </CardContent>
                    </Card>
                  </section>

                  {/* Recent Activities and LuntiAI Suggestions */}
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <section className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-semibold">
                          Recent Activity
                        </h2>
                        <Button variant="ghost" className="rounded-2xl">
                          View All
                        </Button>
                      </div>
                      <div className="rounded-3xl border">
                        <div className="grid grid-cols-1 divide-y">
                          <div className="p-4 flex items-center gap-3">
                            <div className="p-2 rounded-xl bg-blue-100">
                              <Phone className="h-4 w-4 text-blue-600" />
                            </div>
                            <div>
                              <p className="font-medium">New lead added</p>
                              <p className="text-sm text-muted-foreground">
                                Maria Garcia • 30 min ago
                              </p>
                            </div>
                          </div>
                          <div className="p-4 flex items-center gap-3">
                            <div className="p-2 rounded-xl bg-green-100">
                              <FileText className="h-4 w-4 text-green-600" />
                            </div>
                            <div>
                              <p className="font-medium">Estimate approved</p>
                              <p className="text-sm text-muted-foreground">
                                Smith Renovation • 2 hrs ago
                              </p>
                            </div>
                          </div>
                          <div className="p-4 flex items-center gap-3">
                            <div className="p-2 rounded-xl bg-amber-100">
                              <Calendar className="h-4 w-4 text-amber-600" />
                            </div>
                            <div>
                              <p className="font-medium">
                                Project milestone completed
                              </p>
                              <p className="text-sm text-muted-foreground">
                                Johnson Backyard • Today
                              </p>
                            </div>
                          </div>
                          <div className="p-4 flex items-center gap-3">
                            <div className="p-2 rounded-xl bg-purple-100">
                              <DollarSign className="h-4 w-4 text-purple-600" />
                            </div>
                            <div>
                              <p className="font-medium">Payment received</p>
                              <p className="text-sm text-muted-foreground">
                                Martinez Kitchen • Yesterday
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    <section className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-semibold">
                          LuntiAI Suggestions
                        </h2>
                        <Button variant="ghost" className="rounded-2xl">
                          More Insights
                        </Button>
                      </div>
                      <div className="rounded-3xl border bg-primary/5 p-4">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 rounded-full bg-primary/20">
                            <Sparkles className="h-5 w-5 text-primary" />
                          </div>
                          <div className="font-medium">LuntiAI Assistant</div>
                        </div>
                        <div className="space-y-3">
                          <div className="p-3 bg-white rounded-xl shadow-sm">
                            <p className="text-sm font-medium">
                              Follow up on Wilson estimate
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Sent 5 days ago with no response
                            </p>
                          </div>
                          <div className="p-3 bg-white rounded-xl shadow-sm">
                            <p className="text-sm font-medium">
                              Project milestone approaching
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Johnson Backyard foundation inspection due Friday
                            </p>
                          </div>
                          <div className="p-3 bg-white rounded-xl shadow-sm">
                            <p className="text-sm font-medium">
                              Financing opportunity detected
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Your ESG score qualifies for Green Builder loan
                              program
                            </p>
                          </div>
                        </div>
                        <div className="mt-4">
                          <Input
                            placeholder="Ask LuntiAI a question..."
                            className="rounded-xl border-primary/30"
                          />
                        </div>
                      </div>
                    </section>
                  </div>
                </TabsContent>

                {/* Lead & Client Hub (CRM) Tab */}
                <TabsContent value="crm" className="space-y-8 mt-0">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Lead & Client Hub</h2>
                    <div className="flex gap-2">
                      <Button variant="outline" className="rounded-xl">
                        <Phone className="mr-2 h-4 w-4" />
                        Log Call
                      </Button>
                      <Button variant="default" className="rounded-xl">
                        <Plus className="mr-2 h-4 w-4" />
                        Add New Lead
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="rounded-xl border-2 border-primary">
                      <CardHeader>
                        <CardTitle className="flex justify-between items-center">
                          <span>New Leads</span>
                          <Badge>3</Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="max-h-[400px] overflow-y-auto">
                        {/* Lead cards would go here */}
                        <div className="space-y-3">
                          <Card className="rounded-xl">
                            <CardContent className="p-4">
                              <div className="flex justify-between items-start mb-2">
                                <div>
                                  <h4 className="font-bold">Maria Garcia</h4>
                                  <p className="text-sm text-muted-foreground">
                                    Kitchen Renovation
                                  </p>
                                </div>
                                <Badge
                                  variant="outline"
                                  className="bg-primary/10"
                                >
                                  New
                                </Badge>
                              </div>
                              <div className="flex gap-2 text-sm text-muted-foreground mb-2">
                                <Mail className="h-4 w-4" />
                                <span>maria@example.com</span>
                              </div>
                              <div className="flex gap-2 text-sm text-muted-foreground mb-3">
                                <Phone className="h-4 w-4" />
                                <span>555-123-4567</span>
                              </div>
                              <div className="flex gap-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="rounded-lg w-full"
                                >
                                  Call
                                </Button>
                                <Button
                                  variant="default"
                                  size="sm"
                                  className="rounded-lg w-full"
                                >
                                  Create Estimate
                                </Button>
                              </div>
                            </CardContent>
                          </Card>

                          {/* Additional lead cards would follow the same pattern */}
                          <Card className="rounded-xl">
                            <CardContent className="p-4">
                              <div className="flex justify-between items-start mb-2">
                                <div>
                                  <h4 className="font-bold">John Wilson</h4>
                                  <p className="text-sm text-muted-foreground">
                                    Bathroom Remodel
                                  </p>
                                </div>
                                <Badge
                                  variant="outline"
                                  className="bg-primary/10"
                                >
                                  New
                                </Badge>
                              </div>
                              <div className="flex gap-2 text-sm text-muted-foreground mb-2">
                                <Mail className="h-4 w-4" />
                                <span>jwilson@example.com</span>
                              </div>
                              <div className="flex gap-2 text-sm text-muted-foreground mb-3">
                                <Phone className="h-4 w-4" />
                                <span>555-987-6543</span>
                              </div>
                              <div className="flex gap-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="rounded-lg w-full"
                                >
                                  Call
                                </Button>
                                <Button
                                  variant="default"
                                  size="sm"
                                  className="rounded-lg w-full"
                                >
                                  Create Estimate
                                </Button>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="rounded-xl">
                      <CardHeader>
                        <CardTitle className="flex justify-between items-center">
                          <span>Estimates Sent</span>
                          <Badge variant="outline">5</Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        {/* Estimate cards would go here */}
                        <div className="text-center py-8 text-muted-foreground">
                          <FileText className="h-12 w-12 mx-auto mb-3 opacity-30" />
                          <p>
                            Client leads that have received estimates will
                            appear here
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="rounded-xl">
                      <CardHeader>
                        <CardTitle className="flex justify-between items-center">
                          <span>Active Clients</span>
                          <Badge variant="outline">12</Badge>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        {/* Client cards would go here */}
                        <div className="text-center py-8 text-muted-foreground">
                          <Users className="h-12 w-12 mx-auto mb-3 opacity-30" />
                          <p>
                            Leads that convert to active projects will appear
                            here
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-primary/5 rounded-xl p-4">
                    <div className="flex items-center gap-3">
                      <Sparkles className="h-5 w-5 text-primary" />
                      <h3 className="font-medium">LuntiAI Helper</h3>
                    </div>
                    <p className="ml-8 text-sm text-muted-foreground">
                      Ask me questions like "Show me my notes from my last call
                      with Maria Garcia" or "What's the status of all my new
                      leads?"
                    </p>
                  </div>
                </TabsContent>

                {/* Smart Estimator Tab */}
                <TabsContent value="estimator" className="space-y-8 mt-0">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">
                      Smart Estimator & Proposals
                    </h2>
                    <div className="flex gap-2">
                      <Button variant="default" className="rounded-xl">
                        <Plus className="mr-2 h-4 w-4" />
                        New Estimate
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">
                        Select Client
                      </h3>
                      <Card className="rounded-xl">
                        <CardContent className="p-4">
                          <Input
                            placeholder="Search clients..."
                            className="rounded-xl mb-4"
                          />
                          <div className="space-y-2">
                            <div className="p-3 rounded-lg hover:bg-primary/5 cursor-pointer border">
                              <p className="font-medium">Maria Garcia</p>
                              <p className="text-sm text-muted-foreground">
                                Kitchen Renovation
                              </p>
                            </div>
                            <div className="p-3 rounded-lg hover:bg-primary/5 cursor-pointer border">
                              <p className="font-medium">John Wilson</p>
                              <p className="text-sm text-muted-foreground">
                                Bathroom Remodel
                              </p>
                            </div>
                            <div className="p-3 rounded-lg hover:bg-primary/5 cursor-pointer border">
                              <p className="font-medium">Robert Johnson</p>
                              <p className="text-sm text-muted-foreground">
                                Deck Construction
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="md:col-span-2">
                      <h3 className="text-lg font-semibold mb-4">
                        Create Proposal
                      </h3>
                      <Card className="rounded-xl">
                        <CardContent className="p-6">
                          <div className="space-y-6">
                            <div>
                              <h4 className="font-medium mb-2">
                                Project Details
                              </h4>
                              <Input
                                placeholder="Project Title"
                                className="rounded-xl mb-2"
                              />
                              <Input
                                placeholder="Project Location"
                                className="rounded-xl"
                              />
                            </div>

                            <div>
                              <div className="flex justify-between items-center mb-2">
                                <h4 className="font-medium">Line Items</h4>
                                <Badge
                                  variant="outline"
                                  className="bg-primary/10 text-primary"
                                >
                                  <Leaf className="h-3 w-3 mr-1" />
                                  Show Sustainable Options
                                </Badge>
                              </div>

                              <div className="border rounded-xl overflow-hidden">
                                <div className="grid grid-cols-12 gap-2 bg-muted p-3 text-sm font-medium">
                                  <div className="col-span-6">Description</div>
                                  <div className="col-span-2">Quantity</div>
                                  <div className="col-span-2">Unit Price</div>
                                  <div className="col-span-2">Total</div>
                                </div>

                                <div className="divide-y">
                                  <div className="grid grid-cols-12 gap-2 p-3">
                                    <div className="col-span-6">
                                      <Input
                                        placeholder="Item description"
                                        className="rounded-lg"
                                      />
                                    </div>
                                    <div className="col-span-2">
                                      <Input
                                        type="number"
                                        defaultValue="1"
                                        className="rounded-lg"
                                      />
                                    </div>
                                    <div className="col-span-2">
                                      <Input
                                        placeholder="$0.00"
                                        className="rounded-lg"
                                      />
                                    </div>
                                    <div className="col-span-2">
                                      <p className="py-2">$0.00</p>
                                    </div>
                                  </div>

                                  <div className="grid grid-cols-12 gap-2 p-3 bg-green-50">
                                    <div className="col-span-6">
                                      <div className="flex gap-1 items-center">
                                        <Leaf className="h-4 w-4 text-primary" />
                                        <Input
                                          placeholder="Sustainable alternative"
                                          className="rounded-lg"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-span-2">
                                      <Input
                                        type="number"
                                        defaultValue="1"
                                        className="rounded-lg"
                                      />
                                    </div>
                                    <div className="col-span-2">
                                      <Input
                                        placeholder="$0.00"
                                        className="rounded-lg"
                                      />
                                    </div>
                                    <div className="col-span-2">
                                      <p className="py-2">$0.00</p>
                                    </div>
                                  </div>
                                </div>

                                <div className="p-3 border-t">
                                  <Button
                                    variant="outline"
                                    className="w-full rounded-lg"
                                  >
                                    <Plus className="h-4 w-4 mr-1" />
                                    Add Line Item
                                  </Button>
                                </div>
                              </div>
                            </div>

                            <div className="flex justify-between pt-4 border-t">
                              <div>
                                <p className="font-medium">Subtotal</p>
                                <p className="text-sm text-muted-foreground">
                                  Tax (8.25%)
                                </p>
                                <p className="font-bold text-lg mt-2">Total</p>
                              </div>
                              <div className="text-right">
                                <p className="font-medium">$0.00</p>
                                <p className="text-sm text-muted-foreground">
                                  $0.00
                                </p>
                                <p className="font-bold text-lg mt-2">$0.00</p>
                              </div>
                            </div>

                            <div className="flex gap-3">
                              <Button
                                variant="outline"
                                className="rounded-xl w-full"
                              >
                                Save Draft
                              </Button>
                              <Button className="rounded-xl w-full">
                                Send to Client
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <div className="mt-4 bg-primary/5 rounded-xl p-4">
                        <div className="flex items-center gap-3">
                          <Sparkles className="h-5 w-5 text-primary" />
                          <h3 className="font-medium">LuntiAI Suggestion</h3>
                        </div>
                        <p className="ml-8 text-sm text-muted-foreground">
                          "Try creating a Good-Better-Best proposal with
                          sustainable options to increase your chances of
                          approval."
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Enhanced Field Operations Tab with Project Management Focus */}
                <TabsContent value="operations" className="space-y-8 mt-0">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">
                      Project Management Hub
                    </h2>
                    <div className="flex gap-2">
                      <div className="bg-muted rounded-2xl p-1 flex">
                        <Button
                          variant={projectView === "list" ? "default" : "ghost"}
                          size="sm"
                          onClick={() => setProjectView("list")}
                          className="rounded-xl"
                        >
                          <ClipboardList className="h-4 w-4 mr-2" />
                          List
                        </Button>
                        <Button
                          variant={
                            projectView === "kanban" ? "default" : "ghost"
                          }
                          size="sm"
                          onClick={() => setProjectView("kanban")}
                          className="rounded-xl"
                        >
                          <Grid className="h-4 w-4 mr-2" />
                          Kanban
                        </Button>
                        <Button
                          variant={
                            projectView === "calendar" ? "default" : "ghost"
                          }
                          size="sm"
                          onClick={() => setProjectView("calendar")}
                          className="rounded-xl"
                        >
                          <Calendar className="h-4 w-4 mr-2" />
                          Calendar
                        </Button>
                      </div>
                      <Button variant="default" className="rounded-xl">
                        <Plus className="mr-2 h-4 w-4" />
                        New Project
                      </Button>
                    </div>
                  </div>

                  {projectView === "kanban" && (
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                      <div className="space-y-4">
                        <div className="bg-muted/50 p-3 rounded-xl">
                          <div className="flex justify-between items-center mb-4">
                            <h3 className="font-semibold flex items-center">
                              <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                              Planning
                              <Badge className="ml-2 bg-muted-foreground/20 text-muted-foreground">
                                3
                              </Badge>
                            </h3>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 rounded-lg"
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>

                          <div className="space-y-3">
                            <Card className="rounded-xl shadow-sm border-l-4 border-l-amber-500">
                              <CardContent className="p-3">
                                <h4 className="font-medium">Wilson Bathroom</h4>
                                <p className="text-sm text-muted-foreground">
                                  Remodel planning
                                </p>
                                <div className="flex justify-between items-center mt-3">
                                  <Badge variant="outline" className="text-xs">
                                    Est. $24k
                                  </Badge>
                                  <Avatar className="h-6 w-6">
                                    <AvatarImage
                                      src="/placeholder.svg"
                                      alt="JD"
                                    />
                                    <AvatarFallback>JD</AvatarFallback>
                                  </Avatar>
                                </div>
                              </CardContent>
                            </Card>

                            <Card className="rounded-xl shadow-sm border-l-4 border-l-amber-500">
                              <CardContent className="p-3">
                                <h4 className="font-medium">Garcia Patio</h4>
                                <p className="text-sm text-muted-foreground">
                                  Initial design
                                </p>
                                <div className="flex justify-between items-center mt-3">
                                  <Badge variant="outline" className="text-xs">
                                    Est. $18k
                                  </Badge>
                                  <Avatar className="h-6 w-6">
                                    <AvatarImage
                                      src="/placeholder.svg"
                                      alt="RJ"
                                    />
                                    <AvatarFallback>RJ</AvatarFallback>
                                  </Avatar>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="bg-muted/50 p-3 rounded-xl">
                          <div className="flex justify-between items-center mb-4">
                            <h3 className="font-semibold flex items-center">
                              <ArrowRight className="h-4 w-4 mr-2 text-blue-500" />
                              In Progress
                              <Badge className="ml-2 bg-blue-100 text-blue-700">
                                5
                              </Badge>
                            </h3>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 rounded-lg"
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>

                          <div className="space-y-3">
                            <Card className="rounded-xl shadow-sm border-l-4 border-l-blue-500">
                              <CardContent className="p-3">
                                <h4 className="font-medium">
                                  Johnson Backyard
                                </h4>
                                <p className="text-sm text-muted-foreground">
                                  Deck construction
                                </p>
                                <div className="mt-2 mb-2">
                                  <Progress value={65} className="h-1" />
                                  <p className="text-xs text-right mt-1 text-muted-foreground">
                                    65%
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <Badge variant="outline" className="text-xs">
                                    Due Aug 15
                                  </Badge>
                                  <div className="flex -space-x-2">
                                    <Avatar className="h-6 w-6 border-2 border-background">
                                      <AvatarFallback>M1</AvatarFallback>
                                    </Avatar>
                                    <Avatar className="h-6 w-6 border-2 border-background">
                                      <AvatarFallback>M2</AvatarFallback>
                                    </Avatar>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>

                            <Card className="rounded-xl shadow-sm border-l-4 border-l-blue-500">
                              <CardContent className="p-3">
                                <h4 className="font-medium">
                                  Martinez Kitchen
                                </h4>
                                <p className="text-sm text-muted-foreground">
                                  Renovation
                                </p>
                                <div className="mt-2 mb-2">
                                  <Progress value={40} className="h-1" />
                                  <p className="text-xs text-right mt-1 text-muted-foreground">
                                    40%
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <Badge variant="outline" className="text-xs">
                                    Due Sept 30
                                  </Badge>
                                  <div className="flex -space-x-2">
                                    <Avatar className="h-6 w-6 border-2 border-background">
                                      <AvatarFallback>T1</AvatarFallback>
                                    </Avatar>
                                    <Avatar className="h-6 w-6 border-2 border-background">
                                      <AvatarFallback>T2</AvatarFallback>
                                    </Avatar>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="bg-muted/50 p-3 rounded-xl">
                          <div className="flex justify-between items-center mb-4">
                            <h3 className="font-semibold flex items-center">
                              <AlertCircle className="h-4 w-4 mr-2 text-amber-500" />
                              Review
                              <Badge className="ml-2 bg-amber-100 text-amber-700">
                                2
                              </Badge>
                            </h3>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 rounded-lg"
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>

                          <div className="space-y-3">
                            <Card className="rounded-xl shadow-sm border-l-4 border-l-amber-500">
                              <CardContent className="p-3">
                                <h4 className="font-medium">
                                  Smith Renovation
                                </h4>
                                <p className="text-sm text-muted-foreground">
                                  Final inspection
                                </p>
                                <div className="mt-2 mb-2">
                                  <Progress value={95} className="h-1" />
                                  <p className="text-xs text-right mt-1 text-muted-foreground">
                                    95%
                                  </p>
                                </div>
                                <div className="flex justify-between items-center">
                                  <Badge className="bg-red-100 text-red-700 text-xs">
                                    Budget Issue
                                  </Badge>
                                  <Avatar className="h-6 w-6">
                                    <AvatarFallback>RJ</AvatarFallback>
                                  </Avatar>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="bg-muted/50 p-3 rounded-xl">
                          <div className="flex justify-between items-center mb-4">
                            <h3 className="font-semibold flex items-center">
                              <CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />
                              Complete
                              <Badge className="ml-2 bg-green-100 text-green-700">
                                4
                              </Badge>
                            </h3>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 rounded-lg"
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>

                          <div className="space-y-3">
                            <Card className="rounded-xl shadow-sm border-l-4 border-l-green-500">
                              <CardContent className="p-3">
                                <h4 className="font-medium">
                                  Thompson Bathroom
                                </h4>
                                <p className="text-sm text-muted-foreground">
                                  Completed last week
                                </p>
                                <div className="mt-2 mb-2">
                                  <Progress
                                    value={100}
                                    className="h-1 bg-green-200"
                                  />
                                </div>
                                <div className="flex justify-between items-center">
                                  <Badge
                                    variant="outline"
                                    className="bg-green-100 text-green-700 text-xs"
                                  >
                                    On Budget
                                  </Badge>
                                  <Badge className="bg-green-100 text-green-700">
                                    <Leaf className="h-3 w-3 mr-1" />
                                    High ESG
                                  </Badge>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {projectView === "list" && (
                    <Card className="rounded-xl overflow-hidden">
                      <CardContent className="p-0">
                        <div className="bg-muted p-3 grid grid-cols-12 gap-4 text-sm font-medium">
                          <div className="col-span-3">Project Name</div>
                          <div className="col-span-2">Client</div>
                          <div className="col-span-2">Status</div>
                          <div className="col-span-1">Progress</div>
                          <div className="col-span-2">Due Date</div>
                          <div className="col-span-1">ESG Score</div>
                          <div className="col-span-1">Actions</div>
                        </div>

                        <div className="divide-y">
                          <div className="grid grid-cols-12 gap-4 p-3 items-center hover:bg-muted/50 cursor-pointer">
                            <div className="col-span-3 font-medium">
                              Johnson Backyard Deck
                            </div>
                            <div className="col-span-2 text-sm">
                              Robert Johnson
                            </div>
                            <div className="col-span-2">
                              <Badge className="bg-blue-100 text-blue-700">
                                In Progress
                              </Badge>
                            </div>
                            <div className="col-span-1">
                              <div className="w-full bg-muted rounded-full h-2">
                                <div
                                  className="bg-blue-500 h-2 rounded-full"
                                  style={{ width: "65%" }}
                                ></div>
                              </div>
                            </div>
                            <div className="col-span-2 text-sm">
                              Aug 15, 2023
                            </div>
                            <div className="col-span-1">
                              <Badge className="bg-green-100 text-green-700">
                                High
                              </Badge>
                            </div>
                            <div className="col-span-1 flex gap-1">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 rounded-lg"
                              >
                                <FileText className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 rounded-lg"
                              >
                                <MoreHorizontalIcon className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>

                          <div className="grid grid-cols-12 gap-4 p-3 items-center hover:bg-muted/50 cursor-pointer">
                            <div className="col-span-3 font-medium">
                              Martinez Kitchen Renovation
                            </div>
                            <div className="col-span-2 text-sm">
                              Maria Martinez
                            </div>
                            <div className="col-span-2">
                              <Badge className="bg-blue-100 text-blue-700">
                                In Progress
                              </Badge>
                            </div>
                            <div className="col-span-1">
                              <div className="w-full bg-muted rounded-full h-2">
                                <div
                                  className="bg-blue-500 h-2 rounded-full"
                                  style={{ width: "40%" }}
                                ></div>
                              </div>
                            </div>
                            <div className="col-span-2 text-sm">
                              Sept 30, 2023
                            </div>
                            <div className="col-span-1">
                              <Badge className="bg-amber-100 text-amber-700">
                                Medium
                              </Badge>
                            </div>
                            <div className="col-span-1 flex gap-1">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 rounded-lg"
                              >
                                <FileText className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 rounded-lg"
                              >
                                <MoreHorizontalIcon className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>

                          <div className="grid grid-cols-12 gap-4 p-3 items-center hover:bg-muted/50 cursor-pointer">
                            <div className="col-span-3 font-medium">
                              Smith Renovation
                            </div>
                            <div className="col-span-2 text-sm">John Smith</div>
                            <div className="col-span-2">
                              <Badge className="bg-amber-100 text-amber-700">
                                Review
                              </Badge>
                            </div>
                            <div className="col-span-1">
                              <div className="w-full bg-muted rounded-full h-2">
                                <div
                                  className="bg-amber-500 h-2 rounded-full"
                                  style={{ width: "95%" }}
                                ></div>
                              </div>
                            </div>
                            <div className="col-span-2 text-sm">
                              July 30, 2023
                            </div>
                            <div className="col-span-1">
                              <Badge variant="outline">Medium</Badge>
                            </div>
                            <div className="col-span-1 flex gap-1">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 rounded-lg"
                              >
                                <FileText className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 rounded-lg"
                              >
                                <MoreHorizontalIcon className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>

                          <div className="grid grid-cols-12 gap-4 p-3 items-center hover:bg-muted/50 cursor-pointer">
                            <div className="col-span-3 font-medium">
                              Thompson Bathroom Remodel
                            </div>
                            <div className="col-span-2 text-sm">
                              Sarah Thompson
                            </div>
                            <div className="col-span-2">
                              <Badge className="bg-green-100 text-green-700">
                                Complete
                              </Badge>
                            </div>
                            <div className="col-span-1">
                              <div className="w-full bg-muted rounded-full h-2">
                                <div
                                  className="bg-green-500 h-2 rounded-full"
                                  style={{ width: "100%" }}
                                ></div>
                              </div>
                            </div>
                            <div className="col-span-2 text-sm">
                              July 10, 2023
                            </div>
                            <div className="col-span-1">
                              <Badge className="bg-green-100 text-green-700">
                                High
                              </Badge>
                            </div>
                            <div className="col-span-1 flex gap-1">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 rounded-lg"
                              >
                                <FileText className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 rounded-lg"
                              >
                                <MoreHorizontalIcon className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {projectView === "calendar" && (
                    <Card className="rounded-xl">
                      <CardHeader>
                        <CardTitle>Project Calendar</CardTitle>
                        <CardDescription>August 2023</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="text-center py-8">
                          <Calendar className="h-20 w-20 mx-auto mb-3 text-muted-foreground opacity-30" />
                          <p>Calendar view coming soon</p>
                          <p className="text-sm text-muted-foreground">
                            View your project timeline and milestones
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <Card className="rounded-xl">
                        <CardHeader>
                          <CardTitle>Project Analytics</CardTitle>
                          <CardDescription>
                            Performance metrics for all active projects
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <Card className="rounded-xl">
                                <CardContent className="p-4">
                                  <div className="flex flex-col items-center">
                                    <div className="text-3xl font-bold">14</div>
                                    <p className="text-muted-foreground text-sm">
                                      Total Projects
                                    </p>
                                  </div>
                                </CardContent>
                              </Card>
                              <Card className="rounded-xl">
                                <CardContent className="p-4">
                                  <div className="flex flex-col items-center">
                                    <div className="text-3xl font-bold text-green-500">
                                      82%
                                    </div>
                                    <p className="text-muted-foreground text-sm">
                                      On-time Completion
                                    </p>
                                  </div>
                                </CardContent>
                              </Card>
                              <Card className="rounded-xl">
                                <CardContent className="p-4">
                                  <div className="flex flex-col items-center">
                                    <div className="text-3xl font-bold text-amber-500">
                                      91%
                                    </div>
                                    <p className="text-muted-foreground text-sm">
                                      Budget Adherence
                                    </p>
                                  </div>
                                </CardContent>
                              </Card>
                            </div>

                            <div className="bg-primary/5 p-4 rounded-lg">
                              <div className="flex items-center gap-2 mb-2">
                                <Sparkles className="h-5 w-5 text-primary" />
                                <h4 className="font-medium">
                                  Project Health Analysis
                                </h4>
                              </div>
                              <p className="text-sm">
                                Your projects are generally on track, but the
                                Smith Renovation is over budget by 7%. Consider
                                implementing cost-saving measures to bring it
                                back on target.
                              </p>
                              <div className="mt-3 flex">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="text-xs rounded-lg"
                                >
                                  View Cost Analysis
                                </Button>
                              </div>
                            </div>

                            <div className="border rounded-xl p-4">
                              <h3 className="font-semibold mb-3">
                                ESG Impact by Project
                              </h3>
                              <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                  <div className="flex gap-2 items-center">
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                    <span>Johnson Backyard</span>
                                  </div>
                                  <div className="flex items-center">
                                    <Leaf className="h-4 w-4 text-primary mr-1" />
                                    <span className="text-sm font-medium">
                                      High Impact
                                    </span>
                                  </div>
                                </div>
                                <div className="flex justify-between items-center">
                                  <div className="flex gap-2 items-center">
                                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                                    <span>Martinez Kitchen</span>
                                  </div>
                                  <div className="flex items-center">
                                    <Leaf className="h-4 w-4 text-amber-500 mr-1" />
                                    <span className="text-sm font-medium">
                                      Medium Impact
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <div>
                      <Card className="rounded-xl">
                        <CardHeader>
                          <CardTitle>Team Workload</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                  <Avatar className="h-8 w-8">
                                    <AvatarFallback>MJ</AvatarFallback>
                                  </Avatar>
                                  <span>Mike Johnson</span>
                                </div>
                                <Badge variant="outline">3 Projects</Badge>
                              </div>
                              <Progress value={75} className="h-2" />
                              <p className="text-xs text-right text-muted-foreground">
                                75% Capacity
                              </p>
                            </div>

                            <div className="space-y-2">
                              <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                  <Avatar className="h-8 w-8">
                                    <AvatarFallback>AS</AvatarFallback>
                                  </Avatar>
                                  <span>Anna Smith</span>
                                </div>
                                <Badge variant="outline">2 Projects</Badge>
                              </div>
                              <Progress value={50} className="h-2" />
                              <p className="text-xs text-right text-muted-foreground">
                                50% Capacity
                              </p>
                            </div>

                            <div className="space-y-2">
                              <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                  <Avatar className="h-8 w-8">
                                    <AvatarFallback>TW</AvatarFallback>
                                  </Avatar>
                                  <span>Tom Wilson</span>
                                </div>
                                <Badge variant="outline">4 Projects</Badge>
                              </div>
                              <Progress value={90} className="h-2" />
                              <p className="text-xs text-right text-amber-500">
                                90% Capacity
                              </p>
                            </div>
                          </div>

                          <div className="pt-4 mt-4 border-t">
                            <Button
                              variant="outline"
                              className="w-full rounded-xl"
                            >
                              <Users className="mr-2 h-4 w-4" />
                              Manage Teams
                            </Button>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="rounded-xl mt-6">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">
                            ESG Project Impact
                          </CardTitle>
                          <CardDescription>
                            Your environmental and social impact metrics
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Average Project ESG Score</span>
                              <span className="font-medium">78/100</span>
                            </div>
                            <Progress value={78} className="h-2" />
                          </div>

                          <Button
                            variant="default"
                            className="w-full mt-4 rounded-xl"
                          >
                            <Leaf className="mr-2 h-4 w-4" />
                            View Lunti Score Dashboard
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>

                {/* New Lunti ESG Score Tab */}
                <TabsContent value="lunti-score" className="space-y-8 mt-0">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">
                      Lunti ESG Score Dashboard
                    </h2>
                    <div className="flex gap-2">
                      <Button variant="outline" className="rounded-xl">
                        <Download className="mr-2 h-4 w-4" />
                        Export ESG Report
                      </Button>
                      <Button variant="default" className="rounded-xl">
                        Get Financing
                      </Button>
                    </div>
                  </div>

                  {/* ESG Score Overview */}
                  <Card className="rounded-3xl bg-gradient-to-r from-[#6ACF30]/10 to-[#87F646]/10">
                    <CardContent className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                        <div className="flex flex-col items-center">
                          <div className="relative size-40">
                            <div className="absolute inset-0 rounded-full border-8 border-muted" />
                            <div
                              className="absolute inset-0 rounded-full border-8 border-primary"
                              style={{
                                clipPath:
                                  "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                                transform: "rotate(280deg)",
                              }}
                            />
                            <div className="absolute inset-0 flex items-center justify-center flex-col">
                              <span className="text-4xl font-bold">78</span>
                              <span className="text-sm text-muted-foreground">
                                / 100
                              </span>
                            </div>
                          </div>
                          <h3 className="text-lg font-medium mt-4">
                            Your Lunti Score
                          </h3>
                        </div>

                        <div className="space-y-4 col-span-2">
                          <h3 className="text-xl font-semibold">
                            ESG Performance Rating: Strong
                          </h3>
                          <p>
                            Your company's environmental and social governance
                            practices are above industry average, making you
                            eligible for preferred financing rates.
                          </p>

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                            <div className="bg-white/50 p-4 rounded-xl">
                              <div className="flex items-center gap-2">
                                <Leaf className="h-5 w-5 text-green-600" />
                                <h4 className="font-medium">Environmental</h4>
                              </div>
                              <div className="mt-2">
                                <span className="text-xl font-bold">82</span>
                                <span className="text-sm text-muted-foreground">
                                  /100
                                </span>
                              </div>
                            </div>

                            <div className="bg-white/50 p-4 rounded-xl">
                              <div className="flex items-center gap-2">
                                <Users className="h-5 w-5 text-blue-600" />
                                <h4 className="font-medium">Social</h4>
                              </div>
                              <div className="mt-2">
                                <span className="text-xl font-bold">75</span>
                                <span className="text-sm text-muted-foreground">
                                  /100
                                </span>
                              </div>
                            </div>

                            <div className="bg-white/50 p-4 rounded-xl">
                              <div className="flex items-center gap-2">
                                <Briefcase className="h-5 w-5 text-purple-600" />
                                <h4 className="font-medium">Governance</h4>
                              </div>
                              <div className="mt-2">
                                <span className="text-xl font-bold">76</span>
                                <span className="text-sm text-muted-foreground">
                                  /100
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Financing Options Based on ESG Score */}
                  <Card className="rounded-xl">
                    <CardHeader>
                      <CardTitle>Available Financing Options</CardTitle>
                      <CardDescription>
                        Based on your current Lunti ESG Score of 78/100
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="border border-green-200 rounded-xl p-4 bg-green-50">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-lg font-semibold text-green-700">
                                Green Builder Loan Program
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                Exclusive ESG-based financing for sustainable
                                contractors
                              </p>
                            </div>
                            <Badge className="bg-green-100 text-green-800">
                              <Leaf className="h-3 w-3 mr-1" />
                              Recommended
                            </Badge>
                          </div>

                          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                            <div>
                              <span className="text-muted-foreground">
                                Interest Rate
                              </span>
                              <p className="font-medium">
                                4.2%{" "}
                                <span className="text-green-600">
                                  (1.2% discount)
                                </span>
                              </p>
                            </div>
                            <div>
                              <span className="text-muted-foreground">
                                Loan Amount
                              </span>
                              <p className="font-medium">Up to $500,000</p>
                            </div>
                            <div>
                              <span className="text-muted-foreground">
                                Term
                              </span>
                              <p className="font-medium">3-10 years</p>
                            </div>
                          </div>

                          <div className="mt-4 flex gap-3">
                            <Button className="rounded-xl" variant="default">
                              Apply Now
                            </Button>
                            <Button className="rounded-xl" variant="outline">
                              Learn More
                            </Button>
                          </div>
                        </div>

                        <div className="border rounded-xl p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-lg font-semibold">
                                Small Business Growth Loan
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                Standard business financing option
                              </p>
                            </div>
                            <Badge variant="outline">Available</Badge>
                          </div>

                          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                            <div>
                              <span className="text-muted-foreground">
                                Interest Rate
                              </span>
                              <p className="font-medium">5.4%</p>
                            </div>
                            <div>
                              <span className="text-muted-foreground">
                                Loan Amount
                              </span>
                              <p className="font-medium">Up to $350,000</p>
                            </div>
                            <div>
                              <span className="text-muted-foreground">
                                Term
                              </span>
                              <p className="font-medium">3-7 years</p>
                            </div>
                          </div>

                          <div className="mt-4 flex gap-3">
                            <Button className="rounded-xl" variant="outline">
                              Apply Now
                            </Button>
                            <Button className="rounded-xl" variant="ghost">
                              Learn More
                            </Button>
                          </div>
                        </div>

                        <div className="bg-primary/5 p-4 rounded-lg">
                          <div className="flex items-center gap-2">
                            <Sparkles className="h-5 w-5 text-primary" />
                            <h4 className="font-medium">
                              Lunti Financing Insight
                            </h4>
                          </div>
                          <p className="text-sm mt-1">
                            Improving your environmental score by 5 points could
                            unlock an additional 0.3% interest rate reduction.
                            Consider implementing material waste reduction
                            programs in your next 3 projects.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* ESG Score Details and Improvement Recommendations */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <Card className="rounded-xl">
                        <CardHeader>
                          <CardTitle>ESG Score Breakdown</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-6">
                            <div>
                              <h3 className="font-medium mb-4 flex items-center">
                                <Leaf className="h-5 w-5 text-green-600 mr-2" />
                                Environmental Factors
                              </h3>
                              <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                  <span className="text-sm">
                                    Sustainable Materials
                                  </span>
                                  <div className="flex items-center">
                                    <Progress
                                      value={90}
                                      className="h-2 w-[100px] mr-2"
                                    />
                                    <span className="text-sm font-medium">
                                      90%
                                    </span>
                                  </div>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-sm">
                                    Waste Management
                                  </span>
                                  <div className="flex items-center">
                                    <Progress
                                      value={75}
                                      className="h-2 w-[100px] mr-2"
                                    />
                                    <span className="text-sm font-medium">
                                      75%
                                    </span>
                                  </div>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-sm">
                                    Energy Efficiency
                                  </span>
                                  <div className="flex items-center">
                                    <Progress
                                      value={85}
                                      className="h-2 w-[100px] mr-2"
                                    />
                                    <span className="text-sm font-medium">
                                      85%
                                    </span>
                                  </div>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-sm">
                                    Carbon Footprint
                                  </span>
                                  <div className="flex items-center">
                                    <Progress
                                      value={70}
                                      className="h-2 w-[100px] mr-2"
                                    />
                                    <span className="text-sm font-medium">
                                      70%
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div>
                              <h3 className="font-medium mb-4 flex items-center">
                                <Users className="h-5 w-5 text-blue-600 mr-2" />
                                Social Factors
                              </h3>
                              <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                  <span className="text-sm">Worker Safety</span>
                                  <div className="flex items-center">
                                    <Progress
                                      value={95}
                                      className="h-2 w-[100px] mr-2"
                                    />
                                    <span className="text-sm font-medium">
                                      95%
                                    </span>
                                  </div>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-sm">
                                    Community Engagement
                                  </span>
                                  <div className="flex items-center">
                                    <Progress
                                      value={65}
                                      className="h-2 w-[100px] mr-2"
                                    />
                                    <span className="text-sm font-medium">
                                      65%
                                    </span>
                                  </div>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-sm">
                                    Diversity & Inclusion
                                  </span>
                                  <div className="flex items-center">
                                    <Progress
                                      value={70}
                                      className="h-2 w-[100px] mr-2"
                                    />
                                    <span className="text-sm font-medium">
                                      70%
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div>
                              <h3 className="font-medium mb-4 flex items-center">
                                <Briefcase className="h-5 w-5 text-purple-600 mr-2" />
                                Governance Factors
                              </h3>
                              <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                  <span className="text-sm">
                                    Business Ethics
                                  </span>
                                  <div className="flex items-center">
                                    <Progress
                                      value={80}
                                      className="h-2 w-[100px] mr-2"
                                    />
                                    <span className="text-sm font-medium">
                                      80%
                                    </span>
                                  </div>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-sm">
                                    Financial Transparency
                                  </span>
                                  <div className="flex items-center">
                                    <Progress
                                      value={85}
                                      className="h-2 w-[100px] mr-2"
                                    />
                                    <span className="text-sm font-medium">
                                      85%
                                    </span>
                                  </div>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-sm">Compliance</span>
                                  <div className="flex items-center">
                                    <Progress
                                      value={90}
                                      className="h-2 w-[100px] mr-2"
                                    />
                                    <span className="text-sm font-medium">
                                      90%
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <div>
                      <Card className="rounded-xl">
                        <CardHeader>
                          <CardTitle>Improvement Recommendations</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                              <h4 className="font-medium flex items-center text-green-700">
                                <Leaf className="h-4 w-4 mr-2" />
                                Environmental
                              </h4>
                              <ul className="mt-2 space-y-2 text-sm">
                                <li className="flex items-start">
                                  <CheckCircle2 className="h-4 w-4 mr-2 text-green-600 mt-0.5" />
                                  <span>
                                    Implement construction waste sorting and
                                    recycling at all job sites
                                  </span>
                                </li>
                                <li className="flex items-start">
                                  <CheckCircle2 className="h-4 w-4 mr-2 text-green-600 mt-0.5" />
                                  <span>
                                    Increase percentage of sustainable materials
                                    used by 10%
                                  </span>
                                </li>
                              </ul>
                            </div>

                            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                              <h4 className="font-medium flex items-center text-blue-700">
                                <Users className="h-4 w-4 mr-2" />
                                Social
                              </h4>
                              <ul className="mt-2 space-y-2 text-sm">
                                <li className="flex items-start">
                                  <CheckCircle2 className="h-4 w-4 mr-2 text-blue-600 mt-0.5" />
                                  <span>
                                    Organize one community volunteer event per
                                    quarter
                                  </span>
                                </li>
                                <li className="flex items-start">
                                  <CheckCircle2 className="h-4 w-4 mr-2 text-blue-600 mt-0.5" />
                                  <span>
                                    Implement a diverse hiring initiative for
                                    new team members
                                  </span>
                                </li>
                              </ul>
                            </div>

                            <div className="pt-4 mt-2">
                              <Button
                                variant="default"
                                className="w-full rounded-xl"
                              >
                                <Plus className="mr-2 h-4 w-4" />
                                Create ESG Action Plan
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="rounded-xl mt-6">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">
                            ESG Score History
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="h-40 w-full bg-muted/50 rounded-lg flex items-center justify-center">
                            <ChartPie className="h-10 w-10 text-muted-foreground opacity-30" />
                          </div>
                          <div className="flex justify-between mt-4 text-sm">
                            <div className="flex items-center">
                              <div className="h-3 w-3 bg-primary rounded-full mr-1"></div>
                              <span>+12 points since 2022</span>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-xs"
                            >
                              View Full History
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>

                {/* Other tabs content remains the same */}
              </motion.div>
            </AnimatePresence>
          </Tabs>
        </main>
      </div>
      {/* Floating Chatbot Button */}
      <ChatbotButton />
    </div>
  );
}
