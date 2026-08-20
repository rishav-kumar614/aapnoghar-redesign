import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export interface ExperienceItem {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  secondaryImage?: string;
  badge: string;
  highlights: string[];
  stats: { label: string; value: string }[];
  intent: string;
}

interface RapidImageStackProps {
  items: ExperienceItem[];
  onSelectIntent: (intent: string) => void;
}

export function RapidImageStack({ items, onSelectIntent }: RapidImageStackProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = items[activeIndex] || items[0];

  return (
    <div className="w-full">
      {/* Clean Minimalist Category Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#0E295B]/10">
        {items.map((item, idx) => {
          const isSelected = activeIndex === idx;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                isSelected
                  ? "bg-[#0E295B] text-white shadow-md"
                  : "bg-transparent text-[#50657D] hover:text-[#0E295B] hover:bg-[#0E295B]/5"
              }`}
            >
              {item.name}
            </button>
          );
        })}
      </div>

      {/* Clean 2-Column Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left: Minimal Content Block (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col items-start text-left">
          <span className="text-xs font-black uppercase tracking-widest text-[#01A5E1] mb-2">
            0{activeIndex + 1} / 0{items.length} • {active.category}
          </span>

          <h3 className="text-2xl sm:text-4xl font-extrabold text-[#0E295B] font-display tracking-tight leading-tight mb-4">
            {active.tagline}
          </h3>

          <p className="text-[#50657D] text-sm sm:text-base leading-relaxed mb-6 font-normal">
            {active.description}
          </p>

          {/* Minimal Key Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full mb-8">
            {active.highlights.map((h, i) => (
              <div key={i} className="flex items-center gap-2 text-xs font-semibold text-[#0E295B]">
                <CheckCircle2 size={15} className="text-[#01A5E1] shrink-0" />
                <span>{h}</span>
              </div>
            ))}
          </div>

          {/* Primary Action Button */}
          <button
            type="button"
            onClick={() => onSelectIntent(active.intent)}
            className="px-7 py-3.5 rounded-2xl bg-[#F68734] hover:bg-[#D84A22] text-white font-extrabold text-xs sm:text-sm shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 transform active:scale-98"
          >
            <span>Book {active.name} Package</span>
            <ArrowUpRight size={16} />
          </button>
        </div>

        {/* Right: Crisp High-Resolution Framed Image (7 Cols) */}
        <div className="lg:col-span-7">
          <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-xl bg-black/10 group">
            <img
              key={active.id}
              src={active.image}
              alt={active.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-extrabold uppercase tracking-wider text-white border border-white/20 self-start mb-2">
                {active.badge}
              </span>
              <h4 className="text-xl sm:text-2xl font-bold font-display text-white">
                {active.name}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
