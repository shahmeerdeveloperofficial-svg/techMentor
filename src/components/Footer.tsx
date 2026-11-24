import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { COMPANY_CONFIG, SERVICES_DATA } from "../data/companyConfig";
import { GithubIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from "./SocialIcons";
import { useApplyModal } from "../context/ApplyModalContext";
import { useLocationModal } from "../context/LocationModalContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { openModal } = useApplyModal();
  const { openLocationModal } = useLocationModal();

  return (
    <footer className="bg-[#08090E] border-t border-[#22293D] text-[#94A3B8] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-14 border-b border-[#22293D]/80">
          {/* Column 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="flex items-center gap-4 group">
              <img
                src={COMPANY_CONFIG.logoUrl}
                alt={COMPANY_CONFIG.name}
                className="h-16 sm:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_0_20px_rgba(0,102,255,0.6)]"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight flex items-center">
                  <span className="chrome-text">TECH</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#00D2FF] ml-1">
                    MENTORS
                  </span>
                </span>
                <span className="text-[11px] tracking-widest text-[#94A3B8] uppercase font-bold">
                  {COMPANY_CONFIG.tagline}
                </span>
                <span className="text-[9px] tracking-wider text-[#00D2FF] font-mono mt-0.5">
                  LEARN • PRACTICE • BUILD • GROW
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-[#94A3B8] max-w-sm">
              Practical IT and digital skills training institute in China Scheme, Lahore. Learn from industry professionals, build real-world portfolio projects, and continue into an internship under a written agreement.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_CONFIG.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#141824] border border-[#22293D] flex items-center justify-center text-[#94A3B8] hover:text-[#00D2FF] hover:border-[#0066FF] hover:shadow-[0_0_10px_rgba(0,102,255,0.4)] transition-all hover:-translate-y-0.5"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_CONFIG.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#141824] border border-[#22293D] flex items-center justify-center text-[#94A3B8] hover:text-[#00D2FF] hover:border-[#0066FF] hover:shadow-[0_0_10px_rgba(0,102,255,0.4)] transition-all hover:-translate-y-0.5"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_CONFIG.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#141824] border border-[#22293D] flex items-center justify-center text-[#94A3B8] hover:text-[#00D2FF] hover:border-[#0066FF] hover:shadow-[0_0_10px_rgba(0,102,255,0.4)] transition-all hover:-translate-y-0.5"
                aria-label="Twitter Profile"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_CONFIG.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#141824] border border-[#22293D] flex items-center justify-center text-[#94A3B8] hover:text-[#00D2FF] hover:border-[#0066FF] hover:shadow-[0_0_10px_rgba(0,102,255,0.4)] transition-all hover:-translate-y-0.5"
                aria-label="YouTube Channel"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0E111A] border border-[#22293D] text-xs text-[#00D2FF]">
              <span className="w-2 h-2 rounded-full bg-[#00D2FF] animate-pulse shadow-[0_0_6px_#00D2FF]"></span>
              {COMPANY_CONFIG.contact.availabilityNotice}
            </div>
          </div>

          {/* Column 2: Institute Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-[#F8FAFC] tracking-wider uppercase">
              Institute
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-[#00D2FF] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#00D2FF] transition-colors">
                  About Tech Mentors
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#00D2FF] transition-colors">
                  All Courses (9 Tracks)
                </Link>
              </li>
              <li>
                <Link to="/process" className="hover:text-[#00D2FF] transition-colors">
                  Learning Journey (4 Steps)
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-[#00D2FF] transition-colors">
                  Student & Studio Projects
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-[#00D2FF] transition-colors">
                  Join as Trainer
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#00D2FF] transition-colors">
                  Admissions & Apply
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Popular Courses */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-[#F8FAFC] tracking-wider uppercase">
              Popular Courses
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICES_DATA.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="hover:text-[#00D2FF] transition-colors flex items-center justify-between group"
                  >
                    <span>{service.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 text-[#00D2FF] transition-opacity" />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="text-xs text-[#00D2FF] hover:text-[#38BDF8] font-medium flex items-center gap-1 pt-1 transition-colors"
                >
                  View All 9 Courses →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-[#F8FAFC] tracking-wider uppercase">
              Campus & Admissions
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#00D2FF] mt-0.5 shrink-0" />
                <div>
                  <a
                    href={`tel:${COMPANY_CONFIG.contact.phoneRaw}`}
                    className="text-[#F8FAFC] hover:text-[#00D2FF] transition-colors font-medium block"
                  >
                    {COMPANY_CONFIG.contact.phone}
                  </a>
                  <a
                    href={COMPANY_CONFIG.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-emerald-400 hover:underline block mt-0.5"
                  >
                    Chat on WhatsApp →
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#00D2FF] mt-0.5 shrink-0" />
                <div>
                  <a
                    href={`mailto:${COMPANY_CONFIG.contact.email}`}
                    className="text-[#F8FAFC] hover:text-[#00D2FF] transition-colors"
                  >
                    {COMPANY_CONFIG.contact.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#00D2FF] mt-0.5 shrink-0" />
                <button
                  type="button"
                  onClick={openLocationModal}
                  className="text-left text-[#CBD5E1] hover:text-[#00D2FF] transition-colors cursor-pointer group focus:outline-none"
                >
                  <span className="block font-medium">{COMPANY_CONFIG.contact.address}</span>
                  <span className="block text-xs text-[#00D2FF] group-hover:underline">
                    View Campus Map & Directions →
                  </span>
                </button>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#00D2FF] mt-0.5 shrink-0" />
                <span>{COMPANY_CONFIG.contact.businessHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <p>
            © {currentYear} {COMPANY_CONFIG.name}. All rights reserved. {COMPANY_CONFIG.tagline}
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-[#F8FAFC] transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-[#F8FAFC] transition-colors">
              Terms & Conditions
            </Link>
            <span>•</span>
            <button
              onClick={() => openModal()}
              className="hover:text-[#00D2FF] text-[#CBD5E1] transition-colors cursor-pointer font-medium"
            >
              Online Admission Form
            </button>
            <span>•</span>
            <Link to="/contact" className="hover:text-[#F8FAFC] transition-colors">
              Campus & Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
