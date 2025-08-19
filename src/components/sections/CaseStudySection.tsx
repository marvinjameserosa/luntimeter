export function CaseStudySection() {
  return (
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
  );
}
