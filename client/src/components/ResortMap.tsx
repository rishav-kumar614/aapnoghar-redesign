import React, { useState } from "react";
import {
  Waves,
  Ticket,
  HeartHandshake,
  BedDouble,
  Building2,
  Utensils,
  Clock,
  Sparkles,
  ArrowRight,
  Compass,
  MapPin
} from "lucide-react";

interface ResortMapProps {
  onBook: (intent: string) => void;
}

interface MapPinItem {
  id: string;
  name: string;
  category: "water" | "amusement" | "activity" | "stay" | "events" | "dining";
  categoryLabel: string;
  x: number;
  y: number;
  icon: React.ElementType;
  image: string;
  timing: string;
  highlights: string[];
  description: string;
  intent: string;
}

const MAP_PINS: MapPinItem[] = [
  {
    id: "wave-pool",
    name: "Wave Pool & Turbo Slides",
    category: "water",
    categoryLabel: "Water Park",
    x: 24,
    y: 32,
    icon: Waves,
    image: "/images/hero_water_park.jpg",
    timing: "09:30 AM – 07:00 PM",
    highlights: ["Interactive Wave Generator", "21 Turbo Slides", "Family Splash Bay"],
    description: "Delhi-NCR's premier aquatic excitement zone with turbo speed slides, toddler splash lagoon, and rain dance.",
    intent: "Water Park Booking",
  },
  {
    id: "amusement-rides",
    name: "Amusement Carnival Joyrides",
    category: "amusement",
    categoryLabel: "Amusement Park",
    x: 52,
    y: 26,
    icon: Ticket,
    image: "/images/amusement-park-aapno-ghar.jpg",
    timing: "09:30 AM – 05:30 PM",
    highlights: ["Caterpillar Coaster", "Flying Swings", "Break Dance & Monorail"],
    description: "Classic family carnival rides suited for children, teens, and adults looking for joyous thrill rides.",
    intent: "Amusement Park Booking",
  },
  {
    id: "activity-park",
    name: "24 Adventure Obstacles",
    category: "activity",
    categoryLabel: "Activity Park",
    x: 78,
    y: 38,
    icon: HeartHandshake,
    image: "/images/amusement-park-aapno-ghar.jpg",
    timing: "09:30 AM – 06:00 PM",
    highlights: ["High & Low Rope Course", "Zip Line", "Burma Bridge Challenge"],
    description: "Challenging outdoor obstacle courses encouraging fitness, balance, and fun group teamwork.",
    intent: "Activity Park Booking",
  },
  {
    id: "presidential-suites",
    name: "Luxury Resort Suites & Rooms",
    category: "stay",
    categoryLabel: "Resort Stay",
    x: 32,
    y: 72,
    icon: BedDouble,
    image: "/images/deluxe-room-Room.jpg",
    timing: "Check-in: 12:00 PM",
    highlights: ["67 Luxury Suites", "Lawn-Facing Balconies", "24/7 Hospitality"],
    description: "Peaceful 9-acre garden retreat featuring presidential and luxury rooms with lawn-facing balconies.",
    intent: "Room Stay Booking",
  },
  {
    id: "bhanwar-lawn",
    name: "Bhanwar & Chander Grand Lawns",
    category: "events",
    categoryLabel: "Weddings & Events",
    x: 82,
    y: 72,
    icon: Building2,
    image: "/images/bhanwar-party-lawn.jpg",
    timing: "Day & Night Events",
    highlights: ["Up to 2,500 Guests", "AC Banquet Halls", "Royal Mandap Lawn"],
    description: "Sprawling manicured green party lawns paired with luxury indoor banquet halls for royal celebrations.",
    intent: "Wedding Enquiry",
  },
  {
    id: "banyan-dining",
    name: "Central Pure-Veg Buffet",
    category: "dining",
    categoryLabel: "Dining Area",
    x: 56,
    y: 56,
    icon: Utensils,
    image: "/images/img3.jpg",
    timing: "08:30 AM – 10:30 PM",
    highlights: ["100% Pure Vegetarian", "Unlimited Picnic Buffet", "Live Snack Stations"],
    description: "Wholesome, multi-cuisine North and South Indian vegetarian delicacies served all day.",
    intent: "Dining Package",
  },
];

export const ResortMap: React.FC<ResortMapProps> = ({ onBook }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activePin, setActivePin] = useState<MapPinItem>(MAP_PINS[0]);

  const filteredPins = MAP_PINS.filter((pin) =>
    selectedCategory === "all" ? true : pin.category === selectedCategory
  );

  return (
    <div className="w-full max-w-[1400px] mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-[#0E295B]/10 shadow-lg">
      {/* Category Pills Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-[#0E295B]/10">
        <div className="flex flex-wrap items-center gap-2">
          {[
            { id: "all", label: "All Zones", icon: Compass },
            { id: "water", label: "Water Park", icon: Waves },
            { id: "amusement", label: "Joyrides", icon: Ticket },
            { id: "activity", label: "Activity Park", icon: HeartHandshake },
            { id: "stay", label: "Resort Stay", icon: BedDouble },
            { id: "events", label: "Event Lawns", icon: Building2 },
            { id: "dining", label: "Dining", icon: Utensils },
          ].map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-1.5 ${
                  isSelected
                    ? "bg-[#0E295B] text-white shadow-sm"
                    : "bg-[#0E295B]/5 text-[#50657D] hover:text-[#0E295B] hover:bg-[#0E295B]/10"
                }`}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  const firstMatch = MAP_PINS.find((p) => cat.id === "all" || p.category === cat.id);
                  if (firstMatch) setActivePin(firstMatch);
                }}
              >
                <Icon size={14} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        <span className="text-xs font-bold text-[#50657D] hidden md:inline">
          💡 Click any node on the campus map to preview
        </span>
      </div>

      {/* 2-Column Interactive Map Stage (Compact Height) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left: Stylized Campus Interactive Canvas (7 Cols) */}
        <div className="lg:col-span-7 relative h-72 sm:h-96 rounded-2xl bg-[#061A33] overflow-hidden border border-white/10 flex items-center justify-center">
          {/* Subtle Grid Lines & Compass Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:28px_28px]" />
          <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[11px] font-bold text-[#89D9F8] border border-white/15">
            <MapPin size={13} />
            <span>9-Acre Master Campus Plan</span>
          </div>

          {/* Glowing Interactive Pins */}
          {filteredPins.map((pin) => {
            const Icon = pin.icon;
            const isSelected = activePin.id === pin.id;
            return (
              <button
                key={pin.id}
                type="button"
                onClick={() => setActivePin(pin)}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group z-20 flex items-center gap-2 ${
                  isSelected ? "scale-110 z-30" : "hover:scale-105"
                }`}
                style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
                    isSelected
                      ? "bg-[#F68734] text-white ring-4 ring-[#F68734]/40 shadow-[0_0_20px_rgba(246,135,52,0.8)]"
                      : "bg-[#01A5E1] text-white hover:bg-[#F68734]"
                  }`}
                >
                  <Icon size={18} />
                </div>
                <span
                  className={`hidden sm:inline-block px-2.5 py-1 rounded-lg text-[11px] font-bold whitespace-nowrap shadow-md transition-all ${
                    isSelected
                      ? "bg-white text-[#0E295B] font-extrabold shadow-lg"
                      : "bg-black/60 text-white/90 group-hover:bg-black/80"
                  }`}
                >
                  {pin.categoryLabel}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right: Focused Attraction Card (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between p-5 rounded-2xl bg-[#F0F8FC]/60 border border-[#01A5E1]/20">
          <div>
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-4 bg-black/10">
              <img
                src={activePin.image}
                alt={activePin.name}
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-2 left-2 px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-extrabold uppercase tracking-wider text-white border border-white/20">
                {activePin.categoryLabel}
              </span>
            </div>

            <h4 className="text-lg sm:text-xl font-black text-[#0E295B] font-display leading-tight mb-1">
              {activePin.name}
            </h4>

            <div className="flex items-center gap-2 text-xs font-semibold text-[#50657D] mb-3">
              <Clock size={13} className="text-[#F68734]" />
              <span>{activePin.timing}</span>
            </div>

            <p className="text-xs text-[#50657D] leading-relaxed mb-4">
              {activePin.description}
            </p>

            {/* Highlights Grid */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {activePin.highlights.map((item, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-white text-[11px] font-bold text-[#0E295B] border border-[#0E295B]/10 shadow-2xs"
                >
                  ✓ {item}
                </span>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => onBook(activePin.intent)}
            className="w-full py-3 rounded-xl bg-[#0E295B] hover:bg-[#061A33] text-white font-extrabold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <span>Book / Enquire for {activePin.categoryLabel}</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );
};
