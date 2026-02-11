import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const servicesDetails = [
  { id: "csoc", title: "Cybersecurity Operations Center (CSOC)", detail: "Our CSOC provides 24/7 monitoring and proactive threat detection using advanced SIEM, SOAR, and threat intelligence platforms." },
  { id: "incident-response", title: "Incident Response & Management", detail: "We assist organizations in rapid containment, investigation, and recovery from cyber incidents." },
  { id: "data-protection", title: "Data Protection & Privacy", detail: "Comprehensive data protection strategies and privacy compliance solutions." },
  { id: "cloud-security", title: "Cloud Security", detail: "Secure architecture, monitoring, and compliance for cloud environments." },
  { id: "vapt", title: "Vulnerability Assessment & Penetration Testing (VAPT)", detail: "Identify vulnerabilities across applications, networks, and infrastructure." },
  { id: "aadhaar", title: "Aadhaar Security Audit", detail: "Security audits and compliance validation for Aadhaar-enabled systems." },
  { id: "digital-forensics", title: "Digital Forensics", detail: "Evidence collection and cyber incident investigation services." },
  { id: "iot-security", title: "IoT & Network Security", detail: "Security testing for IoT devices and enterprise networks." }
];

const ServicesDetails = () => {
  const location = useLocation();
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setActiveId(id);

      const el = document.getElementById(id);

      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 200);
      }
    }
  }, [location]);

  return (
    <div className="bg-slate-50">
      {/* HEADER */}
      <div className="bg-gradient-to-r from-[#0b2a5b] to-[#163d82] py-16 px-6 text-center text-white">
        <h1 className="text-4xl font-bold">Service Details</h1>
      </div>

      {/* DETAILS */}
      <div className="py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-6">
          {servicesDetails.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className={`rounded-xl p-8 border transition-all duration-300
                ${
                  activeId === service.id
                    ? "bg-blue-50 border-blue-600 shadow-xl scale-[1.01]"
                    : "bg-white border-slate-200 shadow-sm hover:shadow-lg"
                }`}
            >
              <div className="flex gap-4">
                <div
                  className={`w-1 rounded-full ${
                    activeId === service.id
                      ? "bg-blue-600"
                      : "bg-[#0b2a5b]"
                  }`}
                />

                <div>
                  <h3 className="text-xl font-semibold text-[#0b2a5b] mb-3">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed">
                    {service.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
