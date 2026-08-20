import React from "react";
import { Clock, Ticket, Users, Check, Sparkles, ArrowUpRight } from "lucide-react";

interface JhulJhulKarKhaoProps {
  onBook: (intent: string) => void;
}

export function JhulJhulKarKhao({ onBook }: JhulJhulKarKhaoProps) {
  return (
    <section className="jhul-section py-20 bg-gradient-to-b from-[#69B32D] to-[#559424] text-white relative overflow-hidden" id="jhul-jhul-kar-khao">
      {/* Decorative background flourishes */}
      <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-black/10 blur-2xl pointer-events-none" />

      <div className="content-wrap relative z-10 max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12" data-reveal>
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-extrabold uppercase tracking-widest mb-3 border border-white/30">
            AapnoGhar Signature Day Picnic
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tight font-display drop-shadow-md">
            JHUL JHUL KAR KHAO
          </h2>
          <div className="flex justify-center mt-2">
            <img src="/images/heading_line.png" alt="Decorative underline" className="h-3 w-auto opacity-90" />
          </div>
        </div>

        {/* 5-Item Grid: 4 Polaroids Surrounding 1 Center Pricing Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: 2 Polaroids */}
          <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col gap-6 justify-center" data-reveal="left">
            {/* Polaroid 1 (Top Left) */}
            <div className="bg-white p-3 rounded-2xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-300 border border-white/40">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-black/5 mb-2">
                <img
                  src="/images/full-day-picnic-package-1-aapno-ghar.jpg"
                  alt="Joyrides and Flying Carousel at AapnoGhar"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-[#0E295B] font-bold text-xs text-center">15+ Amusement Joyrides</p>
            </div>

            {/* Polaroid 2 (Bottom Left) */}
            <div className="bg-white p-3 rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300 border border-white/40">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-black/5 mb-2">
                <img
                  src="/images/full-day-picnic-package-3-aapno-ghar.jpg"
                  alt="Water slides at AapnoGhar Water Park"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-[#0E295B] font-bold text-xs text-center">21 Thrill Water Slides</p>
            </div>
          </div>

          {/* Center Column: Iconic White Card */}
          <div className="lg:col-span-6 bg-white text-[#0E295B] rounded-3xl p-6 sm:p-10 shadow-2xl border-4 border-white/80 relative" data-reveal="scale">
            {/* Top Right From Badge */}
            <div className="absolute top-6 right-6 bg-[#69B32D] text-white px-4 py-2 rounded-2xl shadow-md text-right">
              <span className="text-[10px] font-bold uppercase tracking-wider block opacity-90">From</span>
              <span className="text-xl font-black block font-display leading-tight">Rs. 1299</span>
              <span className="text-[9px] block opacity-85">inclusive of taxes</span>
            </div>

            <span className="text-xs font-extrabold uppercase tracking-widest text-[#69B32D] block mb-1">
              All-Inclusive Picnic Pass
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#0E295B] font-display mb-1">
              Full day picnic package
            </h3>
            <img src="/images/heading_line_skyblue.png" alt="Line" className="h-2 w-auto mb-4" />

            {/* Timing & Deal */}
            <div className="flex flex-wrap items-center gap-4 bg-[#FCF3E9] p-3 rounded-2xl mb-6 text-xs font-bold text-[#0E295B]">
              <div className="flex items-center gap-1.5">
                <Clock size={15} className="text-[#F68734]" />
                <span>Timing: 09:30 AM to 07:00 PM</span>
              </div>
              <span className="text-slate-300">•</span>
              <span className="text-[#01A5E1]">Deal With Water & Amusement Park</span>
            </div>

            {/* Rates Table */}
            <div className="flex flex-col gap-4 mb-6">
              {/* Adults Rate Row */}
              <div className="p-4 rounded-2xl bg-[#F0F8FC] border border-[#01A5E1]/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#01A5E1]/15 text-[#01A5E1] flex items-center justify-center font-bold">
                    <Users size={20} />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-[#0E295B] text-base leading-tight">Adults</h4>
                    <span className="text-xs text-[#50657D]">Above 54 inches of height</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xl sm:text-2xl font-black text-[#0E295B] font-display block">
                    Rs. 1599<span className="text-xs font-normal text-[#50657D]">/head</span>
                  </span>
                </div>
              </div>

              {/* Kids Rate Row */}
              <div className="p-4 rounded-2xl bg-[#FCF3E9] border border-[#F68734]/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F68734]/15 text-[#F68734] flex items-center justify-center font-bold">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-[#0E295B] text-base leading-tight">Kids</h4>
                    <span className="text-xs text-[#50657D]">Between 33 to 54 inches height</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xl sm:text-2xl font-black text-[#F68734] font-display block">
                    Rs. 1299<span className="text-xs font-normal text-[#50657D]">/head</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Infants Complimentary Banner */}
            <p className="text-xs font-bold text-[#EC3337] text-center mb-6 bg-red-50 py-2 rounded-xl border border-red-100">
              ★ Kids (below 33 inches of height) are strictly COMPLIMENTARY (Free Entry)
            </p>

            {/* CTA Button */}
            <button
              type="button"
              className="w-full py-4 rounded-2xl bg-[#01A5E1] hover:bg-[#0072A3] text-white font-extrabold text-base transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 transform active:scale-98"
              onClick={() => onBook("Full day picnic package")}
              data-cursor-text="Book Pass"
            >
              <Ticket size={20} /> Book Picnic Passes Now
            </button>
          </div>

          {/* Right Column: 2 Polaroids */}
          <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col gap-6 justify-center" data-reveal="right">
            {/* Polaroid 3 (Top Right) */}
            <div className="bg-white p-3 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300 border border-white/40">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-black/5 mb-2">
                <img
                  src="/images/full-day-picnic-package-2-aapno-ghar.jpg"
                  alt="Kids joyrides at AapnoGhar"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-[#0E295B] font-bold text-xs text-center">Helicopter & Swings</p>
            </div>

            {/* Polaroid 4 (Bottom Right) */}
            <div className="bg-white p-3 rounded-2xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-300 border border-white/40">
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-black/5 mb-2">
                <img
                  src="/images/full-day-picnic-package-4-aapno-ghar.jpg"
                  alt="Mega Wave Pool at AapnoGhar"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-[#0E295B] font-bold text-xs text-center">Interactive Wave Pool</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
