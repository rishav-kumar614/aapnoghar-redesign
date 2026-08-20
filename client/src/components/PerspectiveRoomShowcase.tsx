import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Compass, ArrowUpRight, BedDouble, Check } from "lucide-react";

export interface PerspectiveRoom {
  id: string;
  name: string;
  badge: string;
  rate: string;
  detail: string;
  amenities: string[];
  leftImage: string;
  centerImage: string;
  rightImage: string;
  tourUrl: string;
}

const ROOM_TIERS: PerspectiveRoom[] = [
  {
    id: "presidential",
    name: "Luxury Presidential Suite for Staycation & Daycation in Gurgaon",
    badge: "Most Luxurious",
    rate: "Premium Luxury",
    detail: "Expansive master bedroom, royal living lounge, private lawn sit-out, and premium bathtub bathroom.",
    amenities: ["King Size Bed", "Living Room", "Bathtub", "Lawn View Balcony", "Free Wi-Fi"],
    leftImage: "/images/presidential-suite-room-1-room-home-left.jpg",
    centerImage: "/images/presidential-suite-room-1-Room.jpg",
    rightImage: "/images/presidential-suite-room-1-room-home-right.jpg",
    tourUrl: "https://www.aapnoghar.com/aapno360/presidential-suite.html"
  },
  {
    id: "suite",
    name: "Suite Room",
    badge: "Heritage Comfort",
    rate: "₹7,200 / night",
    detail: "Spacious suite with garden balconies, rich wood furnishings, dining space, and premium hospitality.",
    amenities: ["King Size Bed", "Balcony View", "Dining Area", "24/7 Room Service"],
    leftImage: "/images/suite-room-room-home-left.jpg",
    centerImage: "/images/suite-room-Room.jpg",
    rightImage: "/images/suite-room-room-home-right.jpg",
    tourUrl: "https://www.aapnoghar.com/stay"
  },
  {
    id: "luxury",
    name: "Luxury Room with Shower Glass Partition",
    badge: "Family Favorite",
    rate: "₹6,000 / night",
    detail: "Modern aesthetics featuring glass partition shower bathrooms, plush bedding, and garden serenity.",
    amenities: ["Glass Partition Shower", "Queen Bed", "Work Desk", "LED TV"],
    leftImage: "/images/luxury-room-1-room-home-left.jpg",
    centerImage: "/images/luxury-room-Room.jpg",
    rightImage: "/images/luxury-room-1-room-home-right.jpg",
    tourUrl: "https://www.aapnoghar.com/stay"
  },
  {
    id: "deluxe",
    name: "Deluxe Room",
    badge: "Cozy Retreat",
    rate: "₹4,600 / night",
    detail: "Elegantly furnished rooms overlooking the lawns, ideal for weekend stopovers and day retreats.",
    amenities: ["Comfort Bed", "Attached Bath", "Tea/Coffee Maker", "Room Service"],
    leftImage: "/images/deluxe-room-room-home-left.jpg",
    centerImage: "/images/deluxe-room-Room.jpg",
    rightImage: "/images/deluxe-room-room-home-right.jpg",
    tourUrl: "https://www.aapnoghar.com/stay"
  }
];

interface PerspectiveRoomShowcaseProps {
  onBook: (intent: string) => void;
}

export function PerspectiveRoomShowcase({ onBook }: PerspectiveRoomShowcaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + ROOM_TIERS.length) % ROOM_TIERS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % ROOM_TIERS.length);
  };

  const activeRoom = ROOM_TIERS[currentIndex];

  return (
    <section className="room-perspective-section py-20 bg-[#FFFDF9] relative overflow-hidden" id="stay-accommodation">
      <div className="content-wrap relative z-10 opacity-100">
        {/* Section Header with 360 Badge */}
        <div className="relative flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div className="text-center md:text-left">
            <span className="text-xl sm:text-2xl font-black text-[#EC3337] tracking-tight uppercase font-display block mb-1">
              Accommodation
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0E295B] font-display tracking-tight leading-tight">
              stay and play your way
            </h2>
            <p className="text-[#50657D] text-sm sm:text-base mt-2 max-w-xl">
              The heart of the action or a secluded tropical sanctuary? Your choice of resort accommodation awaits.
            </p>
          </div>

          {/* Floating 360° Virtual Tour Badge */}
          <a
            href={activeRoom.tourUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white border-2 border-[#D4AF37] shadow-xl hover:shadow-2xl flex flex-col items-center justify-center text-center p-2 group hover:scale-105 transition-all duration-300 shrink-0"
          >
            <Compass size={20} className="text-[#D4AF37] group-hover:rotate-45 transition-transform duration-500 mb-0.5" />
            <span className="text-sm font-black text-[#0E295B] group-hover:text-[#EC3337] transition-colors leading-none">
              360°
            </span>
            <span className="text-[9px] font-bold text-[#50657D] uppercase tracking-tighter mt-0.5">
              Virtual Tour
            </span>
          </a>
        </div>

        {/* 3D 3-Perspective Stage */}
        <div className="relative flex items-center justify-center max-w-5xl mx-auto mb-10">
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute -left-3 sm:-left-6 z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/95 shadow-2xl border border-[#0E295B]/10 text-[#0E295B] hover:text-[#EC3337] hover:scale-110 active:scale-95 flex items-center justify-center transition-all duration-300 cursor-pointer"
            aria-label="Previous Room"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            className="absolute -right-3 sm:-right-6 z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/95 shadow-2xl border border-[#0E295B]/10 text-[#0E295B] hover:text-[#EC3337] hover:scale-110 active:scale-95 flex items-center justify-center transition-all duration-300 cursor-pointer"
            aria-label="Next Room"
          >
            <ChevronRight size={28} />
          </button>

          {/* 3-Perspective Smooth Layered Stage (Zero-Blink, Zero Unmount) */}
          <div className="w-full flex items-center justify-center gap-0 overflow-hidden [perspective:1000px]">
            {/* Left Angled Image (Bathroom / Amenities) */}
            <div className="hidden sm:block w-1/4 h-64 sm:h-80 md:h-96 rounded-l-3xl overflow-hidden shadow-xl transform origin-right [transform:rotateY(30deg)_scale(0.9)] -mr-4 z-10 border-2 border-white/60 bg-black/5 relative">
              {ROOM_TIERS.map((room, idx) => (
                <div
                  key={`left-${room.id}`}
                  className={`absolute inset-0 transition-all duration-600 ease-out ${
                    idx === currentIndex
                      ? "opacity-85 scale-100 z-10 pointer-events-auto"
                      : "opacity-0 scale-95 z-0 pointer-events-none"
                  }`}
                >
                  <img
                    src={room.leftImage}
                    alt={`${room.name} bathroom interior`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Center Main Image (Bedroom) */}
            <div className="w-full sm:w-1/2 h-72 sm:h-96 md:h-[420px] rounded-3xl overflow-hidden shadow-2xl z-20 relative border-4 border-white transform bg-black/10">
              {ROOM_TIERS.map((room, idx) => (
                <div
                  key={`center-${room.id}`}
                  className={`absolute inset-0 transition-all duration-600 ease-out ${
                    idx === currentIndex
                      ? "opacity-100 scale-100 z-10 pointer-events-auto"
                      : "opacity-0 scale-95 z-0 pointer-events-none"
                  }`}
                >
                  <img
                    src={room.centerImage}
                    alt={room.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E295B]/90 via-transparent to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                    <span className="px-3 py-1 rounded-full bg-[#EC3337] text-white text-[11px] font-extrabold uppercase tracking-wider self-start mb-2 shadow-md">
                      {room.badge}
                    </span>
                    <h3 className="text-lg sm:text-2xl font-black font-display tracking-tight text-white drop-shadow-md">
                      {room.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Angled Image (Balcony / Sitting) */}
            <div className="hidden sm:block w-1/4 h-64 sm:h-80 md:h-96 rounded-r-3xl overflow-hidden shadow-xl transform origin-left [transform:rotateY(-30deg)_scale(0.9)] -ml-4 z-10 border-2 border-white/60 bg-black/5 relative">
              {ROOM_TIERS.map((room, idx) => (
                <div
                  key={`right-${room.id}`}
                  className={`absolute inset-0 transition-all duration-600 ease-out ${
                    idx === currentIndex
                      ? "opacity-85 scale-100 z-10 pointer-events-auto"
                      : "opacity-0 scale-95 z-0 pointer-events-none"
                  }`}
                >
                  <img
                    src={room.rightImage}
                    alt={`${room.name} living and balcony`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Room Details with Layered Smooth Crossfade (Zero Blink) */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-[#0E295B]/10 relative min-h-[160px]">
          {ROOM_TIERS.map((room, idx) => (
            <div
              key={`details-${room.id}`}
              className={`transition-all duration-500 ease-out ${
                idx === currentIndex
                  ? "opacity-100 translate-y-0 relative z-10"
                  : "opacity-0 translate-y-2 absolute inset-6 sm:inset-8 pointer-events-none z-0"
              }`}
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-2">
                    <h4 className="text-xl font-extrabold text-[#0E295B] font-display">{room.name}</h4>
                    <span className="text-sm font-bold text-[#01A5E1] bg-[#F0F8FC] px-3 py-0.5 rounded-full border border-[#01A5E1]/20">
                      {room.rate}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#50657D] leading-relaxed mb-4">
                    {room.detail}
                  </p>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                    {room.amenities.map((a) => (
                      <span key={a} className="px-2.5 py-1 rounded-lg bg-[#FCF3E9] text-[11px] font-bold text-[#0E295B] flex items-center gap-1">
                        <Check size={12} className="text-[#69B32D]" /> {a}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0 w-full sm:w-auto">
                  <button
                    type="button"
                    className="button button--coral whitespace-nowrap"
                    onClick={() => onBook(`${room.name} booking`)}
                  >
                    <BedDouble size={18} /> Book This Suite
                  </button>
                  <a
                    href={room.tourUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button--navy whitespace-nowrap text-xs text-center"
                  >
                    View 360° Room Tour <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Room Pagination Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {ROOM_TIERS.map((r, idx) => (
            <button
              key={r.id}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex ? "w-8 bg-[#EC3337]" : "w-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to ${r.name}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
