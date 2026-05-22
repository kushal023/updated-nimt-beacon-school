import React from "react";

interface FacilityItem {
  icon: string;
  name: string;
}

export default function CampusFacilities() {
  const facilities: FacilityItem[] = [
    { icon: "🏫", name: "Campus" },
    { icon: "🏠", name: "Hostel" },
    { icon: "🧪", name: "Labs" },
    { icon: "⚽", name: "Sports" },
    { icon: "📚", name: "Library" },
    { icon: "🎨", name: "Activity Areas" },
    { icon: "✏️", name: "Classrooms" },
    { icon: "🎭", name: "Auditorium" },
  ];

  return (
    <section id="facilities" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="font-display text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl lg:leading-[1.1]">
            World-Class Campus & Facilities
          </h2>
          <p className="mt-6 text-lg md:text-xl text-gray-500 font-medium leading-relaxed">
            State-of-the-art infrastructure supporting world-class education and holistic development.
          </p>
        </div>

        {/* 8-Facility Cards Grid (4 Columns) */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 max-w-6xl mx-auto">
          {facilities.map((f, index) => (
            <div 
              key={index}
              className="rounded-xl border border-blue-50 bg-blue-50/10 p-6 text-center shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center min-h-[120px]"
            >
              <span className="text-3 shadow-inner filter drop-shadow-sm mb-3 text-3xl">{f.icon}</span>
              <span className="text-base md:text-lg font-extrabold text-[#1344e6] font-display">{f.name}</span>
            </div>
          ))}
        </div>

        {/* Modern Infrastructure Box (Solid Blue banner styled similarly to screenshot) */}
        <div className="mt-16 max-w-6xl mx-auto">
          <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-[#1344e6] px-8 py-12 text-white shadow-xl relative overflow-hidden">
            <div className="absolute right-0 top-0 h-40 w-40 bg-white/5 blur-3xl rounded-full"></div>
            
            <h3 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight mb-5">
              Modern Infrastructure
            </h3>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 text-base md:text-lg leading-relaxed text-blue-100">
              <p className="font-medium">
                Our campus spans over 25 acres of lush green space with modern facilities. Every building is designed with students' comfort and safety in mind.
              </p>
              <p className="font-medium">
                From AI-enabled classrooms to sports complexes, we provide an environment that fosters academic excellence and personal growth.
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic Structural Grid below (Main Campus View / Sports Complex placeholders) */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-12 max-w-6xl mx-auto">
          
          {/* Main Campus View Card (Larger) */}
          <div className="md:col-span-8 aspect-[16/10] rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100/50 flex flex-col items-center justify-center p-6 text-center shadow-sm">
            <span className="text-base font-bold tracking-wider text-slate-600 font-display uppercase">
              Main Campus View
            </span>
          </div>

          {/* Sports Complex Card */}
          <div className="md:col-span-4 aspect-[4/3] md:aspect-auto rounded-3xl bg-gradient-to-br from-indigo-50/60 to-blue-50/60 border border-indigo-100/50 flex flex-col items-center justify-center p-6 text-center shadow-sm">
            <span className="text-base font-bold tracking-wider text-slate-600 font-display uppercase">
              Sports Complex
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
