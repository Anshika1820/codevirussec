import React from "react";

const servicesDetails = [
  {
    title: "Cybersecurity Operations Center (CSOC)",
    detail: `Our CSOC provides 24/7 monitoring and proactive threat detection using advanced SIEM, SOAR, and threat intelligence platforms.
• Continuous surveillance of networks, endpoints, and cloud environments.
• Real-time alerts and automated response to security incidents.
• Coordinated investigation and remediation to minimize impact.
• Regular threat reporting and operational insights for executives.
• Compliance with industry standards and best practices.`
  },
  {
    title: "Incident Response & Management",
    detail: `We assist organizations in rapid containment, investigation, and recovery from cyber incidents.
• Immediate identification and classification of threats.
• Step-by-step containment procedures to prevent spread.
• Coordination with internal IT and external stakeholders.
• Post-incident reporting and root-cause analysis.
• Recommendations for improving future resilience.`
  },
  {
    title: "Incident Response Plans & Procedures",
    detail: `We create customized, tested, and documented incident response playbooks aligned with your organization’s operations.
• Detailed workflows for common cyber incidents.
• Escalation protocols for different threat levels.
• Integration with security tools and teams.
• Regular review and updates to meet regulatory requirements.
• Staff training and tabletop exercises for readiness.`
  },
  {
    title: "Threat Intelligence Integration",
    detail: `We integrate actionable threat intelligence into your security operations to proactively prevent attacks.
• Global and industry-specific threat feeds.
• Early detection of emerging threats and vulnerabilities.
• Correlation of threat data with internal events.
• Alerts and actionable insights for SOC teams.
• Support for strategic security decision-making.`
  },
  {
    title: "Role of Security Analysts in a CSOC",
    detail: `We define and implement clear responsibilities for SOC analysts at every tier.
• Tier 1: Initial monitoring, alert triage, and escalation.
• Tier 2: Deep-dive investigation and incident validation.
• Tier 3: Advanced threat hunting and remediation guidance.
• Continuous training and knowledge sharing.
• Optimized workflows for efficiency and minimal response time.`
  },
  {
    title: "CSOC Staffing & Talent Retention",
    detail: `We provide advisory services to ensure your SOC is staffed with skilled professionals and retains top talent.
• Recruitment strategies for experienced cybersecurity analysts.
• Role definition and career path development.
• Workload management to reduce burnout.
• Performance metrics and feedback mechanisms.
• Employee engagement and retention programs.`
  },
  {
    title: "Aadhaar Authentication & eKYC Integration",
    detail: `We offer secure and UIDAI-compliant Aadhaar authentication and eKYC services.
• Seamless integration into existing applications.
• Verification of identity using Aadhaar biometric and OTP mechanisms.
• Compliance with privacy and regulatory standards.
• Real-time authentication and reporting.
• Enhanced user experience with secure onboarding.`
  },
  {
    title: "Vulnerability Assessment & Penetration Testing (VAPT)",
    detail: `Our VAPT services identify and exploit vulnerabilities across your enterprise environment.
• Comprehensive scanning of applications, networks, and cloud infrastructure.
• Manual penetration testing for critical systems.
• Prioritized reporting with actionable recommendations.
• Retesting after remediation to verify fixes.
• Compliance with industry security standards and frameworks.`
  },
  {
    title: "Cloud Security",
    detail: `We secure cloud platforms with a holistic approach covering architecture, monitoring, and threat prevention.
• Secure design and deployment for AWS, Azure, and Google Cloud.
• Continuous monitoring and threat detection.
• Identity and access management best practices.
• Data encryption and compliance adherence.
• Incident response for cloud-based attacks.`
  },
  {
    title: "Application Security",
    detail: `We ensure that your software applications are secure throughout their lifecycle.
• Secure SDLC practices and secure coding guidelines.
• Code review and static/dynamic analysis.
• Application vulnerability testing and remediation.
• Threat modeling and risk assessments.
• Security training for development teams.`
  },
  {
    title: "Network Implementation",
    detail: `We design and deploy secure, scalable, and resilient enterprise networks.
• Architecture planning for LAN, WAN, and hybrid environments.
• Firewall, VPN, and IDS/IPS configuration.
• Performance optimization and redundancy planning.
• Network monitoring and ongoing security management.
• Compliance with industry standards and regulatory requirements.`
  }
];

const ServicesDetails = () => {
  return (
    <div className="bg-slate-50 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-[#0b2a5b] mb-10 text-center">
          Service Details
        </h1>

        <div className="space-y-8">
          {servicesDetails.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-[#0b2a5b] mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                {service.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
