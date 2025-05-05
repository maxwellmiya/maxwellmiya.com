"use client";

import { useState, useEffect } from 'react';
import { Shield, Cpu, Cloud, Lock, Terminal, Smartphone, Activity, Headphones, Briefcase, AlertCircle, ChevronRight } from 'lucide-react';

export default function ITPlaybook() {
  const [activeSection, setActiveSection] = useState('core');
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const sections = {
    core: {
      title: "Core Philosophy",
      icon: Briefcase,
      content: (
        <div className="p-6 bg-white rounded-lg shadow-lg border-l-4 border-blue-600 animate-fadeIn">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Proactive Engineering, Not Reactive Fixing</h3>
          <p className="text-gray-700 leading-relaxed">
            My fundamental belief is that IT infrastructure should be a strategic asset, meticulously engineered for resilience, security, 
            and performance from the ground up. The goal isn't just to fix problems as they arise, but to build systems and implement 
            processes designed to prevent issues, optimize performance, and securely enable business objectives. I focus on understanding 
            the "why" behind the technology to deliver tangible, positive impact.
          </p>
        </div>
      )
    },
    principles: {
      title: "Guiding Principles",
      icon: Lock,
      content: (
        <div className="p-6 bg-white rounded-lg shadow-lg border-l-4 border-blue-600 animate-fadeIn">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Guiding Principles</h3>
          <div className="space-y-4 text-gray-700">
            {[
              {
                title: "Security by Design",
                content: "Security isn't an add-on; it's woven into every stage of design, deployment, and maintenance, leveraging layered defenses and Zero Trust principles."
              },
              {
                title: "Automate Everything Sensible",
                content: "Identify repetitive tasks, manual processes, and configuration drift points. Leverage PowerShell, Ansible, and platform-native tools to automate for consistency, speed, and error reduction."
              },
              {
                title: "Reliability & Availability First",
                content: "Design for resilience. Implement robust monitoring, proactive maintenance, effective backup/DR strategies, and conduct thorough root cause analysis to minimize downtime."
              },
              {
                title: "Optimize for Performance & Cost",
                content: "Continuously evaluate resource utilization, network bottlenecks, and system configurations to ensure optimal performance and cost-efficiency without compromising security or reliability."
              },
              {
                title: "Data-Driven Decisions",
                content: "Utilize monitoring data, logs, and metrics to understand system behavior, justify changes, measure impact, and anticipate future needs."
              },
              {
                title: "Pragmatic Cloud Adoption",
                content: "Leverage the right cloud services for scalability, agility, and cost-effectiveness, while understanding hybrid environments and core infrastructure fundamentals."
              },
              {
                title: "Clear Communication & Documentation",
                content: "Translate technical concepts clearly for all stakeholders. Maintain concise, accurate documentation for operational consistency."
              },
              {
                title: "User Empowerment & Support",
                content: "Provide users with reliable tools and responsive support, enabling their productivity while maintaining security standards."
              },
              {
                title: "Continuous Learning & Adaptation",
                content: "Actively stay updated on emerging technologies, evolving security threats, and best practices."
              }
            ].map((principle, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-md shadow-sm">
                <h4 className="font-semibold text-blue-700">{principle.title}</h4>
                <p className="mt-1">{principle.content}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    infrastructure: {
      title: "Infrastructure Design",
      icon: Cpu,
      content: (
        <div className="p-6 bg-white rounded-lg shadow-lg border-l-4 border-blue-600 animate-fadeIn">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Infrastructure Design & Build</h3>
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-700 mb-2">Approach</h4>
            <p className="text-gray-700 leading-relaxed">
              Start with business requirements and security considerations. 
              Design for scalability and resilience (redundancy, HA). Choose appropriate technology (on-prem hardware like HP/Dell, 
              virtualization via VMware/Hyper-V, or cloud-native). Document architecture clearly.
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-md">
            <h4 className="text-md font-semibold text-blue-700 mb-2">Core Competencies</h4>
            <div className="flex flex-wrap gap-2">
              {["Scalability", "Resilience", "Security-First Design", "Virtualization", "Network Architecture", "Documentation"].map((keyword, i) => (
                <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">{keyword}</span>
              ))}
            </div>
          </div>
        </div>
      )
    },
    cloud: {
      title: "Cloud Adoption",
      icon: Cloud,
      content: (
        <div className="p-6 bg-white rounded-lg shadow-lg border-l-4 border-blue-600 animate-fadeIn">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Cloud Adoption & Management</h3>
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-700 mb-2">Azure-Focused Methodology</h4>
            <p className="text-gray-700 leading-relaxed">
              Assess workloads thoroughly before migration (Azure Migrate). 
              Implement strong identity foundation (Entra ID, Hybrid Identity). Leverage Azure security tools 
              (Defender for Cloud, Network Security Groups, Azure Firewall concepts). Actively monitor costs and 
              optimize resources (Azure Monitor, Cost Management). Utilize Infrastructure as Code concepts (Terraform basics) where practical.
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-md">
            <h4 className="text-md font-semibold text-blue-700 mb-2">Core Competencies</h4>
            <div className="flex flex-wrap gap-2">
              {["Azure Migration", "Azure IaaS/PaaS", "Entra ID", "Hybrid Identity", "Azure Security Center/Defender", "Azure Monitor", "Cost Optimization"].map((keyword, i) => (
                <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">{keyword}</span>
              ))}
            </div>
          </div>
        </div>
      )
    },
    security: {
      title: "Security Operations",
      icon: Shield,
      content: (
        <div className="p-6 bg-white rounded-lg shadow-lg border-l-4 border-blue-600 animate-fadeIn">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Security Operations & Hardening</h3>
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-700 mb-2">Defense-in-Depth Strategy</h4>
            <p className="text-gray-700 leading-relaxed">
              Implement layered security: NGFW (Fortinet/Sophos), 
              EDR (Defender for Endpoint), strong IAM (Entra ID Conditional Access, MFA, RBAC), vulnerability scanning awareness, 
              regular patching. Monitor security logs (SIEM concepts, Defender XDR). Assume breach; plan for detection and response.
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-md">
            <h4 className="text-md font-semibold text-blue-700 mb-2">Core Competencies</h4>
            <div className="flex flex-wrap gap-2">
              {["Layered Security", "Zero Trust Principles", "NGFW", "EDR/XDR", "IAM", "Conditional Access", "Vulnerability Management", "Patch Management", "Incident Response"].map((keyword, i) => (
                <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">{keyword}</span>
              ))}
            </div>
          </div>
        </div>
      )
    },
    automation: {
      title: "Automation Strategy",
      icon: Terminal,
      content: (
        <div className="p-6 bg-white rounded-lg shadow-lg border-l-4 border-blue-600 animate-fadeIn">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Automation Strategy</h3>
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-700 mb-2">Efficiency Through Scripting</h4>
            <p className="text-gray-700 leading-relaxed">
              Identify high-impact, repetitive tasks (user lifecycle, patching, reporting, 
              config deployment). Use the right tool (PowerShell for Microsoft ecosystem, Ansible for configuration management/cross-platform). 
              Script defensively (error handling), ensure idempotency where possible, document code, and use version control (Git basics) 
              for scripts/playbooks.
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-md">
            <h4 className="text-md font-semibold text-blue-700 mb-2">Core Competencies</h4>
            <div className="flex flex-wrap gap-2">
              {["PowerShell", "Ansible", "Task Automation", "Configuration Management", "Scripting Best Practices", "Operational Efficiency"].map((keyword, i) => (
                <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">{keyword}</span>
              ))}
            </div>
          </div>
        </div>
      )
    },
    endpoint: {
      title: "Endpoint Management",
      icon: Smartphone,
      content: (
        <div className="p-6 bg-white rounded-lg shadow-lg border-l-4 border-blue-600 animate-fadeIn">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Endpoint Management</h3>
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-700 mb-2">Modern Device Management</h4>
            <p className="text-gray-700 leading-relaxed">
              Centralize management via MDM (Intune). Define clear compliance policies 
              (encryption, passcode, OS version). Implement security baselines and configuration profiles. Utilize Conditional Access 
              for compliance enforcement. Streamline provisioning (Autopilot concepts, ABM integration awareness).
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-md">
            <h4 className="text-md font-semibold text-blue-700 mb-2">Core Competencies</h4>
            <div className="flex flex-wrap gap-2">
              {["Microsoft Intune", "MDM/MAM", "Compliance Policies", "Conditional Access", "Endpoint Security", "Device Lifecycle Management"].map((keyword, i) => (
                <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">{keyword}</span>
              ))}
            </div>
          </div>
        </div>
      )
    },
    monitoring: {
      title: "Monitoring & DR",
      icon: Activity,
      content: (
        <div className="p-6 bg-white rounded-lg shadow-lg border-l-4 border-blue-600 animate-fadeIn">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Monitoring, Backup & Disaster Recovery</h3>
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-700 mb-2">Resilience Planning</h4>
            <p className="text-gray-700 leading-relaxed">
              Implement comprehensive monitoring (Azure Monitor, LogicMonitor, SolarWinds) 
              covering performance, availability, and security. Define meaningful alerts. Implement robust backup strategy 
              (Veeam, Azure Backup) with regular testing. Design and document DR plans aligned with business RTO/RPO.
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-md">
            <h4 className="text-md font-semibold text-blue-700 mb-2">Core Competencies</h4>
            <div className="flex flex-wrap gap-2">
              {["Proactive Monitoring", "Azure Monitor", "Veeam", "Azure Backup", "Disaster Recovery Planning", "RTO/RPO", "Incident Management", "Root Cause Analysis"].map((keyword, i) => (
                <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">{keyword}</span>
              ))}
            </div>
          </div>
        </div>
      )
    },
    support: {
      title: "IT Support Operations",
      icon: Headphones,
      content: (
        <div className="p-6 bg-white rounded-lg shadow-lg border-l-4 border-blue-600 animate-fadeIn">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">IT Support & Operations</h3>
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-blue-700 mb-2">ITIL-Aligned Service Delivery</h4>
            <p className="text-gray-700 leading-relaxed">
              Structure support using ITSM principles (ITIL Foundation). 
              Utilize ticketing systems (Jira) effectively. Create and maintain SOPs for common procedures. 
              Prioritize clear communication with end-users. Foster knowledge sharing within the team.
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-md">
            <h4 className="text-md font-semibold text-blue-700 mb-2">Core Competencies</h4>
            <div className="flex flex-wrap gap-2">
              {["ITIL", "ITSM", "Jira Service Management", "Standard Operating Procedures", "End-User Support", "Knowledge Management"].map((keyword, i) => (
                <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">{keyword}</span>
              ))}
            </div>
          </div>
        </div>
      )
    },
    toolkit: {
      title: "Preferred Toolkit",
      icon: AlertCircle,
      content: (
        <div className="p-6 bg-white rounded-lg shadow-lg border-l-4 border-blue-600 animate-fadeIn">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Preferred Toolkit</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Cloud",
                items: ["Microsoft Azure (Primary)", "AWS/GCP (Awareness/Fundamentals)"]
              },
              {
                title: "Microsoft Ecosystem",
                items: ["Windows Server", "Active Directory", "Entra ID", "Microsoft 365", "Intune", "Defender Suite"]
              },
              {
                title: "Automation",
                items: ["PowerShell (Advanced)", "Ansible (Intermediate)", "Azure CLI", "Bash (Working Knowledge)"]
              },
              {
                title: "Virtualization",
                items: ["VMware vSphere", "Microsoft Hyper-V"]
              },
              {
                title: "Networking",
                items: ["TCP/IP", "DNS", "DHCP", "VPNs", "Firewalls (Fortinet, Sophos)"]
              },
              {
                title: "Monitoring",
                items: ["Azure Monitor", "LogicMonitor", "SolarWinds"]
              },
              {
                title: "Backup",
                items: ["Veeam Backup & Replication", "Azure Backup"]
              },
              {
                title: "ITSM",
                items: ["Jira Service Management", "ITIL Framework"]
              }
            ].map((category, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold text-blue-700 mb-2">{category.title}</h4>
                <ul className="space-y-1 text-gray-700">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-500 mr-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )
    },
    conclusion: {
      title: "Conclusion",
      icon: Briefcase,
      content: (
        <div className="p-6 bg-white rounded-lg shadow-lg border-l-4 border-blue-600 animate-fadeIn">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Delivering Value Beyond Technology</h3>
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <p className="text-lg text-gray-700 leading-relaxed italic">
              "My playbook is built on technical expertise combined with a strategic focus on reliability, security, and efficiency. 
              The ultimate goal is to deliver robust IT infrastructure that minimizes friction, mitigates risk, and actively supports and enables 
              the business to achieve its objectives."
            </p>
          </div>
          
          <div className="mt-8 flex justify-center">
            <a 
              href="/contact" 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors inline-flex items-center"
            >
              Start a Conversation
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      )
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header/Navigation */}
      <header className="bg-gray-900 text-white py-4 fixed w-full z-50">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="text-xl font-bold">Maxwell Miya</div>
          <nav className="hidden md:block">
            <ul className="flex space-x-6 text-sm">
              <li><a href="/" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-blue-400 transition-colors">Resume</a></li>
              <li><a href="/playbook" className="hover:text-blue-400 transition-colors">Playbook</a></li>
              <li><a href="/projects" className="hover:text-blue-400 transition-colors">Projects</a></li>
              <li><a href="/contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </nav>
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setShowMobileNav(!showMobileNav)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={showMobileNav ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {showMobileNav && (
          <div className="md:hidden bg-gray-800 mt-4 py-2">
            <ul className="flex flex-col space-y-2 px-4">
              <li><a href="/" className="block py-2 hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="/about" className="block py-2 hover:text-blue-400 transition-colors">Resume</a></li>
              <li><a href="/playbook" className="block py-2 hover:text-blue-400 transition-colors">Playbook</a></li>
              <li><a href="/projects" className="block py-2 hover:text-blue-400 transition-colors">Projects</a></li>
              <li><a href="/contact" className="block py-2 hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            IT Infrastructure & Security Playbook
          </h1>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-6"></div>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Engineering reliable, secure, and efficient systems that drive business value
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Mobile Section Selector */}
        {isMobile && (
          <div className="mb-8">
            <label htmlFor="section-select" className="block text-gray-700 font-medium mb-2">Select Section</label>
            <select 
              id="section-select" 
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              value={activeSection}
              onChange={(e) => setActiveSection(e.target.value)}
            >
              {Object.keys(sections).map((key) => (
                <option key={key} value={key}>
                  {sections[key].title}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Navigation Sidebar - Hidden on Mobile */}
          {!isMobile && (
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg sticky top-24">
                <div className="bg-blue-600 text-white p-4 rounded-t-lg">
                  <h2 className="text-xl font-bold">Playbook Sections</h2>
                </div>
                <nav className="p-4">
                  <ul className="space-y-2">
                    {Object.keys(sections).map((key) => {
                      const section = sections[key];
                      const Icon = section.icon;
                      return (
                        <li key={key}>
                          <button
                            onClick={() => setActiveSection(key)}
                            className={`flex items-center w-full p-3 rounded-lg transition ${
                              activeSection === key
                                ? "bg-blue-100 text-blue-800 font-medium shadow-sm"
                                : "hover:bg-gray-100"
                            }`}
                          >
                            <Icon className="mr-3 h-5 w-5" />
                            <span>{section.title}</span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
            </div>
          )}

          {/* Content Area */}
          <div className="lg:col-span-3">
            {sections[activeSection].content}
            
            {/* Navigation Buttons */}
            <div className="mt-8 flex justify-between">
              {Object.keys(sections).indexOf(activeSection) > 0 && (
                <button
                  onClick={() => {
                    const currentIndex = Object.keys(sections).indexOf(activeSection);
                    if (currentIndex > 0) {
                      setActiveSection(Object.keys(sections)[currentIndex - 1]);
                    }
                  }}
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md inline-flex items-center text-gray-700 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Previous
                </button>
              )}
              {Object.keys(sections).indexOf(activeSection) < Object.keys(sections).length - 1 && (
                <button
                  onClick={() => {
                    const currentIndex = Object.keys(sections).indexOf(activeSection);
                    if (currentIndex < Object.keys(sections).length - 1) {
                      setActiveSection(Object.keys(sections)[currentIndex + 1]);
                    }
                  }}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md inline-flex items-center text-white transition-colors ml-auto"
                >
                  Next
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white mt-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-6">Let's Engineer Your IT Infrastructure</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ready to transform your technology environment with strategic, secure, and efficient solutions?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="px-8 py-3 bg-white text-blue-700 font-medium rounded-md shadow hover:bg-gray-100 transition-all"
            >
              Start a Conversation
            </a>
            <a
              href="/projects"
              className="px-8 py-3 border border-white text-white font-medium rounded-md hover:bg-white hover:text-blue-700 transition-all"
            >
              View Recent Projects
            </a>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-screen-lg mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h3 className="text-xl font-bold">Maxwell Miya</h3>
              <p className="mt-2 text-gray-400">
                Systems Architect of Technology & Consciousness
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="https://linkedin.com/" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://twitter.com/" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.059 10.059 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.667 2.478c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="https://github.com/" aria-label="GitHub" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Maxwell Miya. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex flex-wrap gap-6">
                <li><a href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy</a></li>
                <li><a href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">Terms</a></li>
                <li><a href="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}