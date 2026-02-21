import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const features = [
  { title: "Protecting Digital Assets 24/7", desc: "Our advanced cybersecurity operations center provides round-the-clock protection for your digital infrastructure." },
  { title: "Stay Ahead of Cyber Threats", desc: "Proactive threat detection and response systems keep your organization secure from emerging threats." },
  { title: "Real-Time Threat Monitoring", desc: "Continuous monitoring and analysis of security events with instant alerting and response capabilities." },
  { title: "Expert Security Team", desc: "Certified cybersecurity professionals with years of experience in threat detection and incident response." },
  { title: "Advanced Analytics", desc: "AI-powered analytics to identify patterns and predict potential security threats." },
  { title: "Compliance & Governance", desc: "Ensure your organization meets industry standards and regulatory compliance requirements." },
];

const statsData = [
  { value: 5, label: "Security Centers", suffix: "+" },
  { value: 100, label: "Protected Clients", suffix: "+" },
  { value: 99.9, label: "Uptime Guarantee", suffix: "%" },
  { value: 24, label: "Monitoring", suffix: "/7" },
];

const About = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const statsRef = useRef(null);
  const [hasCounted, setHasCounted] = useState(false);

  useEffect(() => setActive(true), []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasCounted) {
          statsData.forEach((stat, i) => {
            let start = 0;
            const end = stat.value;
            const duration = 2000;
            const increment = end / (duration / 50);

            const counter = setInterval(() => {
              start += increment;
              if (start >= end) {
                start = end;
                clearInterval(counter);
              }
              setCounts((prev) => {
                const newCounts = [...prev];
                newCounts[i] = parseFloat(start.toFixed(1));
                return newCounts;
              });
            }, 100);
          });
          setHasCounted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, [hasCounted]);

  return (
    <div className="bg-gradient-to-b from-white via-slate-50 to-white text-gray-900">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden">

        {/* BACKGROUND SPLIT */}
        <div className="absolute inset-0 flex">
          <div className="w-1/2 bg-[#f4f6f9]"></div>
          <div className="w-1/2 bg-[#0b2a5b]"></div>
        </div>
      
        {/* DIAGONAL CUT */}
        <div className="absolute inset-0">
          <div className="absolute right-1/2 top-0 h-full w-40 bg-[#0b2a5b] transform skew-x-[-20deg] origin-top-right"></div>
        </div>
      
        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 py-32 px-6 items-center">
      
          {/* LEFT CONTENT */}
          <div className={`transition-all duration-1000 ${active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
      
            <span className="inline-block mb-4 px-4 py-2 bg-blue-100 text-[#0b2a5b] font-semibold rounded-full text-sm">
              About Codevirus Security
            </span>
      
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 text-[#0b2a5b]">
              Your Trusted Cybersecurity Partner
            </h1>
      
            <p className="mb-4 text-gray-700 leading-relaxed">
              Established in 2018, Codevirus Security provides enterprise cybersecurity services and professional training to help organizations stay protected from evolving digital threats.
            </p>
      
            <p className="mb-6 text-gray-700 leading-relaxed">
              Our training programs equip students with industry-ready skills while our enterprise solutions secure networks, applications, and cloud environments.
            </p>
      
          </div>
      
          {/* RIGHT CARD */}
          <div className={`bg-[#102f63] text-white rounded-3xl p-10 shadow-2xl transition-all duration-1000 ${active ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
      
            <h3 className="text-2xl font-semibold mb-6">
              Why Enterprises Choose Us
            </h3>
      
            <ul className="space-y-4 text-gray-200">
              <li>✔ Modern Cybersecurity Solutions</li>
              <li>✔ 24/7 Monitoring & Protection</li>
              <li>✔ Expert Security Professionals</li>
              <li>✔ Industry-Ready Training</li>
            </ul>
      
          </div>
      
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="py-20 px-6 bg-gradient-to-r from-slate-50 to-blue-50">
        <div ref={statsRef} className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0b2a5b] mb-4">
            Performance at a Glance
          </h2>
          <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
            We have helped organizations worldwide with advanced cybersecurity solutions, building trust and delivering measurable results.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            {statsData.map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-slate-100"
              >
                <h3 className="text-4xl font-bold text-indigo-600 mb-2">
                  {counts[i]}{s.suffix}
                </h3>
                <p className="text-gray-700">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0b2a5b] mb-6">
            Our Key Services & Expertise
          </h2>

          <p className="text-gray-700 max-w-3xl mx-auto mb-16 leading-relaxed">
            Our solutions cover enterprise cybersecurity operations, compliance management, cloud security, threat detection, and professional training programs.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border border-slate-100"
              >
                <h3 className="font-semibold text-lg text-indigo-700 mb-3">
                  {f.title}
                </h3>
                <p className="text-gray-700 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* VISION & MISSION */}
          <div className="grid md:grid-cols-2 gap-8 mt-20">
            <div className="bg-gradient-to-br from-blue-200 to-indigo-300 p-10 rounded-3xl shadow-2xl hover:scale-105 transition duration-500">
              <h3 className="text-xl font-semibold text-[#0b2a5b] mb-4">Our Vision</h3>
              <p className="text-gray-900 leading-relaxed">
                To be the most trusted cybersecurity partner, delivering scalable, intelligent, and proactive solutions for modern enterprises.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-200 to-emerald-300 p-10 rounded-3xl shadow-2xl hover:scale-105 transition duration-500">
              <h3 className="text-xl font-semibold text-[#0b2a5b] mb-4">Our Mission</h3>
              <p className="text-gray-900 leading-relaxed">
                To help organizations secure their digital assets, identify risks, and respond efficiently to threats through expert services and professional training.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
