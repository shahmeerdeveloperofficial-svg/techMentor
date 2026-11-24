import Breadcrumbs from "../components/Breadcrumbs";
import { COMPANY_CONFIG } from "../data/companyConfig";

export default function Privacy() {
  const lastUpdated = "November 2026";

  return (
    <div>
      <section className="relative pt-12 pb-14 bg-[#08090E] border-b border-[#22293D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] mt-4 tracking-tight">
            Privacy Policy
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
              1. Information We Collect
            </h2>
            <p>
              When you submit a course admission inquiry or contact request through the {COMPANY_CONFIG.name} website,
              we collect contact details such as your full name, email address, phone number,
              education background, and course interests.
            </p>
            <p>
              We do not sell, rent, or trade your personal information with third parties.
              All data is collected solely to evaluate course enrollment, provide batch schedules and fee details,
              and maintain academic communications.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#F8FAFC]">
              2. How We Protect Your Data
            </h2>
            <p>
              We implement industry-standard encryption protocols (TLS/SSL) for all data in transit
              and strict access controls for internal admission systems. Student information,
              curriculum records, and written internship agreements are maintained securely.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#F8FAFC]">
              3. Cookies and Analytics
            </h2>
            <p>
              Our website uses minimal, privacy-conscious session cookies necessary for website
              functionality, security integrity, and anonymous aggregated traffic performance measurement.
              We do not track users across external third-party sites.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#F8FAFC]">
              4. Contact Us Regarding Your Data
            </h2>
            <p>
              If you have any questions regarding this Privacy Policy or wish to request data deletion
              from our records, please reach out to our team at{" "}
              <a
                href={`mailto:${COMPANY_CONFIG.contact.email}`}
                className="text-[#00D2FF] hover:underline"
              >
                {COMPANY_CONFIG.contact.email}
              </a>{" "}
              or call/WhatsApp{" "}
              <a
                href={`tel:${COMPANY_CONFIG.contact.phoneRaw}`}
                className="text-[#00D2FF] hover:underline"
              >
                {COMPANY_CONFIG.contact.phone}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
