import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#6ACF30] to-[#87F646] text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Build a Greener Future.
          <br />
          <span className="text-[#B0EB8E]">Unlock Sustainable Financing.</span>
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
  );
}
