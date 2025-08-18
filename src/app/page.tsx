import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Zap,
  Shield,
  TrendingUp,
  Users,
  Building,
  Leaf,
  DollarSign,
} from "lucide-react";
import { Header } from "@/components/sections/header";

const headerData = {
  logo: {
    alt: "LuntiMeter",
    src: "/logo.svg",
    width: 150,
    height: 40,
  },
  header: {
    navbar: {
      items: [
        {
          _id: "1",
          _title: "Home",
          href: "/",
          sublinks: { items: [] },
        },
        {
          _id: "2",
          _title: "About",
          href: "/about",
          sublinks: { items: [] },
        },
        {
          _id: "3",
          _title: "Services",
          sublinks: {
            items: [
              {
                _id: "3-1",
                _title: "LuntiScore",
                link: {
                  __typename: "PageReferenceComponent",
                  page: {
                    pathname: "/services/luntiscore",
                    _title: "LuntiScore",
                  },
                },
              },
              {
                _id: "3-2",
                _title: "IoT Sensors",
                link: {
                  __typename: "PageReferenceComponent",
                  page: {
                    pathname: "/services/iot",
                    _title: "IoT Sensors",
                  },
                },
              },
            ],
          },
        },
      ],
    },
    rightCtas: {
      items: [
        {
          _id: "cta-1",
          label: "Login",
          href: "/login",
          type: "outline",
        },
        {
          _id: "cta-2",
          label: "Get Started",
          href: "/signup",
          type: "primary",
        },
      ],
    },
  },
};

export default function LuntiMeterLanding() {
  return (
    <div className="min-h-screen">
      <Header logo={headerData.logo} header={headerData.header} />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#6ACF30] to-[#87F646] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Build a Greener Future.
            <br />
            <span className="text-[#B0EB8E]">
              Unlock Sustainable Financing.
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-95">
            LuntiMeter empowers construction businesses with real-time,
            tamper-proof ESG data. Turn your commitment to sustainability into
            your greatest asset and gain access to the financing you need to
            grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-[#6ACF30] hover:bg-gray-100 text-lg px-8 py-4 font-semibold"
            >
              Get Your LuntiScore
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#6ACF30] text-lg px-8 py-4 bg-transparent"
            >
              Schedule a Free Demo
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
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
                  Complex paperwork and manual reporting processes drain your
                  time and resources without clear benefits.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">
              Your Sustainability,{" "}
              <span className="text-[#6ACF30]">Measured and Monetized.</span>
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

      {/* How It Works Section */}
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
                Easily deploy our IoT sensors (energy, water, air, safety) on
                your site. They begin collecting crucial ESG data automatically
                and in real-time.
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
                you boost your 'LuntiScore'.
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

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">
              The Tools You Need for{" "}
              <span className="text-[#6ACF30]">Sustainable Growth</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-2 hover:border-[#6ACF30] transition-colors">
              <CardContent className="pt-0">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-8 h-8 text-[#6ACF30] mr-3" />
                  <h3 className="text-2xl font-bold text-[#333333]">
                    Real-Time ESG Dashboard
                  </h3>
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
                  <h3 className="text-2xl font-bold text-[#333333]">
                    The LuntiScore
                  </h3>
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
                  <h3 className="text-2xl font-bold text-[#333333]">
                    LuntiAI Helper
                  </h3>
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
                  <h3 className="text-2xl font-bold text-[#333333]">
                    Tamper-Proof IoT Data
                  </h3>
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

      {/* Case Study Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">
            Inspired by <span className="text-[#6ACF30]">Proven Success</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            Our model is inspired by the successful microloan program by Build
            Change, Holcim, and ASKI in the Philippines, which empowers
            low-income families with climate-resilient homes by linking
            sustainable construction with financing.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-gray-500">Build Change</div>
            <div className="text-2xl font-bold text-gray-500">Holcim</div>
            <div className="text-2xl font-bold text-gray-500">ASKI</div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">
            Built for the{" "}
            <span className="text-[#6ACF30]">
              Backbone of the Construction Industry
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            LuntiMeter is designed specifically for small to medium-sized
            construction firms in the Philippines. If you struggle with
            compliance, credit history, and proving your credibility, our
            platform provides the real-time, sensor-driven data you need to
            stand out.
          </p>
          <div className="mt-12">
            <Users className="w-24 h-24 text-[#6ACF30] mx-auto" />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#6ACF30] to-[#87F646] text-white">
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
    </div>
  );
}
