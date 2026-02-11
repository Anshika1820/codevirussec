import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const approachSteps = [
  {
    step: "01",
    title: "Discovery & Risk Assessment",
    text: `We begin by understanding your business environment, infrastructure, and threat landscape.
This includes asset identification, vulnerability assessment & penetration testing (VAPT),
and risk prioritization based on real-world impact.`,
  },
  {
    step: "02",
    title: "Security Strategy & Architecture",
    text: `Based on assessment findings, we design a tailored security strategy aligned with business objectives.
Our approach includes layered security, zero-trust access principles, and compliance-driven architecture.`,
  },
  {
    step: "03",
    title: "Implementation & Hardening",
    text: `We deploy and configure security controls using industry best practices, including next-generation
firewalls, intrusion prevention systems, secure access controls, and system hardening.`,
  },
  {
    step: "04",
    title: "Monitoring & Incident Readiness",
    text: `Security is continuous. We assist organizations with monitoring, alerting, and incident response
planning to ensure rapid detection and effective handling of security incidents.`,
  },
  {
    step: "05",
    title: "Review & Continuous Improvement",
    text: `We provide detailed reports, executive summaries, and ongoing recommendations to improve
security posture, maintain compliance, and adapt to evolving cyber threats.`,
  },
];

const SecurityApproach = () => {
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
          Our Security Approach
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-slate-200 leading-relaxed">
          How Codevirus Security protects organizations using a layered,
          risk-driven, and zero-trust cybersecurity model.
        </p>
      </header>

      {/* CONTENT */}
      <main className="max-w-6xl mx-auto px-6 -mt-16 pb-24">
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="grid gap-8">
            {approachSteps.map((item) => (
              <div
                key={item.step}
                className="flex flex-col lg:flex-row gap-6 border-b last:border-none pb-8"
              >
                <div className="text-[#163d82] font-bold text-3xl min-w-[64px]">
                  {item.step}
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-[#0b2a5b] mb-2">
                    {item.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* OPERATING PRINCIPLES */}
        <section className="mt-16 bg-white rounded-2xl shadow-lg p-10">
          <h3 className="text-2xl font-bold text-[#0b2a5b] mb-6 text-center">
            Our Operating Principles
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
            <div className="p-4 border rounded-xl">
              <strong>Defense-in-Depth</strong>
              <p className="mt-1 text-sm">
                Multiple layers of security controls for stronger protection.
              </p>
            </div>

            <div className="p-4 border rounded-xl">
              <strong>Zero-Trust Model</strong>
              <p className="mt-1 text-sm">
                Never trust, always verify access and identity.
              </p>
            </div>

            <div className="p-4 border rounded-xl">
              <strong>Risk-Based Decisions</strong>
              <p className="mt-1 text-sm">
                Focus on threats that matter most to your business.
              </p>
            </div>

            <div className="p-4 border rounded-xl">
              <strong>Confidentiality First</strong>
              <p className="mt-1 text-sm">
                Client data protection at every stage of engagement.
              </p>
            </div>

            <div className="p-4 border rounded-xl">
              <strong>Compliance-Driven</strong>
              <p className="mt-1 text-sm">
                Aligned with regulatory and industry standards.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 bg-[#0b2a5b] rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Strengthen Your Security?
          </h3>
          <p className="max-w-2xl mx-auto text-slate-200 mb-8">
            Connect with Codevirus Security to assess risks, improve resilience,
            and build a strong cybersecurity foundation for your organization.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-white text-[#0b2a5b] font-semibold rounded-full hover:bg-slate-100 transition shadow-md"
          >
            Contact Us
          </Link>
        </section>
      </main>
    </div>
  );
};

export default SecurityApproach;
