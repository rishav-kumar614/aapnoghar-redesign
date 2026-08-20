import React, { useState, useMemo, useRef, useEffect } from "react";
import {
  Calculator,
  Calendar,
  Users,
  BedDouble,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Utensils,
  Plus,
  Minus,
  ChevronDown,
  Check
} from "lucide-react";

interface TicketEstimatorProps {
  onBook: (intent: string) => void;
}

const ROOM_OPTIONS = [
  { id: "none", name: "Day Visit Only", sub: "No overnight stay", rate: 0 },
  { id: "deluxe", name: "Deluxe Room", sub: "Lawn view balcony", rate: 4600 },
  { id: "luxury", name: "Luxury Suite", sub: "Spacious master suite", rate: 6000 },
];

export const TicketEstimator: React.FC<TicketEstimatorProps> = ({ onBook }) => {
  const [dayType, setDayType] = useState<"weekday" | "weekend">("weekday");
  const [adults, setAdults] = useState<number>(2);
  const [children, setChildren] = useState<number>(1);
  const [infants, setInfants] = useState<number>(0);
  const [selectedRoom, setSelectedRoom] = useState<string>("none");
  const [vipDining, setVipDining] = useState<boolean>(false);
  const [isRoomDropdownOpen, setIsRoomDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsRoomDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentRoom = ROOM_OPTIONS.find((r) => r.id === selectedRoom) || ROOM_OPTIONS[0];

  const rates = useMemo(() => {
    return dayType === "weekday"
      ? { adult: 1199, child: 899 }
      : { adult: 1499, child: 1099 };
  }, [dayType]);

  const adultTotal = adults * rates.adult;
  const childTotal = children * rates.child;
  const roomPrice = currentRoom.rate;
  const vipDiningPrice = vipDining ? (adults + children) * 350 : 0;

  const subtotal = adultTotal + childTotal + roomPrice + vipDiningPrice;
  const estimatedTax = Math.round(subtotal * 0.18);
  const grandTotal = subtotal + estimatedTax;

  const handleProceed = () => {
    const summary = `${dayType === "weekend" ? "Weekend" : "Weekday"} Estimate: ${adults} Adults, ${children} Kids${
      selectedRoom !== "none" ? `, Stay: ${currentRoom.name}` : ""
    }${vipDining ? ", VIP Dining" : ""}`;
    onBook(summary);
  };

  return (
    <div className="w-full max-w-[1400px] mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-[#0E295B]/10 shadow-xl">
      {/* Compact Title Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 mb-6 border-b border-[#0E295B]/10">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#01A5E1] mb-1">
            <Calculator size={14} />
            <span>Instant Rate Estimator</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#0E295B] font-display">
            Calculate Day Picnic &amp; Stay Packages
          </h3>
        </div>
        <p className="text-xs text-[#50657D] font-medium max-w-sm sm:text-right">
          Real-time rates with meals, rides, slides, and taxes included.
        </p>
      </div>

      {/* 2-Column Compact Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Column: Tightly Organized Controls (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-5">
          {/* Day Type Toggle */}
          <div>
            <span className="text-xs font-bold text-[#0E295B] block mb-2">
              1. Choose Visit Day
            </span>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setDayType("weekday")}
                className={`py-2.5 px-4 rounded-xl text-left transition-all duration-200 border ${
                  dayType === "weekday"
                    ? "bg-[#0E295B] text-white border-[#0E295B] shadow-md"
                    : "bg-[#0E295B]/5 text-[#0E295B] border-transparent hover:bg-[#0E295B]/10"
                }`}
              >
                <div className="text-xs font-black">Weekdays (Mon – Fri)</div>
                <div className="text-[10px] opacity-75">₹1,199 / adult • All meals</div>
              </button>

              <button
                type="button"
                onClick={() => setDayType("weekend")}
                className={`py-2.5 px-4 rounded-xl text-left transition-all duration-200 border ${
                  dayType === "weekend"
                    ? "bg-[#0E295B] text-white border-[#0E295B] shadow-md"
                    : "bg-[#0E295B]/5 text-[#0E295B] border-transparent hover:bg-[#0E295B]/10"
                }`}
              >
                <div className="text-xs font-black">Weekends &amp; Holidays</div>
                <div className="text-[10px] opacity-75">₹1,499 / adult • Peak joy</div>
              </button>
            </div>
          </div>

          {/* Guest Counters (3 Side-by-Side Compact Boxes) */}
          <div>
            <span className="text-xs font-bold text-[#0E295B] block mb-2">
              2. Guest Breakdown
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Adults */}
              <div className="p-3 rounded-2xl bg-[#F0F8FC]/60 border border-[#01A5E1]/20 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-[#0E295B]">Adults</div>
                  <div className="text-[10px] text-[#50657D]">Above 54″</div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setAdults(Math.max(1, adults - 1))}
                    disabled={adults <= 1}
                    className="w-7 h-7 rounded-lg bg-white border border-[#0E295B]/20 text-[#0E295B] flex items-center justify-center font-bold disabled:opacity-30 hover:bg-[#0E295B]/5"
                  >
                    <Minus size={13} />
                  </button>
                  <span className="font-extrabold text-sm text-[#0E295B] w-4 text-center">{adults}</span>
                  <button
                    type="button"
                    onClick={() => setAdults(adults + 1)}
                    className="w-7 h-7 rounded-lg bg-white border border-[#0E295B]/20 text-[#0E295B] flex items-center justify-center font-bold hover:bg-[#0E295B]/5"
                  >
                    <Plus size={13} />
                  </button>
                </div>
              </div>

              {/* Children */}
              <div className="p-3 rounded-2xl bg-[#F0F8FC]/60 border border-[#01A5E1]/20 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-[#0E295B]">Kids</div>
                  <div className="text-[10px] text-[#50657D]">33″ to 54″</div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setChildren(Math.max(0, children - 1))}
                    disabled={children <= 0}
                    className="w-7 h-7 rounded-lg bg-white border border-[#0E295B]/20 text-[#0E295B] flex items-center justify-center font-bold disabled:opacity-30 hover:bg-[#0E295B]/5"
                  >
                    <Minus size={13} />
                  </button>
                  <span className="font-extrabold text-sm text-[#0E295B] w-4 text-center">{children}</span>
                  <button
                    type="button"
                    onClick={() => setChildren(children + 1)}
                    className="w-7 h-7 rounded-lg bg-white border border-[#0E295B]/20 text-[#0E295B] flex items-center justify-center font-bold hover:bg-[#0E295B]/5"
                  >
                    <Plus size={13} />
                  </button>
                </div>
              </div>

              {/* Infants */}
              <div className="p-3 rounded-2xl bg-[#F0F8FC]/60 border border-[#01A5E1]/20 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-[#0E295B]">Infants</div>
                  <div className="text-[10px] text-[#01A5E1] font-bold">Free (&lt;33″)</div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setInfants(Math.max(0, infants - 1))}
                    disabled={infants <= 0}
                    className="w-7 h-7 rounded-lg bg-white border border-[#0E295B]/20 text-[#0E295B] flex items-center justify-center font-bold disabled:opacity-30 hover:bg-[#0E295B]/5"
                  >
                    <Minus size={13} />
                  </button>
                  <span className="font-extrabold text-sm text-[#0E295B] w-4 text-center">{infants}</span>
                  <button
                    type="button"
                    onClick={() => setInfants(infants + 1)}
                    className="w-7 h-7 rounded-lg bg-white border border-[#0E295B]/20 text-[#0E295B] flex items-center justify-center font-bold hover:bg-[#0E295B]/5"
                  >
                    <Plus size={13} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Optional Upgrades (Custom Dropdown + VIP Buffet Toggle) */}
          <div>
            <span className="text-xs font-bold text-[#0E295B] block mb-2">
              3. Optional Upgrades
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Custom Luxury Room Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsRoomDropdownOpen(!isRoomDropdownOpen)}
                  className="w-full py-2.5 px-3.5 rounded-xl bg-white border border-[#0E295B]/20 text-xs font-bold text-[#0E295B] flex items-center justify-between hover:border-[#01A5E1] transition-all shadow-xs"
                >
                  <div className="flex items-center gap-2 text-left">
                    <BedDouble size={16} className="text-[#01A5E1] shrink-0" />
                    <div>
                      <span className="block leading-tight">{currentRoom.name}</span>
                      <span className="text-[10px] text-[#50657D] font-normal">
                        {currentRoom.rate > 0 ? `+₹${currentRoom.rate.toLocaleString("en-IN")}` : "No overnight stay"}
                      </span>
                    </div>
                  </div>
                  <ChevronDown
                    size={14}
                    className={`text-[#50657D] transition-transform duration-200 ${
                      isRoomDropdownOpen ? "rotate-180 text-[#01A5E1]" : ""
                    }`}
                  />
                </button>

                {/* Animated Dropdown Menu */}
                {isRoomDropdownOpen && (
                  <div className="absolute bottom-full mb-1.5 left-0 w-full bg-white rounded-2xl p-1.5 border border-[#0E295B]/15 shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-150">
                    {ROOM_OPTIONS.map((room) => {
                      const isSelected = selectedRoom === room.id;
                      return (
                        <button
                          key={room.id}
                          type="button"
                          onClick={() => {
                            setSelectedRoom(room.id);
                            setIsRoomDropdownOpen(false);
                          }}
                          className={`w-full p-2.5 rounded-xl text-left flex items-center justify-between transition-colors ${
                            isSelected
                              ? "bg-[#0E295B] text-white"
                              : "hover:bg-[#F0F8FC] text-[#0E295B]"
                          }`}
                        >
                          <div>
                            <div className="text-xs font-bold">{room.name}</div>
                            <div className={`text-[10px] ${isSelected ? "text-white/80" : "text-[#50657D]"}`}>
                              {room.sub} {room.rate > 0 ? `(+₹${room.rate.toLocaleString("en-IN")})` : ""}
                            </div>
                          </div>
                          {isSelected && <Check size={14} className="text-[#FFA96B]" />}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* VIP Dining Buffet Pill */}
              <label className={`flex items-center gap-2.5 p-2.5 rounded-xl border transition-all cursor-pointer select-none ${
                vipDining
                  ? "bg-[#FCF3E9] border-[#F68734] shadow-xs"
                  : "bg-white border-[#0E295B]/20 hover:border-[#F68734]/50"
              }`}>
                <input
                  type="checkbox"
                  checked={vipDining}
                  onChange={(e) => setVipDining(e.target.checked)}
                  className="rounded text-[#F68734] focus:ring-0 w-4 h-4 cursor-pointer"
                />
                <div className="flex items-center gap-2">
                  <Utensils size={15} className="text-[#F68734] shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-[#0E295B]">VIP Buffet Dining</div>
                    <div className="text-[10px] text-[#50657D]">+₹350 / guest upgrade</div>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Right Column: Sleek Summary & Total Card (5 Cols) */}
        <div className="lg:col-span-5 bg-[#061A33] rounded-2xl p-5 text-white flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/15">
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-[#FFA96B]" />
                <span className="text-xs font-black uppercase tracking-wider text-white">Estimated Cost</span>
              </div>
              <span className="text-[10px] text-[#89D9F8] font-bold">100% Pure Veg Feasts</span>
            </div>

            <div className="space-y-1.5 text-xs text-white/80 mb-4">
              <div className="flex justify-between">
                <span>{adults} × Adults ({dayType})</span>
                <span className="font-bold text-white">₹{adultTotal.toLocaleString("en-IN")}</span>
              </div>
              {children > 0 && (
                <div className="flex justify-between">
                  <span>{children} × Kids ({dayType})</span>
                  <span className="font-bold text-white">₹{childTotal.toLocaleString("en-IN")}</span>
                </div>
              )}
              {selectedRoom !== "none" && (
                <div className="flex justify-between text-[#FFA96B]">
                  <span>Stay: {currentRoom.name}</span>
                  <span className="font-bold">₹{roomPrice.toLocaleString("en-IN")}</span>
                </div>
              )}
              {vipDining && (
                <div className="flex justify-between text-[#89D9F8]">
                  <span>VIP Dining Buffet</span>
                  <span className="font-bold">₹{vipDiningPrice.toLocaleString("en-IN")}</span>
                </div>
              )}
              <div className="flex justify-between text-[11px] text-white/50 pt-1 border-t border-white/10">
                <span>GST (18%)</span>
                <span>₹{estimatedTax.toLocaleString("en-IN")}</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/10 border border-white/15 flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-white/80">Total Amount:</span>
              <span className="text-2xl font-black text-[#FFA96B] font-display">
                ₹{grandTotal.toLocaleString("en-IN")}
              </span>
            </div>
          </div>

          <div>
            <button
              type="button"
              onClick={handleProceed}
              className="w-full py-3.5 rounded-xl bg-[#F68734] hover:bg-[#D84A22] text-white font-extrabold text-xs sm:text-sm shadow-lg hover:shadow-[0_0_25px_rgba(246,135,52,0.7)] transition-all flex items-center justify-center gap-2 transform active:scale-98"
            >
              <span>Lock In Rate &amp; Book Now</span>
              <ArrowRight size={16} />
            </button>
            <p className="text-[10px] text-white/50 text-center mt-2 flex items-center justify-center gap-1">
              <ShieldCheck size={12} className="text-[#69B32D]" />
              <span>Free cancellation • No instant card charge</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
