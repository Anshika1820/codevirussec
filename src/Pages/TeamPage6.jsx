import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function TeamPage6() {
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
              Ashirwad Maurya
            </h1>
            <p className="mt-2 text-base md:text-lg text-gray-600">
              Web Developer | Python & MERN Stack
            </p>

            {/* Unified Badge Style */}
            <div className="mt-6 flex justify-center gap-3 flex-wrap">
              {[
                "Technology & Development Team",
                "3+ Years Experience",
                "Full-Stack Developer",
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
              Ashirwad Maurya is a web developer experienced in modern web technologies 
              and scalable applications. He brings 3+ years of hands-on experience in 
              web development, specializing in modern web technologies and scalable 
              application development.
            </p>
            <p>
              He focuses on building secure, high-performance web solutions, working on 
              internal platforms and client-facing applications with a strong emphasis 
              on performance, security, and clean architecture.
            </p>
            <p>
              He works on internal platforms and client-facing solutions with focus on 
              performance and security.
            </p>
          </div>

          {/* Key Expertise */}
          <div className="mt-16">
            <h2 className="text-xl md:text-2xl font-semibold mb-8 text-center text-gray-900">
              Key Expertise
            </h2>

            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Full-Stack Web Wizardry",
                "High-Performance System Design",
                "JavaScript Prodigy",
                "Website Development",
                "Python Web Apps",
                "Secure REST & GraphQL APIs",
                "MERN Stack",
                "Asynchronous Programming Adept",
                "Source Code Review (NodeJS)",
                "Responsive UI",
                "API Development",
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

          {/* Buttons */}
            <div className="mt-16 text-center">
                            <Link to="/tp5">
                              <button className="bg-[#0B1C2D] text-white px-10 py-3 text-sm rounded-full hover:bg-[#102a44] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                                ← Previous 
                              </button>
                            </Link>
                          </div>

        </motion.div>
      </section>
    </div>
  );
}
