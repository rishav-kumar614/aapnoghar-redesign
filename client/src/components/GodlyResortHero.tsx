import React from "react";
import { Star, Landmark, Utensils, MapPin, Search, ArrowRight } from "lucide-react";

interface GodlyResortHeroProps {
  onBook: (intent: string) => void;
  onExplore: () => void;
}

const PANELS = [
  {
    id: "waterpark",
    label: "Water Park",
    sub: "21 Slides & Wave Pool",
    image: "/images/hero_water_park.jpg",
    intent: "Water Park Booking",
    heightVh: 52,
    delay: "0ms",
  },
  {
    id: "amusement",
    label: "Amusement",
    sub: "30+ Joyrides",
    image: "/images/amusement-park-aapno-ghar.jpg",
    intent: "Amusement Park Booking",
    heightVh: 60,
    delay: "60ms",
  },
  {
    id: "banquets",
    label: "Banquets",
    sub: "2,500 Capacity",
    image: "/images/bhanwar-party-lawn.jpg",
    intent: "Wedding Enquiry",
    heightVh: 55,
    delay: "120ms",
  },
  {
    id: "stay",
    label: "Resort Stay",
    sub: "67 Luxury Rooms",
    image: "/images/deluxe-room-Room.jpg",
    intent: "Room Stay Booking",
    heightVh: 58,
    delay: "180ms",
  },
];

export function GodlyResortHero({ onBook, onExplore }: GodlyResortHeroProps) {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#FAF7F3] flex flex-col select-none"
      style={{ height: "100svh", minHeight: 680 }}
      id="hero"
    >
      {/* ═══════════════════════════════════════════
          TOP TEXT ZONE — clear cream background
          Sits entirely above the arch images
      ═══════════════════════════════════════════ */}
      <div className="relative z-20 flex flex-col items-center justify-end text-center pt-[88px] pb-6 sm:pb-7 px-6 flex-shrink-0">

        {/* Overline */}
        <div className="flex items-center gap-3 mb-3 sm:mb-4">
          <div className="w-8 sm:w-12 h-px bg-[#D4852A]" />
          <span
            className="text-[#D4852A] text-[9px] sm:text-[10px] uppercase tracking-[0.32em] font-semibold"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Aapno Ghar · Since 1996
          </span>
          <div className="w-8 sm:w-12 h-px bg-[#D4852A]" />
        </div>

        {/* Headline — completely on cream background, perfectly readable */}
        <h1
          className="whitespace-nowrap leading-[0.9] text-[#170E04]"
          style={{
            fontFamily: "'Bodoni Moda', 'Playfair Display', Georgia, serif",
            fontSize: "clamp(32px, 6.8vw, 112px)",
            fontWeight: 700,
            letterSpacing: "0.07em",
          }}
        >
          The City of Joy
        </h1>

        {/* Thin amber rule */}
        <div className="flex items-center gap-2.5 my-2.5 sm:my-3">
          <div className="w-12 sm:w-20 h-px bg-[#170E04]/12" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#D4852A]" />
          <div className="w-12 sm:w-20 h-px bg-[#170E04]/12" />
        </div>

        {/* Subtitle */}
        <p
          className="leading-none text-[#7A5535]"
          style={{
            fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
            fontSize: "clamp(17px, 2.6vw, 42px)",
            fontStyle: "italic",
            fontWeight: 500,
            letterSpacing: "0.01em",
          }}
        >
          made for celebration.
        </p>

        {/* CTA Row */}
        <div className="flex items-center gap-3 mt-4 sm:mt-5">
          <button
            onClick={onExplore}
            className="flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-white text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_6px_22px_rgba(212,133,42,0.38)]"
            style={{
              fontFamily: "'Poppins', sans-serif",
              background: "linear-gradient(135deg, #D4852A 0%, #BE6518 100%)",
            }}
          >
            Explore Resort <ArrowRight size={12} strokeWidth={2.5} />
          </button>
          <button
            onClick={() => onBook("Day Pass")}
            className="flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-[#2C1A06] text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] border border-[#2C1A06]/18 hover:border-[#D4852A]/50 hover:text-[#D4852A] transition-all duration-300 bg-white/70 backdrop-blur-sm"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Book Day Pass
          </button>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          ARCH PANEL ROW — fills remaining height
      ═══════════════════════════════════════════ */}
      <div
        className="relative z-10 flex items-end justify-center flex-1 min-h-0"
        style={{ paddingLeft: "20px", paddingRight: "20px", paddingBottom: "76px", gap: "14px" }}
      >
        {PANELS.map((panel, i) => (
          <div
            key={panel.id}
            className="relative group cursor-pointer flex-1"
            style={{ height: `${panel.heightVh}vh` }}
            onClick={() => onBook(panel.intent)}
          >
            {/* Arch frame */}
            <div
              className="absolute inset-0 overflow-hidden shadow-[0_12px_40px_rgba(23,14,4,0.10)] border border-black/[0.04] transition-shadow duration-500 group-hover:shadow-[0_18px_56px_rgba(23,14,4,0.16)]"
              style={{
                borderRadius: "9999px 9999px 10px 10px",
                maskImage: "linear-gradient(to bottom, black 0%, black 60%, rgba(0,0,0,0.5) 82%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 60%, rgba(0,0,0,0.5) 82%, transparent 100%)",
              }}
            >
              {/* Photo */}
              <img
                src={panel.image}
                alt={panel.label}
                className="absolute inset-0 w-full h-full object-cover scale-[1.05] transition-transform duration-700 ease-out group-hover:scale-[1.10]"
                style={{ filter: "saturate(0.92) brightness(0.97)" }}
              />

              {/* Bottom label — appears on hover */}
              <div
                className="absolute bottom-0 left-0 right-0 px-3 pb-4 pt-12 flex flex-col gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                style={{
                  background: "linear-gradient(to top, rgba(10,14,28,0.80) 0%, transparent 100%)",
                }}
              >
                <span
                  className="text-white text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em]"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {panel.label}
                </span>
                <span
                  className="text-white/55 text-[8px] sm:text-[9px] uppercase tracking-widest"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {panel.sub}
                </span>
              </div>
            </div>

            {/* Panel index */}
            <div
              className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[#C4B49A]/70 text-[8px] tracking-[0.3em] font-medium"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              0{i + 1}
            </div>
          </div>
        ))}
      </div>

      {/* ═══════════════════════════════════════════
          BOTTOM FLOATING INFO BAR
      ═══════════════════════════════════════════ */}
      <div className="absolute bottom-4 sm:bottom-5 left-1/2 -translate-x-1/2 z-30 w-[90%] max-w-[1060px]">
        <div
          className="w-full flex items-center rounded-full border border-[#E5DDD3] shadow-[0_6px_32px_rgba(23,14,4,0.07)]"
          style={{
            background: "rgba(255,255,255,0.95)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          {[
            { icon: <Star size={13} className="fill-[#D4852A] text-[#D4852A]" />, label: "Rating", val: "4.8 / 5 · 12k+ Reviews" },
            { icon: <Landmark size={13} className="text-[#D4852A]" />, label: "Heritage", val: "Since 1996 · 29+ Years", hide: "sm" },
            { icon: <Utensils size={13} className="text-[#D4852A]" />, label: "Food", val: "100% Pure Vegetarian", hide: "md" },
            { icon: <MapPin size={13} className="text-[#D4852A]" />, label: "Location", val: "NH-8, Gurugram" },
          ].map((item, i, arr) => (
            <div
              key={item.label}
              className={`flex-1 flex items-center gap-2.5 px-4 sm:px-5 py-2.5 ${i < arr.length - 1 ? "border-r border-[#E5DDD3]" : ""} ${item.hide === "sm" ? "hidden sm:flex" : item.hide === "md" ? "hidden md:flex" : "flex"}`}
            >
              <div className="w-7 h-7 rounded-full bg-[#FFF4E6] flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div className="min-w-0">
                <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-[#170E04]"
                  style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {item.label}
                </p>
                <p className="text-[9px] sm:text-[10px] text-[#9B8E7E] font-medium truncate"
                  style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {item.val}
                </p>
              </div>
            </div>
          ))}

          <button
            onClick={onExplore}
            aria-label="Explore"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full text-white flex items-center justify-center shrink-0 mr-1.5 transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_3px_12px_rgba(212,133,42,0.4)] cursor-pointer"
            style={{ background: "linear-gradient(135deg, #D4852A 0%, #BE6518 100%)" }}
          >
            <Search size={14} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
