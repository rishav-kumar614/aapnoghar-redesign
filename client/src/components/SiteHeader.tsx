import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import {
  ChevronDown,
  Phone,
  MessageCircle,
  Menu,
  X,
  Calculator,
  Film
} from "lucide-react";

export type SiteHeaderProps = {
  onOpenBooking?: (intent: string) => void;
  onScrollTo?: (target: string) => void;
};

export function SiteHeader({ onOpenBooking, onScrollTo }: SiteHeaderProps) {
  const [location, setLocation] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDrawerAcc, setOpenDrawerAcc] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setIsMenuOpen(false);
    if (location === "/") {
      if (onScrollTo) {
        onScrollTo(sectionId);
      } else {
        const el = document.getElementById(sectionId) || document.querySelector(`[data-section="${sectionId}"]`);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  const handleOpenBooking = (intent: string) => {
    setIsMenuOpen(false);
    if (onOpenBooking) {
      onOpenBooking(intent);
    } else {
      window.open(
        `https://wa.me/917666779997?text=${encodeURIComponent(`Hi AapnoGhar, I would like to inquire about: ${intent}`)}`,
        "_blank"
      );
    }
  };

  return (
    <>
      <header className={`site-header ${isScrolled ? "site-header--scrolled" : ""}`}>
        {/* Brand Logo */}
        <Link href="/" className="brand py-1" aria-label="AapnoGhar Resort Home">
          <img
            src="/images/logo.png"
            alt="AapnoGhar Resort"
            className="h-13 sm:h-15 md:h-16 lg:h-[68px] w-auto object-contain drop-shadow-sm transition-transform hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Primary navigation">
          {/* Stay Dropdown */}
          <div className="nav-dropdown-wrapper">
            <button
              type="button"
              onClick={() => handleNavClick("stay-accommodation")}
              className="flex items-center gap-1.5"
            >
              <span>Stay</span>
              <ChevronDown size={13} className="opacity-75 shrink-0" />
            </button>
            <div className="nav-dropdown-menu">
              <div className="nav-dropdown-header">Accommodation Wing</div>
              <button
                type="button"
                className={location === "/presidential-suite-room-1" ? "text-[#FFA96B] font-bold" : ""}
                onClick={() => {
                  if (location !== "/presidential-suite-room-1") {
                    setLocation("/presidential-suite-room-1");
                  }
                }}
              >
                Luxury Presidential Suite for Staycation &amp; Daycation in Gurgaon
              </button>
              <button
                type="button"
                className={location === "/presidential-suite-room-2" ? "text-[#FFA96B] font-bold" : ""}
                onClick={() => {
                  if (location !== "/presidential-suite-room-2") {
                    setLocation("/presidential-suite-room-2");
                  }
                }}
              >
                Presidential Suite for Staycation &amp; Daycation in Delhi NCR
              </button>
              <button
                type="button"
                className={location === "/suite-room" ? "text-[#FFA96B] font-bold" : ""}
                onClick={() => {
                  if (location !== "/suite-room") {
                    setLocation("/suite-room");
                  }
                }}
              >
                Suite Room
              </button>
              <button
                type="button"
                className={location === "/luxury-room" ? "text-[#FFA96B] font-bold" : ""}
                onClick={() => {
                  if (location !== "/luxury-room") setLocation("/luxury-room");
                }}
              >
                Luxury Room
              </button>
              <button
                type="button"
                className={location === "/luxury-room-2" ? "text-[#FFA96B] font-bold" : ""}
                onClick={() => {
                  if (location !== "/luxury-room-2") setLocation("/luxury-room-2");
                }}
              >
                Luxury Room 2
              </button>
              <button
                type="button"
                className={location === "/Luxury-Room-with-Shower-Glass-Partition" ? "text-[#FFA96B] font-bold" : ""}
                onClick={() => {
                  if (location !== "/Luxury-Room-with-Shower-Glass-Partition") {
                    setLocation("/Luxury-Room-with-Shower-Glass-Partition");
                  }
                }}
              >
                Luxury Room with Shower Glass Partition
              </button>
              <button
                type="button"
                className={location === "/deluxe-room" ? "text-[#FFA96B] font-bold" : ""}
                onClick={() => {
                  if (location !== "/deluxe-room") setLocation("/deluxe-room");
                }}
              >
                Deluxe Room
              </button>
            </div>
          </div>

          {/* Weddings & Events Dropdown */}
          <div className="nav-dropdown-wrapper">
            <button
              type="button"
              onClick={() => handleNavClick("celebrate")}
              className="flex items-center gap-1.5"
            >
              <span>Weddings & Events</span>
              <ChevronDown size={13} className="opacity-75 shrink-0" />
            </button>
            <div className="nav-dropdown-menu nav-dropdown-menu--wide">
              <div className="dropdown-col">
                <div className="nav-dropdown-header">Venues & Lawns</div>
                <button type="button" onClick={() => handleOpenBooking("Bhanwar Party Lawn")}>
                  Bhanwar Lawn (50–300)
                </button>
                <button type="button" onClick={() => handleOpenBooking("Chander Party Lawn")}>
                  Chander Lawn (200–2,500)
                </button>
                <button type="button" onClick={() => handleOpenBooking("Abhinandan Hall")}>
                  Abhinandan Hall (30–250)
                </button>
                <button type="button" onClick={() => handleOpenBooking("Swagatam Hall")}>
                  Swagatam Hall (Up to 150)
                </button>
              </div>
              <div className="dropdown-col">
                <div className="nav-dropdown-header">Occasions</div>
                <button type="button" onClick={() => handleOpenBooking("Wedding Reception")}>
                  Weddings & Receptions
                </button>
                <button type="button" onClick={() => handleOpenBooking("Sangeet & Haldi")}>
                  Mehendi & Sangeet
                </button>
                <button type="button" onClick={() => handleOpenBooking("Corporate Conference")}>
                  Corporate Offsites & Events
                </button>
              </div>
            </div>
          </div>

          {/* Experiences Nav Button */}
          <div className="nav-dropdown-wrapper">
            <button
              type="button"
              onClick={() => handleNavClick("experiences")}
              className="flex items-center gap-1.5"
            >
              <span>Experiences</span>
              <ChevronDown size={13} className="opacity-75 shrink-0" />
            </button>
            <div className="nav-dropdown-menu">
              <div className="nav-dropdown-header">Park Zones</div>
              <button type="button" onClick={() => handleOpenBooking("Water Park Day Visit")}>
                Water Park (21 Slides)
              </button>
              <button type="button" onClick={() => handleOpenBooking("Amusement Park Visit")}>
                Amusement Joyrides
              </button>
              <button type="button" onClick={() => handleOpenBooking("Activity Park Visit")}>
                Activity & Rope Courses
              </button>
              <button type="button" onClick={() => handleOpenBooking("Dine-in Buffet")}>
                Buffet Dining & Snacks
              </button>
            </div>
          </div>

          {/* Passes & Pricing */}
          <button type="button" onClick={() => handleNavClick("pricing")}>
            <span>Passes & Pricing</span>
          </button>

          {/* Rate Estimator */}
          <button type="button" onClick={() => handleNavClick("estimator")}>
            <Calculator size={14} className="text-[#F68734] shrink-0" />
            <span>Rate Estimator</span>
          </button>

          {/* Video Tour */}
          <button type="button" onClick={() => handleNavClick("video-tour")}>
            <Film size={14} className="text-[#01A5E1] shrink-0" />
            <span>Video Tour</span>
          </button>
        </nav>

        {/* Header Right Actions */}
        <div className="header-actions">
          <a className="phone-link" href="tel:+917666779997">
            <Phone size={15} /> <span>+91 7666 779 997</span>
          </a>
          <button
            className="button button--header"
            type="button"
            onClick={() => handleOpenBooking("Day visit / Room Booking")}
          >
            <MessageCircle size={16} /> WhatsApp us
          </button>

          {/* Mobile Drawer Trigger */}
          <button
            className="icon-button menu-toggle"
            type="button"
            aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Drawer Backdrop Overlay */}
        {isMenuOpen && (
          <div className="drawer-overlay" onClick={() => setIsMenuOpen(false)} aria-hidden="true" />
        )}

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-nav ${isMenuOpen ? "mobile-nav--open" : ""}`}>
          <div className="drawer-header">
            <span className="text-lg font-bold text-[#0E295B]">AapnoGhar Menu</span>
            <button type="button" onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
              <X size={24} />
            </button>
          </div>

          <div className="drawer-accordion-list">
            {/* Stay Accordion */}
            <div className="drawer-acc-item">
              <button
                type="button"
                className="drawer-acc-header"
                onClick={() => setOpenDrawerAcc(openDrawerAcc === "stay" ? null : "stay")}
              >
                <span>Stay & Accommodations</span>
                <ChevronDown
                  size={18}
                  className={`transition-transform ${openDrawerAcc === "stay" ? "rotate-180" : ""}`}
                />
              </button>
              {openDrawerAcc === "stay" && (
                <div className="drawer-acc-body">
                  <button
                    type="button"
                    onClick={() => {
                      setIsMenuOpen(false);
                      if (location !== "/presidential-suite-room-1") {
                        setLocation("/presidential-suite-room-1");
                      }
                    }}
                  >
                    Luxury Presidential Suite for Staycation &amp; Daycation in Gurgaon
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsMenuOpen(false);
                      if (location !== "/presidential-suite-room-2") {
                        setLocation("/presidential-suite-room-2");
                      }
                    }}
                  >
                    Presidential Suite for Staycation &amp; Daycation in Delhi NCR
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsMenuOpen(false);
                      if (location !== "/suite-room") {
                        setLocation("/suite-room");
                      }
                    }}
                  >
                    Suite Room
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsMenuOpen(false);
                      if (location !== "/luxury-room") setLocation("/luxury-room");
                    }}
                  >
                    Luxury Room
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsMenuOpen(false);
                      if (location !== "/luxury-room-2") setLocation("/luxury-room-2");
                    }}
                  >
                    Luxury Room 2
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsMenuOpen(false);
                      if (location !== "/Luxury-Room-with-Shower-Glass-Partition") {
                        setLocation("/Luxury-Room-with-Shower-Glass-Partition");
                      }
                    }}
                  >
                    Luxury Room with Shower Glass Partition
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsMenuOpen(false);
                      if (location !== "/deluxe-room") setLocation("/deluxe-room");
                    }}
                  >
                    Deluxe Room
                  </button>
                </div>
              )}
            </div>

            {/* Venues Accordion */}
            <div className="drawer-acc-item">
              <button
                type="button"
                className="drawer-acc-header"
                onClick={() => setOpenDrawerAcc(openDrawerAcc === "venues" ? null : "venues")}
              >
                <span>Weddings & Events</span>
                <ChevronDown
                  size={18}
                  className={`transition-transform ${openDrawerAcc === "venues" ? "rotate-180" : ""}`}
                />
              </button>
              {openDrawerAcc === "venues" && (
                <div className="drawer-acc-body">
                  <button type="button" onClick={() => handleOpenBooking("Bhanwar Lawn")}>
                    Bhanwar Party Lawn (50–300)
                  </button>
                  <button type="button" onClick={() => handleOpenBooking("Chander Lawn")}>
                    Chander Party Lawn (200–2,500)
                  </button>
                  <button type="button" onClick={() => handleOpenBooking("Abhinandan Hall")}>
                    Abhinandan Banquet Hall
                  </button>
                  <button type="button" onClick={() => handleOpenBooking("Swagatam Hall")}>
                    Swagatam Banquet Hall
                  </button>
                </div>
              )}
            </div>

            {/* Experiences Accordion */}
            <div className="drawer-acc-item">
              <button
                type="button"
                className="drawer-acc-header"
                onClick={() => setOpenDrawerAcc(openDrawerAcc === "experiences" ? null : "experiences")}
              >
                <span>Park Experiences</span>
                <ChevronDown
                  size={18}
                  className={`transition-transform ${openDrawerAcc === "experiences" ? "rotate-180" : ""}`}
                />
              </button>
              {openDrawerAcc === "experiences" && (
                <div className="drawer-acc-body">
                  <button type="button" onClick={() => handleOpenBooking("Water Park Day Pass")}>
                    Water Park (21+ Slides)
                  </button>
                  <button type="button" onClick={() => handleOpenBooking("Amusement Park Pass")}>
                    Amusement Joyrides
                  </button>
                  <button type="button" onClick={() => handleOpenBooking("Activity Park Pass")}>
                    Activity & Rope Course
                  </button>
                </div>
              )}
            </div>

            {/* Single Links */}
            <button
              type="button"
              className="drawer-link-item"
              onClick={() => handleNavClick("pricing")}
            >
              <span>Passes & Pricing</span>
            </button>

            <button
              type="button"
              className="drawer-link-item"
              onClick={() => handleNavClick("estimator")}
            >
              <Calculator size={16} className="text-[#F68734]" />
              <span>Rate Estimator</span>
            </button>

            <button
              type="button"
              className="drawer-link-item"
              onClick={() => handleNavClick("video-tour")}
            >
              <Film size={16} className="text-[#01A5E1]" />
              <span>Video Tour</span>
            </button>
          </div>

          <div className="drawer-footer">
            <a href="tel:+917666779997" className="drawer-phone">
              <Phone size={18} />
              <span>+91 7666 779 997</span>
            </a>
            <button
              type="button"
              className="button button--coral w-full"
              onClick={() => handleOpenBooking("Instant Inquiry")}
            >
              Book Now / WhatsApp
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
