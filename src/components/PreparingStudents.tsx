import React from "react";
import { BookOpen, Laptop, FlaskConical, GraduationCap, Trophy, Mic, Target, Lightbulb } from "lucide-react";

interface PrepItem {
  icon: string | React.ReactNode;
  label: string;
}

export default function PreparingStudents() {
  const items: PrepItem[] = [
    { icon: "🎓", label: "Smart Classrooms" },
    { icon: "💻", label: "AI & Computer Center" },
    { icon: "🧪", label: "Science Labs" },
    { icon: "📖", label: "Learning Resource Center" },
    { icon: "⚽", label: "Sports Facilities" },
    { icon: "🎤", label: "Public Speaking" },
    { icon: "🎯", label: "Leadership Programs" },
    { icon: "💡", label: "Entrepreneurial Thinking" },
  ];

  return (
    <section className="bg-slate-50 py-20 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title / Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Preparing Students for Life, Not Just Exams
          </h2>
          <p className="mt-4 text-base text-gray-500 font-medium leading-relaxed">
            Future-Ready Education with world-class infrastructure and comprehensive skill development.
          </p>
        </div>

        {/* 8-Card Grid with crisp cards */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 max-w-6xl mx-auto">
          {items.map((item, index) => (
            <div 
              key={index}
              className="rounded-xl border border-slate-100 bg-white p-6 text-center shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center min-h-[140px]"
            >
              <span className="text-3xl filter drop-shadow-sm mb-3">
                {item.icon}
              </span>
              <span className="text-sm font-extrabold text-gray-800 font-display">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Solid Blue Card below */}
        <div className="mt-16 max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#1344e6] to-blue-700 px-8 py-12 text-white shadow-xl">
            
            {/* Subtle Abstract Background Glow */}
            <div className="absolute right-0 top-0 h-40 w-40 bg-white/5 blur-3xl rounded-full"></div>
            
            <div className="max-w-3xl text-left">
              <h3 className="font-display text-2xl font-extrabold tracking-tight">
                Comprehensive Development
              </h3>
              <p className="mt-4 text-sm font-medium leading-relaxed text-blue-100">
                We believe in nurturing well-rounded individuals equipped with academic knowledge, practical skills, and strong character. Our programs are designed to prepare students not just for competitive exams, but for success in life.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
