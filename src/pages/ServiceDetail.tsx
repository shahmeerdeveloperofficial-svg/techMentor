import { useParams, Navigate } from "react-router-dom";
import {
  Globe,
  Smartphone,
  Cpu,
  Palette,
  Layers,
  Network,
  Cloud,
  ShieldCheck,
  TrendingUp,
  Search,
  Bot,
  ShoppingBag,
  Share2,
  Video,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  HelpCircle,
  Briefcase,
  Layers as WorkflowIcon,
  BookOpen,
} from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import FaqAccordion from "../components/FaqAccordion";
import ConversionBanner from "../components/ConversionBanner";
import { useApplyModal } from "../context/ApplyModalContext";
import ProjectCard from "../components/ProjectCard";
import { SERVICES_DATA, PORTFOLIO_DATA, COMPANY_CONFIG } from "../data/companyConfig";

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Smartphone,
  Cpu,
  Palette,
  Layers,
  Network,
  Cloud,
  ShieldCheck,
  TrendingUp,
  Search,
  Bot,
  ShoppingBag,
  Share2,
  Video,
};

export default function ServiceDetail() {
  const { openModal } = useApplyModal();
  const { slug } = useParams<{ slug: string }>();

  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const IconComp = iconMap[service.icon] || Globe;

  const relatedProjects = PORTFOLIO_DATA.filter((p) =>
    p.technologies.some((tech) => service.technologies.includes(tech))
  ).slice(0, 2);

  return (
    <div>
      {/* Dedicated Course / Service Hero */}
      <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-24 bg-[#08090E] border-b border-[#22293D] overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0066FF]/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[
              { label: "Courses & Services", path: "/services" },
              { label: service.title },
            ]}
          />

          <div className="max-w-3xl mt-6 space-y-5">
            <div className="w-14 h-14 rounded-2xl bg-[#0E111A] border border-[#0066FF]/50 flex items-center justify-center text-[#00D2FF] shadow-[0_0_15px_rgba(0,102,255,0.3)]">
              <IconComp className="w-7 h-7" />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0E111A] border border-[#22293D] text-xs font-semibold text-[#00D2FF]">
                <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" />
                <span>{service.category || "CAREER TRAINING TRACK"}</span>
              </div>
              <span className="text-xs font-mono text-[#94A3B8] px-3 py-1 rounded-full bg-[#0E111A] border border-[#22293D]">
                {service.mode || "On-campus · Online"}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight">
              {service.title}
            </h1>

            <p className="text-base sm:text-xl text-[#94A3B8] leading-relaxed">
              {service.fullDescription}
            </p>

            {/* Core Learning Topics from Reference (if available) */}
            {service.learningTopics && (
              <div className="p-4 sm:p-5 rounded-2xl bg-[#141824] border border-[#0066FF]/40 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00D2FF]">
                  <BookOpen className="w-4 h-4" />
                  <span>Key Learning Points & Curriculum</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {service.learningTopics.map((topic, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-[#0E111A] border border-[#22293D] flex items-center gap-2.5 text-xs text-[#CBD5E1]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="font-semibold">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-2 flex flex-wrap gap-2">
              {service.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-md bg-[#0E111A] border border-[#22293D] text-xs font-mono text-[#38BDF8]"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={() => openModal(service.title)}
                className="brand-gradient-btn inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white shadow-lg cursor-pointer hover:shadow-[0_0_20px_rgba(0,102,255,0.6)]"
              >
                <Sparkles className="w-4 h-4 text-[#00D2FF]" />
                <span>Apply for {service.title}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href={`https://wa.me/${COMPANY_CONFIG.contact.phoneRaw}?text=${encodeURIComponent(
                  `Assalam o Alaikum Tech Mentors, I want to inquire about the ${service.title} course.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="brand-outline-btn inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-sm font-semibold"
              >
                Inquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Capabilities Grid */}
      <section className="py-16 sm:py-24 bg-[#0E111A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-[#00D2FF] mb-2">
              SYLLABUS & CAPABILITIES
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] tracking-tight">
              What You Will Master in {service.title}
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8] mt-2">
              Practical specializations, hands-on tool proficiencies, and industry execution standards taught in this program.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.capabilities.map((cap, index) => (
              <div
                key={index}
                className="studio-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-lg bg-[#08090E] border border-[#22293D] flex items-center justify-center text-xs font-mono text-[#00D2FF] font-bold">
                      0{index + 1}
                    </span>
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h3 className="text-lg font-bold text-[#F8FAFC] mb-2 group-hover:text-[#00D2FF] transition-colors">
                    {cap}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    Taught step by step through guided exercises and real-world project scenarios.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-World Applications */}
      <section className="py-16 sm:py-24 bg-[#08090E] border-t border-[#22293D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00D2FF]">
                <Briefcase className="w-4 h-4" />
                <span>CAREER & FREELANCE APPLICATIONS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] tracking-tight">
                Where These Skills Are Applied
              </h2>
              <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                Graduates utilize their knowledge across diverse high-income channels including remote employment, agency careers, freelancing, and personal entrepreneurship.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.businessUseCases.map((useCase, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-[#141824] border border-[#22293D] flex items-start gap-3.5"
                >
                  <div className="w-2 h-2 rounded-full bg-[#00D2FF] mt-2 shrink-0"></div>
                  <p className="text-xs sm:text-sm text-[#F8FAFC] font-medium leading-relaxed">
                    {useCase}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4-Stage Learning Workflow */}
      <section className="py-16 sm:py-24 bg-[#0E111A] border-t border-[#22293D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00D2FF] mb-2">
              <WorkflowIcon className="w-4 h-4" />
              <span>THE 4 STAGES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] tracking-tight">
              How We Teach {service.title}
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8] mt-2">
              Learn, Practise, Build, and Grow. The four steps that ensure you become job-ready.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.workflow.map((step, idx) => (
              <div
                key={idx}
                className="studio-card rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono font-bold text-[#0066FF] mb-3">
                    Stage 0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-[#F8FAFC] mb-2">
                    {step}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Case Studies / Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 sm:py-24 bg-[#08090E] border-t border-[#22293D]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="text-xs font-bold uppercase tracking-wider text-[#00D2FF] mb-2">
                REPRESENTATIVE PROJECTS
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] tracking-tight">
                Projects Aligned With This Course Track
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedProjects.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Service-Specific FAQs */}
      {service.faqs.length > 0 && (
        <section className="py-16 sm:py-24 bg-[#0E111A] border-t border-[#22293D]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00D2FF] mb-2">
                <HelpCircle className="w-4 h-4" />
                <span>COURSE QUESTIONS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] tracking-tight">
                {service.title} FAQs
              </h2>
            </div>

            <FaqAccordion items={service.faqs} />
          </div>
        </section>
      )}

      {/* Final Conversion CTA */}
      <ConversionBanner
        title={`Ready to Master ${service.title}?`}
        description="Join the upcoming batch at our campus in China Scheme, Lahore or attend live online sessions."
        courseName={service.title}
      />
    </div>
  );
}
