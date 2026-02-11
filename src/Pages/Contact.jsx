import React from "react";
import { MapPin, Phone, Mail, Clock, ShieldCheck } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto">

        {/* Page Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Connect with CodeVirus Security
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We help organizations secure critical infrastructure, protect
            sensitive data, and manage cyber risk through compliant,
            intelligence-driven cybersecurity services.
          </p>
        </div>

        {/* Main Container */}
        <div className="bg-white border border-slate-200 rounded-md shadow-sm p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

            {/* LEFT: Company Information */}
            <div className="space-y-7">
              <div className="flex items-start gap-4">
                <MapPin size={22} className="text-[#0b2a5b] mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900">Office Location</h4>
                  <p className="text-slate-600 text-sm">Lucknow, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail size={22} className="text-[#0b2a5b] mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900">Business Email</h4>
                  <a
                    href="mailto:services@codevirussec.in"
                    className="text-[#0b2a5b] text-sm hover:underline"
                  >
                    services@codevirussec.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone size={22} className="text-[#0b2a5b] mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900">Contact Number</h4>
                  <p className="text-slate-600 text-sm">+91 9918103909</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock size={22} className="text-[#0b2a5b] mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900">Business Hours</h4>
                  <p className="text-slate-600 text-sm">
                    Mon – Fri | 10:00 AM – 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* MIDDLE: Why Choose CodeVirus */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-slate-900">
                Why Choose Our Cybersecurity Services?
              </h3>

              <div className="flex items-start gap-3">
                <ShieldCheck className="text-[#0b2a5b] mt-1" size={20} />
                <div>
                  <p className="font-semibold text-slate-900 text-sm">
                    24/7 Monitoring
                  </p>
                  <p className="text-slate-600 text-sm">
                    Round-the-clock security monitoring and threat detection.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="text-[#0b2a5b] mt-1" size={20} />
                <div>
                  <p className="font-semibold text-slate-900 text-sm">
                    Expert Team
                  </p>
                  <p className="text-slate-600 text-sm">
                    Certified cybersecurity professionals with years of experience.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="text-[#0b2a5b] mt-1" size={20} />
                <div>
                  <p className="font-semibold text-slate-900 text-sm">
                    Advanced Technology
                  </p>
                  <p className="text-slate-600 text-sm">
                    State-of-the-art tools and cutting-edge security solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT: Contact Form (1/3 width) */}
            <div className="border border-slate-200 rounded-md p-6 bg-slate-50">
              <h3 className="text-base font-semibold text-slate-900 mb-4">
                Request a Security Consultation
              </h3>

              <form className="space-y-3">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:border-[#0b2a5b]"
                  required
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:border-[#0b2a5b]"
                  required
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:border-[#0b2a5b]"
                  required
                />

                <textarea
                  rows="3"
                  placeholder="Briefly describe your requirement"
                  className="w-full border border-slate-300 px-3 py-2 text-sm resize-none focus:outline-none focus:border-[#0b2a5b]"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-[#0b2a5b] hover:bg-[#0b2a8b] text-white py-2 rounded-md text-sm font-semibold transition"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
