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
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-gray-500 hover:text-[#0b2a5b] transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#0b2a5b] transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#0b2a5b] transition">
                <Globe size={20} />
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
                <span>+91 9918103909</span>
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
