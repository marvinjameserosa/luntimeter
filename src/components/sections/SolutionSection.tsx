import { Badge } from "@/components/ui/badge";

export function SolutionSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">
            Your Sustainability, <span className="text-[#6ACF30]">Measured and Monetized.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            LuntiMeter transforms your daily operations into a verifiable ESG
            score. Our IoT sensors and intelligent platform provide
            tamper-proof data that lenders trust. A higher LuntiScore directly
            improves your chances of loan approval, connecting your
            sustainable practices to tangible financial growth.
          </p>
          <Badge className="bg-[#B0EB8E] text-[#333333] text-lg px-6 py-2 font-semibold">
            Our Vision: Empowering sustainable growth in micro-industries by
            making ESG transparency the gateway to accessible financing.
          </Badge>
        </div>
      </div>
    </section>
  );
}
