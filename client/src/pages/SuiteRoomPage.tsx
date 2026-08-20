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
  Phone,
  ArrowRight,
  ShieldCheck,
  Coffee,
  Tv,
  Wifi,
  Wind,
  Bath,
  Utensils,
  ChevronRight,
  Home,
  Check,
  Lock,
  Star,
  Clock,
  Shirt,
  Armchair,
  Ticket
} from "lucide-react";
import { BookingModal } from "@/components/BookingModal";
import { SiteHeader } from "@/components/SiteHeader";

const GALLERY_IMAGES = [
  {
    src: "/images/suite-room-Room.jpg",
    title: "Master Bedroom & Sitting Lounge",
    caption: "400 sq. ft. spacious suite featuring king-size bed, sofa seating, and dining table"
  },
  {
    src: "/images/suite-room-room-home-left.jpg",
    title: "Attached Luxury Bath & Bathtub",
    caption: "Spacious attached bathroom with bathtub & premium toiletries"
  },
  {
    src: "/images/suite-room-room-home-right.jpg",
    title: "Scenic Lawn-Facing Windows",
    caption: "Full glass windows bringing generous natural light and garden greens"
  },
  {
    src: "/images/room_suite.jpg",
    title: "Cozy Evening Interior",
    caption: "Elegantly appointed furnishings with warm earth tones and modern comforts"
  }
];

const PACKAGES = [
  {
    id: "cp",
    name: "Room with Breakfast",
    rate: "₹7,200",
    desc: "Includes 1 Night Stay + Lavish 100% Pure Veg Buffet Breakfast",
    badge: "Most Popular"
  },
  {
    id: "map",
    name: "Room with Breakfast & Lunch/Dinner",
    rate: "₹9,700",
    desc: "Includes 1 Night Stay + Breakfast + Choice of Lunch or Dinner Buffet",
    badge: "Half Board"
  },
  {
    id: "ap",
    name: "Room with All 3 Meals",
    rate: "₹12,800",
    desc: "Includes Breakfast + Grand Lunch + Royal Dinner + Lawn Tea Snacks",
    badge: "Full Board"
  },
  {
    id: "stay_play",
    name: "Stay & Play All-Inclusive",
    rate: "₹16,000",
    desc: "All 3 Meals + Unlimited Amusement & Water Park Passes Included",
    badge: "Best Value"
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
    id: "luxury",
    name: "Luxury Room with Shower Glass Partition",
    rate: "₹6,000 / night",
    size: "300 Sq. Ft.",
    image: "/images/luxury-room-Room.jpg",
    link: "#",
    desc: "Modern aesthetics featuring glass partition shower bathrooms, plush bedding, and garden serenity."
  },
  {
    id: "deluxe",
    name: "Deluxe Room",
    rate: "₹4,600 / night",
    size: "200 Sq. Ft.",
    image: "/images/deluxe-room-Room.jpg",
    link: "#",
    desc: "Elegantly furnished rooms overlooking the lawns, ideal for weekend stopovers and day retreats."
  }
];

export default function SuiteRoomPage() {
  const [, setLocation] = useLocation();
  const [selectedGalleryIdx, setSelectedGalleryIdx] = useState(0);
  const [selectedPackage, setSelectedPackage] = useState(PACKAGES[0]);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingIntent, setBookingIntent] = useState("Suite Room Booking (₹7,200/night)");

  const openBooking = (intent = "Suite Room Staycation") => {
    setBookingIntent(intent);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#0E295B] font-sans">
      {/* Unified Site Header */}
      <SiteHeader onOpenBooking={(pkg) => openBooking(pkg)} />

      {/* Breadcrumb Navigation */}
      <div className="pt-28 pb-4 bg-[#061A33] text-white/70 border-b border-white/10">
        <div className="max-w-[1560px] mx-auto px-6 sm:px-12 flex items-center gap-2 text-xs font-semibold">
          <Link href="/" className="hover:text-white flex items-center gap-1">
            <Home size={13} />
            <span>Home</span>
          </Link>
          <ChevronRight size={13} className="opacity-40" />
          <Link href="/#stay-accommodation" className="hover:text-white">Resort Accommodation</Link>
          <ChevronRight size={13} className="opacity-40" />
          <span className="text-[#FFA96B] font-bold">Suite Room</span>
        </div>
      </div>

      {/* =========================================================================
          HERO SHOWCASE SECTION
          ========================================================================= */}
      <section className="relative bg-[#061A33] text-white pb-20 pt-8 overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#01A5E1]/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-[#F68734]/10 blur-3xl pointer-events-none" />

        <div className="max-w-[1560px] mx-auto px-6 sm:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Col: Titles & Highlights (6.5 Cols) */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {/* Luxury Eyebrow Pill */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#F68734]/20 via-[#01A5E1]/20 to-transparent border border-[#FFA96B]/35 text-[#FFA96B] text-xs font-black uppercase tracking-widest self-start backdrop-blur-md shadow-[0_0_20px_rgba(246,135,52,0.15)]">
                <span className="w-2 h-2 rounded-full bg-[#FFA96B] animate-pulse" />
                <span>✨ 400 SQ. FT. MASTER SUITE &bull; STARTING ₹7,200/NIGHT</span>
              </div>

              {/* Editorial Title */}
              <h1 className="text-3xl sm:text-5xl lg:text-[50px] font-black text-white font-display tracking-tight leading-[1.12]">
                Suite Room in Gurgaon for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFA96B] via-[#FFE2B3] to-[#89D9F8]">Family Stays &amp; Getaways</span>
              </h1>

              {/* Description with Subtle Accent Line */}
              <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl font-normal border-l-2 border-[#01A5E1]/50 pl-4 py-0.5">
                The Suite category offers a 400 sq. ft. well-designed spacious room with large living space, king bed, sofa seating, work desk, dining table, big bathroom with bathtub, and scenic views of lush green resort lawns.
              </p>

              {/* 4 Refined Glassmorphic Spec Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-white/[0.05] border border-white/[0.12] backdrop-blur-md flex flex-col justify-between hover:bg-white/[0.09] hover:border-[#01A5E1]/40 transition-all group">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold uppercase text-[#89D9F8] tracking-wider">Room Area</span>
                    <Maximize2 size={13} className="text-[#89D9F8]/70 group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-sm sm:text-base font-black text-white">400 Sq. Ft.</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.05] border border-white/[0.12] backdrop-blur-md flex flex-col justify-between hover:bg-white/[0.09] hover:border-[#01A5E1]/40 transition-all group">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold uppercase text-[#FFA96B] tracking-wider">Bedding</span>
                    <BedDouble size={13} className="text-[#FFA96B]/70 group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-sm sm:text-base font-black text-white">King + Sofa</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.05] border border-white/[0.12] backdrop-blur-md flex flex-col justify-between hover:bg-white/[0.09] hover:border-[#01A5E1]/40 transition-all group">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold uppercase text-[#89D9F8] tracking-wider">Occupancy</span>
                    <Users size={13} className="text-[#89D9F8]/70 group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-sm sm:text-base font-black text-white">2–3 Guests</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.05] border border-white/[0.12] backdrop-blur-md flex flex-col justify-between hover:bg-white/[0.09] hover:border-[#01A5E1]/40 transition-all group">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold uppercase text-[#69B32D] tracking-wider">View</span>
                    <Sparkles size={13} className="text-[#69B32D]/70 group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-sm sm:text-base font-black text-white">Garden View</span>
                </div>
              </div>

              {/* CTA Action Bar */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <button
                  type="button"
                  onClick={() => openBooking(`Suite Room Booking (${selectedPackage.rate}/night)`)}
                  className="px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#F68734] to-[#EC3337] hover:from-[#EC3337] hover:to-[#D84A22] text-white font-black text-sm shadow-[0_10px_25px_rgba(246,135,52,0.4)] hover:shadow-[0_12px_35px_rgba(246,135,52,0.65)] transition-all flex items-center gap-2 transform active:scale-97 cursor-pointer"
                >
                  <BedDouble size={17} />
                  <span>Book at {selectedPackage.rate}/night</span>
                  <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                </button>

                <a
                  href="https://www.aapnoghar.com/aapno360/suite-room.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-2xl bg-white/[0.08] hover:bg-white/[0.15] border border-white/20 hover:border-white/35 text-white font-bold text-xs sm:text-sm flex items-center gap-2.5 transition-all shadow-md backdrop-blur-md"
                >
                  <Compass size={17} className="text-[#D4AF37]" />
                  <span>Launch 360° Virtual Tour</span>
                </a>
              </div>

              {/* Trust Badge Snippets */}
              <div className="flex flex-wrap items-center gap-5 text-xs font-semibold text-white/60 pt-1">
                <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-[#69B32D]" /> 100% Pure Veg Resort</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-[#69B32D]" /> Free Buffet Breakfast</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-[#69B32D]" /> 4-Device Wi-Fi</span>
              </div>
            </div>

            {/* Right Col: Interactive Visual Frame (5.5 Cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 aspect-[4/3] bg-black/40 group">
                <img
                  src={GALLERY_IMAGES[selectedGalleryIdx].src}
                  alt={GALLERY_IMAGES[selectedGalleryIdx].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                  <span className="text-xs font-bold text-[#FFA96B] uppercase tracking-wider">
                    {GALLERY_IMAGES[selectedGalleryIdx].title}
                  </span>
                  <p className="text-xs text-white/80 mt-0.5">
                    {GALLERY_IMAGES[selectedGalleryIdx].caption}
                  </p>
                </div>
              </div>

              {/* Gallery Thumbnails Strip */}
              <div className="grid grid-cols-4 gap-2.5 mt-3">
                {GALLERY_IMAGES.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedGalleryIdx(idx)}
                    className={`rounded-xl overflow-hidden aspect-video border-2 transition-all cursor-pointer ${
                      selectedGalleryIdx === idx
                        ? "border-[#F68734] scale-102 shadow-lg"
                        : "border-white/20 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PACKAGE OPTIONS & RATE SELECTOR
          ========================================================================= */}
      <section className="py-16 bg-[#FDFCF9] border-b border-[#0E295B]/10">
        <div className="max-w-[1560px] mx-auto px-6 sm:px-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="eyebrow eyebrow--coral text-xs font-black uppercase tracking-wider">Flexible Meal Packages</span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0E295B] font-display mt-1">
              Choose Your Suite Stay Package
            </h2>
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
                      <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                        isSelected ? "bg-[#F68734] text-white" : "bg-[#01A5E1]/10 text-[#01A5E1]"
                      }`}>
                        {pkg.badge}
                      </span>
                      {isSelected && <CheckCircle2 size={18} className="text-[#F68734]" />}
                    </div>

                    <h3 className={`text-base font-black font-display mb-1 ${isSelected ? "text-white" : "text-[#0E295B]"}`}>
                      {pkg.name}
                    </h3>
                    <div className="text-2xl font-black font-display my-2 text-[#FFA96B]">
                      {pkg.rate} <span className="text-xs font-bold opacity-75">/ night</span>
                    </div>
                    <p className={`text-xs leading-relaxed mb-6 ${isSelected ? "text-white/80" : "text-[#50657D]"}`}>
                      {pkg.desc}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPackage(pkg);
                      openBooking(`Suite Room - ${pkg.name} (${pkg.rate})`);
                    }}
                    className={`w-full py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 ${
                      isSelected
                        ? "bg-[#F68734] hover:bg-[#D84A22] text-white shadow-md"
                        : "bg-[#0E295B] hover:bg-[#01A5E1] text-white"
                    }`}
                  >
                    <span>Select Package</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SUITE OVERVIEW & 4-PILLAR AMENITIES
          ========================================================================= */}
      <section className="py-20 bg-white border-b border-[#0E295B]/10">
        <div className="max-w-[1560px] mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Content (8 Cols) */}
            <div className="lg:col-span-8 space-y-10">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#01A5E1]/10 border border-[#01A5E1]/25 text-[#01A5E1] text-xs font-black uppercase tracking-wider mb-3">
                  <Sparkles size={14} className="text-[#01A5E1]" />
                  <span>Spacious Suite Layout &bull; 400 Sq. Ft.</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black text-[#0E295B] font-display tracking-tight leading-tight">
                  Designed for modern family comfort, lawn serenity &amp; private dining.
                </h2>
              </div>

              {/* 2 Editorial Feature Highlight Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="p-6 rounded-3xl bg-[#FDFCF9] border border-[#0E295B]/10 hover:border-[#F68734]/30 hover:shadow-md transition-all flex flex-col justify-between group">
                  <div className="w-12 h-12 rounded-2xl bg-[#F68734]/10 text-[#F68734] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Armchair size={24} />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-[#0E295B] font-display mb-2">
                      Master Suite &amp; Sitting Space
                    </h3>
                    <p className="text-xs sm:text-sm text-[#50657D] leading-relaxed">
                      Generous 400 sq. ft. floor plan with king-size master bed, separate sofa seating, work table, and private dining space crafted with warm wood aesthetics.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-3xl bg-[#FDFCF9] border border-[#0E295B]/10 hover:border-[#01A5E1]/30 hover:shadow-md transition-all flex flex-col justify-between group">
                  <div className="w-12 h-12 rounded-2xl bg-[#01A5E1]/10 text-[#01A5E1] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Compass size={24} />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-[#0E295B] font-display mb-2">
                      Lawn-Facing Panoramic Light
                    </h3>
                    <p className="text-xs sm:text-sm text-[#50657D] leading-relaxed">
                      Wall-sized glass window overlooking plush green lawns invites ample natural light. Many suites feature adjoining room access for extended family groups.
                    </p>
                  </div>
                </div>
              </div>

              {/* 4 Categorized Amenity Pillars */}
              <div>
                <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#0E295B]/10">
                  <h3 className="text-xl font-black text-[#0E295B] font-display flex items-center gap-2.5">
                    <Star size={20} className="text-[#F68734]" />
                    <span>Complete Suite Amenities</span>
                  </h3>
                  <span className="text-xs font-bold text-[#50657D] uppercase tracking-wider">
                    24 Luxury Features
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Pillar 1: Living & Bedding */}
                  <div className="p-5 rounded-3xl bg-[#FDFCF9] border border-[#0E295B]/10 hover:border-[#F68734]/30 transition-all">
                    <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#0E295B]/5">
                      <div className="w-9 h-9 rounded-xl bg-[#F68734]/15 text-[#F68734] flex items-center justify-center shrink-0">
                        <BedDouble size={18} />
                      </div>
                      <h4 className="font-extrabold text-sm text-[#0E295B]">Living &amp; Bedroom</h4>
                    </div>
                    <ul className="space-y-2 text-xs font-semibold text-[#50657D]">
                      <li className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#F68734] shrink-0" /> King Size Master Bed (20x20 Room)</li>
                      <li className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#F68734] shrink-0" /> Separate Sofa Seating &amp; Coffee Table</li>
                      <li className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#F68734] shrink-0" /> Single Sofa-cum-Bed for Child</li>
                      <li className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#F68734] shrink-0" /> Executive Work Desk &amp; Dining Table</li>
                      <li className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#F68734] shrink-0" /> Wardrobe &amp; Cotton Slippers</li>
                    </ul>
                  </div>

                  {/* Pillar 2: Bath & Wellness */}
                  <div className="p-5 rounded-3xl bg-[#FDFCF9] border border-[#0E295B]/10 hover:border-[#01A5E1]/30 transition-all">
                    <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#0E295B]/5">
                      <div className="w-9 h-9 rounded-xl bg-[#01A5E1]/15 text-[#01A5E1] flex items-center justify-center shrink-0">
                        <Bath size={18} />
                      </div>
                      <h4 className="font-extrabold text-sm text-[#0E295B]">Bath &amp; Wellness</h4>
                    </div>
                    <ul className="space-y-2 text-xs font-semibold text-[#50657D]">
                      <li className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#01A5E1] shrink-0" /> Big Washroom with Attached Bathtub</li>
                      <li className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#01A5E1] shrink-0" /> 24-Hr Hot &amp; Cold Running Water</li>
                      <li className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#01A5E1] shrink-0" /> Complimentary Toiletries Kit</li>
                      <li className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#01A5E1] shrink-0" /> Hair Dryer &amp; Iron (On Request)</li>
                      <li className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#01A5E1] shrink-0" /> Fresh Plush Bath Linen</li>
                    </ul>
                  </div>

                  {/* Pillar 3: Dining & Hospitality */}
                  <div className="p-5 rounded-3xl bg-[#FDFCF9] border border-[#0E295B]/10 hover:border-[#EC3337]/30 transition-all">
                    <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#0E295B]/5">
                      <div className="w-9 h-9 rounded-xl bg-[#EC3337]/15 text-[#EC3337] flex items-center justify-center shrink-0">
                        <Utensils size={18} />
                      </div>
                      <h4 className="font-extrabold text-sm text-[#0E295B]">Dining &amp; Hospitality</h4>
                    </div>
                    <ul className="space-y-2 text-xs font-semibold text-[#50657D]">
                      <li className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#EC3337] shrink-0" /> Complimentary Buffet Breakfast</li>
                      <li className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#EC3337] shrink-0" /> Morning Lawn Tea, Coffee &amp; Cookies</li>
                      <li className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#EC3337] shrink-0" /> Mini Refrigerator in Room</li>
                      <li className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#EC3337] shrink-0" /> Dedicated 24-Hour Room Service</li>
                      <li className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#EC3337] shrink-0" /> Daily Newspaper (On Request)</li>
                    </ul>
                  </div>

                  {/* Pillar 4: Connectivity & Utilities */}
                  <div className="p-5 rounded-3xl bg-[#FDFCF9] border border-[#0E295B]/10 hover:border-[#69B32D]/30 transition-all">
                    <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#0E295B]/5">
                      <div className="w-9 h-9 rounded-xl bg-[#69B32D]/15 text-[#69B32D] flex items-center justify-center shrink-0">
                        <Wifi size={18} />
                      </div>
                      <h4 className="font-extrabold text-sm text-[#0E295B]">Tech, Security &amp; Comfort</h4>
                    </div>
                    <ul className="space-y-2 text-xs font-semibold text-[#50657D]">
                      <li className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#69B32D] shrink-0" /> High-Speed Wi-Fi (Up to 4 Devices)</li>
                      <li className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#69B32D] shrink-0" /> LED TV with Satellite HD Channels</li>
                      <li className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#69B32D] shrink-0" /> Dual Hot &amp; Cold Air Conditioning</li>
                      <li className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#69B32D] shrink-0" /> In-Room Digital Safe Locker</li>
                      <li className="flex items-center gap-2"><CheckCircle2 size={13} className="text-[#69B32D] shrink-0" /> Intercom &amp; Wheelchair Accessible</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Resort Privileges Box */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-[#FCF3E9] to-[#FFFDF9] border border-[#F68734]/30 shadow-xs">
                <h4 className="text-base font-black text-[#0E295B] mb-2 flex items-center gap-2">
                  <Sparkles size={18} className="text-[#F68734]" />
                  <span>Complimentary Resort Privileges Included with Suite Stay</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-bold text-[#50657D] mt-3.5">
                  <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/70 border border-[#F68734]/15">
                    <CheckCircle2 size={16} className="text-[#69B32D] shrink-0" />
                    <span>Free Open Gym &amp; Badminton Court Access</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/70 border border-[#F68734]/15">
                    <CheckCircle2 size={16} className="text-[#69B32D] shrink-0" />
                    <span>Morning Tea &amp; Cookie Stall on Resort Lawns</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/70 border border-[#F68734]/15">
                    <CheckCircle2 size={16} className="text-[#69B32D] shrink-0" />
                    <span>100% Pure Vegetarian Buffet Breakfast</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/70 border border-[#F68734]/15">
                    <CheckCircle2 size={16} className="text-[#69B32D] shrink-0" />
                    <span>Special Discount on Water &amp; Amusement Park</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sticky Booking Card (4 Cols) */}
            <div className="lg:col-span-4 bg-[#061A33] text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20 sticky top-28">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/15">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#89D9F8]">Selected Tariff</span>
                  <div className="text-2xl font-black text-[#FFA96B] font-display">{selectedPackage.rate} <span className="text-xs font-normal text-white/70">/ night</span></div>
                </div>
                <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-white border border-white/15">
                  {selectedPackage.badge}
                </span>
              </div>

              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 mb-4 text-xs text-white/80">
                <span className="font-bold text-[#FFA96B] block mb-1">{selectedPackage.name}</span>
                <span>{selectedPackage.desc}</span>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-xs text-white/80">
                  <span className="flex items-center gap-1.5">
                    <Clock size={13} className="text-[#FFA96B]" />
                    <span>Check-in:</span>
                  </span>
                  <span className="font-bold text-white">12:00 PM (Noon)</span>
                </div>
                <div className="flex items-center justify-between text-xs text-white/80">
                  <span className="flex items-center gap-1.5">
                    <Clock size={13} className="text-[#89D9F8]" />
                    <span>Check-out:</span>
                  </span>
                  <span className="font-bold text-white">10:30 AM</span>
                </div>
                <div className="flex items-center justify-between text-xs text-white/80">
                  <span className="flex items-center gap-1.5">
                    <Utensils size={13} className="text-[#69B32D]" />
                    <span>Meals:</span>
                  </span>
                  <span className="font-bold text-white">100% Pure Veg</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => openBooking(`Suite Room - ${selectedPackage.name} (${selectedPackage.rate})`)}
                className="w-full py-4 rounded-2xl bg-[#F68734] hover:bg-[#D84A22] text-white font-black text-sm shadow-xl hover:shadow-[0_0_30px_rgba(246,135,52,0.7)] transition-all flex items-center justify-center gap-2 mb-3 cursor-pointer"
              >
                <span>Reserve Suite Now</span>
                <ArrowRight size={16} />
              </button>

              <a
                href={`https://wa.me/917666779997?text=${encodeURIComponent(`Hi AapnoGhar, I want to book Suite Room (${selectedPackage.name} - ${selectedPackage.rate}).`)}`}
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

      {/* =========================================================================
          EXPLORE OTHER SUITES & ROOMS
          ========================================================================= */}
      <section className="py-20 bg-[#FDFCF9] border-b border-[#0E295B]/10">
        <div className="max-w-[1560px] mx-auto px-6 sm:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow eyebrow--teal text-xs font-black uppercase tracking-wider">Other Accommodations</span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0E295B] font-display mt-1">
              Explore More Resort Rooms
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {OTHER_ROOMS.map((rm) => (
              <div key={rm.id} className="bg-white rounded-3xl overflow-hidden border border-[#0E295B]/10 shadow-lg flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-300">
                <div className="relative aspect-[16/10] overflow-hidden bg-black/10">
                  <img src={rm.image} alt={rm.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#0E295B]/85 backdrop-blur-md text-white text-xs font-extrabold">
                    {rm.rate}
                  </span>
                </div>

                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-[10px] font-bold uppercase text-[#01A5E1] tracking-wider">{rm.size}</span>
                    <h3 className="text-lg font-black text-[#0E295B] font-display mt-0.5 mb-2">{rm.name}</h3>
                    <p className="text-xs text-[#50657D] leading-relaxed mb-4">{rm.desc}</p>
                  </div>

                  {rm.link && rm.link.startsWith("/") ? (
                    <Link
                      href={rm.link}
                      className="w-full py-2.5 rounded-xl bg-[#0E295B] hover:bg-[#01A5E1] text-white text-xs font-extrabold transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>Explore {rm.name.split(" ")[0]}</span>
                      <ArrowRight size={13} />
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={() => openBooking(`${rm.name} Enquiry`)}
                      className="w-full py-2.5 rounded-xl bg-[#0E295B] hover:bg-[#01A5E1] text-white text-xs font-extrabold transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>Reserve {rm.name.split(" ")[0]}</span>
                      <ArrowRight size={13} />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Site Footer */}
      <SiteFooter />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        intent={bookingIntent}
      />
    </div>
  );
}
