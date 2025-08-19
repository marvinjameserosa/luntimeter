import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="h-screen relative overflow-hidden text-white py-40 px-5">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-24 h-[28rem] w-[40rem] rounded-full bg-gradient-to-tr from-[#6ACF30] via-[#79EF35] to-[#B7FF8E] opacity-40 blur-3xl mix-blend-multiply animate-blob" />
        <div className="absolute top-16 right-[-9rem] h-[30rem] w-[40rem] rounded-full bg-gradient-to-br from-[#6ACF30] via-[#79EF35] to-[#B7FF8E] opacity-40 blur-3xl mix-blend-multiply animate-blob animation-delay-2000" />
        <div className="absolute -bottom-24 left-20 h-[28rem] w-[50rem] rounded-full bg-gradient-to-tr from-[#6ACF30] via-[#79EF35] to-[#B7FF8E] opacity-35 blur-3xl mix-blend-multiply animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-left">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-17 text-[#2c4114]">
          Powering a <span className="text-[#6ACF30]"> Sustainable</span> <br />
          Future.
        </h1>
        <p className="text-xl md:text-xl mb-6  mx-auto leading-relaxed opacity-50 text-gray-900">
          LuntiMeter empowers construction businesses with real-time,
          tamper-proof <br />
          ESG data. Turn your commitment to sustainability into your greatest
          asset <br />
          and gain access to the financing you need to grow.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-start items-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#6ACF30] to-[#34D399] hover:from-[#5ABF20] hover:to-[#2BC389] text-white text-lg px-10 py-6 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0"
          >
            Get Your LuntiScore
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-[#2c4114] text-[#2c4114] hover:bg-[#ffffff] hover:text-[#5ABF20] hover:border-white text-lg px-10 py-6 font-semibold rounded-xl bg-transparent transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Schedule a Free Demo
          </Button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
