import React from "react";
import { Star, Landmark, Utensils, MapPin, Search } from "lucide-react";

interface GodlyResortHeroProps {
  onBook: (intent: string) => void;
  onExplore: () => void;
}

// 4 Resort pillars with editorial heights matching the architectural rhythm of ONERA
const PANELS = [
  {
    id: "waterpark",
    title: "Water Park",
    image: "/images/hero_water_park.jpg",
    intent: "Water Park Booking",
    heightPercent: "88%",
    topOffset: "40px",
  },
  {
    id: "amusement",
    title: "Amusement",
    image: "/images/amusement-park-aapno-ghar.jpg",
    intent: "Amusement Park Booking",
    heightPercent: "98%",
    topOffset: "0px",
  },
  {
    id: "weddings",
    title: "Banquets",
    image: "/images/bhanwar-party-lawn.jpg",
    intent: "Wedding Enquiry",
    heightPercent: "84%",
    topOffset: "56px",
  },
  {
    id: "stay",
    title: "Resort Stay",
    image: "/images/deluxe-room-Room.jpg",
    intent: "Room Stay Booking",
    heightPercent: "92%",
    topOffset: "24px",
  },
];

export function GodlyResortHero({ onBook, onExplore }: GodlyResortHeroProps) {
  return (
    <section
      className="relative w-full overflow-hidden select-none bg-[#FCFCFD]"
      style={{ height: "100svh", minHeight: 640 }}
      id="hero"
    >
      {/* ─── UNIFIED ARCH COMPOSITION (EDITORIAL STAGGERED RHYTHM) ─── */}
      <div 
        className="absolute inset-0 flex items-start justify-center pt-[104px] pb-10"
        style={{ paddingLeft: "28px", paddingRight: "28px" }}
      >
        <div className="w-full max-w-[1520px] h-[calc(100svh-148px)] flex items-start justify-center gap-6 sm:gap-8 lg:gap-10">
          {PANELS.map((panel) => {
            return (
              <div
                key={panel.id}
                className="relative flex-1 cursor-pointer group"
                style={{
                  height: panel.heightPercent,
                  marginTop: panel.topOffset,
                }}
                onClick={() => onBook(panel.intent)}
              >
                {/* Arch Frame */}
                <div
                  className="absolute inset-0 overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-black/[0.03] transition-all duration-700"
                  style={{ 
                    borderRadius: "9999px 9999px 12px 12px",
                    // Gentle gradient mask for gradual bottom fadeout
                    maskImage: "linear-gradient(to bottom, black 0%, black 58%, rgba(0,0,0,0.5) 80%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 58%, rgba(0,0,0,0.5) 80%, transparent 100%)",
                  }}
                >
                  {/* Softened, delicately toned luxury photography */}
                  <img
                    src={panel.image}
                    alt={panel.title}
                    className="absolute inset-0 w-full h-full object-cover scale-[1.02] filter blur-[0.4px] contrast-[0.94] brightness-[1.02] transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Subtle vertical luminance gradient: creates a calm, high-contrast field across the middle/lower-middle reading band */}
                  <div 
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: "linear-gradient(to bottom, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.08) 32%, rgba(255,255,255,0.32) 50%, rgba(255,255,255,0.68) 75%, rgba(255,255,255,0.95) 100%)",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ─── INTEGRATED EDITORIAL TYPOGRAPHY (ONE LINE ON DESKTOP) ─── */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-25 px-4 text-center pb-8 sm:pb-12">
        <div className="relative flex flex-col items-center justify-center max-w-[1440px] w-full">
          
          {/* Main Title: Sophisticated High-Contrast Serif — Stays strictly on ONE single line */}
          <h1 
            className="text-[#0A111E] select-none uppercase font-normal whitespace-nowrap leading-none tracking-[0.12em] sm:tracking-[0.16em] lg:tracking-[0.20em]"
            style={{
              fontFamily: "'Bodoni Moda', 'Playfair Display', Georgia, serif",
              fontSize: "clamp(26px, 5.2vw, 84px)",
              fontWeight: 700,
              letterSpacing: "0.18em",
            }}
          >
            The City of Joy
          </h1>

          {/* Subtitle: Exquisite Flowing Italic Serif — Nested directly underneath without overlap */}
          <p 
            className="text-[#1A2536] leading-none mt-2.5 sm:mt-4 tracking-[-0.01em]"
            style={{
              fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
              fontSize: "clamp(18px, 2.6vw, 40px)",
              fontStyle: "italic",
              fontWeight: 600,
            }}
          >
            made for celebration<span className="text-[#D4852A] not-italic font-serif font-black">.</span>
          </p>
        </div>
      </div>

      {/* ─── REFINED BOTTOM SEAMLESS FOG GRADIENT ─── */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none z-20"
        style={{
          background: "linear-gradient(to top, #FCFCFD 0%, rgba(252,252,253,0.95) 40%, rgba(252,252,253,0.3) 78%, transparent 100%)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
        }}
      />

      {/* ─── FLOATING PILL STATS / SEARCH BAR (HOSPITALITY EDITORIAL BAR) ─── */}
      <div className="absolute bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 z-30 w-[92%] max-w-[1260px]">
        <div 
          className="w-full flex items-center justify-between p-1.5 sm:p-2 rounded-full shadow-[0_12px_36px_rgba(14,21,36,0.06)] border border-black/[0.06] transition-all duration-300"
          style={{
            background: "rgba(255, 255, 255, 0.96)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
          }}
        >
          {/* Segment 1: Rating */}
          <div className="flex-1 flex items-center gap-3 sm:gap-3.5 px-4 sm:px-6 py-2 border-r border-black/[0.06]">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#D4852A]/10 text-[#D4852A] flex items-center justify-center shrink-0">
              <Star size={15} className="fill-[#D4852A]" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-[#0E1524]">Rating</p>
              <p className="text-[11px] sm:text-xs text-black/55 font-medium truncate">4.8/5 · 12k+ Reviews</p>
            </div>
          </div>

          {/* Segment 2: Heritage */}
          <div className="flex-1 hidden sm:flex items-center gap-3 sm:gap-3.5 px-4 sm:px-6 py-2 border-r border-black/[0.06]">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#D4852A]/10 text-[#D4852A] flex items-center justify-center shrink-0">
              <Landmark size={15} />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-[#0E1524]">Heritage</p>
              <p className="text-[11px] sm:text-xs text-black/55 font-medium truncate">Since 1996 · 29+ Yrs</p>
            </div>
          </div>

          {/* Segment 3: Food */}
          <div className="flex-1 hidden md:flex items-center gap-3 sm:gap-3.5 px-4 sm:px-6 py-2 border-r border-black/[0.06]">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#D4852A]/10 text-[#D4852A] flex items-center justify-center shrink-0">
              <Utensils size={15} />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-[#0E1524]">Food</p>
              <p className="text-[11px] sm:text-xs text-black/55 font-medium truncate">100% Pure Vegetarian</p>
            </div>
          </div>

          {/* Segment 4: Location */}
          <div className="flex-1 flex items-center gap-3 sm:gap-3.5 px-4 sm:px-6 py-2">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#D4852A]/10 text-[#D4852A] flex items-center justify-center shrink-0">
              <MapPin size={15} />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-[#0E1524]">Location</p>
              <p className="text-[11px] sm:text-xs text-black/55 font-medium truncate">NH-8, Gurugram</p>
            </div>
          </div>

          {/* Search Button (Far Right) */}
          <button
            type="button"
            onClick={onExplore}
            aria-label="Explore resort"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#D4852A] hover:bg-[#B85C1A] text-white flex items-center justify-center shrink-0 shadow-[0_4px_16px_rgba(212,133,42,0.35)] transition-transform hover:scale-105 active:scale-95 cursor-pointer ml-1 sm:ml-2"
          >
            <Search size={17} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
