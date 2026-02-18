import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import networksecurity from "../assets/Photos/network.png";
import digitalforensics from "../assets/Photos/digitalforensics.png";
import dataloss from "../assets/Photos/dataloss.png";
import zerosecurity from "../assets/Photos/zerosecurity.png";

const Services = ({ preview = false }) => {
  const [activeService, setActiveService] = useState(null);
  
  useEffect(() => {
    document.documentElement.style.scrollbarGutter = "stable";

    // Restore active service from sessionStorage if it exists
    const savedService = sessionStorage.getItem("activeService");
    if (savedService) {
      setActiveService(JSON.parse(savedService));
      window.scrollTo({ top: 0 });
    }
  }, []);

  const services = [
    {
      title: "IoT & Edge Security",
      desc:
        "Protect connected devices and distributed edge networks from modern cyber threats and vulnerabilities.",
      image:
        "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
      details: {
        overview:
          "Advanced protection for IoT ecosystems and distributed edge infrastructure ensuring secure device communication and monitoring.",
        why:
          "IoT environments are highly vulnerable entry points for attackers. Securing them ensures operational continuity and data protection.",
        features: [
          "Device Authentication",
          "Edge Threat Monitoring",
          "Secure Firmware Management",
          "Network Segmentation",
        ],
      },
    },
    {
      title: "System Security Audit",
      desc:
        "Comprehensive audits to identify vulnerabilities, compliance gaps, and operational security risks.",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
      details: {
        overview:
          "Structured system assessments covering identification, analysis, remediation, and compliance validation.",
        why:
          "Proactive audits minimize exposure to cyber risks and strengthen enterprise resilience.",
        features: [
          "Threat Containment",
          "Forensic Investigation",
          "Regulatory Compliance",
          "Post-Incident Recovery",
        ],
      },
    },
    {
      title: "Aadhaar Security Audit",
      desc:
        "Ensure Aadhaar-enabled systems fully comply with UIDAI security standards and guidelines.",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
      details: {
        overview:
          "Comprehensive review of Aadhaar systems ensuring encryption, compliance, and access controls meet UIDAI standards.",
        why:
          "Non-compliance can result in regulatory penalties and reputational damage.",
        features: [
          "UIDAI Compliance Check",
          "Encryption Review",
          "Access Control Validation",
          "Risk Assessment",
        ],
      },
    },
    {
      title: "Cloud Security",
      desc:
        "Secure public, private, and hybrid cloud environments from misconfigurations and breaches.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
      details: {
        overview:
          "End-to-end cloud posture management, identity governance, and real-time threat detection.",
        why:
          "Cloud misconfigurations are leading causes of modern data breaches.",
        features: [
          "Cloud Configuration Audit",
          "Identity Governance",
          "Threat Detection",
          "Compliance Monitoring",
        ],
      },
    },
    {
      title: "Network Security",
      desc:
        "Protect enterprise networks from internal and external cyber threats.",
      image:
        networksecurity,
      details: {
        overview:
          "Comprehensive network defense using firewalls, intrusion detection, and zero trust architecture.",
        why:
          "Network breaches can severely disrupt operations and expose sensitive data.",
        features: [
          "Firewall Configuration",
          "Intrusion Detection",
          "Traffic Monitoring",
          "Zero Trust Segmentation",
        ],
      },
    },
    {
      title: "Application Security",
      desc:
        "Identify and eliminate vulnerabilities in web, mobile, and enterprise applications.",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80",
      details: {
        overview:
          "Secure SDLC implementation and continuous security testing for robust application defense.",
        why:
          "Applications are primary attack vectors for modern cyber threats.",
        features: [
          "Code Review",
          "Security Testing",
          "OWASP Compliance",
          "API Security",
        ],
      },
    },
    {
      title: "Vulnerability Assessment & Penetration Testing (VAPT)",
      desc:
        "Simulate real-world attacks to uncover and remediate exploitable weaknesses.",
      image:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
      details: {
        overview:
          "Ethical hacking techniques to detect and remediate vulnerabilities before attackers exploit them.",
        why:
          "Proactive security testing significantly reduces breach risk.",
        features: [
          "Black Box Testing",
          "White Box Testing",
          "Exploit Simulation",
          "Remediation Support",
        ],
      },
    },
    {
      title: "Security Operations Center (SOC)",
      desc:
        "24/7 threat monitoring, detection, and rapid incident response services.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
      details: {
        overview:
          "Round-the-clock monitoring using SIEM and advanced threat intelligence platforms.",
        why:
          "Continuous monitoring reduces attack dwell time and business disruption.",
        features: [
          "SIEM Monitoring",
          "Threat Intelligence",
          "Incident Handling",
          "Log Management",
        ],
      },
    },
    {
      title: "Digital Forensics",
      desc:
        "Investigate cyber incidents and securely collect digital evidence.",
      image:
        digitalforensics,
      details: {
        overview:
          "Professional investigations for cybercrime, fraud detection, and legal proceedings.",
        why:
          "Proper evidence handling ensures legal admissibility and compliance.",
        features: [
          "Evidence Collection",
          "Malware Analysis",
          "Data Recovery",
          "Court-Ready Reporting",
        ],
      },
    },
    {
      title: "Compliance & Risk Management",
      desc:
        "Ensure regulatory compliance while reducing enterprise security risks.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
      details: {
        overview:
          "Governance, risk, and compliance frameworks tailored to enterprise needs.",
        why:
          "Regulatory violations can cause financial penalties and reputational damage.",
        features: [
          "Risk Assessment",
          "Policy Development",
          "ISO Compliance",
          "Audit Support",
        ],
      },
    },
    {
      title: "Endpoint Security",
      desc:
        "Protect laptops, desktops, and mobile devices from ransomware and malware.",
      image:
        "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1200&q=80",
      details: {
        overview:
          "Advanced endpoint detection and response solutions for device-level security.",
        why:
          "Endpoints are common entry points for cyber attacks.",
        features: [
          "EDR Deployment",
          "Malware Protection",
          "Patch Management",
          "Device Control",
        ],
      },
    },
    {
      title: "Email Security",
      desc:
        "Prevent phishing, spoofing, and malware-based email attacks.",
      image:
        "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1200&q=80",
      details: {
        overview:
          "Comprehensive email filtering, DMARC setup, and threat detection.",
        why:
          "Email remains the number one vector for cyber attacks.",
        features: [
          "Spam Filtering",
          "Phishing Detection",
          "DMARC Setup",
          "Malware Scanning",
        ],
      },
    },
    {
      title: "Data Loss Prevention (DLP)",
      desc:
        "Monitor and safeguard sensitive business data from unauthorized exposure.",
      image:
        dataloss,
      details: {
        overview:
          "Prevent data leakage across endpoints, email, and cloud environments.",
        why:
          "Data breaches lead to financial loss and brand damage.",
        features: [
          "Data Classification",
          "Policy Enforcement",
          "Encryption Control",
          "Activity Monitoring",
        ],
      },
    },
    {
      title: "Zero Trust Security",
      desc:
        "Implement zero trust architecture to eliminate implicit trust.",
      image:
        zerosecurity,
      details: {
        overview:
          "Continuous identity verification and micro-segmentation strategy.",
        why:
          "Traditional trust-based access models are outdated and risky.",
        features: [
          "Least Privilege Access",
          "Continuous Verification",
          "Micro-Segmentation",
          "Identity Validation",
        ],
      },
    },
    {
      title: "Identity & Access Management (IAM)",
      desc:
        "Centralize and secure digital identity lifecycle management.",
      image:
        "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=1200&q=80",
      details: {
        overview:
          "Comprehensive identity governance with MFA and privileged access management.",
        why:
          "Unauthorized access remains a leading cause of breaches.",
        features: [
          "SSO Integration",
          "Multi-Factor Authentication",
          "Role-Based Access",
          "Privileged Access Management",
        ],
      },
    },
    {
      title: "Incident Response & Management",
      desc:
        "Rapid containment and recovery from cybersecurity incidents.",
      image:
        "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1200&q=80",
      details: {
        overview:
          "Complete lifecycle response from detection to recovery.",
        why:
          "Fast response minimizes financial and operational impact.",
        features: [
          "Incident Detection",
          "Containment Strategy",
          "Eradication",
          "Recovery Planning",
        ],
      },
    },
    {
      title: "Threat Intelligence",
      desc:
        "Proactively monitor emerging threats and global threat actors.",
      image:
        "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1200&q=80",
      details: {
        overview:
          "Actionable insights through real-time threat feeds and dark web monitoring.",
        why:
          "Understanding threat landscapes improves defense strategies.",
        features: [
          "Threat Feeds",
          "Dark Web Monitoring",
          "IOC Analysis",
          "Risk Alerts",
        ],
      },
    },
    {
      title: "Cybersecurity Consulting",
      desc:
        "Strategic advisory services to design and strengthen security posture.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
      details: {
        overview:
          "Expert-led strategy development and security architecture design.",
        why:
          "Long-term security requires strong governance and planning.",
        features: [
          "Security Roadmap",
          "Architecture Design",
          "Gap Analysis",
          "Board-Level Reporting",
        ],
      },
    },
  ];
const visibleServices = preview ? services.slice(0, 3) : services;
  return (
    <div className="bg-slate-50 py-20">
      {!activeService && (
        <>
          {/* HEADER */}
          <div className="max-w-6xl mx-auto text-center mb-14 px-6">
            <h2 className="text-3xl font-bold text-[#0b2a5b]">
              Our Services
            </h2>
            <p className="text-slate-600 mt-3">
              Enterprise-grade cybersecurity solutions designed to protect
              modern digital infrastructure.
            </p>
          </div>

          {/* SERVICES GRID */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
            {visibleServices.map((service) => (
              <div
                key={service.id}
                onClick={() => setActiveService(service)}
                className="cursor-pointer bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition"
              >
                <div className="text-4xl mb-4">{service.icon}</div>

                <h3 className="text-xl font-semibold text-[#0b2a5b] mb-2">
                  {service.title}
                </h3>

                <p className="text-slate-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>

          {/* VIEW ALL BUTTON (ONLY FOR HOME PREVIEW) */}
          {preview && (
            <div className="text-center mt-10">
              <Link
                to="/services"
                className="px-6 py-3 bg-[#0b2a5b] text-white rounded-full font-semibold hover:scale-105 transition"
              >
                View All Services
              </Link>
            </div>
          )}
        </>
      )}

      {/* SINGLE SERVICE DETAIL */}
      {activeService && (
        <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-lg text-center">
          <div className="text-5xl mb-4">{activeService.icon}</div>

          <h2 className="text-2xl font-bold text-[#0b2a5b] mb-4">
            {activeService.title}
          </h2>

          <p className="text-slate-600 mb-6">{activeService.details}</p>

          <button
            onClick={() => setActiveService(null)}
            className="px-6 py-2 bg-[#0b2a5b] text-white rounded-full"
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
};

export default Services;
