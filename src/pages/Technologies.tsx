import {
  Sparkles,
  Layout,
  Server,
  Smartphone,
  Database,
  Cloud,
  Palette,
  CheckCircle2,
} from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import ConversionBanner from "../components/ConversionBanner";
import { TECHNOLOGIES_DATA } from "../data/companyConfig";

const groupIcons: Record<string, React.ElementType> = {
  "Frontend Engineering": Layout,
  "Backend & Systems": Server,
  "Mobile Application Development": Smartphone,
  "Databases & Caching": Database,
  "Cloud, DevOps & Infrastructure": Cloud,
  "Design & UX Architecture": Palette,
};

export default function Technologies() {
  return (
    <div>
      {/* Technologies Hero */}
      <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 bg-[#08090E] border-b border-[#22293D] overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0066FF]/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: "Technologies" }]} />

          <div className="max-w-3xl mt-4 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0E111A] border border-[#22293D] text-xs font-semibold text-[#00D2FF]">
              <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" />
              <span>BATTLE-TESTED TECH STACK</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight">
              Modern Technologies Chosen For{" "}
              <span className="brand-gradient-text">Reliability & Scale</span>
            </h1>
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              We don't chase fleeting hype cycles. We engineer digital products
              using resilient, well-documented, industry-proven stacks backed by
              vibrant open-source ecosystems and enterprise support.
            </p>
          </div>
        </div>
      </section>

      {/* Grouped Categories */}
      <section className="py-16 sm:py-24 bg-[#0E111A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {TECHNOLOGIES_DATA.map((group) => {
            const GroupIcon = groupIcons[group.category] || Server;
            return (
              <div key={group.category} className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#22293D] gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#141824] border border-[#22293D] flex items-center justify-center text-[#00D2FF] shadow-sm">
                      <GroupIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-[#F8FAFC]">
                        {group.category}
                      </h2>
                      <p className="text-xs sm:text-sm text-[#94A3B8]">
                        {group.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="studio-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-lg font-bold text-[#F8FAFC] group-hover:text-[#00D2FF] transition-colors">
                            {item.name}
                          </h3>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#08090E] border border-[#22293D] text-[#00D2FF]">
                            {item.tag}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-[#22293D] flex items-center gap-1.5 text-[11px] text-emerald-400">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Production Tested</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Technology Selection Philosophy */}
      <section className="py-16 sm:py-24 bg-[#08090E] border-t border-[#22293D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-[#00D2FF]">
                SELECTION PRINCIPLES
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] tracking-tight">
                How We Choose The Right Stack For You
              </h2>
              <p className="text-base text-[#94A3B8] leading-relaxed">
                There is no universal "best" framework — only the right tool for
                your specific transaction volume, team composition, compliance
                rules, and scalability expectations.
              </p>
              <p className="text-base text-[#94A3B8] leading-relaxed">
                During discovery, we evaluate whether your application favors
                heavy real-time client reactivity (React / TypeScript), rapid
                monolithic enterprise workflows (Laravel), or microservice
                concurrency (Node.js / Go), preventing costly platform rewrites.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-[#141824] border border-[#22293D] space-y-2 transition-all hover:border-[#00D2FF]/40 hover:-translate-y-1">
                <h3 className="text-sm font-bold text-[#F8FAFC]">Zero Lock-in</h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  We use standard open-source technologies so any skilled engineer can maintain your codebase.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#141824] border border-[#22293D] space-y-2 transition-all hover:border-[#00D2FF]/40 hover:-translate-y-1">
                <h3 className="text-sm font-bold text-[#F8FAFC]">Type Safety</h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Strict TypeScript interfaces reduce runtime crashes and document data contracts automatically.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#141824] border border-[#22293D] space-y-2 transition-all hover:border-[#00D2FF]/40 hover:-translate-y-1">
                <h3 className="text-sm font-bold text-[#F8FAFC]">Audited Dependencies</h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Every npm or Composer dependency is scanned for known vulnerabilities and actively maintained.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#141824] border border-[#22293D] space-y-2 transition-all hover:border-[#00D2FF]/40 hover:-translate-y-1">
                <h3 className="text-sm font-bold text-[#F8FAFC]">Containerized Environments</h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Docker container setups ensure identical behavior between local testing and production servers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <ConversionBanner
        title="Need Advice On The Best Stack For Your Idea?"
        description="Schedule a technical stack consultation with our architects to evaluate tradeoffs."
      />
    </div>
  );
}
