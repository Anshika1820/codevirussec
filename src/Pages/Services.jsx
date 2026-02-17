import { useState } from "react";

const services = [
  {
    title: "Cybersecurity Operations Center (CSOC)",
    desc: "24/7 enterprise monitoring, detection, and coordinated incident response through a centralized SOC model.",
    details: {
      overview:
        "Manual processes are slow and prone to error. Our CSOC leverages SIEM, SOAR, and threat intelligence to deliver continuous monitoring, rapid threat detection, incident analysis, and coordinated response. This reduces dwell time, improves visibility, and ensures compliance-aligned security operations.",
      why:
        "A centralized SOC improves visibility, reduces response times, and ensures consistent security operations across the enterprise.",
      features: [
        "24/7 Monitoring",
        "SIEM & SOAR Integration",
        "Incident Coordination",
        "Compliance Alignment"
      ]
    }
  },
  {
    title: "Incident Response & Management",
    desc: "Rapid identification, containment, investigation, and remediation of cyber incidents.",
    details: {
      overview:
        "We provide structured incident response services covering identification, containment, eradication, and recovery. Our experts minimize operational disruption while ensuring forensic readiness and regulatory compliance.",
      why:
        "Fast and effective incident response minimizes business impact and regulatory exposure.",
      features: [
        "Threat Containment",
        "Forensic Investigation",
        "Regulatory Compliance",
        "Post-Incident Recovery"
      ]
    }
  },
  {
    title: "Data Protection & Privacy",
    desc: "Comprehensive data protection and privacy compliance solutions.",
    details: {
      overview:
        "Data is your most valuable asset. We help you protect it and comply with regulations like GDPR, CCPA, and DPDP. Our Data Loss Prevention (DLP) strategies monitor and block unauthorized data transfers. We assist in data classification to identify sensitive information and implement strong encryption standards. We also conduct Privacy Impact Assessments (PIA) to help you understand and mitigate risks associated with processing personal data.",
      why:
        "In today's digital landscape, robust security measures are not just optional—they are essential for survival. Data Protection & Privacy helps mitigate risks and ensures operational resilience.",
      features: [
        "Data Classification",
        "DLP Solutions",
        "Encryption Strategy",
        "Privacy Impact Assessments"
      ]
    }
  }
];

const Services = () => {
  const [activeService, setActiveService] = useState(null);

  return (
    <div id="services">
      {/* HERO */}
      {!activeService && (
        <section className="bg-gradient-to-br from-white to-[#e6f0fa] py-28 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-sm uppercase tracking-widest text-[#163d82] font-semibold">
                Our Services
              </span>

              <h1 className="text-4xl lg:text-5xl font-extrabold mt-4 mb-6 leading-tight text-[#0b2a5b]">
                Enterprise Cybersecurity <br /> Services
              </h1>

              <p className="text-slate-700 max-w-xl text-lg leading-relaxed mb-6">
                We provide end-to-end cybersecurity solutions designed to protect
                modern enterprises across networks, applications, cloud, and identity.
              </p>

              <button
                onClick={() =>
                  document
                    .getElementById("services-list")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-[#0b2a5b] text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#081c3a] transition"
              >
                View Service Details →
              </button>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-10 shadow-sm">
              <h3 className="text-xl font-semibold text-[#0b2a5b] mb-4">
                Why Organizations Trust Us
              </h3>
              <ul className="space-y-3 text-slate-700">
                <li>✔ Enterprise-grade security frameworks</li>
                <li>✔ Global compliance alignment</li>
                <li>✔ 24/7 monitoring & response</li>
                <li>✔ Proven industry expertise</li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {!activeService && (
        <section className="pt-20 pb-6 px-6 flex justify-center">
          <div className="max-w-4xl text-center">
            <h2 className="text-3xl font-extrabold text-[#0b2a5b] mb-3">
              Our Cybersecurity Capabilities
            </h2>

            <p className="text-slate-600 text-lg">
              Comprehensive security services designed to defend, detect, and respond
              to evolving cyber threats across your enterprise.
            </p>
          </div>
        </section>
      )}

      {/* SERVICES GRID */}
      {!activeService && (
        <section id="services-list" className="py-24 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition flex flex-col"
              >
                <div className="h-1 w-12 bg-[#0b2a5b] rounded-full mb-6" />

                <h3 className="text-lg font-semibold text-[#0b2a5b] mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>

                <button
                  onClick={() => setActiveService(service)}
                  className="mt-auto text-sm font-semibold text-[#0b2a5b] hover:underline"
                >
                  Read More →
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* DETAIL PAGE */}
      {activeService && (
        <section className="py-24 px-6 bg-gradient-to-br from-[#0b2a5b] to-[#081c3a] min-h-screen">
          <div className="max-w-5xl mx-auto bg-white rounded-3xl p-12 shadow-xl">
            <button
              onClick={() => setActiveService(null)}
              className="mb-10 text-sm font-semibold text-[#0b2a5b] hover:underline"
            >
              ← Back to Services
            </button>

            <h1 className="text-4xl font-extrabold text-[#0b2a5b] mb-10">
              {activeService.title}
            </h1>

            <div className="border-l-4 border-[#0b2a5b] pl-6 space-y-10">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                  Overview
                </h3>
                <p className="text-slate-700 leading-relaxed text-lg">
                  {activeService.details.overview}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                  Why This Matters
                </h3>
                <p className="text-slate-700 leading-relaxed text-lg">
                  {activeService.details.why}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-4">
                  Key Features
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-700 text-lg">
                  {activeService.details.features.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Services;
