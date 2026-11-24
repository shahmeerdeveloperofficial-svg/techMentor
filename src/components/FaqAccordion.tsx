import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const faqId = `faq-item-${index}`;
        const buttonId = `faq-btn-${index}`;

        return (
          <div
            key={index}
            className={`rounded-xl border transition-all duration-200 ${
              isOpen
                ? "bg-[#141824] border-[#0066FF]/60 shadow-[0_4px_20px_rgba(0,102,255,0.15)]"
                : "bg-[#0E111A] border-[#22293D] hover:border-[#00D2FF]/40"
            }`}
          >
            <button
              id={buttonId}
              onClick={() => toggleIndex(index)}
              className="w-full px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-[#0066FF] rounded-xl"
              aria-expanded={isOpen}
              aria-controls={faqId}
            >
              <span className="text-base sm:text-lg font-semibold text-[#F8FAFC] pr-4">
                {item.question}
              </span>
              <div
                className={`p-1.5 rounded-full bg-[#08090E] border border-[#22293D] text-[#00D2FF] shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180 bg-[#0066FF]/15 border-[#0066FF]/50 text-[#38BDF8]" : ""
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <div
                id={faqId}
                role="region"
                aria-labelledby={buttonId}
                className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-[#94A3B8] leading-relaxed border-t border-[#22293D] pt-4 animate-in fade-in duration-200"
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
