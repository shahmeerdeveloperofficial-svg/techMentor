import { Sparkles } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import ConversionBanner from "../components/ConversionBanner";
import ServiceCard from "../components/ServiceCard";
import TiltCard from "../components/TiltCard";
import { SERVICES_DATA } from "../data/companyConfig";

export default function Services() {
  return (
    <div>
      {/* Services & Courses Hero */}
      <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 bg-[#08090E] border-b border-[#22293D] overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0066FF]/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: "Courses & Services" }]} />

          <div className="max-w-3xl mt-4 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0E111A] border border-[#22293D] text-xs font-semibold text-[#00D2FF]">
              <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" />
              <span>9 CAREER TRACKS · ON-CAMPUS & ONLINE</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight">
              Courses Designed For{" "}
              <span className="brand-gradient-text">Real Careers</span>
            </h1>
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              Every course at Tech Mentors starts from the fundamentals and ends with a complete portfolio of practical work. Learn modern software development, AI, performance marketing, or creative design in China Scheme, Lahore or online.
            </p>
          </div>
        </div>
      </section>

      {/* Main Courses & Services Grid with 3D Depth & Visuals */}
      <section className="py-16 sm:py-24 bg-[#0E111A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* 4 Stages of Learning Journey */}
      <section className="py-16 sm:py-24 bg-[#08090E] border-t border-[#22293D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] tracking-tight">
              Our 4-Stage Learning Journey
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8] mt-3">
              Learn, Practise, Build, and Grow. The proven structure behind every program at Tech Mentors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <TiltCard className="h-full">
              <div className="p-6 rounded-2xl bg-[#141824] border border-[#22293D] space-y-2 h-full hover:border-[#00D2FF]/50 transition-colors">
                <span className="text-xs font-mono font-bold text-[#0066FF]">01</span>
                <h3 className="text-lg font-bold text-[#F8FAFC]">LEARN</h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Understand each concept step by step, explained in simple language with mentor demonstrations.
                </p>
              </div>
            </TiltCard>
            <TiltCard className="h-full">
              <div className="p-6 rounded-2xl bg-[#141824] border border-[#22293D] space-y-2 h-full hover:border-[#00D2FF]/50 transition-colors">
                <span className="text-xs font-mono font-bold text-[#0066FF]">02</span>
                <h3 className="text-lg font-bold text-[#F8FAFC]">PRACTISE</h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Apply every lesson in class with guided exercises and direct instructor feedback.
                </p>
              </div>
            </TiltCard>
            <TiltCard className="h-full">
              <div className="p-6 rounded-2xl bg-[#141824] border border-[#22293D] space-y-2 h-full hover:border-[#00D2FF]/50 transition-colors">
                <span className="text-xs font-mono font-bold text-[#0066FF]">03</span>
                <h3 className="text-lg font-bold text-[#F8FAFC]">BUILD</h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Create real projects for your portfolio that prove what you can do to employers and clients.
                </p>
              </div>
            </TiltCard>
            <TiltCard className="h-full">
              <div className="p-6 rounded-2xl bg-[#141824] border border-[#22293D] space-y-2 h-full hover:border-[#00D2FF]/50 transition-colors">
                <span className="text-xs font-mono font-bold text-[#0066FF]">04</span>
                <h3 className="text-lg font-bold text-[#F8FAFC]">GROW</h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Join an internship under a written agreement, start freelancing, or apply for jobs with confidence.
                </p>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* Conversion Banner */}
      <ConversionBanner
        title="Ready to Enroll in a Course?"
        description="Our admissions team in China Scheme, Lahore is available to discuss batch timings, course outlines, and registration."
      />
    </div>
  );
}
