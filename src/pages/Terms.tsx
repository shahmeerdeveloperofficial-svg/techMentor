import Breadcrumbs from "../components/Breadcrumbs";
import { COMPANY_CONFIG } from "../data/companyConfig";

export default function Terms() {
  const lastUpdated = "November 2026";

  return (
    <div>
      <section className="relative pt-12 pb-14 bg-[#08090E] border-b border-[#22293D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Terms & Conditions" }]} />
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] mt-4 tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-sm text-[#94A3B8] mt-2">
            Last updated: {lastUpdated} • {COMPANY_CONFIG.name} (China Scheme, Lahore)
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#0E111A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-sm sm:text-base text-[#94A3B8] leading-relaxed">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#F8FAFC]">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing the {COMPANY_CONFIG.name} website, applying for courses, or enrolling in training programs, you agree to comply with and be bound by these Terms and Conditions. Individual course enrollment forms and training guidelines govern academic participation.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#F8FAFC]">
              2. Course Enrollment & Certification
            </h2>
            <p>
              Course completion certificates are awarded to students who fulfill attendance requirements and successfully submit practical projects. {COMPANY_CONFIG.name} does not make false promises of automatic job guarantees; career success depends on individual practice, dedication, and project execution.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#F8FAFC]">
              3. Post-Course Internship Program
            </h2>
            <p>
              Following course completion, students can continue into an internship at Tech Mentors under a written agreement. Internship placement terms, project scope, and durations are specified directly in the written agreement.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#F8FAFC]">
              4. Code of Conduct & Intellectual Property
            </h2>
            <p>
              Course materials, lecture notes, and training guides provided by {COMPANY_CONFIG.name} are for the enrolled student's personal educational use. Students retain ownership of the original code, designs, and campaigns they create during their practical coursework.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#F8FAFC]">
              5. Governing Jurisdiction
            </h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of Pakistan, with academic jurisdiction in Lahore.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
