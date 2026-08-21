import React from "react";

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
      style={{ height: "100svh", minHeight: 600, background: "#FFFFFF" }}
      id="hero"
    >
      {/* ─── FOUR ARCH PANELS — staggered heights with clean gap below navbar ─── */}
      <div 
        className="absolute inset-0 flex items-center justify-center pt-[98px] pb-4"
        style={{ paddingLeft: "12px", paddingRight: "12px" }}
      >
        <div className="w-full max-w-[1580px] h-[calc(100svh-128px)] flex items-center justify-center gap-[28px]">
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
                    className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/30 to-transparent pointer-events-none" 
                    style={{ height: "45%", top: "auto", bottom: 0 }} 
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ─── DREAMY BOTTOM FOG / BLUR EFFECT ─── */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-44 pointer-events-none z-20"
        style={{
          background: "linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.85) 45%, rgba(255,255,255,0.25) 75%, transparent 100%)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          maskImage: "linear-gradient(to top, black 40%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to top, black 40%, transparent 100%)",
        }}
      />
    </section>
  );
}
