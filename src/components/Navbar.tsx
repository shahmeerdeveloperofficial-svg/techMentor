import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Globe,
  Smartphone,
  Palette,
  TrendingUp,
  Search,
  Bot,
  ShoppingBag,
  Share2,
  Video,
  Phone,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { COMPANY_CONFIG } from "../data/companyConfig";
import { useApplyModal } from "../context/ApplyModalContext";
import { useLocationModal } from "../context/LocationModalContext";

const courseNavItems = [
  { name: "Digital Marketing", slug: "digital-marketing", icon: TrendingUp, category: "Marketing" },
  { name: "SEO", slug: "seo", icon: Search, category: "Marketing" },
  { name: "Agentic AI", slug: "agentic-ai", icon: Bot, category: "Dev & AI" },
  { name: "Full Stack Web Development", slug: "web-development", icon: Globe, category: "Dev & AI" },
  { name: "App Development", slug: "mobile-app-development", icon: Smartphone, category: "Dev & AI" },
  { name: "Shopify eCommerce", slug: "shopify-ecommerce", icon: ShoppingBag, category: "Marketing" },
  { name: "Social Media Marketing", slug: "social-media-marketing", icon: Share2, category: "Marketing" },
  { name: "Graphic Designing", slug: "graphic-designing", icon: Palette, category: "Creative" },
  { name: "Video Editing", slug: "video-editing", icon: Video, category: "Creative" },
];

export default function Navbar() {
  const { openModal } = useApplyModal();
  const { openLocationModal } = useLocationModal();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
    setCoursesDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setCoursesDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative text-[13px] xl:text-sm font-medium transition-all duration-200 py-1.5 whitespace-nowrap inline-flex items-center shrink-0 leading-none ${
      isActive
        ? "text-[#00D2FF] font-semibold drop-shadow-[0_0_8px_rgba(0,210,255,0.4)]"
        : "text-[#94A3B8] hover:text-[#F8FAFC]"
    }`;

  const isCoursesActive = location.pathname.startsWith("/services");

  return (
    <header className="sticky top-0 z-50 w-full bg-[#08090E]/95 backdrop-blur-md border-b border-[#22293D]">
      {/* Top Institutional Utility Bar */}
      <div className="bg-[#05060A] border-b border-[#1A2030] text-xs text-[#94A3B8] py-1.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <a
              href={`tel:${COMPANY_CONFIG.contact.phone}`}
              className="inline-flex items-center gap-1.5 hover:text-[#00D2FF] transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#00D2FF]" />
              <span>{COMPANY_CONFIG.contact.phone}</span>
            </a>
            <a
              href={`mailto:${COMPANY_CONFIG.contact.email}`}
              className="hidden sm:inline-flex items-center gap-1.5 hover:text-[#00D2FF] transition-colors whitespace-nowrap"
            >
              <Mail className="w-3.5 h-3.5 text-[#00D2FF]" />
              <span>{COMPANY_CONFIG.contact.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-4 whitespace-nowrap">
            <button
              type="button"
              onClick={openLocationModal}
              className="inline-flex items-center gap-1.5 text-[#CBD5E1] hover:text-[#00D2FF] bg-transparent hover:bg-[#141824] px-2 py-0.5 rounded-md transition-all cursor-pointer group focus:outline-none focus:ring-1 focus:ring-[#0066FF]"
              title="Click to view interactive campus map & directions"
            >
              <MapPin className="w-3.5 h-3.5 text-[#00D2FF] transition-transform duration-200 group-hover:scale-125" />
              <span className="underline decoration-dotted decoration-[#00D2FF]/60 underline-offset-4 group-hover:decoration-solid">
                China Scheme, Lahore
              </span>
              <span className="hidden sm:inline-flex items-center text-[10px] text-[#00D2FF] bg-[#0066FF]/20 px-1.5 py-0.5 rounded border border-[#0066FF]/30 font-mono">
                Map ↗
              </span>
            </button>
            <span className="hidden md:inline text-[#22293D]">•</span>
            <span className="hidden md:inline text-emerald-400 font-medium">
              Admissions Open (On-Campus & Online)
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-22 sm:h-24 flex items-center justify-between gap-4">
        {/* Brand Logo & Name — Bold, Prominent & High-Visibility */}
        <Link
          to="/"
          className="flex items-center gap-3.5 group focus:outline-none focus:ring-2 focus:ring-[#0066FF] rounded-xl p-1 shrink-0"
          aria-label={`${COMPANY_CONFIG.name} Homepage`}
        >
          <img
            src={COMPANY_CONFIG.logoUrl}
            alt={COMPANY_CONFIG.name}
            className="h-14 sm:h-16 md:h-18 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_0_18px_rgba(0,102,255,0.6)]"
          />
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-black tracking-tight flex items-center whitespace-nowrap">
              <span className="chrome-text">TECH</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] via-[#00A3FF] to-[#00D2FF] ml-1 drop-shadow-[0_0_12px_rgba(0,210,255,0.5)]">
                MENTORS
              </span>
            </span>
            <span className="text-[10px] tracking-widest text-[#94A3B8] uppercase font-bold whitespace-nowrap">
              {COMPANY_CONFIG.tagline}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links — 1 Single Crisp Horizontal Line */}
        <nav
          className="hidden lg:flex items-center gap-3 lg:gap-4 xl:gap-6 2xl:gap-7 shrink-0"
          aria-label="Main Navigation"
        >
          <NavLink to="/" className={navLinkClass} end>
            Home
          </NavLink>

          {/* Courses with Dropdown */}
          <div className="relative shrink-0 flex items-center" ref={dropdownRef}>
            <button
              onClick={() => setCoursesDropdownOpen(!coursesDropdownOpen)}
              onMouseEnter={() => setCoursesDropdownOpen(true)}
              className={`inline-flex items-center gap-1.5 text-[13px] xl:text-sm font-medium transition-colors duration-150 py-1.5 whitespace-nowrap shrink-0 leading-none focus:outline-none focus:ring-2 focus:ring-[#0066FF] rounded ${
                isCoursesActive
                  ? "text-[#00D2FF] font-semibold"
                  : "text-[#94A3B8] hover:text-[#F8FAFC]"
              }`}
              aria-expanded={coursesDropdownOpen}
              aria-haspopup="true"
            >
              <span>Courses</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 shrink-0 ${
                  coursesDropdownOpen ? "rotate-180 text-[#00D2FF]" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {coursesDropdownOpen && (
              <div
                onMouseLeave={() => setCoursesDropdownOpen(false)}
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[480px] rounded-xl bg-[#0E111A] border border-[#22293D] p-3 shadow-2xl shadow-black/80 animate-in fade-in slide-in-from-top-2 duration-150 z-50"
              >
                <div className="px-3 py-2 border-b border-[#22293D] mb-2 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#94A3B8] uppercase tracking-wider">
                    Our 9 Career Courses
                  </span>
                  <Link
                    to="/services"
                    className="text-xs text-[#00D2FF] hover:text-[#38BDF8] font-medium flex items-center gap-1 transition-colors"
                    onClick={() => setCoursesDropdownOpen(false)}
                  >
                    View All Courses <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  {courseNavItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.slug}
                        to={`/services/${item.slug}`}
                        className="flex items-center gap-2.5 p-2 rounded-lg text-sm text-[#F8FAFC] hover:bg-[#141824] hover:text-[#00D2FF] transition-all group"
                        onClick={() => setCoursesDropdownOpen(false)}
                      >
                        <div className="p-1.5 rounded-md bg-[#141824] text-[#00D2FF] border border-[#22293D] group-hover:border-[#0066FF] transition-colors shrink-0">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div className="truncate">
                          <div className="font-medium text-xs text-[#F8FAFC] group-hover:text-[#00D2FF] truncate">
                            {item.name}
                          </div>
                          <span className="text-[10px] text-[#64748B]">
                            {item.category}
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <NavLink to="/about" className={navLinkClass}>
            About Us
          </NavLink>
          <NavLink to="/portfolio" className={navLinkClass}>
            Projects
          </NavLink>
          <NavLink to="/process" className={navLinkClass}>
            Learning Journey
          </NavLink>
          <NavLink to="/technologies" className={navLinkClass}>
            Technologies
          </NavLink>
          <NavLink to="/careers" className={navLinkClass}>
            Careers
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact & Admissions
          </NavLink>
        </nav>

        {/* Right CTA Button with Shimmer & Modal Trigger */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <button
            onClick={() => openModal()}
            className="brand-gradient-btn inline-flex items-center justify-center gap-1.5 px-6 py-2.5 rounded-xl text-sm font-semibold text-white whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#0066FF] cursor-pointer shadow-lg hover:shadow-[0_0_20px_rgba(0,102,255,0.6)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" />
            <span>Apply Now</span>
          </button>
        </div>

        {/* Mobile / Tablet Hamburger Button */}
        <div className="flex lg:hidden items-center gap-3 shrink-0">
          <button
            onClick={() => openModal()}
            className="brand-gradient-btn px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white whitespace-nowrap cursor-pointer shadow-md"
          >
            Apply
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#94A3B8] hover:text-white hover:bg-[#141824] focus:outline-none focus:ring-2 focus:ring-[#0066FF]"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[115px] bottom-0 bg-[#08090E]/98 border-t border-[#22293D] overflow-y-auto px-6 py-6 flex flex-col justify-between z-50">
          <nav className="flex flex-col space-y-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-base font-medium py-2 border-b border-[#22293D]/60 ${
                  isActive ? "text-[#00D2FF] font-semibold" : "text-[#94A3B8]"
                }`
              }
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-base font-medium py-2 border-b border-[#22293D]/60 ${
                  isActive ? "text-[#00D2FF] font-semibold" : "text-[#94A3B8]"
                }`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `text-base font-medium py-2 border-b border-[#22293D]/60 ${
                  isActive ? "text-[#00D2FF] font-semibold" : "text-[#94A3B8]"
                }`
              }
            >
              Courses Overview (9 Programs)
            </NavLink>
            <div className="pl-4 space-y-1.5 border-l border-[#22293D]">
              {courseNavItems.map((s) => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="block text-xs text-[#94A3B8] hover:text-[#00D2FF] py-1"
                >
                  {s.name}
                </Link>
              ))}
            </div>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                `text-base font-medium py-2 border-b border-[#22293D]/60 ${
                  isActive ? "text-[#00D2FF] font-semibold" : "text-[#94A3B8]"
                }`
              }
            >
              Projects & Portfolios
            </NavLink>
            <NavLink
              to="/process"
              className={({ isActive }) =>
                `text-base font-medium py-2 border-b border-[#22293D]/60 ${
                  isActive ? "text-[#00D2FF] font-semibold" : "text-[#94A3B8]"
                }`
              }
            >
              Learning Journey (4 Steps)
            </NavLink>
            <NavLink
              to="/technologies"
              className={({ isActive }) =>
                `text-base font-medium py-2 border-b border-[#22293D]/60 ${
                  isActive ? "text-[#00D2FF] font-semibold" : "text-[#94A3B8]"
                }`
              }
            >
              Technologies
            </NavLink>
            <NavLink
              to="/careers"
              className={({ isActive }) =>
                `text-base font-medium py-2 border-b border-[#22293D]/60 ${
                  isActive ? "text-[#00D2FF] font-semibold" : "text-[#94A3B8]"
                }`
              }
            >
              Careers & Trainers
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-base font-medium py-2 border-b border-[#22293D]/60 ${
                  isActive ? "text-[#00D2FF] font-semibold" : "text-[#94A3B8]"
                }`
              }
            >
              Admissions & Contact
            </NavLink>
          </nav>

          <div className="pt-6 border-t border-[#22293D] space-y-3">
            <div className="text-xs text-[#94A3B8] space-y-1">
              <div>Phone / WhatsApp: <strong className="text-[#F8FAFC]">0310 2199253</strong></div>
              <div>
                Campus:{" "}
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openLocationModal();
                  }}
                  className="text-[#00D2FF] font-semibold underline underline-offset-2 inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>China Scheme, Lahore</span>
                  <MapPin className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openModal();
              }}
              className="brand-gradient-btn w-full block text-center py-3 rounded-xl text-sm font-semibold text-white cursor-pointer shadow-lg"
            >
              Apply for Admission
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
