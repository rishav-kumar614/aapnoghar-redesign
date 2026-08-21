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
    height: "76%",
    top: "48px",
  },
  {
    id: "amusement",
    label: "Amusement",
    sub: "30+ Joyrides",
    image: "/images/amusement-park-aapno-ghar.jpg",
    intent: "Amusement Park Booking",
    height: "90%",
    top: "0px",
  },
  {
    id: "banquets",
    label: "Banquets",
    sub: "2,500 Capacity",
    image: "/images/bhanwar-party-lawn.jpg",
    intent: "Wedding Enquiry",
    height: "82%",
    top: "32px",
  },
  {
    id: "stay",
    label: "Resort Stay",
    sub: "67 Luxury Rooms",
    image: "/images/deluxe-room-Room.jpg",
    intent: "Room Stay Booking",
    height: "86%",
    top: "16px",
  },
];

export function GodlyResortHero({ onBook, onExplore }: GodlyResortHeroProps) {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#F9F6F1] select-none"
      style={{ height: "100svh", minHeight: 680 }}
      id="hero"
    >

      {/* ── TOP EDITORIAL META ROW ── */}
      <div className="absolute top-[72px] left-0 right-0 z-30 flex items-center justify-between px-8 sm:px-12 lg:px-16 pt-3">
        {/* Left: Issue line */}
        <p
          className="hidden sm:block text-[10px] uppercase tracking-[0.25em] text-[#9B8E7E] font-medium"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Gurugram · Est. 1996
        </p>

        {/* Center: Thin decorative rule with dot */}
        <div className="flex-1 mx-6 sm:mx-10 flex items-center gap-2 opacity-20">
          <div className="flex-1 h-px bg-[#2C2117]" />
          <div className="w-1 h-1 rounded-full bg-[#D4852A]" />
          <div className="flex-1 h-px bg-[#2C2117]" />
        </div>

        {/* Right: Tag */}
        <p
          className="hidden sm:block text-[10px] uppercase tracking-[0.25em] text-[#9B8E7E] font-medium"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Delhi-NCR's Finest
        </p>
      </div>

      {/* ── ARCH PANEL COMPOSITION ── */}
      <div
        className="absolute inset-0 flex items-start justify-center"
        style={{ paddingTop: "108px", paddingLeft: "20px", paddingRight: "20px", paddingBottom: "100px" }}
      >
        <div className="w-full max-w-[1440px] h-full flex items-start justify-center gap-3 sm:gap-4 lg:gap-5">
          {PANELS.map((panel, i) => (
            <div
              key={panel.id}
              className="relative flex-1 group cursor-pointer"
              style={{ height: panel.height, marginTop: panel.top }}
              onClick={() => onBook(panel.intent)}
            >
              {/* Arch container */}
              <div
                className="absolute inset-0 overflow-hidden transition-all duration-700 ease-out group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
                style={{
                  borderRadius: "9999px 9999px 10px 10px",
                  maskImage: "linear-gradient(to bottom, black 0%, black 55%, rgba(0,0,0,0.6) 78%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 55%, rgba(0,0,0,0.6) 78%, transparent 100%)",
                }}
              >
                {/* Photo */}
                <img
                  src={panel.image}
                  alt={panel.label}
                  className="absolute inset-0 w-full h-full object-cover scale-[1.04] transition-transform duration-700 ease-out group-hover:scale-[1.09]"
                  style={{ filter: "saturate(0.88) brightness(0.97)" }}
                />

                {/* Inner bottom label — visible on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 px-3 pb-4 pt-10 flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(to top, rgba(10,15,28,0.72) 0%, transparent 100%)",
                  }}
                >
                  <span
                    className="text-white text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] leading-none"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {panel.label}
                  </span>
                  <span
                    className="text-white/60 text-[9px] sm:text-[10px] mt-0.5 uppercase tracking-wider"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {panel.sub}
                  </span>
                </div>
              </div>

              {/* Panel index number — editorial style */}
              <div
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[#C4B49A] text-[9px] tracking-[0.3em] font-medium select-none"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                0{i + 1}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CENTRAL EDITORIAL TYPOGRAPHY ── */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none text-center px-4"
        style={{ paddingBottom: "80px" }}
      >
        {/* Overline caption */}
        <div className="flex items-center gap-3 mb-4 sm:mb-5">
          <div className="w-6 h-px bg-[#D4852A]" />
          <span
            className="text-[#D4852A] text-[9px] sm:text-[10px] uppercase tracking-[0.35em] font-semibold"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Aapno Ghar Resort
          </span>
          <div className="w-6 h-px bg-[#D4852A]" />
        </div>

        {/* Main headline — one line, magazine serif */}
        <h1
          className="whitespace-nowrap leading-[0.88] select-none"
          style={{
            fontFamily: "'Bodoni Moda', 'Playfair Display', Georgia, serif",
            fontSize: "clamp(30px, 6.4vw, 108px)",
            fontWeight: 700,
            letterSpacing: "0.08em",
            color: "#1A0E05",
          }}
        >
          The City of Joy
        </h1>

        {/* Decorative amber dot row */}
        <div className="flex items-center gap-2 my-2.5 sm:my-3.5">
          <div className="w-10 sm:w-16 h-px bg-[#1A0E05]/15" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#D4852A]" />
          <div className="w-10 sm:w-16 h-px bg-[#1A0E05]/15" />
        </div>

        {/* Subtitle — italic serif, warm tone */}
        <p
          className="leading-none"
          style={{
            fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
            fontSize: "clamp(18px, 2.8vw, 44px)",
            fontStyle: "italic",
            fontWeight: 500,
            color: "#6B4F2E",
            letterSpacing: "0.01em",
          }}
        >
          made for celebration.
        </p>

        {/* CTA Row */}
        <div className="flex items-center gap-3 mt-5 sm:mt-6 pointer-events-auto">
          <button
            onClick={onExplore}
            className="flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-white text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_6px_24px_rgba(212,133,42,0.4)] hover:shadow-[0_8px_32px_rgba(212,133,42,0.55)]"
            style={{
              fontFamily: "'Poppins', sans-serif",
              background: "linear-gradient(135deg, #D4852A 0%, #C0691A 100%)",
            }}
          >
            Explore Resort
            <ArrowRight size={13} strokeWidth={2.5} />
          </button>
          <button
            onClick={() => onBook("Day Pass")}
            className="flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-[#2C1A06] text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] border border-[#2C1A06]/20 hover:border-[#D4852A]/60 hover:text-[#D4852A] transition-all duration-300 bg-white/60 backdrop-blur-sm"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Book Day Pass
          </button>
        </div>
      </div>

      {/* ── BOTTOM AMBIENT FADE ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-44 pointer-events-none z-10"
        style={{
          background: "linear-gradient(to top, #F9F6F1 0%, rgba(249,246,241,0.85) 50%, transparent 100%)",
        }}
      />

      {/* ── FLOATING EDITORIAL INFO BAR ── */}
      <div className="absolute bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 w-[90%] max-w-[1100px]">
        <div
          className="w-full flex items-center rounded-full border border-[#E2D9CE] shadow-[0_8px_40px_rgba(44,26,6,0.08)]"
          style={{
            background: "rgba(255,255,255,0.94)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          {/* Rating */}
          <div className="flex-1 flex items-center gap-2.5 sm:gap-3 px-4 sm:px-6 py-3 border-r border-[#E2D9CE]">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FFF4E6] flex items-center justify-center shrink-0">
              <Star size={13} className="fill-[#D4852A] text-[#D4852A]" />
            </div>
            <div>
              <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A0E05]"
                style={{ fontFamily: "'Poppins', sans-serif" }}>Rating</p>
              <p className="text-[10px] sm:text-[11px] text-[#9B8E7E] font-medium"
                style={{ fontFamily: "'Poppins', sans-serif" }}>4.8 / 5 · 12k+ Reviews</p>
            </div>
          </div>

          {/* Heritage */}
          <div className="flex-1 hidden sm:flex items-center gap-2.5 sm:gap-3 px-4 sm:px-6 py-3 border-r border-[#E2D9CE]">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FFF4E6] flex items-center justify-center shrink-0">
              <Landmark size={13} className="text-[#D4852A]" />
            </div>
            <div>
              <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A0E05]"
                style={{ fontFamily: "'Poppins', sans-serif" }}>Heritage</p>
              <p className="text-[10px] sm:text-[11px] text-[#9B8E7E] font-medium"
                style={{ fontFamily: "'Poppins', sans-serif" }}>Since 1996 · 29+ Years</p>
            </div>
          </div>

          {/* Food */}
          <div className="flex-1 hidden md:flex items-center gap-2.5 sm:gap-3 px-4 sm:px-6 py-3 border-r border-[#E2D9CE]">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FFF4E6] flex items-center justify-center shrink-0">
              <Utensils size={13} className="text-[#D4852A]" />
            </div>
            <div>
              <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A0E05]"
                style={{ fontFamily: "'Poppins', sans-serif" }}>Food</p>
              <p className="text-[10px] sm:text-[11px] text-[#9B8E7E] font-medium"
                style={{ fontFamily: "'Poppins', sans-serif" }}>100% Pure Vegetarian</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex-1 flex items-center gap-2.5 sm:gap-3 px-4 sm:px-6 py-3">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FFF4E6] flex items-center justify-center shrink-0">
              <MapPin size={13} className="text-[#D4852A]" />
            </div>
            <div>
              <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A0E05]"
                style={{ fontFamily: "'Poppins', sans-serif" }}>Location</p>
              <p className="text-[10px] sm:text-[11px] text-[#9B8E7E] font-medium"
                style={{ fontFamily: "'Poppins', sans-serif" }}>NH-8, Gurugram</p>
            </div>
          </div>

          {/* Search pill */}
          <button
            onClick={onExplore}
            aria-label="Explore"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full text-white flex items-center justify-center shrink-0 mr-1.5 transition-transform duration-300 hover:scale-105 active:scale-95 shadow-[0_4px_16px_rgba(212,133,42,0.4)] cursor-pointer"
            style={{ background: "linear-gradient(135deg, #D4852A 0%, #C0691A 100%)" }}
          >
            <Search size={15} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
