import {
  Target,
  Compass,
  Code2,
  CheckCircle2,
  Sparkles,
  Briefcase,
  Award,
  MapPin,
} from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import ConversionBanner from "../components/ConversionBanner";
import TiltCard from "../components/TiltCard";
import { COMPANY_CONFIG } from "../data/companyConfig";
import { useLocationModal } from "../context/LocationModalContext";

export default function About() {
  const { openLocationModal } = useLocationModal();

  return (
    <div>
      {/* Compact Page Hero */}
      <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 bg-[#08090E] border-b border-[#22293D] overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0066FF]/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: "About Us" }]} />

          <div className="max-w-3xl mt-4 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0E111A] border border-[#22293D] text-xs font-semibold text-[#00D2FF]">
              <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" />
              <span>ABOUT TECH MENTORS · CHINA SCHEME, LAHORE</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight">
              Practical IT Training Built on{" "}
              <span className="brand-gradient-text">Real Experience</span>
            </h1>
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              Tech Mentors is a practical tech institute and training centre in China Scheme, Lahore. We help students and professionals learn in-demand digital skills, gain real-world experience, and become job-ready for today's competitive market.
            </p>
          </div>
        </div>
      </section>

      {/* Institute Introduction & Philosophy */}
      <section className="py-16 sm:py-24 bg-[#0E111A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] tracking-tight">
                Our Purpose: Bridging Classroom Concepts with Practical Industry Skills
              </h2>
              <p className="text-base text-[#94A3B8] leading-relaxed">
                At Tech Mentors, we focus on what employers and freelance clients actually look for: practical skills, a strong portfolio of completed projects, and real work experience. Every course starts from the absolute basics and guides learners through guided exercises and tangible deliverables.
              </p>
              <p className="text-base text-[#94A3B8] leading-relaxed">
                Our official motto — <strong className="text-[#F8FAFC]">"Skills Today | Better Tomorrow"</strong> —
                reflects our commitment to helping youth, students, and professionals build sustainable, high-income careers in digital technologies.
              </p>

              {/* The 4 Pillars from Logo */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
                <div className="p-3.5 rounded-xl bg-[#141824] border border-[#22293D] text-center transition-all hover:border-[#00D2FF] hover:-translate-y-1">
                  <div className="text-xs font-mono text-[#00D2FF] uppercase tracking-wider mb-1 font-bold">
                    01
                  </div>
                  <div className="text-sm font-bold text-[#F8FAFC]">LEARN</div>
                  <div className="text-[10px] text-[#94A3B8] mt-0.5">Simple Steps</div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#141824] border border-[#22293D] text-center transition-all hover:border-[#00D2FF] hover:-translate-y-1">
                  <div className="text-xs font-mono text-[#00D2FF] uppercase tracking-wider mb-1 font-bold">
                    02
                  </div>
                  <div className="text-sm font-bold text-[#F8FAFC]">PRACTICE</div>
                  <div className="text-[10px] text-[#94A3B8] mt-0.5">Guided Drills</div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#141824] border border-[#22293D] text-center transition-all hover:border-[#00D2FF] hover:-translate-y-1">
                  <div className="text-xs font-mono text-[#00D2FF] uppercase tracking-wider mb-1 font-bold">
                    03
                  </div>
                  <div className="text-sm font-bold text-[#F8FAFC]">BUILD</div>
                  <div className="text-[10px] text-[#94A3B8] mt-0.5">Real Portfolio</div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#141824] border border-[#22293D] text-center transition-all hover:border-[#00D2FF] hover:-translate-y-1">
                  <div className="text-xs font-mono text-[#00D2FF] uppercase tracking-wider mb-1 font-bold">
                    04
                  </div>
                  <div className="text-sm font-bold text-[#F8FAFC]">GROW</div>
                  <div className="text-[10px] text-[#94A3B8] mt-0.5">Career & Jobs</div>
                </div>
              </div>
            </div>

            {/* Right: Studio Emblem & Campus Lab Photo */}
            <div className="lg:col-span-6">
              <TiltCard>
                <div className="rounded-3xl bg-[#141824] border border-[#22293D] p-6 sm:p-7 space-y-6 shadow-2xl relative overflow-hidden transition-all hover:border-[#00D2FF]/50 group">
                  {/* Photo of Campus Lab */}
                  <div className="relative h-48 sm:h-56 w-full rounded-2xl overflow-hidden bg-[#08090E]">
                    <img
                      src="/images/campus/lab.jpg"
                      alt="Tech Mentors Campus Computer Lab in China Scheme Lahore"
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141824] via-transparent to-black/30" />
                    <div className="absolute top-3 left-3">
                      <button
                        type="button"
                        onClick={openLocationModal}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#08090E]/85 backdrop-blur-md border border-[#22293D] hover:border-[#00D2FF] text-xs font-semibold text-[#00D2FF] transition-all cursor-pointer shadow-lg group"
                        title="Click to view interactive campus map"
                      >
                        <MapPin className="w-3.5 h-3.5 text-[#00D2FF] group-hover:scale-110 transition-transform" />
                        <span>China Scheme, Lahore Campus</span>
                        <span className="text-[10px] bg-[#0066FF]/20 px-1.5 py-0.5 rounded border border-[#0066FF]/30 font-mono">Map ↗</span>
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pb-4 border-b border-[#22293D]">
                    <img
                      src={COMPANY_CONFIG.logoUrl}
                      alt={COMPANY_CONFIG.name}
                      className="h-14 w-auto object-contain drop-shadow-[0_0_10px_rgba(0,102,255,0.4)]"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-[#F8FAFC]">
                        {COMPANY_CONFIG.name}
                      </h3>
                      <button
                        type="button"
                        onClick={openLocationModal}
                        className="text-xs text-[#00D2FF] hover:underline font-medium flex items-center gap-1 cursor-pointer"
                      >
                        <span>China Scheme, Lahore, Pakistan</span>
                        <MapPin className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm text-[#94A3B8]">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-[#F8FAFC]">9 Career Tracks:</strong> Development, AI, digital marketing, eCommerce, and creative design.
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-[#F8FAFC]">On-Campus & Online Modes:</strong> Practical lab sessions in Lahore or live online classes.
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-[#F8FAFC]">Internship Under Written Agreement:</strong> Direct workplace training upon course completion.
                      </span>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audiences: Who Can Join */}
      <section className="py-16 sm:py-24 bg-[#08090E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF]"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#00D2FF]">
                WHO WE TRAIN
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
              Designed For Every Ambition
            </h2>
            <p className="text-base text-[#94A3B8] mt-3">
              Whether you are taking your first career step or expanding your business capabilities, our curriculum meets you at your level.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="studio-card rounded-2xl p-7 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#00D2FF] font-bold">
                After Matric
              </span>
              <h3 className="text-lg font-bold text-[#F8FAFC]">School Leavers</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Start a practical skill-based career early and begin building digital competence before completing formal college.
              </p>
            </div>

            <div className="studio-card rounded-2xl p-7 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#00D2FF] font-bold">
                Students
              </span>
              <h3 className="text-lg font-bold text-[#F8FAFC]">College & University</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Add real-world practical skills to your academic degree, making you immediately employable upon graduation.
              </p>
            </div>

            <div className="studio-card rounded-2xl p-7 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#00D2FF] font-bold">
                Professionals
              </span>
              <h3 className="text-lg font-bold text-[#F8FAFC]">Career Switchers</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Transition into high-growth fields like software development, AI, digital marketing, or design with guided mentorship.
              </p>
            </div>

            <div className="studio-card rounded-2xl p-7 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#00D2FF] font-bold">
                Entrepreneurs
              </span>
              <h3 className="text-lg font-bold text-[#F8FAFC]">Business Owners</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                Master Shopify, Meta Ads, SEO, and social media to scale your own brand and drive direct customer sales online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-24 bg-[#0E111A] border-t border-[#22293D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl bg-[#141824] border border-[#22293D] p-8 sm:p-10 space-y-4 transition-all hover:border-[#0066FF]/60 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#0E111A] border border-[#0066FF]/40 flex items-center justify-center text-[#00D2FF] shadow-sm">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#F8FAFC]">Our Mission</h3>
              <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                To empower learners across Pakistan with practical, industry-standard digital skills, verified certifications, and real project experience that enable meaningful careers and freelance independence.
              </p>
            </div>

            <div className="rounded-2xl bg-[#141824] border border-[#22293D] p-8 sm:p-10 space-y-4 transition-all hover:border-[#0066FF]/60 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-[#0E111A] border border-[#0066FF]/40 flex items-center justify-center text-[#38BDF8] shadow-sm">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#F8FAFC]">Our Vision</h3>
              <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                To be Lahore's most reputable practical technology institute, recognized for graduating confident practitioners who excel in modern software development, AI automation, and digital commerce.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Institute Principles */}
      <section className="py-16 sm:py-24 light-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0066FF]">
                OUR METHODOLOGY
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Principles Behind Every Class
            </h2>
            <p className="text-base text-[#475569] mt-3">
              We hold ourselves to disciplined teaching standards that prioritize real capability over passive theory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm space-y-3 transition-all hover:border-[#0066FF] hover:-translate-y-1">
              <div className="w-10 h-10 rounded-lg bg-[#0066FF]/10 flex items-center justify-center text-[#0066FF]">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#0F172A]">Hands-On Practice First</h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                Students apply every lesson immediately in guided lab sessions, building real code, real campaigns, and real creative assets.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm space-y-3 transition-all hover:border-[#0066FF] hover:-translate-y-1">
              <div className="w-10 h-10 rounded-lg bg-[#0066FF]/10 flex items-center justify-center text-[#0066FF]">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#0F172A]">Certified Project Milestones</h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                Certificates are awarded upon successful completion of curriculum projects, ensuring tangible validation of student capability.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm space-y-3 transition-all hover:border-[#0066FF] hover:-translate-y-1">
              <div className="w-10 h-10 rounded-lg bg-[#0066FF]/10 flex items-center justify-center text-[#0066FF]">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#0F172A]">Internship Opportunity</h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                Following course completion, students can transition into an internship at Tech Mentors under a written agreement to gain genuine workplace experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <ConversionBanner
        title="Ready to Build Future-Ready Skills?"
        description="Explore our 9 practical career courses or apply for admission at our China Scheme, Lahore campus."
      />
    </div>
  );
}
