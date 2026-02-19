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
              Securing your digital assets with enterprise-grade cybersecurity solutions, compliance services, and threat management.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-[#0b2a5b] mb-5 uppercase tracking-wide">
              Contact Information
            </h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#0b2a5b] mt-0.5" />
                <span>Lucknow, India</span>
              </li>

              <li className="flex items-start gap-3">
                <Mail size={18} className="text-[#0b2a5b] mt-0.5" />
                <a
                  href="mailto:services@codevirussec.in"
                  className="hover:text-[#071a36] transition"
                >
                  services@codevirussec.in
                </a>
              </li>
              
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-[#0b2a5b] mt-0.5" />
                <a
                  href="mailto:services@codevirussec.in"
                  className="hover:text-[#071a36] transition"
                >
                  support@codevirussec.in
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Phone size={18} className="text-[#0b2a5b] mt-0.5" />
                <span>+91 9918103909</span>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-semibold text-[#0b2a5b] mb-5 uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link to="/about" className="hover:text-[#071a36] transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-[#071a36] transition">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-[#071a36] transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-[#071a36] transition">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#071a36] transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#071a36] transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-sm font-semibold text-[#0b2a5b] mb-5 uppercase tracking-wide">
              Core Services
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              {services.slice(0, 8).map((s, i) => (
                <li key={i}>
                  <Link
                    to={`/services?service=${s.slug}`}
                    className="hover:text-[#071a36] transition"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Advanced & Consulting Services */}
          <div>
            <h4 className="text-sm font-semibold text-[#0b2a5b] mb-5 uppercase tracking-wide">
              Advanced & Consulting
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              {services.slice(8).map((s, i) => (
                <li key={i}>
                  <Link
                    to={`/services?service=${s.slug}`}
                    className="hover:text-[#071a36] transition"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
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
