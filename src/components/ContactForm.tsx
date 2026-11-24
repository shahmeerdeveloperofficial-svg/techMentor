import React, { useState } from "react";
import { CheckCircle2, AlertCircle, Send, RotateCcw, MessageCircle } from "lucide-react";
import { SERVICES_DATA, COMPANY_CONFIG } from "../data/companyConfig";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  service: string;
  projectDescription: string;
  honeypot: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  service?: string;
  projectDescription?: string;
  general?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    service: "Digital Marketing",
    projectDescription: "",
    honeypot: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Full name must be at least 2 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = "Please provide a brief message or question about your desired course.";
    } else if (formData.projectDescription.trim().length < 10) {
      newErrors.projectDescription = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) {
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setIsSubmitted(true);
      setSubmittedData({ ...formData });
    } catch {
      setErrors({
        general:
          "Unable to send your inquiry due to a network error. Please try again or WhatsApp us directly at " +
          COMPANY_CONFIG.contact.phone,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      companyName: "",
      service: "Digital Marketing",
      projectDescription: "",
      honeypot: "",
    });
    setErrors({});
    setIsSubmitted(false);
    setSubmittedData(null);
  };

  if (isSubmitted && submittedData) {
    const waText = encodeURIComponent(
      `Assalam o Alaikum Tech Mentors,\nI want to apply for admission.\nName: ${submittedData.fullName}\nPhone: ${
        submittedData.phone || "-"
      }\nCourse: ${submittedData.service}\nEmail: ${submittedData.email}\nMessage: ${
        submittedData.projectDescription || "-"
      }`
    );

    return (
      <div className="rounded-2xl bg-[#141824] border border-emerald-500/50 p-8 sm:p-10 text-center shadow-2xl animate-in fade-in duration-200">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center mx-auto mb-6 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-[#F8FAFC] mb-2">
          Admission Application Prepared!
        </h3>
        <p className="text-sm text-[#94A3B8] max-w-md mx-auto mb-6 leading-relaxed">
          Thank you, <strong className="text-[#F8FAFC]">{submittedData.fullName}</strong>. We have received your inquiry for{" "}
          <strong className="text-[#00D2FF]">{submittedData.service}</strong>. Our admissions team in China Scheme, Lahore will contact you via phone or WhatsApp shortly.
        </p>

        <div className="p-4 rounded-xl bg-[#0E111A] border border-[#22293D] text-xs text-left max-w-md mx-auto mb-6 space-y-1">
          <div className="text-[#94A3B8]">Application Reference: <span className="font-mono text-[#00D2FF]">TM-{Date.now().toString().slice(-6)}</span></div>
          <div className="text-[#94A3B8]">Course Selected: <span className="text-[#F8FAFC]">{submittedData.service}</span></div>
          {submittedData.phone && (
            <div className="text-[#94A3B8]">Contact Phone: <span className="text-[#F8FAFC]">{submittedData.phone}</span></div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`https://wa.me/${COMPANY_CONFIG.contact.phoneRaw}?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="brand-gradient-btn inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white shadow-lg w-full sm:w-auto"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Send Application on WhatsApp</span>
          </a>

          <button
            onClick={handleReset}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0E111A] border border-[#22293D] text-sm font-semibold text-[#F8FAFC] hover:border-[#00D2FF] hover:text-[#00D2FF] transition-all w-full sm:w-auto"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Submit Another Inquiry</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl bg-[#141824] border border-[#22293D] p-6 sm:p-8 lg:p-10 shadow-xl space-y-6 transition-all duration-300 hover:border-[#0066FF]/40"
    >
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website_url">Leave empty</label>
        <input
          id="website_url"
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {errors.general && (
        <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/50 flex items-start gap-3 text-red-300 text-sm">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <span>{errors.general}</span>
        </div>
      )}

      {/* Row 1: Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="fullName"
            className="block text-xs font-semibold text-[#F8FAFC] uppercase tracking-wider mb-2"
          >
            Full Name <span className="text-[#00D2FF]">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Your name"
            className={`w-full px-4 py-3 rounded-xl bg-[#0E111A] border text-[#F8FAFC] placeholder-[#64748B] text-sm focus:outline-none focus:ring-2 focus:ring-[#0066FF] transition-all ${
              errors.fullName ? "border-red-500" : "border-[#22293D] focus:border-[#00D2FF]"
            }`}
          />
          {errors.fullName && (
            <p className="mt-1.5 text-xs text-red-400">{errors.fullName}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-xs font-semibold text-[#F8FAFC] uppercase tracking-wider mb-2"
          >
            Email Address <span className="text-[#00D2FF]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@domain.com"
            className={`w-full px-4 py-3 rounded-xl bg-[#0E111A] border text-[#F8FAFC] placeholder-[#64748B] text-sm focus:outline-none focus:ring-2 focus:ring-[#0066FF] transition-all ${
              errors.email ? "border-red-500" : "border-[#22293D] focus:border-[#00D2FF]"
            }`}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
          )}
        </div>
      </div>

      {/* Row 2: Phone & Education/Organization */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-semibold text-[#F8FAFC] uppercase tracking-wider mb-2"
          >
            Phone / WhatsApp <span className="text-[#00D2FF]">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="03XX XXXXXXX"
            className="w-full px-4 py-3 rounded-xl bg-[#0E111A] border border-[#22293D] text-[#F8FAFC] placeholder-[#64748B] text-sm focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-[#00D2FF] transition-all"
          />
        </div>

        <div>
          <label
            htmlFor="companyName"
            className="block text-xs font-semibold text-[#F8FAFC] uppercase tracking-wider mb-2"
          >
            Education / Background <span className="text-[#64748B] font-normal">(Optional)</span>
          </label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="e.g. Matric, Intermediate, University, or Working Professional"
            className="w-full px-4 py-3 rounded-xl bg-[#0E111A] border border-[#22293D] text-[#F8FAFC] placeholder-[#64748B] text-sm focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-[#00D2FF] transition-all"
          />
        </div>
      </div>

      {/* Row 3: Course Selection */}
      <div>
        <label
          htmlFor="service"
          className="block text-xs font-semibold text-[#F8FAFC] uppercase tracking-wider mb-2"
        >
          Select Desired Course <span className="text-[#00D2FF]">*</span>
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl bg-[#0E111A] border border-[#22293D] text-[#F8FAFC] text-sm focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-[#00D2FF] transition-all cursor-pointer"
        >
          {SERVICES_DATA.map((srv) => (
            <option key={srv.slug} value={srv.title} className="bg-[#0E111A] text-[#F8FAFC]">
              {srv.title} {srv.mode ? `(${srv.mode})` : ""}
            </option>
          ))}
          <option value="Not sure yet" className="bg-[#0E111A] text-[#F8FAFC]">
            Not sure yet (Request Guidance)
          </option>
        </select>
      </div>

      {/* Row 4: Project Description / Message */}
      <div>
        <label
          htmlFor="projectDescription"
          className="block text-xs font-semibold text-[#F8FAFC] uppercase tracking-wider mb-2"
        >
          Message or Inquiry <span className="text-[#00D2FF]">*</span>
        </label>
        <textarea
          id="projectDescription"
          name="projectDescription"
          rows={4}
          required
          value={formData.projectDescription}
          onChange={handleChange}
          placeholder="Any question about batch timings, fees, on-campus vs online classes, or your learning goals..."
          className={`w-full px-4 py-3 rounded-xl bg-[#0E111A] border text-[#F8FAFC] placeholder-[#64748B] text-sm focus:outline-none focus:ring-2 focus:ring-[#0066FF] transition-all resize-y ${
            errors.projectDescription ? "border-red-500" : "border-[#22293D] focus:border-[#00D2FF]"
          }`}
        />
        {errors.projectDescription && (
          <p className="mt-1.5 text-xs text-red-400">{errors.projectDescription}</p>
        )}
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="brand-gradient-btn w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl text-base font-semibold text-white disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#0066FF]"
        >
          {isSubmitting ? (
            <>
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              <span>Submitting Application...</span>
            </>
          ) : (
            <>
              <span>Submit Admission Application</span>
              <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </button>
        <p className="text-[11px] text-center text-[#64748B] mt-3">
          Your inquiry is reviewed directly by our admissions team in Lahore. We will contact you with batch details and schedule.
        </p>
      </div>
    </form>
  );
}
