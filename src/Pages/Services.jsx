import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const services = [
  {
    title: "Cybersecurity Operations Center (CSOC)",
    desc: "24/7 enterprise monitoring, detection, and coordinated incident response through a centralized SOC model.",
    details: {
      overview:
        "Our CSOC leverages SIEM, SOAR, and threat intelligence to deliver continuous monitoring, rapid threat detection, and coordinated response.",
      why:
        "A centralized SOC improves visibility, reduces response times, and ensures consistent enterprise security operations.",
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
        "Structured incident response services covering containment, eradication, recovery, and forensic readiness.",
      why:
        "Fast incident response minimizes downtime and protects business continuity.",
      features: [
        "Threat Containment",
        "Forensic Investigation",
        "Regulatory Compliance",
        "Recovery Planning"
      ]
    }
  },

  {
    title: "Data Protection & Privacy",
    desc: "Comprehensive data protection and privacy compliance solutions.",
    details: {
      overview:
        "We help organizations protect sensitive data using encryption strategies, DLP, and privacy compliance frameworks.",
      why:
        "Protecting sensitive data ensures regulatory compliance and prevents data breaches.",
      features: [
        "Data Classification",
        "DLP Solutions",
        "Encryption Strategy",
        "Privacy Assessments"
      ]
    }
  },

  {
    title: "Cloud Security",
    desc: "Security architecture, monitoring, and compliance for cloud environments.",
    details: {
      overview:
        "We secure AWS, Azure, and GCP environments using configuration audits, identity controls, and monitoring.",
      why:
        "Cloud misconfigurations are one of the biggest security risks today.",
      features: [
        "Cloud Configuration Audits",
        "IAM Security",
        "Cloud Monitoring",
        "Compliance Hardening"
      ]
    }
  },

  {
    title: "Vulnerability Assessment & Penetration Testing (VAPT)",
    desc: "Identify and remediate vulnerabilities across applications and infrastructure.",
    details: {
      overview:
        "We simulate real-world attacks to identify vulnerabilities before attackers do.",
      why:
        "Proactive vulnerability discovery reduces breach risk.",
      features: [
        "Web App Testing",
        "Network Testing",
        "API Testing",
        "Security Reporting"
      ]
    }
  },

  {
    title: "Aadhaar Authentication & eKYC Integration",
    desc: "Security audits and compliance validation for Aadhaar-based systems.",
    details: {
      overview:
        "We assess Aadhaar authentication systems for security, compliance, and integration risks.",
      why:
        "Identity systems must meet strict regulatory and security requirements.",
      features: [
        "API Security Review",
        "Compliance Validation",
        "Authentication Flow Testing",
        "Risk Assessment"
      ]
    }
  },

  {
    title: "Digital Forensics",
    desc: "Evidence collection, analysis, and investigation of cyber incidents.",
    details: {
      overview:
        "We perform forensic investigations to identify root causes and preserve digital evidence.",
      why:
        "Forensics supports legal cases and incident understanding.",
      features: [
        "Disk Forensics",
        "Memory Analysis",
        "Log Investigation",
        "Evidence Preservation"
      ]
    }
  },

  {
    title: "IoT & Network Security",
    desc: "Security testing for IoT devices and enterprise networks.",
    details: {
      overview:
        "We test IoT ecosystems and enterprise networks for vulnerabilities and misconfigurations.",
      why:
        "Connected devices expand the attack surface significantly.",
      features: [
        "IoT Device Testing",
        "Network Auditing",
        "Firewall Review",
        "Secure Architecture Design"
      ]
    }
  }
];

const Services = () => {
  const location = useLocation();
  const [highlightIndex, setHighlightIndex] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    if (location.state?.serviceTitle) {
      const index = services.findIndex(
        (s) => s.title === location.state.serviceTitle
      );

      if (index !== -1) {
        setHighlightIndex(index);
        setExpandedIndex(index);

        setTimeout(() => {
          const el = document.getElementById(`service-${index}`);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 200);
      }
    }
  }, [location]);

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
  <div className="py-20 px-6 bg-slate-50 min-h-screen">
    <div className="text-center mb-14">
      <h2 className="text-3xl font-bold text-[#0b2a5b]">
        Our Security Services
      </h2>
      <div className="h-1 w-24 bg-[#0b2a5b] mx-auto mt-4 rounded-full" />
      <p className="text-slate-600 mt-4 max-w-xl mx-auto">
        Enterprise-grade cybersecurity services designed to protect,
        monitor, and strengthen your digital infrastructure.
      </p>
    </div>

    <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
      {services.map((service, index) => (
        <div
          id={`service-${index}`}
          key={index}
          className={`bg-white border rounded-2xl p-8 transition-all duration-300
          ${
            highlightIndex === index
              ? "border-[#0b2a5b] shadow-xl ring-2 ring-[#0b2a5b]/10"
              : "border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1"
          }`}
        >
          <div className="flex items-center justify-between mb-5">
            <div className="h-1 w-12 bg-[#0b2a5b] rounded-full" />
            <span className="text-xs font-semibold text-slate-400">
              Service
            </span>
          </div>

          <h3 className="text-lg font-semibold text-[#0b2a5b] mb-3 leading-snug">
            {service.title}
          </h3>

          <p className="text-slate-600 text-sm leading-relaxed">
            {service.desc}
          </p>

          <button
            onClick={() => toggleReadMore(index)}
            className="mt-5 text-[#0b2a5b] font-semibold text-sm flex items-center gap-1"
          >
            {expandedIndex === index ? "Show Less" : "Read More"}
            <span>→</span>
          </button>

          {expandedIndex === index && (
            <div className="mt-5 text-sm text-slate-700 space-y-3 border-t pt-4">
              <p>{service.details.overview}</p>

              <p className="italic text-slate-500">
                {service.details.why}
              </p>

              <ul className="mt-3 space-y-2">
                {service.details.features.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-slate-700"
                  >
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#0b2a5b]" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);

};

export default Services;
