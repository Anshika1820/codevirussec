import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Services from "./Services";
import Project from "./Project";
import Team from "./Team";
import About from "./About";

const Home = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(true);
  }, []);

  return (
    <div className="overflow-hidden -mt-[30px] ">
      {/* HERO SECTION */}
      <section
        id="home"
        className="relative min-h-screen flex items-start pt-20 bg-[linear-gradient(120deg,#ffffff_55%,#0b2a5b_45%)]"
      >
        {/* background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(11,42,91,0.15),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(22,61,130,0.25),transparent_45%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16">
          {/* LEFT CONTENT */}
          <div
            className={`transition-all duration-1000 ${
              active
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <span className="inline-block mb-2 px-5 py-2 rounded-full bg-[#e8eef8] text-[#0b2a5b] font-semibold text-sm">
              Enterprise Cybersecurity Solutions
            </span>

            <h1 className="font-black leading-tight mb-7">
              <span className="block text-5xl text-slate-900">
                Welcome to
              </span>
              <span className="block text-[#0b2a5b] text-4xl">
                CODEVIRUS SECURITY
              </span>
            </h1>

            <p className="text-lg text-slate-700 max-w-xl mb-8 leading-relaxed">
              We protect your network with layered security, combining
              next-generation firewalls, intrusion prevention systems,
              secure access controls, and zero-trust principles to defend
              modern enterprises against evolving cyber threats.
            </p>

            <div className="flex flex-wrap gap-5">
              <Link
                to="/getstarted"
                className="px-9 py-3 rounded-full font-bold text-white bg-gradient-to-r from-[#0b2a5b] to-[#163d82] shadow-[0_18px_40px_rgba(11,42,91,0.35)] hover:scale-105 transition"
              >
                Get Started
              </Link>

              <Link
                to="/security-approach"
                className="px-9 py-3 rounded-full font-bold border-2 border-[#0b2a5b] text-[#0b2a5b] hover:bg-[#0b2a5b] hover:text-white transition"
              >
                Our Security Approach
              </Link>
            </div>
          </div>

          {/* RIGHT PROFESSIONAL PANEL */}
          <div
            className={`transition-all duration-1000 delay-150 ${
              active
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            } bg-gradient-to-b from-[#0b2a5b] to-[#071a36] rounded-3xl p-12 text-slate-200 shadow-[0_40px_80px_rgba(7,26,54,0.6)]`}
          >
            <h3 className="text-2xl font-bold mb-6">
              Why Enterprises Choose Us
            </h3>

            <ul className="space-y-4 text-slate-300">
              <li className="flex gap-3">
                <span className="text-[#60a5fa]">✔</span>
                Zero-Trust Network Architecture
              </li>
              <li className="flex gap-3">
                <span className="text-[#60a5fa]">✔</span>
                Advanced Threat Intelligence
              </li>
              <li className="flex gap-3">
                <span className="text-[#60a5fa]">✔</span>
                24/7 Monitoring & Incident Response
              </li>
              <li className="flex gap-3">
                <span className="text-[#60a5fa]">✔</span>
                Global Compliance & Risk Standards
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Services />
      
      <Project preview={true}/>
      <About />
     
    </div>
  );
};

export default Home;
