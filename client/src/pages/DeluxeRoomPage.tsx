import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import { SiteFooter } from "@/components/SiteFooter";
import {
  Compass,
  BedDouble,
  Users,
  Maximize2,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Wifi,
  Bath,
  Utensils,
  ChevronRight,
  Home,
  Star,
  Clock,
  Armchair,
  Sun,
  Tv,
  Wind
} from "lucide-react";
import { BookingModal } from "@/components/BookingModal";
import { SiteHeader } from "@/components/SiteHeader";

const GALLERY_IMAGES = [
  {
    src: "/images/deluxe-room-Room.jpg",
    title: "Deluxe King Bedroom",
    caption: "200 sq. ft. comfortably appointed bedroom overlooking lush green lawns"
  },
  {
    src: "/images/deluxe-room-room-home-left.jpg",
    title: "Sitting Area & Side Table",
    caption: "Cozy relaxation chairs with tea table and warm ambient lighting"
  },
  {
    src: "/images/deluxe-room-room-home-right.jpg",
    title: "Garden Window & Natural Light",
    caption: "Large window providing panoramic garden views and morning sunshine"
  },
  {
    src: "/images/room_deluxe.jpg",
    title: "Warm Room Interior",
    caption: "Elegantly finished wooden furnishings, soft bedding, and individual climate control"
  }
];

const PACKAGES = [
  {
    id: "cp",
    name: "Room with Breakfast",
    rate: "₹4,600",
    desc: "Includes 1 Night Stay + 100% Pure Veg Buffet Breakfast for 2 adults",
    badge: "Best Value"
  },
  {
    id: "map",
    name: "Room + Breakfast & Lunch/Dinner",
    rate: "₹7,100",
    desc: "Includes 1 Night Stay + Breakfast + Choice of Royal Lunch or Dinner Buffet",
    badge: "Half Board"
  },
  {
    id: "ap",
    name: "Room with All 3 Meals",
    rate: "₹9,900",
    desc: "Includes Breakfast + Lunch + Dinner + Morning Lawn Tea & Munchies",
    badge: "Full Board"
  },
  {
    id: "stay_play",
    name: "Stay & Play All-Inclusive",
    rate: "₹12,900",
    desc: "All 3 Meals + Unlimited Amusement & Water Park Passes Included",
    badge: "Complete Daycation"
  }
];

const OTHER_ROOMS = [
  {
    id: "presidential",
    name: "Luxury Presidential Suite",
    rate: "Premium Luxury",
    size: "800 Sq. Ft.",
    image: "/images/presidential_suite.jpg",
    link: "/presidential-suite-room-1",
    desc: "Royal suite with private living room lounge, dining, safe, and lawn balcony."
  },
  {
    id: "suite",
    name: "Suite Room",
    rate: "₹7,200 / night",
    size: "400 Sq. Ft.",
    image: "/images/suite-room-Room.jpg",
    link: "/suite-room",
    desc: "Spacious suite with king bed, sofa, dining table, and bathtub bathroom overlooking lawns."
  },
  {
    id: "luxury",
    name: "Luxury Room",
    rate: "₹6,000 / night",
    size: "300 Sq. Ft.",
    image: "/images/luxury-room-Room.jpg",
    link: "/luxury-room",
    desc: "Warm earthy tones with king bed, separate chair seating, and garden sit-out."
  }
];

export default function DeluxeRoomPage() {
  const [, setLocation] = useLocation();
  const [selectedGalleryIdx, setSelectedGalleryIdx] = useState(0);
  const [selectedPackage, setSelectedPackage] = useState(PACKAGES[0]);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingIntent, setBookingIntent] = useState("Deluxe Room Booking (₹4,600/night)");

  const openBooking = (intent = "Deluxe Room Booking") => {
    setBookingIntent(intent);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#0E295B] font-sans">
      <SiteHeader onOpenBooking={(pkg) => openBooking(pkg)} />

      {/* Breadcrumb */}
      <div className="pt-28 pb-4 bg-[#061A33] text-white/70 border-b border-white/10">
        <div className="max-w-[1560px] mx-auto px-6 sm:px-12 flex items-center gap-2 text-xs font-semibold">
          <Link href="/" className="hover:text-white flex items-center gap-1">
            <Home size={13} /><span>Home</span>
          </Link>
          <ChevronRight size={13} className="opacity-40" />
          <Link href="/#stay-accommodation" className="hover:text-white">Resort Accommodation</Link>
          <ChevronRight size={13} className="opacity-40" />
          <span className="text-[#FFA96B] font-bold">Deluxe Room</span>
        </div>
      </div>

      {/* =========== HERO =========== */}
      <section className="relative bg-[#061A33] text-white pb-20 pt-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#01A5E1]/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-[#F68734]/10 blur-3xl pointer-events-none" />

        <div className="max-w-[1560px] mx-auto px-6 sm:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Left — Titles */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#F68734]/20 via-[#01A5E1]/20 to-transparent border border-[#FFA96B]/35 text-[#FFA96B] text-xs font-black uppercase tracking-widest self-start backdrop-blur-md shadow-[0_0_20px_rgba(246,135,52,0.15)]">
                <span className="w-2 h-2 rounded-full bg-[#FFA96B] animate-pulse" />
                <span>🌿 200 SQ. FT. DELUXE ROOM &bull; STARTING ₹4,600/NIGHT</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[50px] font-black text-white font-display tracking-tight leading-[1.12]">
                Deluxe Room in Gurgaon — <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFA96B] via-[#FFE2B3] to-[#89D9F8]">Spectacular Lawn Views</span> &amp; Modern Comfort
              </h1>

              <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl font-normal border-l-2 border-[#01A5E1]/50 pl-4 py-0.5">
                The Deluxe rooms offer a spectacular view of lush green lawns, elegantly appointed furnishings, individual climate control, color satellite television, a well-stocked mini-refrigerator, and attached modern bathroom.
              </p>

              {/* Spec Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {[
                  { label: "Room Size", value: "200 Sq. Ft.", color: "#89D9F8", Icon: Maximize2 },
                  { label: "Bed Type", value: "King Bed", color: "#FFA96B", Icon: BedDouble },
                  { label: "Occupancy", value: "2 Adults", color: "#89D9F8", Icon: Users },
                  { label: "View", value: "Lawn Greens", color: "#69B32D", Icon: Sun },
                ].map(({ label, value, color, Icon }) => (
                  <div key={label} className="p-3.5 rounded-2xl bg-white/[0.05] border border-white/[0.12] backdrop-blur-md flex flex-col justify-between hover:bg-white/[0.09] transition-all group">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color }}>{label}</span>
                      <Icon size={13} className="opacity-70 group-hover:scale-110 transition-transform" style={{ color }} />
                    </div>
                    <span className="text-sm sm:text-base font-black text-white">{value}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <button
                  type="button"
                  onClick={() => openBooking(`Deluxe Room - ${selectedPackage.name} (${selectedPackage.rate})`)}
                  className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#F68734] to-[#EC3337] hover:from-[#EC3337] hover:to-[#D84A22] text-white font-black text-sm shadow-[0_10px_25px_rgba(246,135,52,0.4)] hover:shadow-[0_12px_35px_rgba(246,135,52,0.65)] transition-all flex items-center gap-2 cursor-pointer"
                >
                  <BedDouble size={17} />
                  <span>Book at {selectedPackage.rate}/night</span>
                  <ArrowRight size={17} />
                </button>
                <a
                  href="https://www.aapnoghar.com/aapno360/deluxe-room.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-2xl bg-white/[0.08] hover:bg-white/[0.15] border border-white/20 hover:border-white/35 text-white font-bold text-xs sm:text-sm flex items-center gap-2.5 transition-all shadow-md backdrop-blur-md"
                >
                  <Compass size={17} className="text-[#D4AF37]" />
                  <span>Launch 360° Virtual Tour</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-5 text-xs font-semibold text-white/60 pt-1">
                <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-[#69B32D]" /> 100% Pure Veg Resort</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-[#69B32D]" /> Free Buffet Breakfast</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-[#69B32D]" /> 4-Device Wi-Fi</span>
              </div>
            </div>

            {/* Right — Gallery */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 aspect-[4/3] bg-black/40 group">
                <img
                  src={GALLERY_IMAGES[selectedGalleryIdx].src}
                  alt={GALLERY_IMAGES[selectedGalleryIdx].title}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/images/room_deluxe.jpg";
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                  <span className="text-xs font-bold text-[#FFA96B] uppercase tracking-wider">{GALLERY_IMAGES[selectedGalleryIdx].title}</span>
                  <p className="text-xs text-white/80 mt-0.5">{GALLERY_IMAGES[selectedGalleryIdx].caption}</p>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-2.5 mt-3">
                {GALLERY_IMAGES.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedGalleryIdx(idx)}
                    className={`rounded-xl overflow-hidden aspect-video border-2 transition-all cursor-pointer ${
                      selectedGalleryIdx === idx ? "border-[#F68734] scale-102 shadow-lg" : "border-white/20 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img.src}
                      alt={img.title}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/images/room_deluxe.jpg";
                      }}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========== PACKAGES =========== */}
      <section className="py-16 bg-[#FDFCF9] border-b border-[#0E295B]/10">
        <div className="max-w-[1560px] mx-auto px-6 sm:px-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="eyebrow eyebrow--coral text-xs font-black uppercase tracking-wider">Flexible Stay Packages</span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0E295B] font-display mt-1">Choose Your Deluxe Room Package</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PACKAGES.map((pkg) => {
              const isSelected = selectedPackage.id === pkg.id;
              return (
                <div
                  key={pkg.id}
                  onClick={() => setSelectedPackage(pkg)}
                  className={`p-6 rounded-3xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "bg-[#061A33] text-white border-[#F68734] shadow-2xl scale-102"
                      : "bg-white text-[#0E295B] border-[#0E295B]/10 hover:border-[#01A5E1]/40 shadow-md hover:-translate-y-1"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${isSelected ? "bg-[#F68734] text-white" : "bg-[#01A5E1]/10 text-[#01A5E1]"}`}>
                        {pkg.badge}
                      </span>
                      {isSelected && <CheckCircle2 size={18} className="text-[#F68734]" />}
                    </div>
                    <h3 className={`text-base font-black font-display mb-1 ${isSelected ? "text-white" : "text-[#0E295B]"}`}>{pkg.name}</h3>
                    <div className="text-2xl font-black font-display my-2 text-[#FFA96B]">{pkg.rate} <span className="text-xs font-bold opacity-75">/ night</span></div>
                    <p className={`text-xs leading-relaxed mb-6 ${isSelected ? "text-white/80" : "text-[#50657D]"}`}>{pkg.desc}</p>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); setSelectedPackage(pkg); openBooking(`Deluxe Room - ${pkg.name} (${pkg.rate})`); }}
                    className={`w-full py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 ${
                      isSelected ? "bg-[#F68734] hover:bg-[#D84A22] text-white shadow-md" : "bg-[#0E295B] hover:bg-[#01A5E1] text-white"
                    }`}
                  >
                    <span>Select Package</span><ArrowRight size={14} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========== DETAILS + AMENITIES + BOOKING =========== */}
      <section className="py-20 bg-white border-b border-[#0E295B]/10">
        <div className="max-w-[1560px] mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left — 8 cols */}
            <div className="lg:col-span-8 space-y-10">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F68734]/10 border border-[#F68734]/25 text-[#F68734] text-xs font-black uppercase tracking-wider mb-3">
                  <Sparkles size={14} /><span>Garden Serenity &bull; 200 Sq. Ft.</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black text-[#0E295B] font-display tracking-tight leading-tight">
                  Elegantly appointed rooms overlooking manicured resort gardens.
                </h2>
              </div>

              {/* Feature highlight cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="p-6 rounded-3xl bg-[#FDFCF9] border border-[#0E295B]/10 hover:border-[#F68734]/30 hover:shadow-md transition-all flex flex-col justify-between group">
                  <div className="w-12 h-12 rounded-2xl bg-[#F68734]/10 text-[#F68734] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Sun size={24} />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-[#0E295B] font-display mb-2">Spectacular Lush Lawn Views</h3>
                    <p className="text-xs sm:text-sm text-[#50657D] leading-relaxed">
                      Enjoy direct views of the resort’s 9-acre manicured green grounds from your private window, bringing quiet nature and fresh morning sunshine right to your room.
                    </p>
                  </div>
                </div>
                <div className="p-6 rounded-3xl bg-[#FDFCF9] border border-[#0E295B]/10 hover:border-[#01A5E1]/30 hover:shadow-md transition-all flex flex-col justify-between group">
                  <div className="w-12 h-12 rounded-2xl bg-[#01A5E1]/10 text-[#01A5E1] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Armchair size={24} />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-[#0E295B] font-display mb-2">Elegantly Appointed Comfort</h3>
                    <p className="text-xs sm:text-sm text-[#50657D] leading-relaxed">
                      Furnished with a comfortable king bed, cozy relaxation chairs with tea table, individual climate control AC, satellite color TV, and a mini-refrigerator.
                    </p>
                  </div>
                </div>
              </div>

              {/* 4-Pillar Amenities */}
              <div>
                <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#0E295B]/10">
                  <h3 className="text-xl font-black text-[#0E295B] font-display flex items-center gap-2.5">
                    <Star size={20} className="text-[#F68734]" /><span>Complete Deluxe Amenities</span>
                  </h3>
                  <span className="text-xs font-bold text-[#50657D] uppercase tracking-wider">20 Resort Features</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    {
                      title: "Bedroom & Living", color: "#F68734", Icon: BedDouble,
                      items: [
                        "King Size Bed with Clean Linen",
                        "Cozy Relaxation Chairs & Tea Table",
                        "Wardrobe with Hanging Space",
                        "Individual Climate Control AC",
                        "Bedside Nightstands & Lights"
                      ]
                    },
                    {
                      title: "Bath & Wellness", color: "#01A5E1", Icon: Bath,
                      items: [
                        "Attached Private Bathroom",
                        "24-Hr Hot & Cold Running Water",
                        "Complimentary Toiletries Kit",
                        "Hair Dryer & Iron (On Request)",
                        "Fresh Cotton Bath Towels"
                      ]
                    },
                    {
                      title: "Dining & Hospitality", color: "#EC3337", Icon: Utensils,
                      items: [
                        "Complimentary Buffet Breakfast",
                        "Morning Lawn Tea & Cookies",
                        "Mini Refrigerator in Room",
                        "Dedicated 24-Hour Room Service",
                        "Daily Newspaper (On Request)"
                      ]
                    },
                    {
                      title: "Tech, Security & Comfort", color: "#69B32D", Icon: Wifi,
                      items: [
                        "High-Speed Wi-Fi (Up to 4 Devices)",
                        "Color LED TV with Satellite Channels",
                        "In-Room Digital Safe Locker",
                        "Intercom Service Dial",
                        "Wheelchair Accessible Ground Rooms"
                      ]
                    }
                  ].map(({ title, color, Icon, items }) => (
                    <div key={title} className="p-5 rounded-3xl bg-[#FDFCF9] border border-[#0E295B]/10 hover:shadow-sm transition-all" style={{ borderColor: `${color}20` }}>
                      <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#0E295B]/5">
                        <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${color}20`, color }}>
                          <Icon size={18} />
                        </div>
                        <h4 className="font-extrabold text-sm text-[#0E295B]">{title}</h4>
                      </div>
                      <ul className="space-y-2 text-xs font-semibold text-[#50657D]">
                        {items.map((item) => (
                          <li key={item} className="flex items-center gap-2">
                            <CheckCircle2 size={13} className="shrink-0" style={{ color }} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Privileges Box */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-[#FCF3E9] to-[#FFFDF9] border border-[#F68734]/30">
                <h4 className="text-base font-black text-[#0E295B] mb-4 flex items-center gap-2">
                  <Sparkles size={18} className="text-[#F68734]" />
                  <span>Complimentary Resort Privileges Included</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-bold text-[#50657D]">
                  {[
                    "Free Open Gym & Badminton Court Access",
                    "Morning Tea & Cookie Stall on Resort Lawns",
                    "100% Pure Vegetarian Buffet Breakfast",
                    "Discounts on Water & Amusement Park Passes"
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/70 border border-[#F68734]/15">
                      <CheckCircle2 size={16} className="text-[#69B32D] shrink-0" />{item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Sticky Booking Card (4 cols) */}
            <div className="lg:col-span-4 bg-[#061A33] text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20 sticky top-28">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/15">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#89D9F8]">Selected Tariff</span>
                  <div className="text-2xl font-black text-[#FFA96B] font-display">{selectedPackage.rate} <span className="text-xs font-normal text-white/70">/ night</span></div>
                </div>
                <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-white border border-white/15">{selectedPackage.badge}</span>
              </div>

              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 mb-5 text-xs text-white/80">
                <span className="font-bold text-[#FFA96B] block mb-1">{selectedPackage.name}</span>
                <span>{selectedPackage.desc}</span>
              </div>

              <div className="space-y-3 mb-6 text-xs text-white/80">
                {[
                  { label: "Check-in", value: "12:00 PM (Noon)", color: "#FFA96B" },
                  { label: "Check-out", value: "10:30 AM", color: "#89D9F8" },
                  { label: "Meals", value: "100% Pure Veg", color: "#69B32D" },
                ].map(({ label, value, color }) => (
                  <div key={label} className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5"><Clock size={13} style={{ color }} />{label}:</span>
                    <span className="font-bold text-white">{value}</span>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => openBooking(`Deluxe Room - ${selectedPackage.name} (${selectedPackage.rate})`)}
                className="w-full py-4 rounded-2xl bg-[#F68734] hover:bg-[#D84A22] text-white font-black text-sm shadow-xl hover:shadow-[0_0_30px_rgba(246,135,52,0.7)] transition-all flex items-center justify-center gap-2 mb-3 cursor-pointer"
              >
                <span>Reserve Deluxe Room</span><ArrowRight size={16} />
              </button>

              <a
                href={`https://wa.me/917666779997?text=${encodeURIComponent(`Hi AapnoGhar, I want to book Deluxe Room (${selectedPackage.name} - ${selectedPackage.rate}).`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-extrabold text-xs flex items-center justify-center gap-2 transition-all shadow-md mb-4"
              >
                <span>Chat with Reservation Desk</span>
              </a>

              <p className="text-[11px] text-white/50 text-center flex items-center justify-center gap-1.5">
                <ShieldCheck size={13} className="text-[#69B32D]" />
                <span>Zero convenience fee &bull; Direct resort confirmation</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========== OTHER ROOMS =========== */}
      <section className="py-20 bg-[#FDFCF9] border-b border-[#0E295B]/10">
        <div className="max-w-[1560px] mx-auto px-6 sm:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow eyebrow--teal text-xs font-black uppercase tracking-wider">Other Accommodations</span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0E295B] font-display mt-1">Explore More Resort Rooms</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {OTHER_ROOMS.map((rm) => (
              <div key={rm.id} className="bg-white rounded-3xl overflow-hidden border border-[#0E295B]/10 shadow-lg flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-300">
                <div className="relative aspect-[16/10] overflow-hidden bg-black/10">
                  <img src={rm.image} alt={rm.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#0E295B]/85 backdrop-blur-md text-white text-xs font-extrabold">{rm.rate}</span>
                </div>
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-[10px] font-bold uppercase text-[#01A5E1] tracking-wider">{rm.size}</span>
                    <h3 className="text-lg font-black text-[#0E295B] font-display mt-0.5 mb-2">{rm.name}</h3>
                    <p className="text-xs text-[#50657D] leading-relaxed mb-4">{rm.desc}</p>
                  </div>
                  {rm.link.startsWith("/") ? (
                    <Link href={rm.link} className="w-full py-2.5 rounded-xl bg-[#0E295B] hover:bg-[#01A5E1] text-white text-xs font-extrabold transition-colors flex items-center justify-center gap-1.5">
                      <span>Explore {rm.name.split(" ")[0]}</span><ArrowRight size={13} />
                    </Link>
                  ) : (
                    <button type="button" onClick={() => openBooking(`${rm.name} Enquiry`)} className="w-full py-2.5 rounded-xl bg-[#0E295B] hover:bg-[#01A5E1] text-white text-xs font-extrabold transition-colors flex items-center justify-center gap-1.5">
                      <span>Reserve {rm.name.split(" ")[0]}</span><ArrowRight size={13} />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} intent={bookingIntent} />
    </div>
  );
}
