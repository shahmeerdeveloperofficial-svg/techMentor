import { useParams, Link, Navigate } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Server,
  Activity,
} from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import ConversionBanner from "../components/ConversionBanner";
import ProjectCard from "../components/ProjectCard";
import { PORTFOLIO_DATA } from "../data/companyConfig";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();

  const project = PORTFOLIO_DATA.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  const otherProjects = PORTFOLIO_DATA.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div>
      {/* Case Study Hero */}
      <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-24 bg-[#08090E] border-b border-[#22293D] overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0066FF]/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[
              { label: "Portfolio", path: "/portfolio" },
              { label: project.title },
            ]}
          />

          <div className="max-w-3xl mt-6 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#0E111A] border border-[#0066FF]/40 text-[#00D2FF]">
                {project.category}
              </span>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#0E111A] border border-[#22293D] text-[#94A3B8]">
                Industry: {project.clientIndustry}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight">
              {project.title}
            </h1>

            <p className="text-base sm:text-xl text-[#94A3B8] leading-relaxed">
              {project.summary}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-md bg-[#141824] border border-[#22293D] text-xs font-mono text-[#38BDF8]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Visual Mockup / Interface Demonstration */}
      <section className="py-12 bg-[#0E111A] border-b border-[#22293D]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-[#08090E] border border-[#22293D] shadow-2xl overflow-hidden transition-all hover:border-[#0066FF]/50">
            {/* Header window */}
            <div className="h-10 bg-[#0B0D15] border-b border-[#22293D] px-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              </div>
              <div className="text-[11px] font-mono text-[#94A3B8] truncate max-w-xs">
                production-app://{project.slug}.cloud.internal
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#141824] text-[#00D2FF] border border-[#22293D]">
                System Online
              </span>
            </div>

            {/* Dashboard Interior */}
            <div className="p-6 sm:p-10 space-y-6 bg-[#0E111A]">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#22293D]">
                <div>
                  <h3 className="text-xl font-bold text-[#F8FAFC]">{project.title}</h3>
                  <p className="text-xs text-[#94A3B8] mt-0.5">
                    Architecture: {project.architectureHighlight}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className="text-xs text-[#94A3B8]">Delivery Status</div>
                    <div className="text-xs font-bold text-emerald-400 font-mono">
                      Production Verified
                    </div>
                  </div>
                </div>
              </div>

              {/* Functional Panels */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-[#141824] border border-[#22293D] space-y-2 transition-all hover:border-[#00D2FF]/40 hover:-translate-y-0.5">
                  <div className="flex items-center justify-between text-xs text-[#94A3B8]">
                    <span>Domain Reliability</span>
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-lg font-bold text-[#F8FAFC]">Zero Critical CVEs</div>
                  <div className="text-[11px] text-[#94A3B8]">Continuous dependency auditing</div>
                </div>

                <div className="p-4 rounded-xl bg-[#141824] border border-[#22293D] space-y-2 transition-all hover:border-[#00D2FF]/40 hover:-translate-y-0.5">
                  <div className="flex items-center justify-between text-xs text-[#94A3B8]">
                    <span>Data Integrity</span>
                    <Server className="w-4 h-4 text-[#00D2FF]" />
                  </div>
                  <div className="text-lg font-bold text-[#F8FAFC]">ACID Compliant</div>
                  <div className="text-[11px] text-[#94A3B8]">Transactional safety verified</div>
                </div>

                <div className="p-4 rounded-xl bg-[#141824] border border-[#22293D] space-y-2 transition-all hover:border-[#00D2FF]/40 hover:-translate-y-0.5">
                  <div className="flex items-center justify-between text-xs text-[#94A3B8]">
                    <span>User Interface</span>
                    <Activity className="w-4 h-4 text-[#38BDF8]" />
                  </div>
                  <div className="text-lg font-bold text-[#F8FAFC]">Sub-100ms INP</div>
                  <div className="text-[11px] text-[#94A3B8]">Optimized Core Web Vitals</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem vs Solution Split */}
      <section className="py-16 sm:py-24 bg-[#08090E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl bg-[#0E111A] border border-[#22293D] p-8 space-y-4">
              <div className="text-xs font-mono text-red-400 uppercase tracking-wider font-semibold">
                The Business Challenge
              </div>
              <h2 className="text-2xl font-bold text-[#F8FAFC]">
                Operational Roadblocks
              </h2>
              <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="rounded-2xl bg-[#141824] border border-[#0066FF]/50 p-8 space-y-4 shadow-[0_0_20px_rgba(0,102,255,0.15)]">
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                Engineering Solution
              </div>
              <h2 className="text-2xl font-bold text-[#F8FAFC]">
                The Architecture Deployed
              </h2>
              <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Functionality List */}
      <section className="py-16 sm:py-24 bg-[#0E111A] border-t border-[#22293D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-[#00D2FF] mb-2">
              DELIVERED SCOPE
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] tracking-tight">
              Main Functionality & System Features
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8] mt-2">
              Key operational capabilities built and shipped for this platform.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {project.functionality.map((func, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#141824] border border-[#22293D] flex items-start gap-4 transition-all hover:border-[#00D2FF]/40 hover:-translate-y-0.5"
              >
                <div className="w-8 h-8 rounded-lg bg-[#0E111A] border border-[#0066FF]/40 flex items-center justify-center text-[#00D2FF] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#F8FAFC]">
                    Feature 0{idx + 1}
                  </h3>
                  <p className="text-sm text-[#94A3B8] leading-relaxed mt-1">
                    {func}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Outcome Note */}
          <div className="mt-8 p-6 rounded-2xl bg-[#141824] border border-[#22293D] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-semibold text-[#00D2FF] uppercase tracking-wider">
                Verified Business Outcome:
              </div>
              <p className="text-sm sm:text-base text-[#F8FAFC] font-medium mt-1">
                {project.metricsNote}
              </p>
            </div>
            <Link
              to="/contact"
              className="brand-gradient-btn inline-flex items-center justify-center px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white shrink-0"
            >
              Build a Similar Solution
            </Link>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {otherProjects.length > 0 && (
        <section className="py-16 sm:py-24 bg-[#08090E] border-t border-[#22293D]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-2xl font-bold text-[#F8FAFC]">
                Other Case Studies
              </h2>
              <Link
                to="/portfolio"
                className="text-xs sm:text-sm text-[#00D2FF] hover:text-[#38BDF8] font-semibold flex items-center gap-1 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back to All Projects
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherProjects.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <ConversionBanner
        title="Ready to Build Your Custom Software Solution?"
        description="Schedule a technical scope review with our engineering leads to outline your architecture."
      />
    </div>
  );
}
