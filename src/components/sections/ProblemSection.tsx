import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Shield, Building } from "lucide-react";

export function ProblemSection() {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 h-32 w-32 rounded-full bg-gradient-to-r from-[#6ACF30]/10 to-[#34D399]/10 blur-2xl" />
        <div className="absolute bottom-20 right-10 h-40 w-40 rounded-full bg-gradient-to-r from-[#6ACF30]/5 to-[#34D399]/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-gradient-to-r from-[#6ACF30]/3 to-[#34D399]/3 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#6ACF30]/10 to-[#34D399]/10 border border-[#6ACF30]/20 mb-6">
            <span className="text-sm font-medium text-[#6ACF30]">
              The Challenge
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2c4114] mb-5 leading-tight">
            Good Practices Go{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f9331d] to-[#6ACF30]">
              Unrewarded
            </span>
            . <br></br> Until{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6ACF30] to-[#34D399]">
              Now.
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-20 ">
            Small construction firms struggle to access fair financing because
            their sustainable efforts are invisible and hard to prove. Without
            credible data, your commitment to safety, eco-friendly materials,
            and community responsibility doesn&apos;t give you the competitive
            edge it deserves.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Card 1 */}
          <Card className="group relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardContent className="relative p-8 lg:p-10">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-orange-400 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                  <div className="relative bg-gradient-to-r from-red-500 to-orange-500 p-4 rounded-full shadow-lg">
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-4 text-[#2c4114] group-hover:text-[#6ACF30] transition-colors duration-300">
                  Difficulty Accessing Fair Credit
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Traditional lenders can&apos;t see your sustainable practices,
                  limiting your access to microloans and fair financing.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="group relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-yellow-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardContent className="relative p-8 lg:p-10">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                  <div className="relative bg-gradient-to-r from-orange-500 to-yellow-500 p-4 rounded-full shadow-lg">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-4 text-[#2c4114] group-hover:text-[#6ACF30] transition-colors duration-300">
                  Lack of Credible Proof
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Your commitment to sustainability and safety exists, but
                  there&apos;s no reliable way to demonstrate it to financial
                  partners.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card className="group relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardContent className="relative p-8 lg:p-10">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                  <div className="relative bg-gradient-to-r from-blue-500 to-indigo-500 p-4 rounded-full shadow-lg">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold mb-4 text-[#2c4114] group-hover:text-[#6ACF30] transition-colors duration-300">
                  Burdensome Compliance
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Complex paperwork and manual reporting processes drain your
                  time and resources without clear benefits.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-[#6ACF30] font-semibold">
            <span>Ready to solve these challenges?</span>
            <svg
              className="w-5 h-5 animate-pulse"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
