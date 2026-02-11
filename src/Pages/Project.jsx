import React, { useState } from "react";
import { motion } from "framer-motion";


const categories = [
  "All",
  "IoT Security",
  "SOC Implementation",
  "Monitoring",
  "Threat Management",
  "Cloud Security",
  "Data Security",
  "Data Protection & Privacy",
  "VAPT",
  "SOC & Monitoring",
];

const projects = [
  {
    title: "Cyber Security Enhancement for Smart Devices",
    category: "IoT Security",
    description:
      "Advanced security solutions for IoT and smart device protection with real-time threat detection.",
    client: "IT Companies",
    duration: "6 Months",
    technologies: ["AI/ML", "IoT", "Blockchain", "Cloud Security"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    title: "Advanced Cyber Defense & Operations Center",
    category: "SOC Implementation",
    description:
      "Comprehensive cybersecurity operations center implementation with 24/7 monitoring.",
    client: "Banking Sector",
    duration: "12 Months",
    technologies: ["SIEM", "EDR", "Threat Intelligence", "Automation"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
  },
  {
    title: "24/7 Security Monitoring & Incident Response",
    category: "Monitoring",
    description:
      "Round-the-clock security monitoring and rapid incident response system.",
    client: "Cyber Security",
    duration: "8 Months",
    technologies: ["Real-time Monitoring", "AI Detection", "Forensics"],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  },
  {
    title: "Cybersecurity Operations & Threat Management",
    category: "Threat Management",
    description:
      "Integrated threat management and cybersecurity operations.",
    client: "Healthcare",
    duration: "10 Months",
    technologies: ["Threat Intelligence", "Risk Assessment", "Compliance"],
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87",
  },
  {
    title: "Cloud Security & Compliance Framework",
    category: "Cloud Security",
    description:
      "Comprehensive cloud security framework ensuring compliance.",
    client: "IT Companies",
    duration: "9 Months",
    technologies: ["AWS Security", "Azure Security", "Zero Trust"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
  },
  {
    title: "Enterprise Data Privacy Compliance Program",
    category: "Data Protection & Privacy",
    description:
      "Structured privacy framework to identify data risks.",
    client: "IT Enterprise",
    duration: "5 Months",
    technologies: ["Data Classification", "Risk Assessment"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
  },
  {
    title: "Data Protection & Privacy Compliance",
    category: "Data Security",
    description:
      "End-to-end data protection and privecy compliance solutions for organizations handling sensitive information.",
    client: "Tech Industry",
    duration: "7 Months",
    technologies: ["Encryption", "GDPR","Data Governance","Privacy Tools"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
  },
  {
    title: "Data Leakage Prevention (DLP) Implementation",
    category: "Data Protection and Privacy",
    description:
      "Implemented DLP controls to prevent unauthorized data leakage using monitoring, alerting, and blocking mechanisms.",
    client: "Corporate Organization",
    duration: "4 Months",
    technologies: ["DLP Solutions", "ENdpoint Security","Policy Enforcement"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
  },
  {
    title: "Cloud Infrastructure Security Audit",
    category: "Cloud Security",
    description:
      "Security audit to identify misconfigurations, exposed services, and IAM weaknesses in cloud infrastructure.",
    client: "FinTech Support",
    duration: "3 Months",
    technologies: ["AWS", "IAM","CSPM Tools"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
  },
  {
    title: "Secure Cloud Migration Assessment",
    category: "Cloud Security",
    description:
      "Designed secure architecture and controls for safe migration from on-premise to cloud environments.",
    client: "Enterprise IT",
    duration: "5 Months",
    technologies: ["AWS", "Azure","Zero Trust"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
  },
  {
    title: "Cloud Misconfiguration Risk Assessment",
    category: "Cloud Security",
    description:
      "Identified security risks caused by excessive permissions, open storage, and weak cloud configurations.",
    client: "SaaS Provider",
    duration: "3 Months",
    technologies: ["Cloud Auditing", "IAM Review"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
  },
  {
    title: "Cloud Compliance Readiness Review",
    category: "Cloud Security",
    description:
      "Mapped cloud security gaps against regulatory standards to prepare for compliance audits.",
    client: "Banking Sector",
    duration: "4 Months",
    technologies: ["CIS Benchmarks", "Risk Mapping"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
  },
  {
    title: "Web Application VAPT",
    category: "VAPT",
    description:
      "Identified web application vulnerabilities using real-world attack simulation.",
    client: "E-Commerce Platform",
    duration: "2 Months",
    technologies: ["Burp Suite", "OWASP Top 10"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
  },
  {
    title: "Network Penetration Testing",
    category: "VAPT",
    description:
      "Internal and external network penetration testing including exploitation and lateral movement.",
    client: "Corporate Network",
    duration: "3 Months",
    technologies: ["Nmap", "Metasploit"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
  },
  {
    title: "API Security Assessment",
    category: "VAPT",
    description:
      "Security testing of APIs aligned with OWASP API Security Top 10.",
    client: "FinTech Application",
    duration: "2 Months",
    technologies: ["Postman", "OAuth","JWT"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
  },
  {
    title: "Cloud VAPT  ",
    category: "VAPT",
    description:
      "Tested cloud assets for identity abuse, misconfigurations, and exposed interfaces.",
    client: "SaaS Organization",
    duration: "3 Months",
    technologies: ["Cloud Security Tools", "IAM Testing"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
  },
  {
    title: "SOC Implementation & SIEM Deployment",
    category: "SOC & Monitoring",
    description:
      "Designed and implemented SOC with SIEM integration.",
    client: "Banking Sector",
    duration: "12 Months",
    technologies: ["SIEM", "Threat Monitoring"],
    image: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72",
  },
  {
    title: "24×7 Security Monitoring Setup",
    category: "SOC & Monitoring",
    description:
      "Continuous security monitoring with real-time alerts and incident handling.",
    client: "IT Enterprise",
    duration: "8 Months",
    technologies: ["Real-time Monitoring", "Incident Response"],
    image: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72",
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [view, setView] = useState("home");
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-20 py-12 min-h-screen bg-slate-100 w-full">

      {/* HERO */}
      {view !== "detail" && (
        <section className="w-full pt-12 pb-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#0b2a5b] mb-6">
              Codevirus Cybersecurity Projects & Case Studies
            </h1>
            <p className="text-lg text-slate-600 max-w-4xl mx-auto">
              Enterprise-grade cybersecurity implementations across SOC,
              Cloud, IoT, Data Protection, and Threat Management domains.
            </p>
          </div>
        </section>
      )}

      {/* FILTER BUTTONS */}
      {view !== "detail" && (
        <section className="w-full pb-10">
          <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition
                ${
                  activeCategory === cat
                    ? "bg-[#0b2a5b] text-white shadow-lg"
                    : "bg-white border border-slate-200 text-slate-700 hover:border-[#0b2a5b]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>
      )}

      {/* PROJECT CARDS */}
      {view !== "detail" && (
        <section className="w-full py-16">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="cursor-pointer bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition"
                onClick={() => {
                  setActiveProject(project);
                  setView("detail");
                }}
              >
                {/* IMAGE */}
                <div className="h-44 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* HEADER */}
                <div className="p-5 border-b">
                  <span className="text-xs font-semibold text-[#0b2a5b]">
                    {project.category}
                  </span>

                  <h3 className="text-lg font-semibold text-slate-800 mt-2">
                    {project.title}
                  </h3>
                </div>

                {/* CONTENT */}
                <div className="p-5">
                  <p className="text-sm text-slate-600 mb-4">
                    {project.description}
                  </p>

                  <span className="text-sm font-semibold text-[#0b2a5b]">
                    View Details →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* DETAIL VIEW */}
      {view === "detail" && activeProject && (
        <section className="py-24 px-6 bg-gradient-to-br from-[#0b2a5b] to-[#081c3a] min-h-screen">
          <div className="max-w-5xl mx-auto bg-white rounded-3xl p-12 shadow-xl">
            <button
              onClick={() => {
                setView("home");
                setActiveProject(null);
              }}
              className="mb-10 text-sm font-semibold text-[#0b2a5b] hover:underline"
            >
              ← Back to Projects
            </button>

            <h1 className="text-4xl font-extrabold text-[#0b2a5b] mb-10">
              {activeProject.title}
            </h1>

            <p className="text-slate-700 text-lg mb-8">
              {activeProject.description}
            </p>

            <p><strong>Client:</strong> {activeProject.client}</p>
            <p><strong>Duration:</strong> {activeProject.duration}</p>

            <h3 className="mt-6 font-semibold">Technologies Used</h3>
            <ul className="list-disc pl-6">
              {activeProject.technologies.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </div>
  );
}
