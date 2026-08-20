import React, { useState } from "react";
import { Sparkles, ArrowUpRight, Ticket, Star, ChevronDown, Waves, Compass } from "lucide-react";

interface GodlyResortHeroProps {
  onBook: (intent: string) => void;
  onExplore: () => void;
}

const EXPERIENCES = [
  {
    id: "waterpark",
    title: "Water Park",
    badge: "21 Slides & Wave Pool",
    rate: "From ₹1,299",
    image: "/images/hero_water_park.jpg",
    intent: "Water Park Booking",
    desc: "Delhi-NCR's largest wave pool & turbo slides with full-course vegetarian buffet."
  },
  {
    id: "amusement",
    title: "Amusement Rides",
    badge: "15+ Joyrides",
    rate: "All-Day Fun",
    image: "/images/amusement-park-aapno-ghar.jpg",
    intent: "Amusement Park Booking",
    desc: "Caterpillar coaster, flying bob, carnival swings & 24 adventure obstacle courses."
  },
  {
    id: "weddings",
    title: "Royal Banquets",
    badge: "2,500 Capacity",
    rate: "4 Grand Lawns",
    image: "/images/img3.jpg",
    intent: "Wedding Enquiry",
    desc: "Starlit Chander Lawn, Bhanwar Lawn & climate-controlled Abhinandan Banquet."
  },
  {
    id: "stay",
    title: "Resort Stay",
    badge: "67 Luxury Rooms",
    rate: "From ₹4,600/n",
    image: "/images/deluxe-room-Room.jpg",
    intent: "Room Stay Booking",
    desc: "Spacious presidential suites, lawn balconies, peaceful greenery & 24/7 service."
  }
];

export function GodlyResortHero({ onBook, onExplore }: GodlyResortHeroProps) {
  const [activeExp, setActiveExp] = useState(EXPERIENCES[0]);

  return (
    <section className="relative h-screen min-h-[100vh] w-full flex flex-col justify-between pt-24 pb-6 px-4 sm:px-8 bg-[#061A33] overflow-hidden text-white select-none" id="hero">
      {/* Background Soft-Focus Atmosphere with Dynamic Crossfade */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 transform scale-105 opacity-40"
        style={{ backgroundImage: `url(${activeExp.image})` }}
      />

      {/* Layered Editorial Gradient Scrims */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#061A33] via-[#061A33]/75 to-[#061A33]/50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(1,165,225,0.18),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(246,135,52,0.18),transparent_60%)]" />

      {/* Main Editorial Hero Layout (Centered Vertically) */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10 my-auto">
        {/* Left Column: Bold Typographic Statement (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Status Chip */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-white mb-4 sm:mb-6 shadow-xl">
            <span className="w-2 h-2 rounded-full bg-[#69B32D] animate-pulse" />
            <span className="text-[#89D9F8] font-bold">Open Today 09:30 AM – 07:00 PM</span>
            <span className="opacity-40">•</span>
            <span className="text-white/80">NH-8 Gurugram</span>
          </div>

          {/* Editorial Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black font-display tracking-tight leading-[1.06] text-white mb-4 sm:mb-6">
            The city of joy,{" "}
            <span className="italic font-serif font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#FFA96B] via-[#F68734] to-[#01A5E1]">
              made for celebration.
            </span>
          </h1>

          <p className="text-white/85 text-sm sm:text-lg lg:text-xl font-normal leading-relaxed max-w-xl mb-6 sm:mb-8">
            Delhi-NCR's premier 9-acre destination bringing together 21 thrill water slides, carnival joyrides, starlit wedding lawns, and 67 peaceful resort rooms.
          </p>

          {/* Action CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6">
            <button
              type="button"
              onClick={() => onBook(activeExp.intent)}
              className="px-7 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-[#F68734] hover:bg-[#D84A22] text-white font-extrabold text-xs sm:text-sm md:text-base shadow-[0_0_35px_rgba(246,135,52,0.6)] hover:shadow-[0_0_45px_rgba(246,135,52,0.85)] transition-all duration-300 flex items-center gap-2 transform active:scale-95"
              data-cursor-text="Book Pass"
            >
              <Ticket size={18} /> Book Day Pass — ₹1,299
            </button>

            <button
              type="button"
              onClick={onExplore}
              className="px-5 sm:px-6 py-3.5 sm:py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm md:text-base backdrop-blur-md border border-white/20 transition-all duration-300 flex items-center gap-2"
              data-cursor-text="Explore"
            >
              Explore Resort Grounds <ArrowUpRight size={17} />
            </button>
          </div>
        </div>

        {/* Right Column: Interactive Framed Destination Deck (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
          <div className="w-full max-w-md bg-[#061A33]/85 backdrop-blur-2xl rounded-3xl p-5 border border-white/20 shadow-2xl overflow-hidden">
            {/* Framed Image Showcase */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-black/30 group">
              <img
                key={activeExp.id}
                src={activeExp.image}
                alt={activeExp.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex flex-col justify-end p-5">
                <span className="px-3 py-1 rounded-full bg-[#01A5E1] text-white text-[11px] font-extrabold uppercase tracking-wider self-start mb-1 shadow-md">
                  {activeExp.rate}
                </span>
                <h3 className="text-xl font-bold text-white font-display leading-tight">
                  {activeExp.title}
                </h3>
                <p className="text-xs text-white/80 line-clamp-1 mt-0.5">
                  {activeExp.desc}
                </p>
              </div>
            </div>

            {/* 4 Interactive Selector Tabs */}
            <div className="grid grid-cols-2 gap-2">
              {EXPERIENCES.map((exp) => {
                const isSelected = activeExp.id === exp.id;
                return (
                  <button
                    key={exp.id}
                    type="button"
                    onClick={() => setActiveExp(exp)}
                    className={`p-2.5 rounded-xl text-left transition-all duration-300 border flex flex-col ${
                      isSelected
                        ? "bg-white/20 border-[#F68734] shadow-md"
                        : "bg-white/5 border-white/10 hover:bg-white/10 text-white/70 hover:text-white"
                    }`}
                  >
                    <span className="text-xs font-bold text-white truncate">
                      {exp.title}
                    </span>
                    <span className="text-[10px] text-white/60 truncate">
                      {exp.badge}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Bottom Full-Width Bar with Scroll Indicator */}
      <div className="max-w-7xl mx-auto w-full relative z-20 flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-white/10 text-xs text-white/75 font-semibold">
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-1.5 text-white">
            <Star size={14} className="fill-[#FFA96B] text-[#FFA96B]" />
            <span className="font-extrabold">4.8 / 5</span>
            <span className="text-white/60 font-normal">(12,000+ Reviews)</span>
          </div>
          <span className="hidden sm:inline opacity-30">•</span>
          <span>29+ Years Heritage</span>
          <span className="hidden sm:inline opacity-30">•</span>
          <span>100% Pure Vegetarian Feasts</span>
        </div>

        <button
          type="button"
          onClick={onExplore}
          className="flex items-center gap-1 text-white/60 hover:text-white transition-colors cursor-pointer group"
        >
          <span>Scroll to explore</span>
          <ChevronDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
        </button>
      </div>
    </section>
  );
}
