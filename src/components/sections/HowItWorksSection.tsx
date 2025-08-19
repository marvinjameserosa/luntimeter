import { Zap, TrendingUp, DollarSign } from "lucide-react";

export function HowItWorksSection() {
  return (
    <section className="py-20 px-4 bg-[#B0EB8E]/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">
            From Site Data to Secure Financing in{" "}
            <span className="text-[#6ACF30]">3 Simple Steps</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-[#6ACF30] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#333333] mb-4">
              1. Install & Collect
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Easily deploy our IoT sensors (energy, water, air, safety) on your
              site. They begin collecting crucial ESG data automatically and in
              real-time.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-[#87F646] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#333333] mb-4">
              2. Track & Improve
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Monitor your performance on the LuntiMeter dashboard. Our
              AI-powered helper, LuntiAI, provides actionable insights to help
              you boost your LuntiScore.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-[#6ACF30] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <DollarSign className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-[#333333] mb-4">
              3. Unlock & Grow
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Use your verified, tamper-proof LuntiScore to demonstrate your
              credibility to banks and microfinance institutions, unlocking
              better financing opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
