import { useState, useEffect } from "react";
import {
  X,
  MapPin,
  Navigation,
  MessageCircle,
  Phone,
  Copy,
  Check,
  Clock,
  Car,
  Laptop,
  Compass,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import { useLocationModal } from "../context/LocationModalContext";
import { COMPANY_CONFIG } from "../data/companyConfig";

export default function LocationModal() {
  const { isLocationOpen, closeLocationModal } = useLocationModal();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        closeLocationModal();
      }
    }

    if (isLocationOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLocationOpen, closeLocationModal]);

  if (!isLocationOpen) return null;

  const fullAddress = `${COMPANY_CONFIG.name}, China Scheme, Lahore, Punjab, Pakistan`;
  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    "China Scheme Lahore Pakistan"
  )}`;
  const googleMapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "China Scheme Lahore"
  )}`;
  const whatsappLocationUrl = `https://wa.me/${COMPANY_CONFIG.contact.phoneRaw}?text=${encodeURIComponent(
    "Assalam o Alaikum Tech Mentors, please share your campus exact location pin and visiting guide on WhatsApp."
  )}`;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="location-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={closeLocationModal}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl rounded-3xl bg-[#0E111A] border border-[#22293D] shadow-2xl shadow-black/90 p-5 sm:p-7 md:p-8 space-y-6 animate-in zoom-in-95 duration-200 max-h-[92vh] overflow-y-auto"
      >
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-[#00D2FF]/15 via-[#0066FF]/10 to-transparent blur-2xl pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#22293D] relative z-10">
          <div className="space-y-1.5 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141824] border border-[#00D2FF]/40 text-xs font-semibold text-[#00D2FF]">
              <span className="w-2 h-2 rounded-full bg-[#00D2FF] animate-pulse" />
              <span>OFFICIAL CAMPUS & TECH LAB</span>
            </div>
            <h2
              id="location-modal-title"
              className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] tracking-tight flex items-center gap-2"
            >
              <span>Tech Mentors Lahore</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#94A3B8] flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#00D2FF] shrink-0" />
              <span>China Scheme, Lahore, Punjab, Pakistan</span>
            </p>
          </div>

          <button
            onClick={closeLocationModal}
            className="w-10 h-10 rounded-xl bg-[#141824] border border-[#22293D] hover:border-[#00D2FF] hover:text-[#00D2FF] text-[#94A3B8] flex items-center justify-center transition-all cursor-pointer shrink-0 focus:outline-none focus:ring-2 focus:ring-[#0066FF]"
            aria-label="Close campus location modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Interactive Google Map Embed Frame */}
        <div className="space-y-2 relative z-10">
          <div className="flex items-center justify-between text-xs text-[#94A3B8] px-1">
            <div className="flex items-center gap-2">
              <Compass className="w-3.5 h-3.5 text-[#00D2FF]" />
              <span className="font-mono text-[11px] text-[#CBD5E1]">
                Coordinates: 31.6035° N, 74.3750° E
              </span>
            </div>
            <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Live Interactive Map
            </span>
          </div>

          <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-[#22293D] shadow-inner bg-[#08090E] group">
            <iframe
              title="Tech Mentors Campus Location in China Scheme Lahore"
              src="https://maps.google.com/maps?q=China%20Scheme%20Lahore&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 filter contrast-[1.08] saturate-[1.1]"
              loading="lazy"
              allowFullScreen
            />

            {/* Inset Overlay Pill */}
            <div className="absolute bottom-3 left-3 z-10 pointer-events-none">
              <div className="px-3 py-1.5 rounded-xl bg-[#08090E]/90 backdrop-blur-md border border-[#22293D] text-[11px] text-[#F8FAFC] flex items-center gap-2 shadow-lg">
                <MapPin className="w-3.5 h-3.5 text-[#00D2FF]" />
                <span className="font-semibold">Tech Mentors Campus</span>
                <span className="text-[#64748B]">• China Scheme, Lahore</span>
              </div>
            </div>

            {/* Direct Open in Full Google Maps link */}
            <a
              href={googleMapsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-3 right-3 z-10 px-3 py-1.5 rounded-xl bg-[#08090E]/90 backdrop-blur-md border border-[#22293D] hover:border-[#00D2FF] text-[11px] font-semibold text-[#00D2FF] hover:text-white flex items-center gap-1.5 shadow-lg transition-all"
            >
              <span>Expand Map</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Quick Action Navigation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 relative z-10">
          {/* Action 1: Get Directions */}
          <a
            href={googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="brand-gradient-btn inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white shadow-lg cursor-pointer"
          >
            <Navigation className="w-4 h-4 text-[#00D2FF]" />
            <span>Get Driving Directions</span>
          </a>

          {/* Action 2: WhatsApp Pin */}
          <a
            href={whatsappLocationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold text-[#25D366] bg-[#141824] hover:bg-[#1E2538] border border-[#25D366]/40 hover:border-[#25D366] transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Pin Location</span>
          </a>

          {/* Action 3: Copy Full Address */}
          <button
            type="button"
            onClick={handleCopyAddress}
            className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold text-[#CBD5E1] bg-[#141824] hover:bg-[#1E2538] border border-[#22293D] hover:border-[#00D2FF] transition-all cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">Address Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#00D2FF]" />
                <span>Copy Full Address</span>
              </>
            )}
          </button>
        </div>

        {/* Campus Practical Information Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 border-t border-[#22293D] text-left relative z-10">
          {/* Card 1: Timings & Admission Desk */}
          <div className="p-4 rounded-2xl bg-[#141824] border border-[#22293D] space-y-2">
            <div className="flex items-center gap-2 text-[#00D2FF]">
              <Clock className="w-4 h-4" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#F8FAFC]">
                Campus & Visiting Hours
              </h4>
            </div>
            <p className="text-xs text-[#CBD5E1] leading-relaxed">
              <strong className="text-[#F8FAFC]">Monday to Saturday:</strong> 9:00 AM – 8:00 PM
              <br />
              <span className="text-[#94A3B8]">Sunday: Closed (Online in-take active)</span>
            </p>
            <div className="text-[11px] text-emerald-400 flex items-center gap-1.5 pt-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Walk-in career counseling open without appointment.</span>
            </div>
          </div>

          {/* Card 2: Transit & Accessibility */}
          <div className="p-4 rounded-2xl bg-[#141824] border border-[#22293D] space-y-2">
            <div className="flex items-center gap-2 text-[#38BDF8]">
              <Car className="w-4 h-4" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#F8FAFC]">
                Accessibility & Commute
              </h4>
            </div>
            <p className="text-xs text-[#CBD5E1] leading-relaxed">
              Directly connected via <strong className="text-[#F8FAFC]">Lahore Ring Road</strong> and GT Road. 10 mins from Mughalpura, Shalimar & Daroghawala.
            </p>
            <div className="text-[11px] text-[#94A3B8] flex items-center gap-1.5 pt-1">
              <span>🚗 Uber/Indrive/Yango drops directly at campus entrance.</span>
            </div>
          </div>
        </div>

        {/* Lab Facilities & Call Helpline Bar */}
        <div className="p-3.5 rounded-2xl bg-[#08090E] border border-[#22293D] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs relative z-10">
          <div className="flex items-center gap-2 text-[#94A3B8] text-center sm:text-left">
            <Laptop className="w-4 h-4 text-[#00D2FF] shrink-0" />
            <span>
              On-Campus: Air-conditioned high-spec labs, 100% power backup & dedicated mentor stations.
            </span>
          </div>

          <a
            href={`tel:${COMPANY_CONFIG.contact.phoneRaw}`}
            className="inline-flex items-center gap-1.5 text-[#00D2FF] hover:text-[#38BDF8] font-semibold shrink-0"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call {COMPANY_CONFIG.contact.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
