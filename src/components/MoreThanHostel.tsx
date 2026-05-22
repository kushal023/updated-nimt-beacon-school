import React from "react";

interface BulletItem {
  num: number;
  boldText: string;
  regularText: string;
}

export default function MoreThanHostel() {
  const points: BulletItem[] = [
    {
      num: 1,
      boldText: "Care",
      regularText: "Every student receives individualized attention and support from our dedicated team.",
    },
    {
      num: 2,
      boldText: "Emotional Support",
      regularText: "We understand boarding can be challenging. Our counselors are always available.",
    },
    {
      num: 3,
      boldText: "Student Wellbeing",
      regularText: "Physical, mental, and emotional health are our top priorities.",
    },
    {
      num: 4,
      boldText: "Resident Mentors",
      regularText: "Experienced mentors guide students in academics and personal development.",
    },
    {
      num: 5,
      boldText: "Safe Environment",
      regularText: "A nurturing atmosphere where students feel secure and valued.",
    },
  ];

  return (
    <section className="bg-white py-20 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12">
          
          {/* Left Block with Bullets */}
          <div className="flex flex-col justify-center text-left lg:col-span-7">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              More Than a Hostel. <br />
              <span className="text-[#1344e6]">A Home Away From Home.</span>
            </h2>
            
            <div className="mt-8 space-y-5 max-w-xl">
              {points.map((pt) => (
                <div key={pt.num} className="flex gap-4">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 font-display text-xs font-extrabold text-[#1344e6] border border-blue-100 mt-0.5">
                    {pt.num}
                  </div>
                  <div className="text-sm">
                    <span className="font-bold text-gray-900">{pt.boldText}:</span>{" "}
                    <span className="font-medium text-gray-500">{pt.regularText}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Block Mosaic Cards matching Page 2 layout */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              
              {/* Tall Live/Hostel Rooms Card */}
              <div className="aspect-[4/5] sm:aspect-auto sm:h-64 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100/50 p-6 flex items-center justify-center text-center shadow-sm">
                <span className="text-sm font-semibold text-slate-500 font-display tracking-wider uppercase">
                  Hostel Rooms
                </span>
              </div>
              
              {/* Dual columns for Dining & Mentors */}
              <div className="flex flex-col gap-4">
                <div className="h-28 rounded-2xl bg-indigo-50/60 border border-indigo-100/50 p-4 flex items-center justify-center text-center shadow-sm">
                  <span className="text-xs font-semibold text-slate-500 font-display tracking-wider uppercase">
                    Dining Hall
                  </span>
                </div>
                <div className="h-32 rounded-2xl bg-blue-50/70 border border-blue-100/50 p-4 flex items-center justify-center text-center shadow-sm">
                  <span className="text-xs font-semibold text-slate-500 font-display tracking-wider uppercase">
                    Mentors
                  </span>
                </div>
              </div>
              
            </div>

            {/* Bottom wide photo container */}
            <div className="h-32 rounded-2xl bg-gradient-to-r from-blue-50/50 to-indigo-50/50 border border-blue-100/30 p-6 flex items-center justify-center text-center shadow-sm">
              <span className="text-xs font-semibold text-slate-500 font-display tracking-wider uppercase">
                Students Bonding
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
