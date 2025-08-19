import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, CheckCircle, Leaf, Shield } from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">
            The Tools You Need for <span className="text-[#6ACF30]">Sustainable Growth</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 border-2 hover:border-[#6ACF30] transition-colors">
            <CardContent className="pt-0">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-8 h-8 text-[#6ACF30] mr-3" />
                <h3 className="text-2xl font-bold text-[#333333]">Real-Time ESG Dashboard</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Visualize your environmental, social, and governance data in
                one place. Track energy usage, water consumption, waste
                management, worker safety, and more.
              </p>
            </CardContent>
          </Card>
          <Card className="p-8 border-2 hover:border-[#6ACF30] transition-colors">
            <CardContent className="pt-0">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-8 h-8 text-[#87F646] mr-3" />
                <h3 className="text-2xl font-bold text-[#333333]">The LuntiScore</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Our proprietary algorithm turns complex data into a single,
                credible score that proves your commitment to sustainability
                to financial partners.
              </p>
            </CardContent>
          </Card>
          <Card className="p-8 border-2 hover:border-[#6ACF30] transition-colors">
            <CardContent className="pt-0">
              <div className="flex items-center mb-4">
                <Leaf className="w-8 h-8 text-[#B0EB8E] mr-3" />
                <h3 className="text-2xl font-bold text-[#333333]">LuntiAI Helper</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Receive intelligent recommendations from our AI to improve
                your score, optimize operations, and reduce your environmental
                impact.
              </p>
            </CardContent>
          </Card>
          <Card className="p-8 border-2 hover:border-[#6ACF30] transition-colors">
            <CardContent className="pt-0">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-[#6ACF30] mr-3" />
                <h3 className="text-2xl font-bold text-[#333333]">Tamper-Proof IoT Data</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Build credibility with data straight from our secure IoT
                sensors, eliminating human error and ensuring lenders trust
                your report.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
