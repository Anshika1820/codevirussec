import React, { useEffect, useState } from "react";

const privacyContent = [
  {
    title: "Information We Collect",
    text: `a) Personal Information
- Name
- Email address
- Phone number
- Organization / Company name
- Information submitted via contact forms or email

b) Technical Information
- IP address
- Browser type
- Device information
- Pages visited and interaction data`,
  },
  {
    title: "How We Use Information",
    text: `- Respond to inquiries and service requests
- Provide and improve cybersecurity services
- Communicate important updates
- Maintain website security and prevent misuse
- Comply with legal and regulatory obligations

We do not sell or rent personal data to third parties.`,
  },
  {
    title: "Confidentiality of Client Data",
    text: "All data shared during cybersecurity engagements is treated as strictly confidential and not disclosed without consent unless required by law.",
  },
  {
    title: "Cookies & Tracking Technologies",
    text: "Cookies may be used to enhance user experience and analyze traffic. Users can disable cookies via browser settings.",
  },
  {
    title: "Data Security",
    text: "Reasonable technical and organizational safeguards are implemented. However, no online transmission is 100% secure.",
  },
  {
    title: "Third-Party Services",
    text: "We are not responsible for privacy practices of third-party platforms linked on our website.",
  },
  {
    title: "Data Retention",
    text: "Personal data is retained only as long as necessary for service delivery or legal requirements.",
  },
  {
    title: "Your Rights",
    text: `- Request access to personal data
- Request correction or deletion
- Withdraw communication consent`,
  },
  {
    title: "Compliance with Indian Laws",
    text: "This policy complies with the Information Technology Act, 2000 and Digital Personal Data Protection Act, 2023 (DPDP Act).",
  },
  {
    title: "Changes to This Policy",
    text: "We may update this policy periodically. Updates will be reflected with a revised date.",
  },
];

const PrivacyPolicy = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="bg-slate-100 min-h-screen text-slate-800">
      {/* HEADER */}
      <header className="bg-[#0b2a5b] py-20 px-6 text-center text-white">
        <h1
          className={`text-4xl lg:text-5xl font-bold tracking-tight transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Privacy Policy
        </h1>
        <p className="mt-4 text-slate-200 text-sm">
          Last Updated: <span className="font-medium">[Add Date]</span>
        </p>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-6xl mx-auto px-6 -mt-16 pb-24">
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 space-y-10">
          {privacyContent.map((section, index) => (
            <div key={index} className="border-b last:border-none pb-8">
              <h2 className="text-lg lg:text-xl font-semibold text-[#0b2a5b] mb-3 flex gap-2">
                <span className="text-[#163d82] font-bold">
                  {index + 1}.
                </span>
                {section.title}
              </h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {section.text}
              </p>
            </div>
          ))}
        </div>

        {/* SUPPORT / CTA */}
        <section className="mt-16 bg-white rounded-2xl shadow-lg p-10 text-center">
          <h3 className="text-2xl font-bold text-[#0b2a5b] mb-4">
            Questions About Your Data?
          </h3>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            If you have questions regarding this Privacy Policy or how Codevirus Security handles personal data, our compliance and security team is available to assist.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-[#0b2a5b] hover:bg-[#071a36] text-white rounded-full font-semibold transition shadow-md"
          >
            Contact Us
          </a>
        </section>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
