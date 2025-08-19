import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function FinalCTASection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-[#31A140] to-[#87F646] text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Build a Better, More Profitable Future?
        </h2>
        <p className="text-xl mb-8 opacity-95">
          Join the movement of sustainable builders. See how LuntiMeter can
          transform your business.
        </p>
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
          <h3 className="text-2xl font-bold mb-6">Get Started Today</h3>
          <div className="space-y-4">
            <Input
              placeholder="Your Name"
              className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
            />
            <Input
              placeholder="Company Name"
              className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
            />
            <Input
              placeholder="Email Address"
              type="email"
              className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
            />
            <Button
              size="lg"
              className="w-full bg-white text-[#6ACF30] hover:bg-gray-100 text-lg font-semibold"
            >
              Schedule Your Free Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
