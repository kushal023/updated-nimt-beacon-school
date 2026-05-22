import { useState } from "react";
import { Play, Star, ChevronRight } from "lucide-react";
import { Testimonials, TestimonialItem } from "../data/boardingData";

export default function VideoTestimonials() {
  const [activeId, setActiveId] = useState<string>("t-1");
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const activeTestimonial = Testimonials.find((t) => t.id === activeId) || Testimonials[0];

  const handleSelect = (id: string) => {
    setActiveId(id);
    setIsPlaying(false); // Reset playing status when swapping
  };

  return (
    <section className="bg-slate-50 py-20 border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Video Testimonials
          </h2>
          <p className="mt-4 text-base text-gray-500 font-medium leading-relaxed">
            Real stories from parents whose children thrive at NIMT Beacon
          </p>
        </div>

        {/* Dynamic Multi-column Layout */}
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 max-w-6xl mx-auto">
          
          {/* Main Selected Video Player Box & Author Detail - Left 7 Cols */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Playback Viewbox */}
            <div className="relative aspect-[16/10] w-full rounded-2xl bg-[#091026] overflow-hidden shadow-lg border border-slate-800 flex flex-col items-center justify-center">
              
              {/* Overlay graphics to simulate a premium player */}
              {isPlaying ? (
                <div className="absolute inset-0 bg-[#0c1630]">
                  {/* Glowing dynamic loader animation for simulation */}
                  <div className="absolute inset-x-0 bottom-4 px-6 flex items-center justify-between text-xs text-white/50 font-mono">
                    <span className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
                      <span>Now Playing: {activeTestimonial.name}</span>
                    </span>
                    <span>0:04 / 2:30</span>
                  </div>
                  <div className="h-full w-full flex items-center justify-center text-white/70 font-display text-sm font-semibold text-center p-6 select-none">
                    [ Simulated Video Testimonial Playing ]<br />
                    "Hover/click here to pause"
                  </div>
                </div>
              ) : (
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-slate-900/40 z-10"></div>
              )}

              {/* Unplaying Overlay view */}
              {!isPlaying && (
                <div className="relative z-20 flex flex-col items-center text-center p-8 max-w-xs">
                  <button 
                    onClick={() => setIsPlaying(true)}
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 group cursor-pointer"
                  >
                    <Play className="h-6 w-6 stroke-[3] fill-current ml-1 text-white" />
                  </button>
                  <span className="mt-4 text-xs font-bold tracking-widest text-[#93c5fd] uppercase">
                    Play Testimonial Clip
                  </span>
                  <p className="mt-2 text-xs text-slate-400 font-mono">
                    {activeTestimonial.videoPlaceholder}
                  </p>
                </div>
              )}

              {/* Clicking can pause if playing */}
              {isPlaying && (
                <button 
                  onClick={() => setIsPlaying(false)}
                  className="absolute inset-0 z-30 cursor-pointer"
                  title="Pause video"
                ></button>
              )}

            </div>

            {/* Author Testimonial Quote Panel Card */}
            <div className="rounded-2xl border border-slate-200/60 bg-white p-8 shadow-sm">
              <div className="flex gap-1">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="h-4.5 w-4.5 fill-[#eab308] text-[#eab308]" />
                ))}
              </div>
              <p className="mt-4 text-base font-bold text-gray-800 italic leading-relaxed">
                "{activeTestimonial.quote}"
              </p>
              <div className="mt-5 border-t border-slate-100 pt-4 text-left">
                <span className="text-sm font-extrabold text-[#1344e6] font-display block">
                  {activeTestimonial.name}
                </span>
                <span className="text-xs font-semibold text-gray-400">
                  {activeTestimonial.role}
                </span>
              </div>
            </div>

          </div>

          {/* Testimonial Queue - Right 5 Cols */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 text-left block pl-2">
              More Testimonials
            </span>
            
            <div className="space-y-3.5">
              {Testimonials.map((t) => {
                const isSelected = t.id === activeId;
                return (
                  <button
                    key={t.id}
                    onClick={() => handleSelect(t.id)}
                    className={`w-full text-left rounded-2xl p-5 border transition-all duration-200 flex items-center justify-between gap-4 cursor-pointer focus:outline-none ${
                      isSelected 
                        ? "bg-white border-[#1344e6] shadow-md"
                        : "bg-white/60 border-slate-100 hover:bg-white hover:border-slate-200 shadow-sm"
                    }`}
                  >
                    <div className="flex flex-col">
                      <span className={`text-sm font-extrabold font-display ${isSelected ? "text-[#1344e6]" : "text-gray-800"}`}>
                        {t.name}
                      </span>
                      <span className="text-xs font-semibold text-gray-400 mt-0.5">
                        {t.role}
                      </span>
                      <span className="text-[9px] font-semibold text-slate-400 font-mono mt-1.5 uppercase tracking-wide inline-flex items-center gap-1.5">
                        <span className={`h-1.5 w-1.5 rounded-full ${isSelected ? "bg-red-500 animate-pulse" : "bg-slate-300"}`}></span>
                        <span>Video Clip Available</span>
                      </span>
                    </div>

                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors ${
                      isSelected 
                        ? "bg-blue-50 border-blue-100 text-[#1344e6]"
                        : "bg-slate-50 border-slate-100 text-gray-400"
                    }`}>
                      <ChevronRight className="h-5 w-5" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
