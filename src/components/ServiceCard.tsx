import { Link } from "react-router-dom";
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
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ServiceItem } from "../data/companyConfig";
import TiltCard from "./TiltCard";
import { useApplyModal } from "../context/ApplyModalContext";

const iconMap: Record<string, LucideIcon> = {
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

// Course images mapping
const courseImageMap: Record<string, string> = {
  "digital-marketing": "/images/courses/digital-marketing.jpg",
  "seo": "/images/courses/seo.jpg",
  "agentic-ai": "/images/courses/agentic-ai.jpg",
  "web-development": "/images/courses/web-development.jpg",
  "mobile-app-development": "/images/courses/mobile-app-development.jpg",
  "shopify-ecommerce": "/images/courses/shopify-ecommerce.jpg",
  "social-media-marketing": "/images/courses/social-media-marketing.jpg",
  "graphic-designing": "/images/courses/graphic-designing.jpg",
  "video-editing": "/images/courses/video-editing.jpg",
};

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const { openModal } = useApplyModal();
  const IconComponent = iconMap[service.icon] || Globe;
  const courseImage = courseImageMap[service.slug] || "/images/courses/web-development.jpg";

  return (
    <TiltCard className="h-full">
      <div className="studio-card group relative rounded-2xl overflow-hidden flex flex-col justify-between h-full bg-[#141824] border border-[#22293D] hover:border-[#00D2FF]/50 transition-all duration-300">
        <div>
          {/* Visual Course Image Banner with 3D Depth & Gradient Overlay */}
          <div className="relative h-44 w-full overflow-hidden bg-[#0A0D15]">
            <img
              src={courseImage}
              alt={service.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 filter brightness-[0.92] group-hover:brightness-105"
            />
            {/* Dark moody gradient overlay blending into card body */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#141824] via-[#141824]/40 to-transparent" />

            {/* Glowing Category Badge on Image */}
            {service.category && (
              <div className="absolute top-3 right-3 z-10">
                <span className="inline-flex items-center gap-1 text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#08090E]/85 backdrop-blur-md border border-[#22293D] text-[#00D2FF] shadow-lg group-hover:border-[#00D2FF]/50 transition-colors">
                  <Sparkles className="w-2.5 h-2.5 text-[#00D2FF]" />
                  {service.category}
                </span>
              </div>
            )}

            {/* Floating 3D Icon Badge on Image Boundary */}
            <div className="absolute -bottom-4 left-5 z-10 w-12 h-12 rounded-xl bg-[#0E111A] border-2 border-[#22293D] group-hover:border-[#0066FF] flex items-center justify-center text-[#00D2FF] group-hover:text-white group-hover:bg-[#0066FF] group-hover:shadow-[0_0_20px_rgba(0,102,255,0.6)] group-hover:-translate-y-1 transition-all duration-300 shadow-xl">
              <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
            </div>
          </div>

          {/* Card Body Content */}
          <div className="p-5 sm:p-6 pt-7">
            {/* Course Title */}
            <h3 className="text-xl font-bold text-[#F8FAFC] mb-2 group-hover:text-[#00D2FF] transition-colors duration-200">
              {service.title}
            </h3>

            {/* Short Description */}
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-4 line-clamp-2">
              {service.shortDescription}
            </p>

            {/* Learning Topics with Cyan Checkmarks */}
            {service.learningTopics && service.learningTopics.length > 0 ? (
              <ul className="space-y-1.5 pt-3 pb-2 border-t border-[#22293D]/80">
                {service.learningTopics.map((topic, i) => (
                  <li
                    key={i}
                    className="text-xs text-[#CBD5E1] flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00D2FF] shrink-0" />
                    <span className="truncate">{topic}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="flex flex-wrap gap-1.5 mb-4">
                {service.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#0E111A] border border-[#22293D] text-[#94A3B8] group-hover:border-[#0066FF]/40 group-hover:text-[#38BDF8] transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Card Footer: Mode & Direct Apply or Details */}
        <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-[#22293D]/80 flex items-center justify-between mt-auto bg-[#10131E]/50 gap-2">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              openModal(service.title);
            }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0066FF]/15 hover:bg-[#0066FF] text-[#00D2FF] hover:text-white border border-[#0066FF]/30 text-xs font-semibold transition-all duration-200 cursor-pointer shadow-sm"
          >
            <Sparkles className="w-3 h-3" />
            <span>Apply Now</span>
          </button>

          <Link
            to={`/services/${service.slug}`}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#CBD5E1] hover:text-[#00D2FF] transition-all duration-200 group-hover:translate-x-0.5"
          >
            <span>Details</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 text-[#00D2FF]" />
          </Link>
        </div>
      </div>
    </TiltCard>
  );
}
