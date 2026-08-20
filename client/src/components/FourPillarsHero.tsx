import React, { useState } from "react";
import { ArrowUpRight, Sparkles, ShieldCheck, Ticket, CalendarDays, Users, BedDouble, Waves } from "lucide-react";

export interface PillarItem {
  id: string;
  category: string;
  title: string;
  tagline: string;
  price: string;
  image: string;
  intent: string;
  badge: string;
  accent: string;
}

const PILLARS: PillarItem[] = [
  {
    id: "water-park",
    category: "Aquatic Paradise",
    title: "Water Park",
    tagline: "21 Thrill Water Slides & Wave Pool",
    price: "From ₹1,299",
    image: "/images/water-park-aapno-ghar.jpg",
    intent: "Water Park Booking",
    badge: "Most Popular",
    accent: "#01A5E1"
  },
  {
    id: "amusement-park",
    category: "Family Thrills",
    title: "Amusement Park",
    tagline: "15+ Joyrides & 24 Adventure Activities",
    price: "From ₹1,299",
    image: "/images/amusement-park-aapno-ghar.jpg",
    intent: "Amusement Park Booking",
    badge: "All-Day Fun",
    accent: "#F68734"
  },
  {
    id: "weddings",
    category: "Royal Venues",
    title: "Weddings & Celebrations",
    tagline: "4 Grand Lawns (Up to 2,500 Guests)",
    price: "Custom Packages",
    image: "/images/img3.jpg",
    intent: "Wedding Enquiry",
    badge: "Destination Events",
    accent: "#EC3337"
  },
  {
    id: "stay",
    category: "Resort Staycation",
    title: "Stay at AapnoGhar",
    tagline: "67 Well-Appointed Rooms & Luxury Suites",
    price: "From ₹4,600/night",
    image: "/images/img4.jpg",
    intent: "Resort Room Booking",
    badge: "Pure Veg Dining",
    accent: "#69B32D"
  }
];

interface FourPillarsHeroProps {
  onBook: (intent: string) => void;
}

export function FourPillarsHero({ onBook }: FourPillarsHeroProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="relative w-full min-h-[90vh] bg-[#0E295B] flex flex-col justify-between pt-28 pb-8 px-4 sm:px-8 overflow-hidden" id="hero-banner">
      {/* Decorative subtle ambient lights */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#01A5E1]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#F68734]/10 blur-3xl pointer-events-none" />

      {/* Hero Headline & Subtitle Banner */}
      <div className="max-w-4xl mx-auto text-center mb-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-extrabold uppercase tracking-widest mb-3 shadow-lg">
          <Sparkles size={13} className="text-[#FFA96B]" />
          <span>Delhi NCR's Premier 9-Acre Heritage Resort</span>
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white font-display tracking-tight leading-tight drop-shadow-md">
          Slide, Rest &amp; Rejoice in Joy
        </h1>
        <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto mt-2 leading-relaxed">
          Choose from thrilling water park slides, carnival joyrides, starlit royal wedding lawns, or relaxing family weekend staycations.
        </p>
      </div>

      {/* 4 Equal-Width Clean Interactive Columns Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto w-full flex-1 relative z-10">
        {PILLARS.map((item) => {
          const isHovered = hoveredId === item.id;

          return (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => onBook(item.intent)}
              className="group relative h-96 sm:h-[420px] lg:h-[460px] rounded-3xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/15 hover:border-white/40 flex flex-col justify-between p-6 transform hover:-translate-y-1.5"
              data-cursor-text="Explore"
            >
              {/* Background Image Layer */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out transform group-hover:scale-110"
                style={{ backgroundImage: `url(${item.image})` }}
              />

              {/* Polished Multi-Stop Dark Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#061A33] via-[#061A33]/40 to-black/30 group-hover:via-[#061A33]/30 transition-all duration-500" />

              {/* Top Tag & Price Badge */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-extrabold uppercase tracking-wider text-white border border-white/20 shadow-md">
                  {item.badge}
                </span>

                <span
                  className="px-3 py-1 rounded-full text-xs font-black text-white shadow-lg backdrop-blur-md"
                  style={{ backgroundColor: item.accent }}
                >
                  {item.price}
                </span>
              </div>

              {/* Bottom Content Card */}
              <div className="relative z-10">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#FFA96B] block mb-1">
                  {item.category}
                </span>

                <h3 className="text-2xl font-black font-display text-white tracking-tight leading-snug mb-1 drop-shadow-md">
                  {item.title}
                </h3>

                <p className="text-white/80 text-xs leading-relaxed mb-4 line-clamp-2">
                  {item.tagline}
                </p>

                {/* Direct Action Button on Card */}
                <div className="flex items-center justify-between pt-3 border-t border-white/15 text-xs font-bold text-white group-hover:text-[#FFA96B] transition-colors">
                  <span>Explore &amp; Book</span>
                  <div className="w-8 h-8 rounded-full bg-white/15 group-hover:bg-[#F68734] text-white flex items-center justify-center transition-all duration-300 transform group-hover:translate-x-1">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating Bottom Quick Trust Bar */}
      <div className="max-w-7xl mx-auto w-full mt-6 flex flex-wrap items-center justify-between gap-4 py-3 px-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-white/90 text-xs font-bold relative z-10">
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <span className="flex items-center gap-1.5 text-[#FFA96B]">
            ⭐ 4.8 / 5 Rating (12,000+ Reviews)
          </span>
          <span className="hidden sm:inline opacity-40">•</span>
          <span>📍 NH-8 Sector-77, Gurugram, Delhi-NCR</span>
          <span className="hidden sm:inline opacity-40">•</span>
          <a href="tel:+917666779997" className="hover:text-[#01A5E1] transition-colors">
            📞 +91 7666 779 997
          </a>
        </div>
        <div className="flex items-center gap-2 text-[#89D9F8]">
          <ShieldCheck size={16} className="text-[#69B32D]" />
          <span>100% Pure Vegetarian Feasts • Secure Family Resort</span>
        </div>
      </div>
    </section>
  );
}
