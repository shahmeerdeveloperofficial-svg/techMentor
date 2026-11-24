import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Mail,
} from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import ConversionBanner from "../components/ConversionBanner";
import { CAREERS_DATA, COMPANY_CONFIG } from "../data/companyConfig";

export default function Careers() {
  return (
    <div>
      {/* Careers Hero */}
      <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 bg-[#08090E] border-b border-[#22293D] overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0066FF]/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: "Careers" }]} />

          <div className="max-w-3xl mt-4 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0E111A] border border-[#22293D] text-xs font-semibold text-[#00D2FF]">
              <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" />
              <span>JOIN OUR ENGINEERING SQUAD</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight">
              Build Meaningful Software with{" "}
              <span className="brand-gradient-text">Mastery & Mentorship</span>
            </h1>
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              At Tech Mentors, our engineers solve complex architecture challenges,
              mentor one another, and ship resilient digital products that move
              real businesses forward.
            </p>
          </div>
        </div>
      </section>

      {/* Engineering Culture Pillars */}
      <section className="py-16 sm:py-24 bg-[#0E111A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="text-xs font-bold uppercase tracking-wider text-[#00D2FF] mb-2">
              WHY BUILD WITH US
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] tracking-tight">
              Our Engineering Culture
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8] mt-2">
              We cultivate an environment of technical rigor, calm execution, and continuous learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CAREERS_DATA.culture.map((c, i) => (
              <div
                key={c.title}
                className="studio-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#08090E] border border-[#22293D] flex items-center justify-center text-[#00D2FF] mb-4 text-xs font-mono font-bold">
                    0{i + 1}
                  </div>
                  <h3 className="text-lg font-bold text-[#F8FAFC] mb-2 group-hover:text-[#00D2FF] transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    {c.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Engineering Opportunities */}
      <section className="py-16 sm:py-24 bg-[#08090E] border-t border-[#22293D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="text-xs font-bold uppercase tracking-wider text-[#00D2FF] mb-2">
              OPPORTUNITIES
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] tracking-tight">
              Open Engineering Positions
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8] mt-2">
              Review current roles or submit an open engineering application.
            </p>
          </div>

          <div className="space-y-6">
            {CAREERS_DATA.positions.map((pos) => {
              return (
                <div
                  key={pos.id}
                  className="rounded-2xl border bg-[#0E111A] border-[#22293D] hover:border-[#0066FF]/60 transition-all p-6 sm:p-8 hover:shadow-[0_8px_30px_rgba(0,102,255,0.15)]"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#22293D]">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-[#08090E] border border-[#22293D] text-[#00D2FF]">
                          {pos.department}
                        </span>
                        <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-[#08090E] border border-[#22293D] text-[#94A3B8]">
                          {pos.type}
                        </span>
                        <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-[#08090E] border border-[#22293D] text-[#94A3B8]">
                          Experience: {pos.experience}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC]">
                        {pos.title}
                      </h3>
                      <p className="text-sm text-[#94A3B8] mt-1">
                        {pos.description}
                      </p>
                    </div>

                    <a
                      href={`mailto:${COMPANY_CONFIG.contact.email}?subject=Application for ${encodeURIComponent(
                        pos.title
                      )}`}
                      className="brand-gradient-btn inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white shadow-md shrink-0"
                    >
                      <span>Apply for Role</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>

                  {/* Requirements List */}
                  <div className="pt-6">
                    <h4 className="text-xs font-semibold text-[#00D2FF] uppercase tracking-wider mb-3">
                      Key Technical Requirements:
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {pos.requirements.map((req, i) => (
                        <li
                          key={i}
                          className="p-3 rounded-xl bg-[#08090E] border border-[#22293D] text-xs text-[#94A3B8] flex items-start gap-2"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Open Application Option */}
          <div className="mt-12 p-8 rounded-2xl bg-[#141824] border border-[#22293D] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 transition-all hover:border-[#00D2FF]/40">
            <div>
              <h3 className="text-lg font-bold text-[#F8FAFC]">
                Don't See Your Specific Specialty?
              </h3>
              <p className="text-sm text-[#94A3B8] mt-1 max-w-xl">
                We are always eager to meet skilled system architects, DevOps leads,
                and frontend engineers. Send your resume and GitHub link directly to our engineering lead.
              </p>
            </div>
            <a
              href={`mailto:${COMPANY_CONFIG.contact.email}?subject=General Engineering Inquiry`}
              className="brand-outline-btn inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold shrink-0"
            >
              <Mail className="w-4 h-4 text-[#00D2FF]" />
              <span>Send Open Resume</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <ConversionBanner
        title="Ready to Build Scalable Software Together?"
        description="Connect with Tech Mentors. We're always eager to collaborate on ambitious technical projects."
        buttonText="Get In Touch"
      />
    </div>
  );
}
