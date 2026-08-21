import React from "react";
import { Star, Landmark, Utensils, MapPin, Search } from "lucide-react";

interface GodlyResortHeroProps {
  onBook: (intent: string) => void;
  onExplore: () => void;
}

const PANELS = [
  {
    id: "waterpark",
    title: "Water Park",
    image: "/images/hero_water_park.jpg",
    intent: "Water Park Booking",
  },
  {
    id: "amusement",
    title: "Amusement",
    image: "/images/amusement-park-aapno-ghar.jpg",
    intent: "Amusement Park Booking",
  },
  {
    id: "weddings",
    title: "Banquets",
    image: "/images/bhanwar-party-lawn.jpg",
    intent: "Wedding Enquiry",
  },
  {
    id: "stay",
    title: "Resort Stay",
    image: "/images/deluxe-room-Room.jpg",
    intent: "Room Stay Booking",
  },
];

export function GodlyResortHero({ onBook, onExplore }: GodlyResortHeroProps) {
  return (
    <section
      className="relative w-full overflow-hidden select-none"
      style={{ height: "100svh", minHeight: 620, background: "#FFFFFF" }}
      id="hero"
    >
      {/* ─── FOUR ARCH PANELS — staggered heights with clean gap below navbar ─── */}
      <div 
        className="absolute inset-0 flex items-center justify-center pt-[96px] pb-12"
        style={{ paddingLeft: "12px", paddingRight: "12px" }}
      >
        <div className="w-full max-w-[1580px] h-[calc(100svh-140px)] flex items-center justify-center gap-[28px]">
          {PANELS.map((panel, idx) => {
            // idx 1 (2nd) & idx 3 (4th) -> taller (+25px)
            // idx 0 (1st) & idx 2 (3rd) -> shorter (-25px)
            const isTall = idx === 1 || idx === 3;
            return (
              <div
                key={panel.id}
                className="relative flex-1 cursor-pointer transition-all duration-300"
                style={{
                  height: isTall ? "100%" : "calc(100% - 50px)",
                  marginTop: isTall ? "0px" : "25px",
                }}
                onClick={() => onBook(panel.intent)}
              >
                <div
                  className="absolute inset-0 overflow-hidden shadow-md"
                  style={{ borderRadius: "9999px 9999px 16px 16px" }}
                >
                  <img
                    src={panel.image}
                    alt={panel.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Soft bottom inner fade */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/40 to-transparent pointer-events-none" 
                    style={{ height: "50%", top: "auto", bottom: 0 }} 
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ─── DREAMY BOTTOM FOG / BLUR EFFECT ─── */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-52 pointer-events-none z-20"
        style={{
          background: "linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.92) 40%, rgba(255,255,255,0.4) 75%, transparent 100%)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          maskImage: "linear-gradient(to top, black 45%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to top, black 45%, transparent 100%)",
        }}
      />

      {/* ─── FLOATING PILL STATS / SEARCH BAR (ONERA Style) ─── */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 w-[94%] max-w-4xl">
        <div 
          className="w-full flex items-center justify-between p-2 sm:p-2.5 rounded-full shadow-[0_12px_36px_rgba(0,0,0,0.09)] border border-black/5 transition-all duration-300"
          style={{
            background: "rgba(255, 255, 255, 0.94)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
        >
          {/* Segment 1: Rating */}
          <div className="flex-1 flex items-center gap-3 px-3.5 sm:px-5 py-1.5 border-r border-black/[0.07]">
            <div className="w-8 h-8 rounded-full bg-[#D4852A]/15 text-[#D4852A] flex items-center justify-center shrink-0">
              <Star size={15} className="fill-[#D4852A]" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-[#1A1209]">Rating</p>
              <p className="text-[11px] sm:text-xs text-black/55 font-medium truncate">4.8/5 · 12k+ Reviews</p>
            </div>
          </div>

          {/* Segment 2: Heritage */}
          <div className="flex-1 hidden sm:flex items-center gap-3 px-3.5 sm:px-5 py-1.5 border-r border-black/[0.07]">
            <div className="w-8 h-8 rounded-full bg-[#D4852A]/15 text-[#D4852A] flex items-center justify-center shrink-0">
              <Landmark size={15} />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-[#1A1209]">Heritage</p>
              <p className="text-[11px] sm:text-xs text-black/55 font-medium truncate">Since 1996</p>
            </div>
          </div>

          {/* Segment 3: Food */}
          <div className="flex-1 hidden md:flex items-center gap-3 px-3.5 sm:px-5 py-1.5 border-r border-black/[0.07]">
            <div className="w-8 h-8 rounded-full bg-[#D4852A]/15 text-[#D4852A] flex items-center justify-center shrink-0">
              <Utensils size={15} />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-[#1A1209]">Food</p>
              <p className="text-[11px] sm:text-xs text-black/55 font-medium truncate">100% Vegetarian</p>
            </div>
          </div>

          {/* Segment 4: Location */}
          <div className="flex-1 flex items-center gap-3 px-3.5 sm:px-5 py-1.5">
            <div className="w-8 h-8 rounded-full bg-[#D4852A]/15 text-[#D4852A] flex items-center justify-center shrink-0">
              <MapPin size={15} />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-[#1A1209]">Location</p>
              <p className="text-[11px] sm:text-xs text-black/55 font-medium truncate">NH-8, Gurugram</p>
            </div>
          </div>

          {/* Search Button (Far Right) */}
          <button
            type="button"
            onClick={onExplore}
            aria-label="Explore resort"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#D4852A] hover:bg-[#B85C1A] text-white flex items-center justify-center shrink-0 shadow-md transition-transform hover:scale-105 active:scale-95 cursor-pointer ml-1 sm:ml-2"
          >
            <Search size={17} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
