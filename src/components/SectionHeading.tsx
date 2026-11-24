interface SectionHeadingProps {
  label?: string;
  title: string;
  highlightedPhrase?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  highlightedPhrase,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  let renderedTitle: React.ReactNode = title;
  if (highlightedPhrase && title.includes(highlightedPhrase)) {
    const parts = title.split(highlightedPhrase);
    renderedTitle = (
      <>
        {parts[0]}
        <span className="brand-gradient-text">{highlightedPhrase}</span>
        {parts[1]}
      </>
    );
  }

  return (
    <div
      className={`max-w-3xl ${isCenter ? "mx-auto text-center" : "text-left"} mb-12 sm:mb-16 ${className}`}
    >
      {label && (
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#00D2FF] shadow-[0_0_8px_#00D2FF] animate-pulse"></span>
          <span className="text-xs font-bold uppercase tracking-wider text-[#00D2FF]">
            {label}
          </span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight mb-4">
        {renderedTitle}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
