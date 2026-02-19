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

          {/* Social Media */}
            <div className="flex items-center mt-6">
              <a
                href="https://x.com/codevirussec"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-7 fill-gray-500 hover:fill-[#0b2a5b] transition"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M18.244 2H21.552L14.325 10.254L22.855 22H16.284L11.144 14.981L4.918 22H1.607L9.342 13.125L1.145 2H7.889L12.549 8.471L18.244 2ZM17.078 20H18.911L6.889 4H4.922L17.078 20Z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/codevirussec?igsh=eXBnZDliaGFlYzZk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
              >
                <svg
                  className="w-6 h-7 text-gray-500 hover:text-[#0b2a5b] transition"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 1.5h8.5A4.75 4.75 0 0121 7.75v8.5A4.75 4.75 0 0116.25 21h-8.5A4.75 4.75 0 013 16.25v-8.5A4.75 4.75 0 017.75 3.5zm9.75 2a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5A3.5 3.5 0 1112 15.5 3.5 3.5 0 0112 8.5z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/codevirussecurity/" className="w-10 h-10  rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-300">
                <svg className="w-5 h-6 fill-gray-500 hover:fill-[#0b2a5b] transition" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/codevirussec9"
                className="w-10 h-10 ounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6 fill-gray-500 hover:fill-[#0b2a5b] transition" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.49 0-1.953.925-1.953 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
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
