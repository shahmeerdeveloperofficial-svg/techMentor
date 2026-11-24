import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { useApplyModal } from "../context/ApplyModalContext";

interface ConversionBannerProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  courseName?: string;
}

export default function ConversionBanner({
  title = "Ready to Build In-Demand Tech Skills?",
  description = "Join Tech Mentors in China Scheme, Lahore or attend interactive online live classes. Apply for admission today.",
  buttonText = "Apply for Admission",
  courseName,
}: ConversionBannerProps) {
  const { openModal } = useApplyModal();

  return (
    <section className="py-16 sm:py-20 bg-[#08090E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0E111A] via-[#141824] to-[#0E111A] border border-[#22293D] p-8 sm:p-12 lg:p-16 text-center shadow-2xl transition-all duration-300 hover:border-[#00D2FF]/40">
          {/* Subtle electric blue & cyan radial background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0066FF]/15 rounded-full blur-[100px] pointer-events-none animate-pulse-glow" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#08090E]/90 border border-[#0066FF]/40 text-xs font-semibold text-[#00D2FF] shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" />
              <span>Skills Today | Better Tomorrow</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight">
              {title}
            </h2>

            <p className="text-base sm:text-xl text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => openModal(courseName)}
                className="brand-gradient-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white focus:outline-none focus:ring-2 focus:ring-[#0066FF] cursor-pointer shadow-lg hover:shadow-[0_0_25px_rgba(0,102,255,0.7)]"
              >
                <Sparkles className="w-4 h-4 text-[#00D2FF]" />
                <span>{buttonText}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <Link
                to="/services"
                className="brand-outline-btn w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold"
              >
                Explore All 9 Courses
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
