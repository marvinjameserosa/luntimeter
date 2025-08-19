import { Users } from "lucide-react";

export function TargetAudienceSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">
          Built for the{" "}
          <span className="text-[#6ACF30]">Backbone of the Construction Industry</span>
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
  );
}
