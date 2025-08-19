import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="min-h-screen relative overflow-hidden text-white px-4 sm:px-6 lg:px-8 flex items-start pt-35">
      {/* Background blobs with improved positioning */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 h-[28rem] w-[40rem] rounded-full bg-gradient-to-tr from-[#d0f3da] via-[#74efa3] to-[#78e738] opacity-40 blur-3xl mix-blend-multiply animate-blob" />
        <div className="absolute top-16 right-0 h-[30rem] w-[40rem] rounded-full bg-gradient-to-br from-[#84dd51] via-[#8dff8d] to-[#86efac] opacity-40 blur-3xl mix-blend-multiply animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-20 h-[28rem] w-[50rem] rounded-full bg-gradient-to-tr from-[#b0dfb3] via-[#6fffb2] to-[#70e32e] opacity-35 blur-3xl mix-blend-multiply animate-blob animation-delay-4000" />
      </div>

      {/* Main content with improved positioning and centering */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold mb-6 leading-tight text-[#2c4114]">
            Powering a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6ACF30] to-[#34D399]">
              Sustainable
            </span>{" "}
            <br />
            Future.
          </h1>
          <p className="text-lg sm:text-xl lg:text-xl mb-8 max-w-4xl mx-auto lg:mx-0 leading-relaxed opacity-80 text-gray-900">
            LuntiMeter empowers construction businesses with real-time,
            tamper-proof ESG data. Turn your commitment to sustainability into
            your greatest asset and gain access to the financing you need to
            grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start items-center">
            <Button
              size="lg"
              className="cursor-pointer bg-gradient-to-r from-[#6ACF30] to-[#34D399] hover:from-[#5ABF20] hover:to-[#2BC389] text-white text-lg px-8 sm:px-10 py-4 sm:py-6 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 w-full sm:w-auto"
            >
              Get Your LuntiScore
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="cursor-pointer border-2 border-[#2c4114] text-[#2c4114] hover:bg-[#ffffff] hover:text-[#5ABF20] hover:border-white text-lg px-8 sm:px-10 py-4 sm:py-6 font-semibold rounded-xl bg-transparent transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto"
            >
              Schedule a Free Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Improved gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
    </section>
  );
}
