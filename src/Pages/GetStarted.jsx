import React from "react";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <div className="bg-slate-100 min-h-screen text-slate-800">
      {/* HEADER */}
      <header className="bg-[#0b2a5b] py-20 px-6 text-center text-white">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
          Get Started with Codevirus Security
        </h1>
        <p className="max-w-3xl mx-auto text-slate-200 leading-relaxed">
          Take the first step toward protecting your organization with expert
          cybersecurity guidance you can trust.
        </p>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-6xl mx-auto px-6 -mt-16 pb-24">
        {/* EXPECTATIONS */}
        <section className="bg-white rounded-2xl shadow-xl p-10 mb-16">
          <h2 className="text-2xl font-bold text-[#0b2a5b] mb-8 text-center">
            What You Can Expect
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-gray-700">
            <div className="border rounded-xl p-6">
              <h3 className="font-semibold text-lg text-[#0b2a5b] mb-2">
                Speak with a Security Expert
              </h3>
              <p className="text-sm leading-relaxed">
                Connect with our cybersecurity professionals to discuss your
                concerns, goals, and current security challenges in a
                confidential setting.
              </p>
            </div>

            <div className="border rounded-xl p-6">
              <h3 className="font-semibold text-lg text-[#0b2a5b] mb-2">
                Understand Your Risk
              </h3>
              <p className="text-sm leading-relaxed">
                Gain clarity on potential risks affecting your organization,
                explained in simple, practical terms without technical overload.
              </p>
            </div>

            <div className="border rounded-xl p-6">
              <h3 className="font-semibold text-lg text-[#0b2a5b] mb-2">
                Receive Clear Guidance
              </h3>
              <p className="text-sm leading-relaxed">
                Get actionable security recommendations tailored to your
                organization’s needs, priorities, and compliance requirements.
              </p>
            </div>
          </div>
        </section>

        {/* TRUST SECTION */}
        <section className="bg-white rounded-2xl shadow-lg p-10 mb-16">
          <h2 className="text-2xl font-bold text-[#0b2a5b] mb-6 text-center">
            Why Organizations Choose Codevirus Security
          </h2>

          <ul className="max-w-3xl mx-auto space-y-3 text-gray-700 list-disc list-inside">
            <li>Experienced cybersecurity consulting professionals</li>
            <li>Confidential, ethical, and compliant engagements</li>
            <li>Business-focused security recommendations</li>
            <li>Clear communication and transparent reporting</li>
            <li>Support aligned with industry and regulatory standards</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-[#0b2a5b] rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Begin?
          </h2>
          <p className="max-w-2xl mx-auto text-slate-200 mb-8">
            Reach out to Codevirus Security and take the first step toward a
            safer, more resilient cybersecurity posture.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3 bg-white text-[#0b2a5b] font-semibold rounded-full hover:bg-slate-100 transition shadow-md"
            >
              Contact Our Team
            </Link>

            <Link
              to="/security-approach"
              className="px-8 py-3 border border-white text-white rounded-full font-semibold hover:bg-white hover:text-[#0b2a5b] transition"
            >
              Our Security Approach
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default GetStarted;
