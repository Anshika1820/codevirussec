import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function TeamPage2() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A192F] via-[#0B1C2D] to-[#0F2942] font-sans">

      {/* ===== HERO / INTRO SECTION ===== */}
      <section className="px-6 md:px-20 py-16 text-white">
        <div className="max-w-5xl mx-auto text-center">

          {/* Highlight Button Style */}
          <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg">
            <h2 className="text-xs md:text-sm font-semibold tracking-widest uppercase">
              Our Executive Team
            </h2>
          </div>

          <h3 className="mt-6 text-3xl md:text-4xl font-bold">
            Leaders & Security Experts
          </h3>

          <p className="mt-5 text-sm md:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Cybersecurity professionals delivering trusted, compliant, and enterprise-grade solutions.
          </p>

          <div className="mt-8 h-1 w-20 bg-white mx-auto rounded-full"></div>
        </div>
      </section>

      {/* ===== PROFILE SECTION CARD ===== */}
      <section className="px-6 md:px-20 pb-20 -mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-12"
        >
          {/* Header */}
          <div className="text-center border-b border-gray-200 pb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              V. Singh
            </h1>
            <p className="mt-2 text-base md:text-lg text-gray-600">
              Senior Technology Advisor | Enterprise Systems & Security
            </p>

            {/* Unified Badge Style */}
            <div className="mt-6 flex justify-center gap-3 flex-wrap">
              {[
                "Advisors & Senior Experts",
                "25+ Years Experience",
                "Enterprise Technology Leader",
              ].map((item, index) => (
                <span
                  key={index}
                  className="bg-[#0B1C2D] text-white text-xs md:text-sm px-5 py-2 rounded-full shadow-md hover:scale-105 transition-transform duration-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* About Content */}
          <div className="mt-12 space-y-6 text-sm md:text-base text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            <p>
              V. Singh is a senior technology advisor with 25+ years of extensive experience 
              in enterprise IT systems, security strategy, and product engineering.
            </p>
            <p>
              He specializes in enterprise IT architecture design, developing robust security strategies, 
              leveraging AI-enabled systems to drive innovation, and leading advanced enterprise consulting engagements.
            </p>
          </div>

          {/* Key Expertise */}
          <div className="mt-16">
            <h2 className="text-xl md:text-2xl font-semibold mb-8 text-center text-gray-900">
              Key Expertise
            </h2>

            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Enterprise IT Architecture",
                "Security Strategy",
                "Data Engineering",
                "AI-enabled Systems",
                "Product Engineering",
                "Technology Strategy",
                "Cloud Computing & Migration",
                "Digital Transformation",
                "Advanced Enterprise Consulting",
                "IT Governance",
                "Cybersecurity Advisory",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  viewport={{ once: true }}
                  className="bg-gray-100 border border-gray-200 text-gray-800 text-xs md:text-sm px-5 py-2 rounded-full hover:bg-[#0B1C2D] hover:text-white transition-all duration-300 cursor-default"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="mt-16 flex justify-center gap-6">
            <Link  
              to="/tp1">
            <button className="bg-gray-200 text-gray-800 px-8 py-3 text-sm rounded-full hover:bg-gray-300 transition-all duration-300 shadow-md">
              ← Previous
            </button>
            </Link>
            <Link 
             to="/tp3">

            <button className="bg-[#0B1C2D] text-white px-10 py-3 text-sm rounded-full hover:bg-[#102a44] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Next →
            </button>
            </Link>
          </div>

        </motion.div>
      </section>
    </div>
  );
}
