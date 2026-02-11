import React, { useEffect, useState } from "react";

const termsContent = [
  {
    title: "Scope of Services",
    text: `Cyber Security Consulting
Vulnerability Assessment & Penetration Testing (VAPT)
Network & Infrastructure Security
Security Audits & Risk Assessment
Incident Response & Advisory
Compliance & Governance Consulting
Web & Application Security Services`,
  },
  {
    title: "Use of Website",
    text: "Website content is for informational purposes only. Unauthorized access or misuse is strictly prohibited.",
  },
  {
    title: "Service Engagement",
    text: "Service scope, deliverables, and timelines are finalized through official communication or written agreements. Any modification or extension of service scope shall be mutually agreed upon in writing. Services are delivered based on information and access provided by the client.",
  },
  {
    title: "Client Responsibilities",
    text: "Clients must ensure they have legal ownership or authorization for all systems, networks, and applications under assessment. Clients are responsible for providing accurate and complete information required for service delivery. Codevirus Security shall not be liable for issues arising due to incorrect, incomplete, or misleading information provided by the client.",
  },
  {
    title: "Confidentiality & Data Protection",
    text: "All client-related information is treated as confidential. Reasonable technical and organizational safeguards are implemented to protect sensitive data. Confidential information is not disclosed to third parties unless required by law or with client consent.",
  },
  {
    title: "Intellectual Property Rights",
    text: "All methodologies, reports, documentation, tools, and website content remain the intellectual property of Codevirus Security unless otherwise agreed in writing. Clients may use delivered reports strictly for internal business and compliance purposes.",
  },
  {
    title: "Limitation of Liability",
    text: "Cybersecurity services help in risk identification and mitigation but do not guarantee complete protection against cyber threats. Codevirus Security shall not be liable for indirect, incidental, or consequential damages. Liability, if any, shall be limited to the scope of services provided.",
  },
  {
    title: "Third-Party Dependencies",
    text: "Certain services may rely on third-party technologies or platforms. Codevirus Security is not responsible for failures, downtime, or issues arising from third-party systems.",
  },
  {
    title: "Termination of Services",
    text: "We reserve the right to suspend or terminate services if these Terms & Conditions are violated, services are misused for unlawful or unethical purposes, or required client cooperation or authorization is not provided.",
  },
  {
    title: "Governing Law & Jurisdiction",
    text: "These Terms & Conditions shall be governed by the laws of India. All disputes shall be subject to the exclusive jurisdiction of courts located in Lucknow, Uttar Pradesh.",
  },
];

const TermsCondition = () => {
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
          Terms & Conditions
        </h1>
        <p className="mt-4 text-slate-200 text-sm">
          Last Updated: <span className="font-medium">21 December 2025</span>
        </p>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-6xl mx-auto px-6 -mt-16 pb-24">
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 space-y-10">
          {termsContent.map((section, index) => (
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

        {/* HELP / CTA */}
        <section className="mt-16 bg-white rounded-2xl shadow-lg p-10 text-center">
          <h3 className="text-2xl font-bold text-[#0b2a5b] mb-4">
            Need Clarification?
          </h3>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            If you have any questions regarding our Terms & Conditions or cybersecurity services, our team at Codevirus Security is happy to assist you.
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

export default TermsCondition;
