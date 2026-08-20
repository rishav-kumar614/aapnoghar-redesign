import React from "react";
import { Sparkles, ArrowRight, Award } from "lucide-react";

interface HeritageMascotBandProps {
  onExplore: () => void;
}

export function HeritageMascotBand({ onExplore }: HeritageMascotBandProps) {
  const STATS = [
    { value: "29+", label: "Years of Heritage" },
    { value: "21+", label: "Water Slides & Rides" },
    { value: "67", label: "Luxury Resort Rooms" },
    { value: "2,500", label: "Grand Lawn Capacity" }
  ];

  return (
    <section className="py-20 bg-white text-[#0E295B] border-b border-[#0E295B]/10 relative overflow-hidden" id="about-heritage">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Subtle Minimal Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FCF3E9] text-[#D84A22] text-xs font-bold uppercase tracking-wider mb-5">
          <Sparkles size={12} className="text-[#F68734]" />
          <span>A 30-Year Heritage of Joy</span>
        </div>

        {/* Clean Editorial Headline */}
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-[#0E295B] leading-tight mb-5">
          A 9-acre sanctuary where thrilling adventures meet{" "}
          <span className="italic font-serif font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#F68734] to-[#01A5E1]">
            tropical relaxation.
          </span>
        </h2>

        {/* Concise Narrative */}
        <p className="text-[#50657D] text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-12 font-normal">
          Delhi-NCR’s iconic celebration destination on NH-8 Gurugram, seamlessly combining high-speed water slides, carnival joyrides, starlit banquet lawns, and peaceful resort rooms with 100% pure vegetarian dining.
        </p>

        {/* Minimalist Borderless Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-b border-[#0E295B]/10 max-w-4xl mx-auto mb-10">
          {STATS.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-black font-display text-[#0E295B] leading-none mb-1.5">
                {item.value}
              </span>
              <span className="text-xs text-[#50657D] font-bold">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Subtle Minimal Action */}
        <div>
          <button
            type="button"
            onClick={onExplore}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0E295B] hover:text-[#F68734] transition-colors py-2 px-4 rounded-xl hover:bg-[#FCF3E9]"
          >
            <span>Discover park experiences</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
