import { useState, useEffect } from "react";
import {
  X,
  CheckCircle2,
  MapPin,
  Globe,
  Send,
  MessageCircle,
} from "lucide-react";
import { useApplyModal } from "../context/ApplyModalContext";
import { COMPANY_CONFIG } from "../data/companyConfig";

const courseList = [
  "Digital Marketing",
  "SEO",
  "Agentic AI",
  "Full Stack Web Development",
  "App Development",
  "Shopify eCommerce",
  "Social Media Marketing",
  "Graphic Designing",
  "Video Editing",
  "Specialized Software Solutions / Custom Development",
];

export default function ApplyModal() {
  const { isOpen, selectedCourse, closeModal } = useApplyModal();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: selectedCourse || courseList[0],
    mode: "On-Campus (China Scheme, Lahore)",
    batchTiming: "Evening Batch (3:00 PM - 6:00 PM)",
    experience: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [appId, setAppId] = useState("");

  useEffect(() => {
    if (selectedCourse) {
      const match = courseList.find(
        (c) => c.toLowerCase() === selectedCourse.toLowerCase()
      );
      if (match) {
        setFormData((prev) => ({ ...prev, course: match }));
      }
    }
  }, [selectedCourse]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") closeModal();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "unset";
      setSubmitted(false);
    }
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setAppId(`TM-${Math.floor(100000 + Math.random() * 900000)}`);
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  }

  function handleWhatsAppSubmit() {
    const text = `*New Admission Application - Tech Mentors*%0A%0A*Name:* ${encodeURIComponent(
      formData.fullName || "Prospective Student"
    )}%0A*Course:* ${encodeURIComponent(formData.course)}%0A*Mode:* ${encodeURIComponent(
      formData.mode
    )}%0A*Timing:* ${encodeURIComponent(formData.batchTiming)}%0A*Phone:* ${encodeURIComponent(
      formData.phone
    )}%0A*Email:* ${encodeURIComponent(formData.email)}%0A${
      formData.message ? `*Notes:* ${encodeURIComponent(formData.message)}` : ""
    }`;
    window.open(`https://wa.me/923102199253?text=${text}`, "_blank");
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto animate-in fade-in duration-200"
    >
      {/* Dark backdrop blur */}
      <div
        className="fixed inset-0 bg-[#05060A]/85 backdrop-blur-md transition-opacity"
        onClick={closeModal}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-2xl bg-[#0E111A] border border-[#22293D] rounded-3xl shadow-2xl shadow-black/90 p-6 sm:p-8 z-10 my-auto overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Glow ambient accent */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#0066FF]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#00D2FF]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#141824] border border-[#22293D] text-[#94A3B8] hover:text-white hover:border-[#00D2FF] transition-all hover:rotate-90 duration-200 focus:outline-none focus:ring-2 focus:ring-[#0066FF]"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header with Logo Emblem & Dual National/International Badges */}
            <div className="flex items-center gap-3.5 pb-5 border-b border-[#22293D]">
              <img
                src={COMPANY_CONFIG.logoUrl}
                alt="Tech Mentors"
                className="h-14 sm:h-16 w-auto object-contain drop-shadow-[0_0_12px_rgba(0,102,255,0.5)] shrink-0"
              />
              <div>
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-[#141824] border border-[#22293D] text-[#00D2FF]">
                    <MapPin className="w-2.5 h-2.5 text-[#00D2FF]" />
                    China Scheme, Lahore
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-[#141824] border border-[#22293D] text-emerald-400">
                    <Globe className="w-2.5 h-2.5 text-emerald-400" />
                    Online Worldwide
                  </span>
                </div>
                <h2 id="modal-title" className="text-xl sm:text-2xl font-extrabold text-[#F8FAFC] tracking-tight">
                  Apply for Admission & Mentorship
                </h2>
                <p className="text-xs text-[#94A3B8] mt-0.5">
                  Confirm your batch seat in 9 career courses or specialized software tracks.
                </p>
              </div>
            </div>

            {/* Application Form */}
            <form onSubmit={handleSubmit} className="space-y-4 pt-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-[#CBD5E1] mb-1.5">
                    Full Name <span className="text-[#00D2FF]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Muhammad Ali"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#141824] border border-[#22293D] text-[#F8FAFC] text-sm placeholder:text-[#64748B] focus:outline-none focus:border-[#00D2FF] focus:ring-1 focus:ring-[#00D2FF] transition-all"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-semibold text-[#CBD5E1] mb-1.5">
                    Email Address <span className="text-[#00D2FF]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. ali@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#141824] border border-[#22293D] text-[#F8FAFC] text-sm placeholder:text-[#64748B] focus:outline-none focus:border-[#00D2FF] focus:ring-1 focus:ring-[#00D2FF] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone / WhatsApp */}
                <div>
                  <label className="block text-xs font-semibold text-[#CBD5E1] mb-1.5">
                    Phone / WhatsApp <span className="text-[#00D2FF]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="0310 2199253 or +92..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#141824] border border-[#22293D] text-[#F8FAFC] text-sm placeholder:text-[#64748B] focus:outline-none focus:border-[#00D2FF] focus:ring-1 focus:ring-[#00D2FF] transition-all"
                  />
                </div>

                {/* Course Selection */}
                <div>
                  <label className="block text-xs font-semibold text-[#CBD5E1] mb-1.5">
                    Desired Course / Program <span className="text-[#00D2FF]">*</span>
                  </label>
                  <select
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#141824] border border-[#22293D] text-[#F8FAFC] text-sm focus:outline-none focus:border-[#00D2FF] focus:ring-1 focus:ring-[#00D2FF] transition-all"
                  >
                    {courseList.map((course) => (
                      <option key={course} value={course} className="bg-[#0E111A] text-[#F8FAFC]">
                        {course}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Training Mode */}
                <div>
                  <label className="block text-xs font-semibold text-[#CBD5E1] mb-1.5">
                    Training Mode <span className="text-[#00D2FF]">*</span>
                  </label>
                  <select
                    value={formData.mode}
                    onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#141824] border border-[#22293D] text-[#F8FAFC] text-sm focus:outline-none focus:border-[#00D2FF] focus:ring-1 focus:ring-[#00D2FF] transition-all"
                  >
                    <option value="On-Campus (China Scheme, Lahore)" className="bg-[#0E111A]">
                      🏢 On-Campus (China Scheme, Lahore)
                    </option>
                    <option value="Online Live (National & International)" className="bg-[#0E111A]">
                      🌐 Online Live (National & International)
                    </option>
                  </select>
                </div>

                {/* Batch Timing */}
                <div>
                  <label className="block text-xs font-semibold text-[#CBD5E1] mb-1.5">
                    Preferred Batch Timing <span className="text-[#00D2FF]">*</span>
                  </label>
                  <select
                    value={formData.batchTiming}
                    onChange={(e) => setFormData({ ...formData, batchTiming: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#141824] border border-[#22293D] text-[#F8FAFC] text-sm focus:outline-none focus:border-[#00D2FF] focus:ring-1 focus:ring-[#00D2FF] transition-all"
                  >
                    <option value="Morning Batch (10:00 AM - 1:00 PM)" className="bg-[#0E111A]">
                      Morning (10:00 AM – 1:00 PM)
                    </option>
                    <option value="Evening Batch (3:00 PM - 6:00 PM)" className="bg-[#0E111A]">
                      Evening (3:00 PM – 6:00 PM)
                    </option>
                    <option value="Weekend Intensive (Sat - Sun)" className="bg-[#0E111A]">
                      Weekend Intensive (Sat – Sun)
                    </option>
                  </select>
                </div>
              </div>

              {/* Message / Prior Experience */}
              <div>
                <label className="block text-xs font-semibold text-[#CBD5E1] mb-1.5">
                  Educational Background / Questions (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your background (e.g. Matric, College, Graduate) or any specific questions..."
                  className="w-full px-3.5 py-2 rounded-xl bg-[#141824] border border-[#22293D] text-[#F8FAFC] text-sm placeholder:text-[#64748B] focus:outline-none focus:border-[#00D2FF] focus:ring-1 focus:ring-[#00D2FF] transition-all resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  disabled={submitting}
                  className="brand-gradient-btn w-full sm:flex-1 py-3 px-6 rounded-xl text-sm font-semibold text-white inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-[0_0_20px_rgba(0,102,255,0.6)] cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{submitting ? "Submitting Application..." : "Submit Application"}</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-600/90 hover:bg-emerald-500 text-white text-sm font-semibold inline-flex items-center justify-center gap-2 shadow-md transition-all hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] cursor-pointer shrink-0"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Instant via WhatsApp</span>
                </button>
              </div>

              <div className="pt-1 text-center text-[11px] text-[#64748B]">
                Your information is strictly confidential. Direct helpline:{" "}
                <a
                  href={`tel:${COMPANY_CONFIG.contact.phone}`}
                  className="text-[#00D2FF] hover:underline"
                >
                  {COMPANY_CONFIG.contact.phone}
                </a>
              </div>
            </form>
          </div>
        ) : (
          /* Application Submitted Success View */
          <div className="text-center py-8 space-y-5 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.4)]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
                Application Received Successfully!
              </span>
              <h3 className="text-2xl font-bold text-[#F8FAFC]">
                Welcome to Tech Mentors, {formData.fullName || "Student"}!
              </h3>
              <p className="text-sm text-[#94A3B8] max-w-md mx-auto leading-relaxed">
                Your application for <strong className="text-[#00D2FF]">{formData.course}</strong> has been logged under reference code <strong className="text-[#F8FAFC]">{appId}</strong>.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#141824] border border-[#22293D] max-w-md mx-auto text-left text-xs space-y-2">
              <div className="flex items-center justify-between text-[#94A3B8]">
                <span>Training Track:</span>
                <span className="font-semibold text-[#F8FAFC]">{formData.course}</span>
              </div>
              <div className="flex items-center justify-between text-[#94A3B8]">
                <span>Mode:</span>
                <span className="font-semibold text-[#F8FAFC]">{formData.mode}</span>
              </div>
              <div className="flex items-center justify-between text-[#94A3B8]">
                <span>Campus Location:</span>
                <span className="font-semibold text-[#F8FAFC]">China Scheme, Lahore</span>
              </div>
              <div className="flex items-center justify-between text-[#94A3B8]">
                <span>Helpline / WhatsApp:</span>
                <span className="font-semibold text-[#00D2FF]">0310 2199253</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleWhatsAppSubmit}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold inline-flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm on WhatsApp ({COMPANY_CONFIG.contact.phone})</span>
              </button>

              <button
                type="button"
                onClick={closeModal}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#141824] border border-[#22293D] text-[#CBD5E1] hover:text-white text-xs font-semibold cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
