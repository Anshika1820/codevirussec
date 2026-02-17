import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Lock,
  Linkedin,
  Twitter,
  Globe,
  XIcon,
} from "lucide-react";
import { useEffect } from "react";
import { useLocation  } from  "react-dom";


const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand & Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck size={30} className="text-[#0b2a5b]" />
              <h3 className="text-xl font-bold text-[#0b2a5b]">
                Codevirus Security
              </h3>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              We help organizations strengthen their security posture through
              vulnerability assessments, penetration testing, and proactive
              risk management strategies.
            </p>

            {/* Trust Badge */}
            <div className="mt-6 flex items-center gap-2">
              <Lock size={18} className="text-[#0b2a5b]" />
              <div>
                <span className="text-xs font-semibold text-gray-700 uppercase">
                  Recognized Partner
                </span>
                <p className="text-sm text-gray-600">
                  GoodFirms Partner
                </p>
              </div>
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

          {/* Contact Information */}
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
                  href="mailto:contact@codevirussec.in"
                  className="hover:text-[#071a36] transition"
                >
                  contact@codevirussec.in
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Phone size={18} className="text-[#0b2a5b] mt-0.5" />
                <span>+91 5223153884</span>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-sm font-semibold text-[#0b2a5b] mb-5 uppercase tracking-wide">
              Useful Links
            </h4>

            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link to="/about" className="hover:text-[#071a36] transition">About Us</Link></li>
              <li><Link to="/faq" className="hover:text-[#071a36] transition">FAQ's</Link></li>
              <li><Link to="/terms" className="hover:text-[#071a36] transition">Terms & Conditions</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-[#071a36] transition">Privacy Policy</Link></li>
              <li><Link to="/services" className="hover:text-[#071a36] transition">Services</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-[#0b2a5b] mb-5 uppercase tracking-wide">
              Cybersecurity Services
            </h4>

            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link to="/services#data-protection" state={{ serviceTitle: "Data Protection & Privacy" }}>
                  Data Protection & Privacy
                </Link>
              </li>
              <li>
                <Link to="/services#cloud-security" state={{ serviceTitle: "Cloud Security" }}>
                  Cloud Security
                </Link>
              </li>
              <li>
                <Link to="/services#vapt" state={{ serviceTitle: "Vulnerability Assessment & Penetration Testing (VAPT)" }}>
                  VAPT
                </Link>
              </li>
              <li>
                <Link to="/services#aadhaar" state={{ serviceTitle: "Aadhaar Authentication & eKYC Integration" }}>
                  Aadhaar Security Audit
                </Link>
              </li>
              <li>
                <Link to="/services#digital-forensics" state={{ serviceTitle: "Digital Forensics" }}>
                  Digital Forensics
                </Link>
              </li>
              <li>
                <Link to="/services#iot-security" state={{ serviceTitle: "IoT & Network Security" }}>
                  IoT / Networking Audit
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-16 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © 2018–{new Date().getFullYear()} Codevirus Security. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
