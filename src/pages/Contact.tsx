import {
  Sparkles,
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Navigation,
  Compass,
  Laptop,
  Car,
  ExternalLink,
} from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import ContactForm from "../components/ContactForm";
import { COMPANY_CONFIG } from "../data/companyConfig";
import { GithubIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from "../components/SocialIcons";
import { useLocationModal } from "../context/LocationModalContext";

export default function Contact() {
  const { openLocationModal } = useLocationModal();

  return (
    <div>
      {/* Contact Hero */}
      <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 bg-[#08090E] border-b border-[#22293D] overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0066FF]/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: "Admissions & Contact" }]} />

          <div className="max-w-3xl mt-4 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0E111A] border border-[#22293D] text-xs font-semibold text-[#00D2FF]">
              <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" />
              <span>ADMISSIONS & INQUIRIES · CHINA SCHEME, LAHORE</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight">
              Start Your Journey at{" "}
              <span className="brand-gradient-text">Tech Mentors</span>
            </h1>
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              Apply in three simple steps. Fill out the application form below, or reach out to our team directly on WhatsApp for batch timings, curriculum details, and fee structures for on-campus and online classes.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Contact Information Grid */}
      <section className="py-16 sm:py-24 bg-[#0E111A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Functional Contact / Admission Form */}
            <div className="lg:col-span-7">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-[#F8FAFC]">
                  Course Admission & Inquiry Form
                </h2>
                <p className="text-xs sm:text-sm text-[#94A3B8] mt-1">
                  Takes less than a minute. Our team will review your application and provide complete enrollment details.
                </p>
              </div>

              <ContactForm />
            </div>

            {/* Right: Contact Information & Direct Channels */}
            <div className="lg:col-span-5 space-y-8">
              {/* 3 Simple Admission Steps Card */}
              <div className="rounded-2xl bg-[#141824] border border-[#22293D] p-7 sm:p-8 space-y-4 shadow-xl">
                <h3 className="text-lg font-bold text-[#F8FAFC] pb-3 border-b border-[#22293D]">
                  3 Simple Admission Steps
                </h3>
                <div className="space-y-3.5">
                  {COMPANY_CONFIG.admissionSteps.map((s) => (
                    <div key={s.step} className="flex items-start gap-3.5">
                      <div className="w-7 h-7 rounded-full bg-[#0E111A] border border-[#0066FF] text-[#00D2FF] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        {s.step}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#F8FAFC]">{s.title}</h4>
                        <p className="text-xs text-[#94A3B8] mt-0.5 leading-relaxed">{s.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-[#22293D]">
                  <a
                    href={COMPANY_CONFIG.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brand-gradient-btn w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white shadow-lg"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Instant Chat on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Direct Channels Card */}
              <div className="rounded-2xl bg-[#141824] border border-[#22293D] p-7 sm:p-8 space-y-6 transition-all hover:border-[#0066FF]/50 shadow-xl">
                <h3 className="text-lg font-bold text-[#F8FAFC] pb-3 border-b border-[#22293D]">
                  Campus & Direct Channels
                </h3>

                <ul className="space-y-5 text-sm">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0E111A] border border-[#22293D] flex items-center justify-center text-[#00D2FF] shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-[#94A3B8] uppercase block">
                        Phone / WhatsApp Helpline
                      </span>
                      <a
                        href={`tel:${COMPANY_CONFIG.contact.phoneRaw}`}
                        className="text-base font-semibold text-[#F8FAFC] hover:text-[#00D2FF] transition-colors"
                      >
                        {COMPANY_CONFIG.contact.phone}
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0E111A] border border-[#22293D] flex items-center justify-center text-[#00D2FF] shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-[#94A3B8] uppercase block">
                        Official Inquiries Email
                      </span>
                      <a
                        href={`mailto:${COMPANY_CONFIG.contact.email}`}
                        className="text-base font-semibold text-[#F8FAFC] hover:text-[#00D2FF] transition-colors"
                      >
                        {COMPANY_CONFIG.contact.email}
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0E111A] border border-[#22293D] flex items-center justify-center text-[#00D2FF] shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-[#94A3B8] uppercase block">
                        Campus Location
                      </span>
                      <span className="text-sm text-[#F8FAFC] font-medium block">
                        {COMPANY_CONFIG.contact.address}
                      </span>
                      <span className="text-xs text-[#64748B] block mt-0.5">
                        {COMPANY_CONFIG.contact.availabilityNotice}
                      </span>
                      <button
                        type="button"
                        onClick={openLocationModal}
                        className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0066FF]/20 text-[#00D2FF] hover:bg-[#0066FF] hover:text-white border border-[#0066FF]/40 text-xs font-semibold transition-all cursor-pointer shadow-sm"
                      >
                        <Compass className="w-3.5 h-3.5" />
                        <span>Open Interactive Campus Map</span>
                      </button>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0E111A] border border-[#22293D] flex items-center justify-center text-[#00D2FF] shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-[#94A3B8] uppercase block">
                        Campus & Office Hours
                      </span>
                      <span className="text-sm text-[#F8FAFC] font-medium block">
                        {COMPANY_CONFIG.contact.businessHours}
                      </span>
                    </div>
                  </li>
                </ul>

                {/* Social Profiles */}
                <div className="pt-4 border-t border-[#22293D] flex items-center gap-3">
                  <a
                    href={COMPANY_CONFIG.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-[#0E111A] border border-[#22293D] flex items-center justify-center text-[#94A3B8] hover:text-[#00D2FF] hover:border-[#0066FF] hover:shadow-[0_0_10px_rgba(0,102,255,0.4)] transition-all hover:-translate-y-0.5"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={COMPANY_CONFIG.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-[#0E111A] border border-[#22293D] flex items-center justify-center text-[#94A3B8] hover:text-[#00D2FF] hover:border-[#0066FF] hover:shadow-[0_0_10px_rgba(0,102,255,0.4)] transition-all hover:-translate-y-0.5"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={COMPANY_CONFIG.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-[#0E111A] border border-[#22293D] flex items-center justify-center text-[#94A3B8] hover:text-[#00D2FF] hover:border-[#0066FF] hover:shadow-[0_0_10px_rgba(0,102,255,0.4)] transition-all hover:-translate-y-0.5"
                    aria-label="Twitter Profile"
                  >
                    <TwitterIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={COMPANY_CONFIG.socials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-[#0E111A] border border-[#22293D] flex items-center justify-center text-[#94A3B8] hover:text-[#00D2FF] hover:border-[#0066FF] hover:shadow-[0_0_10px_rgba(0,102,255,0.4)] transition-all hover:-translate-y-0.5"
                    aria-label="YouTube Channel"
                  >
                    <YoutubeIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Interactive Campus Map Section */}
      <section className="py-16 sm:py-20 bg-[#08090E] border-t border-[#22293D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00D2FF] mb-2">
                <MapPin className="w-4 h-4" />
                <span>PHYSICAL CAMPUS & LAB LOCATION</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC]">
                Visit Us in China Scheme, Lahore
              </h2>
              <p className="text-sm text-[#94A3B8] mt-1 max-w-xl">
                Easily accessible via Lahore Ring Road and GT Road. Drop in for free career counseling or to inspect our live lab facilities.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=China+Scheme+Lahore+Pakistan"
                target="_blank"
                rel="noopener noreferrer"
                className="brand-gradient-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white shadow-lg"
              >
                <Navigation className="w-4 h-4 text-[#00D2FF]" />
                <span>Get Directions in Google Maps</span>
              </a>

              <a
                href={`https://wa.me/${COMPANY_CONFIG.contact.phoneRaw}?text=${encodeURIComponent(
                  "Assalam o Alaikum Tech Mentors, please share your exact campus location pin on WhatsApp."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="brand-outline-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Location</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Frame with Status Bar */}
          <div className="relative rounded-3xl overflow-hidden border border-[#22293D] shadow-2xl bg-[#0E111A]">
            <div className="p-4 bg-[#141824] border-b border-[#22293D] flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-[#CBD5E1]">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold text-[#F8FAFC]">Tech Mentors Campus:</span>
                <span>China Scheme, Lahore, Punjab, Pakistan</span>
              </div>
              <div className="flex items-center gap-4 text-[#94A3B8]">
                <span className="font-mono text-[11px]">Coords: 31.6035° N, 74.3750° E</span>
                <span className="hidden sm:inline text-[#22293D]">•</span>
                <span className="hidden sm:inline text-[#00D2FF]">Mon–Sat 9AM–8PM</span>
              </div>
            </div>

            <div className="h-80 sm:h-96 w-full relative">
              <iframe
                title="Tech Mentors Campus Map"
                src="https://maps.google.com/maps?q=China%20Scheme%20Lahore&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
              />

              <div className="absolute top-4 right-4 z-10">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=China+Scheme+Lahore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-[#08090E]/90 backdrop-blur-md border border-[#22293D] hover:border-[#00D2FF] text-xs font-semibold text-[#00D2FF] hover:text-white flex items-center gap-1.5 shadow-lg transition-all"
                >
                  <span>Open Full Map</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Travel Guide Footer */}
            <div className="p-4 sm:p-5 bg-[#0E111A] border-t border-[#22293D] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="flex items-start gap-2.5 text-[#94A3B8]">
                <Car className="w-4 h-4 text-[#00D2FF] mt-0.5 shrink-0" />
                <span>
                  <strong className="text-[#F8FAFC]">By Car / Ride:</strong> Ring Road & GT Road interchange. Drop at campus gate.
                </span>
              </div>
              <div className="flex items-start gap-2.5 text-[#94A3B8]">
                <Clock className="w-4 h-4 text-[#38BDF8] mt-0.5 shrink-0" />
                <span>
                  <strong className="text-[#F8FAFC]">Office Hours:</strong> Mon–Sat 9:00 AM – 8:00 PM for on-campus admissions.
                </span>
              </div>
              <div className="flex items-start gap-2.5 text-[#94A3B8]">
                <Laptop className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span>
                  <strong className="text-[#F8FAFC]">Lab Facilities:</strong> High-spec PC labs, generator backup & WiFi.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
