import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Shield, Building } from "lucide-react";

export function ProblemSection() {
  return (
    <section className="py-20 px-4 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-12 md:h-20 pointer-events-none z-0">
        <div className="w-full h-full bg-gradient-to-b from-white to-transparent" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">
            Good Practices Go Unrewarded. Until Now.
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Small construction firms struggle to access fair financing because
            their sustainable efforts are invisible and hard to prove. Without
            credible data, your commitment to safety, eco-friendly materials,
            and community responsibility doesn't give you the competitive edge
            it deserves.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center p-8 border-2 hover:border-[#6ACF30] transition-colors">
            <CardContent className="pt-6">
              <DollarSign className="w-16 h-16 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-[#333333]">
                Difficulty Accessing Fair Credit
              </h3>
              <p className="text-gray-600">
                Traditional lenders can't see your sustainable practices,
                limiting your access to microloans and fair financing.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center p-8 border-2 hover:border-[#6ACF30] transition-colors">
            <CardContent className="pt-6">
              <Shield className="w-16 h-16 text-orange-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-[#333333]">
                Lack of Credible Proof
              </h3>
              <p className="text-gray-600">
                Your commitment to sustainability and safety exists, but
                there's no reliable way to demonstrate it to financial
                partners.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center p-8 border-2 hover:border-[#6ACF30] transition-colors">
            <CardContent className="pt-6">
              <Building className="w-16 h-16 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-[#333333]">
                Burdensome Compliance
              </h3>
              <p className="text-gray-600">
                Complex paperwork and manual reporting processes drain your time and resources without clear benefits.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
