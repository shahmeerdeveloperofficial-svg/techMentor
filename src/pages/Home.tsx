import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Users,
  Code2,
  Layers,
  Sparkles,
  Zap,
  Target,
  MessageSquare,
  Scale,
  Compass,
  LifeBuoy,
  GraduationCap,
  Stethoscope,
  ShoppingBag,
  Truck,
  Briefcase,
  Building2,
  Award,
  MapPin,
  Laptop,
  Wifi,
  Cpu,
  Navigation,
  Car,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import ProjectCard from "../components/ProjectCard";
import BrowserMockup from "../components/BrowserMockup";
import TechGlobe3D from "../components/TechGlobe3D";
import TiltCard from "../components/TiltCard";
import FaqAccordion from "../components/FaqAccordion";
import ConversionBanner from "../components/ConversionBanner";
import { useApplyModal } from "../context/ApplyModalContext";
import { useLocationModal } from "../context/LocationModalContext";
import {
  COMPANY_CONFIG,
  SERVICES_DATA,
  PORTFOLIO_DATA,
  PROCESS_STEPS,
  WHY_CHOOSE_US,
  INDUSTRIES_SERVED,
  FAQ_DATA,
} from "../data/companyConfig";

const techStrip = [
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "AI Agents",
  "Meta Ads",
  "Google Ads",
  "SEO",
  "Shopify",
  "Premiere Pro",
  "Figma",
  "Laravel",
];

const industryIconMap: Record<string, React.ElementType> = {
  GraduationCap,
  Stethoscope,
  ShoppingBag,
  Truck,
  Briefcase,
  Building2,
};

const benefitIconMap: Record<string, React.ElementType> = {
  Users,
  Code2,
  CheckCircle2,
  Compass,
  Briefcase,
  LifeBuoy,
  Target,
  MessageSquare,
  Scale,
};

export default function Home() {
  const { openModal } = useApplyModal();
  const { openLocationModal } = useLocationModal();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [heroMode, setHeroMode] = useState<"globe" | "telemetry">("globe");

  const categories = [
    { label: `All Courses (${SERVICES_DATA.length})`, value: "All" },
    {
      label: `Dev & AI (${SERVICES_DATA.filter((s) => s.category === "Development & AI").length})`,
      value: "Development & AI",
    },
    {
      label: `Marketing (${SERVICES_DATA.filter((s) => s.category === "Marketing").length})`,
      value: "Marketing",
    },
    {
      label: `Creative (${SERVICES_DATA.filter((s) => s.category === "Creative").length})`,
      value: "Creative",
    },
  ];

  const filteredCourses =
    selectedCategory === "All"
      ? SERVICES_DATA.slice(0, 9)
      : SERVICES_DATA.filter((s) => s.category === selectedCategory);

  return (
    <div className="space-y-0">
      {/* ========================================================
          SECTION 02 — HERO BANNER (Electric Blue & Cyan Studio)
          ======================================================== */}
      <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-32 overflow-hidden bg-[#08090E]">
        {/* Glowing electric blue & cyan ambient background orbs */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#0066FF]/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
        <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-[#00D2FF]/12 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-left">
              {/* Small Label */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E111A] border border-[#22293D] text-xs font-semibold text-[#00D2FF] shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#00D2FF] animate-pulse" />
                <span className="tracking-wider uppercase">
                  PRACTICAL IT & DIGITAL SKILLS TRAINING · LAHORE
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F8FAFC] tracking-tight leading-[1.12]">
                Build Future-Ready Tech Skills That{" "}
                <span className="brand-gradient-text">
                  Open Real Opportunities.
                </span>
              </h1>

              {/* Supporting Paragraph */}
              <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-xl">
                Practical, industry-focused courses in development, AI, digital marketing and design in China Scheme, Lahore. Learn from experienced trainers, build real projects, and continue into an internship under a written agreement.
              </p>

              {/* CTAs with Shimmer Animation */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => openModal()}
                  className="brand-gradient-btn inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-white focus:outline-none focus:ring-2 focus:ring-[#0066FF] cursor-pointer shadow-lg hover:shadow-[0_0_20px_rgba(0,102,255,0.6)]"
                >
                  <Sparkles className="w-4 h-4 text-[#00D2FF]" />
                  <span>Apply for Admission</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>

                <a
                  href="#courses"
                  className="brand-outline-btn inline-flex items-center justify-center px-7 py-4 rounded-xl text-base font-semibold"
                >
                  Explore 9 Courses
                </a>
              </div>

              {/* Verified Trust Badges */}
              <div className="pt-4 border-t border-[#22293D] grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-[#94A3B8]">
                <div className="flex items-center gap-2 group cursor-default">
                  <Code2 className="w-4 h-4 text-[#00D2FF] shrink-0 transition-transform group-hover:scale-110" />
                  <span className="group-hover:text-[#F8FAFC] transition-colors">9 Career Courses</span>
                </div>
                <div className="flex items-center gap-2 group cursor-default">
                  <ShieldCheck className="w-4 h-4 text-[#38BDF8] shrink-0 transition-transform group-hover:scale-110" />
                  <span className="group-hover:text-[#F8FAFC] transition-colors">On-Campus & Online</span>
                </div>
                <div className="flex items-center gap-2 group cursor-default">
                  <Award className="w-4 h-4 text-emerald-400 shrink-0 transition-transform group-hover:scale-110" />
                  <span className="group-hover:text-[#F8FAFC] transition-colors">Certificate Awarded</span>
                </div>
                <div className="flex items-center gap-2 group cursor-default">
                  <Zap className="w-4 h-4 text-[#00D2FF] shrink-0 transition-transform group-hover:scale-110" />
                  <span className="group-hover:text-[#F8FAFC] transition-colors">Internship Track</span>
                </div>
              </div>

              {/* High-Impact Institutional Performance Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-[#0E111A]/90 border border-[#22293D] hover:border-[#0066FF]/60 hover:-translate-y-0.5 transition-all">
                  <div className="text-xl sm:text-2xl font-black text-[#F8FAFC] font-mono flex items-center">
                    <span>9</span>
                    <span className="text-[#00D2FF]">+</span>
                  </div>
                  <div className="text-[11px] text-[#94A3B8]">Career Tracks</div>
                </div>

                <div className="p-3 rounded-xl bg-[#0E111A]/90 border border-[#22293D] hover:border-[#00D2FF]/60 hover:-translate-y-0.5 transition-all">
                  <div className="text-xl sm:text-2xl font-black text-[#00D2FF] font-mono">100%</div>
                  <div className="text-[11px] text-[#94A3B8]">Hands-On Labs</div>
                </div>

                <div className="p-3 rounded-xl bg-[#0E111A]/90 border border-[#22293D] hover:border-emerald-500/60 hover:-translate-y-0.5 transition-all">
                  <div className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">1-on-1</div>
                  <div className="text-[11px] text-[#94A3B8]">Mentor Reviews</div>
                </div>

                <div className="p-3 rounded-xl bg-[#0E111A]/90 border border-[#22293D] hover:border-[#38BDF8]/60 hover:-translate-y-0.5 transition-all">
                  <div className="text-xl sm:text-2xl font-black text-[#38BDF8] font-mono">Signed</div>
                  <div className="text-[11px] text-[#94A3B8]">Internship Deal</div>
                </div>
              </div>
            </div>

            {/* Right Column: 3D Interactive Tech Studio Showcase */}
            <div className="lg:col-span-6 relative">
              {/* Interactive View Switcher */}
              <div className="flex items-center justify-between gap-2 mb-3 px-1">
                <div className="flex items-center gap-1.5 text-xs text-[#94A3B8]">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <button
                    type="button"
                    onClick={openLocationModal}
                    className="font-mono text-[11px] text-[#CBD5E1] hover:text-[#00D2FF] flex items-center gap-1 cursor-pointer transition-colors group"
                    title="Click to open interactive campus map & directions"
                  >
                    <span>China Scheme Hub</span>
                    <MapPin className="w-3.5 h-3.5 text-[#00D2FF] group-hover:scale-110 transition-transform" />
                  </button>
                </div>

                <div className="inline-flex rounded-lg bg-[#0E111A] border border-[#22293D] p-1">
                  <button
                    onClick={() => setHeroMode("globe")}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold transition-all duration-200 cursor-pointer ${
                      heroMode === "globe"
                        ? "bg-[#0066FF] text-white shadow-[0_0_12px_rgba(0,102,255,0.4)]"
                        : "text-[#94A3B8] hover:text-white"
                    }`}
                  >
                    <Sparkles className="w-3 h-3 text-[#00D2FF]" />
                    <span>3D Tech Globe</span>
                  </button>
                  <button
                    onClick={() => setHeroMode("telemetry")}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold transition-all duration-200 cursor-pointer ${
                      heroMode === "telemetry"
                        ? "bg-[#0066FF] text-white shadow-[0_0_12px_rgba(0,102,255,0.4)]"
                        : "text-[#94A3B8] hover:text-white"
                    }`}
                  >
                    <Layers className="w-3 h-3 text-[#38BDF8]" />
                    <span>Live Telemetry</span>
                  </button>
                </div>
              </div>

              {heroMode === "globe" ? (
                <div className="relative rounded-2xl bg-[#0E111A]/90 border border-[#22293D] p-4 sm:p-6 shadow-2xl backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-[#00D2FF]/40">
                  {/* Glowing background radial auras */}
                  <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#0066FF]/20 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-[#00D2FF]/15 rounded-full blur-3xl pointer-events-none" />

                  {/* Header bar */}
                  <div className="flex items-center justify-between pb-3 mb-2 border-b border-[#22293D]">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#00D2FF] shadow-[0_0_8px_#00D2FF]" />
                      <span className="text-xs font-mono font-semibold text-[#F8FAFC]">
                        Tech Mentors 3D Interactive Engine
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[#00D2FF] bg-[#141824] px-2 py-0.5 rounded border border-[#22293D]">
                      60 FPS Vector Canvas
                    </span>
                  </div>

                  {/* 3D Canvas Center */}
                  <TechGlobe3D size={400} className="my-auto py-1" />

                  {/* Floating 3D Stat Pills Around the Globe */}
                  <div className="grid grid-cols-2 gap-2.5 pt-3 border-t border-[#22293D]/80">
                    <div className="p-2.5 rounded-xl bg-[#141824] border border-[#22293D] flex items-center gap-2.5 hover:border-[#0066FF]/40 transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-[#0066FF]/20 border border-[#0066FF]/40 flex items-center justify-center text-[#00D2FF] shrink-0">
                        <Award className="w-4 h-4" />
                      </div>
                      <div className="truncate text-left">
                        <div className="text-xs font-bold text-[#F8FAFC]">Certificate Awarded</div>
                        <div className="text-[10px] text-[#94A3B8]">On Course Completion</div>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-[#141824] border border-[#22293D] flex items-center gap-2.5 hover:border-[#00D2FF]/40 transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-[#00D2FF]/20 border border-[#00D2FF]/40 flex items-center justify-center text-[#00D2FF] shrink-0">
                        <Briefcase className="w-4 h-4" />
                      </div>
                      <div className="truncate text-left">
                        <div className="text-xs font-bold text-[#F8FAFC]">Internship Track</div>
                        <div className="text-[10px] text-[#94A3B8]">Written Agreement</div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <BrowserMockup />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 03 — TECHNOLOGY EXPERTISE STRIP
          ======================================================== */}
      <section className="py-10 bg-[#0E111A] border-y border-[#22293D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="shrink-0">
              <span className="text-xs font-bold uppercase tracking-wider text-[#94A3B8]">
                Proven Core Technologies & Tools:
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {techStrip.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-lg bg-[#141824] border border-[#22293D] text-xs font-mono text-[#F8FAFC] hover:border-[#00D2FF] hover:text-[#00D2FF] hover:shadow-[0_0_12px_rgba(0,210,255,0.25)] hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 04 — OUR COURSES (With Interactive Track Filter)
          ======================================================== */}
      <section id="courses" className="py-20 sm:py-28 bg-[#08090E] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="OUR COURSES"
            title="Courses Designed for Real Careers"
            highlightedPhrase="Real Careers"
            description="Every course starts from the basics and ends with a portfolio of practical work. Choose a track below, then apply in one step."
          />

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat.value
                    ? "bg-[#0066FF] text-white shadow-[0_0_15px_rgba(0,102,255,0.4)]"
                    : "bg-[#141824] border border-[#22293D] text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#00D2FF]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Interactive Batch Information Strip */}
          <div className="mb-8 flex flex-col sm:flex-row items-center justify-between gap-3 p-4 rounded-2xl bg-[#0E111A] border border-[#22293D] shadow-lg text-xs">
            <div className="flex items-center gap-2.5 text-[#CBD5E1]">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span className="font-bold text-[#F8FAFC]">Admissions Active:</span>
              <span className="text-[#94A3B8]">
                Morning, Evening & Weekend Batches in China Scheme, Lahore or Live Online
              </span>
            </div>
            <button
              type="button"
              onClick={() => openModal()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0066FF]/20 text-[#00D2FF] hover:bg-[#0066FF] hover:text-white border border-[#0066FF]/40 font-semibold transition-all cursor-pointer shadow-sm shrink-0"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Reserve Seat In Next Batch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="brand-outline-btn inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold"
            >
              <span>Explore Detailed Syllabus of All 9 Courses</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 05 — ABOUT TECH MENTORS (Split Layout with Campus Visuals)
          ======================================================== */}
      <section className="py-20 sm:py-28 bg-[#0E111A] border-t border-[#22293D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Studio & Campus Visual Showcase */}
            <div className="lg:col-span-6 relative">
              <TiltCard>
                <div className="rounded-3xl bg-[#141824] border border-[#22293D] p-4 sm:p-5 shadow-2xl relative overflow-hidden group hover:border-[#00D2FF]/50 transition-all duration-300">
                  {/* Main Campus Lab Image */}
                  <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden bg-[#08090E]">
                    <img
                      src="/images/campus/lab.jpg"
                      alt="Tech Mentors Computer Lab and Classroom in China Scheme Lahore"
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141824] via-transparent to-black/30" />

                    {/* Top Location Badge — Clickable with Direct Map Modal */}
                    <div className="absolute top-3 left-3 z-10">
                      <button
                        type="button"
                        onClick={openLocationModal}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#08090E]/85 backdrop-blur-md border border-[#22293D] hover:border-[#00D2FF] text-xs font-semibold text-[#00D2FF] transition-all cursor-pointer shadow-lg group"
                        title="Click to view interactive campus map & directions"
                      >
                        <MapPin className="w-3.5 h-3.5 text-[#00D2FF] group-hover:scale-110 transition-transform" />
                        <span>China Scheme, Lahore Campus</span>
                        <span className="text-[10px] bg-[#0066FF]/20 px-1.5 py-0.5 rounded border border-[#0066FF]/30 font-mono">Map ↗</span>
                      </button>
                    </div>

                    <div className="absolute top-3 right-3 z-10">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/40 text-[11px] font-semibold text-emerald-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Admissions Open
                      </span>
                    </div>
                  </div>

                  {/* Overlapping Secondary Mentorship Card */}
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                    {/* Small Inset Photo */}
                    <div className="sm:col-span-5 h-28 rounded-xl overflow-hidden relative border border-[#22293D]">
                      <img
                        src="/images/campus/mentorship.jpg"
                        alt="1-on-1 Mentor Guidance"
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-2">
                        <span className="text-[10px] font-mono text-[#00D2FF]">1-on-1 Code Reviews</span>
                      </div>
                    </div>

                    {/* Stats List */}
                    <div className="sm:col-span-7 space-y-2 text-xs">
                      <div className="flex items-center gap-2 text-[#F8FAFC]">
                        <CheckCircle2 className="w-4 h-4 text-[#00D2FF] shrink-0" />
                        <span>Hands-On Portfolio Projects in Every Course</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#F8FAFC]">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Verified Certificate on Completion</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#F8FAFC]">
                        <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0" />
                        <span>Internship Track Under Written Agreement</span>
                      </div>
                    </div>
                  </div>

                  {/* On-Campus Lab Infrastructure Specifications */}
                  <div className="mt-4 p-4 rounded-2xl bg-[#0E111A] border border-[#22293D] space-y-2.5">
                    <div className="flex items-center justify-between border-b border-[#22293D] pb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#00D2FF] flex items-center gap-1.5">
                        <Laptop className="w-3.5 h-3.5" />
                        <span>High-Tech Lab Specifications</span>
                      </span>
                      <button
                        type="button"
                        onClick={openLocationModal}
                        className="text-[11px] font-semibold text-[#38BDF8] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <span>View Campus Map</span>
                        <Navigation className="w-3 h-3" />
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[11px] text-[#CBD5E1]">
                      <div className="flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5 text-[#00D2FF] shrink-0" />
                        <span>Core i7/i9 Workstations</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>100% Zero-Downtime Power</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Wifi className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                        <span>Dual 100 Mbps Fiber Lines</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Car className="w-3.5 h-3.5 text-[#00D2FF] shrink-0" />
                        <span>Ring Road Transit & Parking</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </div>

            {/* Right: Company Introduction & Target Audiences */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00D2FF] shadow-[0_0_8px_#00D2FF] animate-pulse"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#00D2FF]">
                  About Tech Mentors
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight">
                A Practical Tech Training Institute{" "}
                <span className="brand-gradient-text">in Lahore</span>
              </h2>

              <p className="text-base text-[#94A3B8] leading-relaxed">
                Tech Mentors is a practical tech institute and training centre in China Scheme, Lahore. We help students and professionals learn in-demand digital skills, gain real-world experience and become job-ready for today's competitive market.
              </p>

              {/* Target Audiences Grid (The 4 Groups from Reference) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {COMPANY_CONFIG.targetAudiences.map((aud) => (
                  <TiltCard key={aud.audience} maxTilt={5}>
                    <div className="p-4 rounded-xl bg-[#141824] border border-[#22293D] transition-all hover:border-[#00D2FF]/50 h-full">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#00D2FF] font-bold block mb-1">
                        {aud.audience}
                      </span>
                      <h4 className="text-sm font-bold text-[#F8FAFC]">
                        {aud.title}
                      </h4>
                      <p className="text-xs text-[#94A3B8] mt-1 leading-relaxed">
                        {aud.description}
                      </p>
                    </div>
                  </TiltCard>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  to="/about"
                  className="brand-outline-btn inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold"
                >
                  <span>Learn More About Tech Mentors</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 06 — WHY CHOOSE US (6 Refined Benefit Cards)
          ======================================================== */}
      <section className="py-20 sm:py-28 bg-[#08090E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="WHY TECH MENTORS"
            title="Training That Leads to Real Opportunities"
            highlightedPhrase="Real Opportunities"
            description="We focus on what employers and clients actually look for: practical skills, a strong portfolio and real work experience."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.map((item) => {
              const IconComp = benefitIconMap[item.icon] || CheckCircle2;
              return (
                <TiltCard key={item.title} className="h-full">
                  <div className="studio-card rounded-2xl p-7 flex flex-col justify-between h-full bg-[#141824] border border-[#22293D] hover:border-[#00D2FF]/50 transition-all duration-300">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-[#0E111A] border border-[#22293D] flex items-center justify-center text-[#00D2FF] mb-5 shadow-sm group-hover:border-[#0066FF] group-hover:shadow-[0_0_15px_rgba(0,102,255,0.4)] transition-all">
                        <IconComp className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <h3 className="text-lg font-bold text-[#F8FAFC] mb-3 group-hover:text-[#00D2FF] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#94A3B8] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 07 — LEARNING JOURNEY (4 Steps with 3D Tilt)
          ======================================================== */}
      <section className="py-20 sm:py-28 bg-[#0E111A] border-t border-[#22293D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="LEARNING JOURNEY"
            title="Learn. Practise. Build. Grow."
            highlightedPhrase="Grow."
            description="Every course follows the same four stages, from your first class to your first opportunity."
          />

          {/* Visual Step Connection Pipeline */}
          <div className="hidden lg:grid grid-cols-4 gap-4 mb-8 max-w-5xl mx-auto">
            {PROCESS_STEPS.map((s, idx) => (
              <div key={s.step} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#141824] border-2 border-[#0066FF] text-[#00D2FF] flex items-center justify-center font-mono text-xs font-bold shadow-[0_0_12px_rgba(0,102,255,0.4)] shrink-0">
                  0{idx + 1}
                </div>
                <div className="truncate">
                  <span className="text-xs font-bold text-[#F8FAFC] tracking-wider uppercase block">
                    {s.title}
                  </span>
                  <span className="text-[10px] text-[#64748B]">Step {idx + 1} of 4</span>
                </div>
                {idx < PROCESS_STEPS.length - 1 && (
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-[#0066FF] to-[#00D2FF]/40 ml-2" />
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step) => (
              <TiltCard key={step.step} className="h-full">
                <div className="studio-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between h-full relative overflow-hidden bg-[#141824] border border-[#22293D] hover:border-[#00D2FF]/50 transition-all duration-300">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-3xl font-extrabold font-mono text-[#0066FF] drop-shadow-[0_0_10px_rgba(0,102,255,0.5)]">
                        {step.step}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#08090E] border border-[#22293D] text-[#00D2FF]">
                        Stage {step.step}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#F8FAFC] mb-3 group-hover:text-[#00D2FF] transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#22293D]">
                    <div className="text-[11px] font-semibold text-[#00D2FF] uppercase tracking-wider mb-2">
                      Key Outputs:
                    </div>
                    <ul className="space-y-1.5">
                      {step.deliverables.slice(0, 2).map((d, i) => (
                        <li
                          key={i}
                          className="text-xs text-[#94A3B8] flex items-center gap-1.5 truncate"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]"></span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/process"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#00D2FF] hover:text-[#38BDF8] transition-colors"
            >
              <span>Explore Our Complete 8-Stage Curriculum Workflow</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 08 — FEATURED PORTFOLIO (Selected Work)
          ======================================================== */}
      <section className="py-20 sm:py-28 bg-[#08090E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="PORTFOLIO & PRACTICAL WORK"
            title="Projects Built by Tech Mentors Students & Studio"
            highlightedPhrase="Built by Tech Mentors"
            description="Explore representative software systems and digital platforms engineered for reliability, user engagement, and measurable outcomes."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO_DATA.slice(0, 3).map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/portfolio"
              className="brand-outline-btn inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold"
            >
              <span>View All Project Case Studies</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 09 — DOMAIN APPLICATION
          ======================================================== */}
      <section className="py-20 sm:py-28 bg-[#0E111A] border-t border-[#22293D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="CAREER HORIZONS"
            title="Sectors Hiring Tech Mentors Graduates"
            highlightedPhrase="Hiring Tech Mentors"
            description="Our students and interns apply their skills across diverse, fast-growing domestic and international industries."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES_SERVED.map((ind) => {
              const IndIcon = industryIconMap[ind.icon] || Building2;
              return (
                <div
                  key={ind.name}
                  className="studio-card rounded-2xl p-6 sm:p-7 flex items-start gap-5"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#08090E] border border-[#22293D] flex items-center justify-center text-[#00D2FF] shrink-0">
                    <IndIcon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#F8FAFC] mb-1.5 group-hover:text-[#00D2FF] transition-colors">
                      {ind.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                      {ind.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 10 — TRAINING & INTERNSHIP COMMITMENTS
          ======================================================== */}
      <section className="py-20 sm:py-28 bg-[#08090E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#141824] border border-[#22293D] p-8 sm:p-12 lg:p-16 shadow-2xl transition-all duration-300 hover:border-[#0066FF]/40">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
              <div className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00D2FF] shadow-[0_0_8px_#00D2FF]"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#00D2FF]">
                  TRAINING & INTERNSHIP COMMITMENTS
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
                Skills Today | Better Tomorrow
              </h2>
              <p className="text-sm sm:text-base text-[#94A3B8]">
                Every student experiences structured learning, tangible project creation, and the opportunity to gain real workplace experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-[#0E111A] border border-[#22293D] space-y-3 transition-all hover:border-[#00D2FF]/40 hover:-translate-y-1">
                <div className="text-emerald-400 font-mono text-xs font-bold uppercase">
                  Pillar 01
                </div>
                <h3 className="text-lg font-bold text-[#F8FAFC]">
                  Hands-On Projects
                </h3>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  Build real portfolio projects in every course. Graduate with verifiable proof of your technical and creative capabilities.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#0E111A] border border-[#22293D] space-y-3 transition-all hover:border-[#00D2FF]/40 hover:-translate-y-1">
                <div className="text-[#00D2FF] font-mono text-xs font-bold uppercase">
                  Pillar 02
                </div>
                <h3 className="text-lg font-bold text-[#F8FAFC]">
                  Verified Certificate
                </h3>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  Receive an official Tech Mentors Certificate of Completion to showcase your skills to employers, freelance clients, and partners.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#0E111A] border border-[#22293D] space-y-3 transition-all hover:border-[#00D2FF]/40 hover:-translate-y-1">
                <div className="text-[#38BDF8] font-mono text-xs font-bold uppercase">
                  Pillar 03
                </div>
                <h3 className="text-lg font-bold text-[#F8FAFC]">
                  Internship Track
                </h3>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  Following your course, continue into an internship at Tech Mentors under a written agreement to work on real tasks and build workplace experience.
                </p>
              </div>
            </div>

            {/* Practical CTA inside the Charter */}
            <div className="mt-10 pt-8 border-t border-[#22293D] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left space-y-1">
                <div className="text-sm sm:text-base font-bold text-[#F8FAFC] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Guaranteed Practical Exposure Under Written Agreement</span>
                </div>
                <div className="text-xs text-[#94A3B8]">
                  Both On-Campus (China Scheme, Lahore) and Online live interactive batches are currently enrolling.
                </div>
              </div>
              <button
                type="button"
                onClick={() => openModal("Internship Track")}
                className="brand-gradient-btn inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white shadow-lg cursor-pointer shrink-0"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" />
                <span>Apply for Internship Track</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 11 — FREQUENTLY ASKED QUESTIONS
          ======================================================== */}
      <section className="py-20 sm:py-28 bg-[#0E111A] border-t border-[#22293D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="FAQ"
            title="Frequently Asked Questions"
            highlightedPhrase="Asked Questions"
            description="Clear answers about prior experience, on-campus and online classes, certificates, internships, and batch details."
          />

          <FaqAccordion items={FAQ_DATA} />

          <div className="mt-12 text-center text-sm text-[#94A3B8]">
            Have another question? Call or WhatsApp us on{" "}
            <a
              href={`https://wa.me/${COMPANY_CONFIG.contact.phoneRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00D2FF] hover:underline font-semibold"
            >
              {COMPANY_CONFIG.contact.phone} →
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION 12 — FINAL CONVERSION BANNER
          ======================================================== */}
      <ConversionBanner />
    </div>
  );
}
