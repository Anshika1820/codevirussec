import React, { useState } from "react";
import { motion } from "framer-motion";

const employees = [
  {
    name: "Ankit Rai",
    title: "Founder & Director | Codevirus Security Private Limited",
    description:
      "Ankit Rai is a cybersecurity professional with hands-on experience in network security, vulnerability assessment & penetration testing (VAPT), security architecture design, SOC & SIEM consulting, and enterprise cybersecurity advisory.",
    extended:
      "A national award recipient, Ankit is also a recognized speaker and trainer who has delivered cybersecurity programs for banks, government institutions, IITs, NITs, universities, and corporate organizations.",
    expertise: [
      "Network & Infrastructure Security",
      "VAPT (Web, Network, Cloud)",
      "SOC & SIEM Consulting",
      "ISO 27001 & Compliance Readiness",
      "DPDP Act 2023 & Data Protection",
    ],
    category: "Leadership",
  },
  {
    name: "V. Singh",
    title: "Senior Technology Advisor | Enterprise Systems",
    description:
      "V. Singh brings 25+ years of experience in enterprise IT systems, security strategy, and product engineering.",
    extended:
      "He supports architecture design, technology strategy, and advanced enterprise consulting.",
    expertise: [
      "Enterprise IT Architecture",
      "Security Strategy",
      "Data Engineering",
      "AI-enabled Systems",
      "Product Engineering",
    ],
    category: "Advisors",
  },
  {
    name: "Dilip Singh",
    title: "Senior Security Analyst | SecOps",
    description:
      "Dilip Singh brings 12+ years of experience in cybersecurity operations and enterprise security.",
    extended:
      "He has led SOC operations, SIEM monitoring, endpoint security, and incident response.",
    expertise: [
      "SOC & SecOps Operations",
      "SIEM Monitoring",
      "Incident Response",
      "Endpoint Security",
      "Threat Intelligence",
    ],
    category: "Core Security Team",
  },
  {
    name: "Shreyansh Singh",
    title: "Cyber Security Analyst",
    description:
      "Shreyansh Singh specializes in cybersecurity operations and practical security training.",
    extended:
      "He focuses on ethical hacking, network security, cyber awareness, and lab demonstrations.",
    expertise: [
      "Ethical Hacking",
      "Network Security",
      "VAPT",
      "Linux & Windows Security",
      "Lab Setup",
    ],
    category: "Core Security Team",
  },
  {
    name: "Ashirwad Maurya",
    title: "Web Developer | Python & MERN Stack",
    description:
      "Ashirwad Maurya is a web developer experienced in modern web technologies and scalable applications.",
    extended:
      "He builds secure, high-performance internal platforms and client-facing applications.",
    expertise: [
      "Website Development",
      "Python Web Apps",
      "MERN Stack",
      "API Development",
      "Responsive UI",
    ],
    category: "Technology Team",
  },
];

export default function Team() {
  const [activeMember, setActiveMember] = useState(null);

  return (
    <section className="relative bg-slate-100 pt-16 pb-20 px-6 overflow-hidden">
      {/* Animated background shapes */}
      <motion.div
        className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-[#0b2a5b]/10 rounded-full blur-3xl"
        animate={{ y: [0, 40, 0], x: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-120px] right-[-120px] w-[340px] h-[340px] bg-slate-400/10 rounded-full blur-3xl"
        animate={{ y: [0, -40, 0], x: [0, -30, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Hero / Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative max-w-6xl mx-auto text-center mb-12"
      >
        <span className="inline-block px-5 py-2 rounded-full bg-[#0b2a5b]/10 text-[#0b2a5b] font-semibold">
          Our Team
        </span>

        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
          Leadership & Security Experts
        </h1>

        <p className="text-slate-600 mt-4 max-w-3xl mx-auto leading-relaxed">
          Experienced professionals delivering trusted, compliant, and
          enterprise-grade cybersecurity solutions.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.12 },
          },
        }}
        className="relative max-w-6xl mx-auto flex flex-wrap justify-center gap-10"
      >
        {employees.map((member, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full sm:w-[45%] lg:w-[30%]
                       rounded-2xl p-8
                       bg-white/70 backdrop-blur-xl
                       border border-white/40
                       shadow-lg hover:shadow-2xl
                       transition"
          >
            {/* Identity Badge */}
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0b2a5b] to-slate-700
                            flex items-center justify-center text-white text-xl font-bold mb-6 shadow-md">
              {member.name.charAt(0)}
            </div>

            <h2 className="text-lg font-bold text-slate-900">
              {member.name}
            </h2>

            <p className="text-sm text-slate-600 mt-1">
              {member.title}
            </p>

            <span className="inline-block mt-4 text-xs px-3 py-1 rounded-full
                             bg-slate-100/80 text-slate-700 font-medium">
              {member.category}
            </span>

            <button
              onClick={() => setActiveMember(member)}
              className="mt-8 text-sm font-semibold text-[#0b2a5b] hover:underline"
            >
              View Profile →
            </button>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      {activeMember && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
          <div className="bg-white max-w-2xl w-full rounded-2xl p-10 relative shadow-2xl">
            <button
              onClick={() => setActiveMember(null)}
              className="absolute top-4 right-4 text-slate-500 hover:text-slate-900"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-slate-900">
              {activeMember.name}
            </h2>

            <p className="text-sm text-slate-600 mt-1">
              {activeMember.title}
            </p>

            <div className="mt-6 text-slate-700 space-y-4 text-sm leading-relaxed">
              <p>{activeMember.description}</p>
              <p>{activeMember.extended}</p>
            </div>

            <h3 className="text-sm font-semibold text-slate-900 mt-6 mb-3">
              Key Expertise
            </h3>

            <div className="flex flex-wrap gap-2">
              {activeMember.expertise.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-full
                             bg-slate-100 border border-slate-200 text-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
