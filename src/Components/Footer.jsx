import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ShieldCheck } from "lucide-react";

const Footer = () => {
  const services = [
    { title: "IoT & Edge Security", slug: "iot-edge-security" },
    { title: "System Security Audit", slug: "system-security-audit" },
    { title: "Aadhaar Security Audit", slug: "aadhaar-security-audit" },
    { title: "Cloud Security", slug: "cloud-security" },
    { title: "Network Security", slug: "network-security" },
    { title: "Application Security", slug: "application-security" },
    { title: "Vulnerability Assessment & Penetration Testing (VAPT)", slug: "vulnerability-assessment-penetration-testing-vapt" },
    { title: "Security Operations Center (SOC)", slug: "security-operations-center-soc" },
    { title: "Digital Forensics", slug: "digital-forensics" },
    { title: "Compliance & Risk Management", slug: "compliance-risk-management" },
    { title: "Endpoint Security", slug: "endpoint-security" },
    { title: "Email Security", slug: "email-security" },
    { title: "Data Loss Prevention (DLP)", slug: "data-loss-prevention-dlp" },
    { title: "Zero Trust Security", slug: "zero-trust-security" },
    { title: "Identity & Access Management (IAM)", slug: "identity-access-management-iam" },
    { title: "Incident Response & Management", slug: "incident-response-management" },
    { title: "Threat Intelligence", slug: "threat-intelligence" },
    { title: "Cybersecurity Consulting", slug: "cybersecurity-consulting" },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="text-[#0b2a5b]" size={28} />
              <h3 className="text-xl font-bold text-[#0b2a5b]">
                Codevirus Security
              </h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Securing your digital assets with enterprise-grade cybersecurity solutions.
            </p>

            {/* Social Media */}
            <div className="flex items-center gap-4 mt-6">
              {/* X */}
              <a href="https://x.com/codevirussec" target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5 fill-gray-500 hover:fill-[#0b2a5b] transition" viewBox="0 0 24 24">
                  <path d="M18.244 2H21.552L14.325 10.254L22.855 22H16.284L11.144 14.981L4.918 22H1.607L9.342 13.125L1.145 2H7.889L12.549 8.471L18.244 2Z" />
                </svg>
              </a>

              {/* Instagram */}
              <a href="https://www.instagram.com/codevirussec" target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5 text-gray-500 hover:text-[#0b2a5b] transition" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/codevirussecurity/" target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5 fill-gray-500 hover:fill-[#0b2a5b] transition" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037..." />
                </svg>
              </a>

              {/* Facebook */}
              <a href="https://www.facebook.com/codevirussec9" target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5 fill-gray-500 hover:fill-[#0b2a5b] transition" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12..." />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact, Links, Services sections remain same */}

        </div>

        <div className="border-t border-gray-200 mt-16 pt-6 text-center">
          <p className="text-sm text-gray-700 font-semibold">
            © {new Date().getFullYear()} Codevirus Security. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
