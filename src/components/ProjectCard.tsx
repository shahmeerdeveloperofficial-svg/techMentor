import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { ProjectItem } from "../data/companyConfig";
import TiltCard from "./TiltCard";

interface ProjectCardProps {
  project: ProjectItem;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <TiltCard className="h-full">
      <div className="studio-card group rounded-2xl overflow-hidden flex flex-col justify-between h-full bg-[#141824] border border-[#22293D] hover:border-[#00D2FF]/50 transition-all duration-300">
        {/* Project Visual Showcase Mockup */}
        <div className="relative h-56 sm:h-64 bg-[#0E111A] border-b border-[#22293D] overflow-hidden p-4 flex flex-col justify-between">
        {/* Top faux bar */}
        <div className="flex items-center justify-between z-10">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80 inline-block" />
          </div>
          <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-[#141824] border border-[#22293D] text-[#00D2FF] shadow-sm">
            {project.category}
          </span>
        </div>

        {/* Center UI Showcase graphic tailored to project theme */}
        <div className="my-auto mx-auto w-full max-w-sm rounded-lg bg-[#141824]/95 border border-[#22293D] p-3 shadow-xl transform transition-all duration-300 group-hover:scale-[1.03] group-hover:border-[#0066FF]/60 group-hover:shadow-[0_8px_25px_rgba(0,102,255,0.25)]">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#22293D]">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00D2FF] animate-pulse"></div>
              <span className="text-xs font-semibold text-[#F8FAFC] truncate">{project.title}</span>
            </div>
            <span className="text-[10px] text-emerald-400 font-mono">Live In Production</span>
          </div>

          <div className="space-y-1.5">
            <div className="h-2 w-3/4 bg-[#22293D] rounded"></div>
            <div className="grid grid-cols-3 gap-1.5 pt-1">
              <div className="h-8 rounded bg-[#0E111A] border border-[#22293D] p-1 flex flex-col justify-center">
                <span className="text-[8px] text-[#94A3B8]">Metric</span>
                <span className="text-[10px] font-bold text-[#00D2FF] truncate">Verified</span>
              </div>
              <div className="h-8 rounded bg-[#0E111A] border border-[#22293D] p-1 flex flex-col justify-center">
                <span className="text-[8px] text-[#94A3B8]">Uptime</span>
                <span className="text-[10px] font-bold text-emerald-400 truncate">99.9%</span>
              </div>
              <div className="h-8 rounded bg-[#0E111A] border border-[#22293D] p-1 flex flex-col justify-center">
                <span className="text-[8px] text-[#94A3B8]">Security</span>
                <span className="text-[10px] font-bold text-[#38BDF8] truncate">Audited</span>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle bottom badge */}
        <div className="flex items-center justify-between text-[11px] text-[#94A3B8] z-10 pt-2">
          <span>Industry: <strong className="text-[#F8FAFC]">{project.clientIndustry}</strong></span>
          <span className="text-[#00D2FF] group-hover:text-[#38BDF8] flex items-center gap-1 transition-colors">
            Case Study <ExternalLink className="w-3 h-3" />
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-xl font-bold text-[#F8FAFC] mb-2 group-hover:text-[#00D2FF] transition-colors duration-200">
            {project.title}
          </h3>
          <p className="text-sm text-[#94A3B8] leading-relaxed mb-5 line-clamp-3">
            {project.summary}
          </p>

          {/* Tech stack pills */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-2.5 py-1 rounded-md bg-[#0E111A] border border-[#22293D] text-[#38BDF8] group-hover:border-[#0066FF]/40 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Link */}
        <div className="pt-4 border-t border-[#22293D]">
          <Link
            to={`/portfolio/${project.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#F8FAFC] group-hover:text-[#00D2FF] transition-colors"
          >
            <span>View Case Study</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
          </Link>
        </div>
      </div>
    </div>
  </TiltCard>
  );
}
