import { useEffect, useState } from "react";

const blogPosts = [
  {
    title: "Top 5 Cybersecurity Trends in 2026",
    date: "Feb 1, 2026",
    excerpt: "Explore the most impactful cybersecurity trends this year and how they can affect enterprise security strategies for modern enterprises.",
  },
  {
    title: "Protecting Your Cloud Infrastructure",
    date: "Jan 20, 2026",
    excerpt: "Learn best practices for securing your cloud assets and mitigating risks in multi-cloud environments to stay ahead of threats.",
  },
  {
    title: "Incident Response: Steps for Enterprises",
    date: "Dec 15, 2025",
    excerpt: "A step-by-step guide to responding effectively to cybersecurity incidents while minimizing downtime and business disruption.",
  },
  {
    title: "AI-Powered Threat Detection",
    date: "Nov 30, 2025",
    excerpt: "Discover how AI and machine learning are revolutionizing threat detection and response in enterprise cybersecurity operations.",
  },
  {
    title: "Compliance & Governance Best Practices",
    date: "Nov 10, 2025",
    excerpt: "Ensure your organization meets regulatory compliance and governance standards with practical cybersecurity guidelines.",
  },
  {
    title: "Secure Remote Work Strategies",
    date: "Oct 25, 2025",
    excerpt: "Learn how to protect remote teams and devices while maintaining productivity and enterprise security standards.",
  },
];

const Blog = () => {
  const [active, setActive] = useState(false);

  useEffect(() => setActive(true), []);

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen">

      {/* HERO SECTION */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-[#e0f2ff] to-[#ffffff]">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className={`text-4xl lg:text-5xl font-extrabold mb-4 text-[#0b2a5b] ${active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-1000`}>
            Cybersecurity Insights & Expert Guides
          </h1>
          <p className={`text-gray-700 text-lg max-w-3xl mx-auto ${active ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-1000 delay-200 leading-relaxed`}>
            Stay informed with in-depth articles, practical tips, and expert insights from Codevirus Security.  
            Our blog covers the latest trends in cybersecurity, threat detection strategies, compliance, cloud security, and guidance for protecting enterprise systems in an ever-evolving digital landscape.
          </p>
        </div>
        <div className="absolute -top-16 -right-16 w-36 h-36 bg-blue-100 rounded-full opacity-30 mix-blend-multiply animate-pulse"></div>
      </section>

      {/* BLOG POSTS SECTION */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-200 flex flex-col h-full justify-between"
              >
                <div>
                  {/* Date Badge */}
                  <span className="inline-block px-3 py-1 mb-3 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
                    {post.date}
                  </span>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold text-[#0b2a5b] mb-3">{post.title}</h3>

                  {/* Excerpt */}
                  <p className="text-gray-700">{post.excerpt}</p>
                </div>

                {/* Read More Button */}
                <div className="mt-6">
                  <button className="px-4 py-1.5 bg-[#0b2a5b] hover:bg-[#071a36] rounded-full text-white font-medium shadow transition text-sm">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-16 px-6 bg-gradient-to-tr from-[#e0f2ff] to-[#ffffff] text-center">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-[#0b2a5b]">
          Stay Updated with Cybersecurity Insights
        </h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto leading-relaxed">
          Subscribe to our newsletter and receive the latest articles, best practices, and expert tips in enterprise cybersecurity directly in your inbox.
        </p>
        <button className="px-5 py-2 bg-[#0b2a5b] hover:bg-[#071a36] rounded-full font-semibold text-white shadow transition text-sm">
          Subscribe Now
        </button>
      </section>

    </div>
  );
};

export default Blog;
