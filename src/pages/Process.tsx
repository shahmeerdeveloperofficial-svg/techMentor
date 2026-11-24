import {
  Sparkles,
  Search,
  FileText,
  Compass,
  Palette,
  Code2,
  CheckCircle2,
  Rocket,
  LifeBuoy,
} from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import ConversionBanner from "../components/ConversionBanner";
import { DETAILED_PROCESS_WORKFLOW, PROCESS_STEPS } from "../data/companyConfig";

const processIcons = [
  Search,
  FileText,
  Compass,
  Palette,
  Code2,
  CheckCircle2,
  Rocket,
  LifeBuoy,
];

export default function Process() {
  return (
    <div>
      {/* Process Hero */}
      <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 bg-[#08090E] border-b border-[#22293D] overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0066FF]/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: "Learning Journey" }]} />

          <div className="max-w-3xl mt-4 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0E111A] border border-[#22293D] text-xs font-semibold text-[#00D2FF]">
              <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" />
              <span>PRACTICAL LEARNING METHODOLOGY</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight">
              Learn. Practise. Build.{" "}
              <span className="brand-gradient-text">Grow.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              Every course at Tech Mentors follows a proven four-stage learning journey designed to transform beginners into job-ready practitioners with real projects and practical internship experience.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Core Stages */}
      <section className="py-16 sm:py-24 bg-[#0E111A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="studio-card rounded-2xl p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-extrabold font-mono text-[#0066FF]">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#08090E] border border-[#22293D] text-[#00D2FF]">
                      Stage {step.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#F8FAFC] mb-2 group-hover:text-[#00D2FF] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#22293D]">
                  <div className="text-[11px] font-semibold text-[#00D2FF] uppercase tracking-wider mb-2">
                    Key Outcomes:
                  </div>
                  <ul className="space-y-1.5">
                    {step.deliverables.map((d, i) => (
                      <li key={i} className="text-xs text-[#CBD5E1] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]"></span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-[#00D2FF] mb-2">
              DETAILED STAGES
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] tracking-tight">
              Our 8-Stage Curriculum & Internship Lifecycle
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8] mt-2">
              Step-by-step roadmap from initial enrollment to portfolio packaging, certification, and post-course internship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DETAILED_PROCESS_WORKFLOW.map((phase, idx) => {
              const IconComp = processIcons[idx] || Code2;
              return (
                <div
                  key={phase.phase}
                  className="studio-card rounded-2xl p-7 sm:p-9 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-[#08090E] border border-[#22293D] flex items-center justify-center text-[#00D2FF] group-hover:border-[#0066FF] transition-all">
                        <IconComp className="w-6 h-6 transition-transform group-hover:scale-110" />
                      </div>
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#08090E] border border-[#22293D] text-[#00D2FF] font-bold">
                        {phase.phase}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold text-[#F8FAFC] mb-2 group-hover:text-[#00D2FF] transition-colors">
                      {phase.title}
                    </h2>

                    <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                      {phase.summary}
                    </p>

                    <div className="space-y-2">
                      <div className="text-xs font-semibold text-[#00D2FF] uppercase tracking-wider mb-2">
                        Deliverables & Activities:
                      </div>
                      <ul className="space-y-2">
                        {phase.actions.map((act, i) => (
                          <li
                            key={i}
                            className="text-xs sm:text-sm text-[#94A3B8] flex items-start gap-2.5"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{act}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Conversion Banner */}
      <ConversionBanner
        title="Ready to Begin Your Learning Journey?"
        description="Enroll in one of our 9 courses on-campus in China Scheme, Lahore or join our interactive online batches."
      />
    </div>
  );
}
