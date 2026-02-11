import React, { useState } from "react";

const faqsData = [
  {
    question: "What services does Codevirus Security provide?",
    answer: "We provide enterprise cybersecurity solutions including VAPT, network security, web and mobile application security, cloud security, digital forensics, incident response, compliance consulting, and professional cybersecurity training."
  },
  {
    question: "What is VAPT (Vulnerability Assessment and Penetration Testing)?",
    answer: "VAPT is a combination of automated vulnerability scanning and manual penetration testing to identify security weaknesses and assess the potential impact on your systems."
  },
  {
    question: "Why is network security assessment important?",
    answer: "Network security assessments help identify vulnerabilities, misconfigurations, and potential threats, ensuring that your IT infrastructure remains secure against cyberattacks."
  },
  {
    question: "What does Web Application Security Testing include?",
    answer: "It includes testing for SQL injection, XSS, CSRF, authentication flaws, data validation issues, and other vulnerabilities in your web applications."
  },
  {
    question: "Do you provide Mobile Application Security Testing?",
    answer: "Yes, we assess mobile applications for security weaknesses on iOS and Android platforms, including code vulnerabilities, insecure data storage, and API security."
  },
  {
    question: "What is Incident Response and Digital Forensics?",
    answer: "Incident Response is the process of detecting, containing, and recovering from security incidents. Digital Forensics involves analyzing systems and data to understand and document security breaches."
  },
  {
    question: "Who can benefit from your cybersecurity services?",
    answer: "Enterprises, SMEs, educational institutions, and any organization looking to secure their digital assets and maintain regulatory compliance can benefit."
  },
  {
    question: "Do you provide cybersecurity training and awareness programs?",
    answer: "Yes, we offer industry-ready training programs for students, IT staff, and corporate employees to build awareness and enhance cybersecurity skills."
  },
  {
    question: "Do you help with compliance and security documentation?",
    answer: "Absolutely. We assist clients in creating compliance reports, security policies, risk assessments, and documentation required for regulatory audits."
  },
  {
    question: "What deliverables do clients receive after security testing?",
    answer: "Clients receive a detailed report outlining vulnerabilities, risk severity, remediation steps, and recommendations for improving their security posture."
  },
  {
    question: "How do you ensure data confidentiality and privacy?",
    answer: "All client data is treated as strictly confidential. We use encryption, access controls, and organizational safeguards to protect sensitive information."
  },
  {
    question: "What is your pricing model?",
    answer: "Pricing depends on the scope of services, complexity, and size of the infrastructure. We provide a detailed quote after initial consultation and assessment."
  },
  {
    question: "How can I schedule a consultation with Codevirus Security?",
    answer: "You can schedule a consultation by contacting us via email, phone, or the contact form on our website. Our team will guide you through the next steps."
  },
  {
    question: "Why should I choose Codevirus Security?",
    answer: "We combine expert cybersecurity knowledge, industry best practices, advanced tools, and personalized service to protect your digital assets effectively."
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 min-h-screen text-gray-900">
      {/* HERO */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#e0f2ff] to-[#ffffff] text-center">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-[#0b2a5b] mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Answers to common questions about Codevirus Security services.
        </p>
      </section>

      {/* FAQ LIST */}
      <section className="py-16 px-6 max-w-4xl mx-auto space-y-4">
        {faqsData.map((faq, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl border border-gray-200 overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 flex justify-between items-center text-left font-medium text-[#0b2a5b] hover:bg-gray-100 transition"
            >
              {faq.question}
              <span className="ml-4 text-2xl font-bold">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 border-t border-gray-200 text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default FAQ;
