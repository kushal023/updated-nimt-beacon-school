import React from "react";

export default function HealthyBody() {
  const points = [
    {
      title: "Nutritious Meals",
      desc: "Our in-house chefs prepare balanced, nutritious meals using fresh ingredients. Every meal is designed to support student growth and academic performance.",
    },
    {
      title: "Hygiene Standards",
      desc: "We follow strict food preparation and kitchen hygiene protocols. Our dining facilities are regularly inspected and maintained.",
    },
    {
      title: "Sports & Wellness",
      desc: "From indoor sports to outdoor activities, we encourage physical fitness and mental wellness through various programs.",
    },
    {
      title: "Dietary Preferences",
      desc: "We accommodate various dietary preferences and allergies. Every student's nutritional needs are carefully considered.",
    },
  ];

  return (
    <section className="bg-white py-20 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12">
          
          {/* Left Column Green Layout Mosaic */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Dining Hall large container */}
            <div className="aspect-[4/3] rounded-3xl bg-green-50/70 border border-green-100 p-8 flex items-center justify-center text-center shadow-inner">
              <span className="text-[#15803d] font-display text-base font-extrabold tracking-widest uppercase">
                Dining Hall
              </span>
            </div>

            {/* Split row: Balanced Meals & Sports */}
            <div className="grid grid-cols-2 gap-4">
              <div className="h-28 rounded-2xl bg-emerald-50/50 border border-emerald-100/40 p-4 flex items-center justify-center text-center shadow-sm">
                <span className="text-[#166534] font-display text-sm font-bold tracking-wider uppercase">
                  Balanced Meals
                </span>
              </div>
              <div className="h-28 rounded-2xl bg-green-50/60 border border-green-100/50 p-4 flex items-center justify-center text-center shadow-sm">
                <span className="text-[#166534] font-display text-sm font-bold tracking-wider uppercase">
                  Sports
                </span>
              </div>
            </div>

            {/* Wellness Program card */}
            <div className="h-28 rounded-2xl bg-gradient-to-r from-green-50/40 to-emerald-50/40 border border-green-100/30 p-6 flex items-center justify-center text-center shadow-sm">
              <span className="text-[#15803d]/90 font-display text-sm font-bold tracking-wider uppercase">
                Wellness Program
              </span>
            </div>

          </div>

          {/* Right Column Content Text Block */}
          <div className="flex flex-col justify-center text-left lg:col-span-7">
            
            <h2 className="font-display text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl lg:leading-[1.1] leading-tight">
              Healthy Body. <br />
              <span className="text-[#16a34a]">Sharp Mind.</span>
            </h2>

            <div className="mt-8 space-y-6 max-w-2xl">
              {points.map((pt, idx) => (
                <div key={idx} className="flex flex-col text-left">
                  <span className="text-lg md:text-xl font-bold text-gray-800 font-display">
                    {pt.title}
                  </span>
                  <p className="mt-2 text-base font-semibold text-slate-500 leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
