import { useState } from "react";
import { Sparkles, Layers } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import ProjectCard from "../components/ProjectCard";
import ConversionBanner from "../components/ConversionBanner";
import { PORTFOLIO_DATA } from "../data/companyConfig";

const categories = ["All Projects", "Custom Software", "Web Application", "Web & Mobile"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredProjects =
    activeCategory === "All Projects"
      ? PORTFOLIO_DATA
      : PORTFOLIO_DATA.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Portfolio Hero */}
      <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 bg-[#08090E] border-b border-[#22293D] overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0066FF]/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: "Portfolio" }]} />

          <div className="max-w-3xl mt-4 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0E111A] border border-[#22293D] text-xs font-semibold text-[#00D2FF]">
              <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" />
              <span>SELECTED CASE STUDIES</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight">
              Digital Products{" "}
              <span className="brand-gradient-text">Engineered For Real Impact</span>
            </h1>
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              Explore our portfolio of verified software engineering projects, from
              enterprise operational suites and healthcare systems to financial analytics
              and high-concurrency B2B commerce platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter Bar & Projects Grid */}
      <section className="py-16 sm:py-24 bg-[#0E111A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Tabs with Glow */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0066FF] ${
                    isActive
                      ? "brand-gradient-btn text-white shadow-lg shadow-[#0066FF]/30 scale-105"
                      : "bg-[#141824] border border-[#22293D] text-[#94A3B8] hover:text-[#00D2FF] hover:border-[#00D2FF]/50 hover:-translate-y-0.5"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16 text-[#94A3B8]">
              <Layers className="w-12 h-12 mx-auto mb-3 text-[#22293D]" />
              <p>No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Final CTA */}
      <ConversionBanner
        title="Have a Project in Mind?"
        description="Let's build a software solution that matches your operational needs and engineering benchmarks."
      />
    </div>
  );
}
