"use client";
import React, { useState, useEffect } from "react";
import { Briefcase, Rocket, Code, Lightbulb, GraduationCap } from 'lucide-react';

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Close menu when screen size changes from mobile to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Timeline data with refined descriptions
  const timelineData = [
    { 
      date: "2023 - Current", 
      title: "Strategic Impact", 
      role: "Cloud & Security Optimization", 
      company: "Leading cloud migrations, implementing advanced security (Intune, Defender), and driving efficiency through automation at Ethical Trade Services Africa (ETSA) as IT Infrastructure Administrator.",
      icon: Rocket
    },
    { 
      date: "2022 - 2025", 
      title: "Accelerated Learning", 
      role: "Remote Support", 
      company: "Deepening technical skills across varied client infrastructures (Azure, M365, AWS, GCP) and honing rapid troubleshooting abilities at Preeminent Technology MSP US as Systems Administrator L1.",
      icon: Lightbulb
    },
    { 
      date: "2020 - 2023", 
      title: "Building Blocks", 
      role: "Infrastructure Management", 
      company: "Transitioning to broader system/network management, deploying core infrastructure (servers, firewalls), and taking ownership of IT operations at Juanco Group & Origen Fresh EPZ Limited as IT Officer.",
      icon: Code
    },
    { 
      date: "2015 - 2020", 
      title: "The Discovery", 
      role: "Mastering the Front Lines of IT", 
      company: "Gaining foundational experience, mastering user support, troubleshooting diverse issues, and understanding core IT needs firsthand at Silentnight as IT Support Specialist.",
      icon: Briefcase
    },
    { 
      date: "2016", 
      title: "The Foundation", 
      role: "Academic Groundwork", 
      company: "Building the theoretical knowledge base in Business Information Technology at Strathmore University (Bachelor of Business Information Technology).",
      icon: GraduationCap
    },
  ];

  // Skill cards data
  const skillCards = [
    {
      title: "Cloud Platforms",
      icon: "/images/cloud-icon.png",
      description: "Microsoft Azure (IaaS, PaaS), AWS (EC2, S3, VPC), GCP (Fundamentals), VMware (vSphere), Kubernetes (AKS), Hyper-V"
    },
    {
      title: "Microsoft Ecosystem",
      icon: "/images/microsoft-icon.png",
      description: "Windows Server, Active Directory, Entra ID, Azure AD Connect, Group Policy, Intune, Defender Suite, M365 Admin, Exchange Online"
    },
    {
      title: "Automation & Scripting",
      icon: "/images/process-icon.png",
      description: "PowerShell, Ansible, Bash, Azure CLI, Microsoft Graph API, Terraform, Power Automate"
    },
    {
      title: "Networking & Security",
      icon: "/images/netsec-icon.png",
      description: "TCP/IP, DNS, DHCP, VPNs, SD-WAN, Firewalls (Fortinet, Sophos), Zero Trust Concepts, IAM (Azure RBAC)"
    },
    {
      title: "ITSM & Monitoring",
      icon: "/images/system-icon.png",
      description: "ITIL, Jira Service Management, ServiceNow, SolarWinds, LogicMonitor, Azure Monitor, PRTG"
    },
    {
      title: "Data Management",
      icon: "/images/data-icon.png",
      description: "Database (SQL Server, MySQL, PostgreSQL), Backup and Recovery (Veeam, SAN, NAS)"
    }
  ];

  // Certifications data
  const certifications = [
    {
      logo: "/images/fortinet_logo.jpeg",
      name: "Certified Cybersecurity Associate (FCC)",
      issuer: "Fortinet",
      year: "2023"
    },
    {
      logo: "/images/microsoft_logo.jpeg",
      name: "Configure secure access to workloads using Azure networking",
      issuer: "Microsoft Applied Skills",
      year: "2023"
    },
    {
      logo: "/images/microsoft_logo.jpeg",
      name: "Secure storage for Azure Files and Blob Storage",
      issuer: "Microsoft Applied Skills",
      year: "2023"
    },
    {
      logo: "/images/microsoft_logo.jpeg",
      name: "Deploy and configure Azure Monitor",
      issuer: "Microsoft Applied Skills",
      year: "2023"
    },
    {
      logo: "/images/microsoft_logo.jpeg",
      name: "Configure access management for Azure subscriptions",
      issuer: "Microsoft Applied Skills",
      year: "2023"
    },
    {
      logo: "/images/3cx.jpeg",
      name: "Certified Engineer v20",
      issuer: "3CX",
      year: "2022"
    }
  ];

  // Memberships and affiliations data
  const memberships = [
    {
      logo: "/images/AWSEBadge.png",
      name: "AWS Emerging Talent Community",
      issuer: "AWS",
      year: "Member"
    },
    
    {
      logo: "/images/acpk.jpeg",
      name: "Association of Computing Practitioners - Kenya",
      issuer: "ACPK",
      year: "Member"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header/Navigation - Now with responsive design */}
      <header className="bg-gray-900 text-white py-4 fixed w-full z-50">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="text-xl font-bold">Maxwell Miya</div>
          
          {/* Mobile Menu Button - only visible on mobile */}
          <button 
            className="md:hidden focus:outline-none" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
          
          {/* Desktop Navigation - hidden on mobile */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6 text-sm">
              <li><a href="/" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-blue-400 transition-colors">Resume</a></li>
              <li><a href="/it-playbook" className="hover:text-blue-400 transition-colors">Playbook</a></li>
              <li><a href="/projects" className="hover:text-blue-400 transition-colors">Projects</a></li>
              <li><a href="/contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
        
        {/* Mobile Navigation Menu - conditionally rendered */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 shadow-lg">
            <nav className="container mx-auto px-4 py-3">
              <ul className="flex flex-col space-y-3">
                <li>
                  <a 
                    href="/" 
                    className="block py-2 px-4 hover:bg-gray-700 rounded transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a 
                    href="/about" 
                    className="block py-2 px-4 hover:bg-gray-700 rounded transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Resume
                  </a>
                </li>
                <li>
                  <a 
                    href="/it-playbook" 
                    className="block py-2 px-4 hover:bg-gray-700 rounded transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Playbook
                  </a>
                </li>
                <li>
                  <a 
                    href="/projects" 
                    className="block py-2 px-4 hover:bg-gray-700 rounded transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a 
                    href="/contact" 
                    className="block py-2 px-4 hover:bg-gray-700 rounded transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section with modern gradient background */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Maxwell Miya
            </h1>
            <h2 className="text-xl md:text-2xl text-blue-300 mb-6">
              Hybrid IT Infrastructure & Security Engineer
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Building bridges—between people, platforms, and possibilities. Empowering through structure, truth, and service.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a 
                href="/about" 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md font-medium transition-colors"
              >
                My Journey
              </a>
              <a 
                href="/contact" 
                className="px-6 py-3 bg-transparent border border-white hover:bg-white hover:text-gray-900 rounded-md font-medium transition-colors"
              >
                Connect
              </a>
            </div>
          </div>
          <div className="md:w-2/5 flex justify-center">
            <div className="relative w-64 h-64 rounded-full bg-blue-600 bg-opacity-20 p-2">
              <img
                src="/images/miya.png" 
                alt="Maxwell Miya"
                className="w-full h-full object-cover rounded-full shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">My Mission</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          </div>
          <div className="bg-white p-8 shadow-lg rounded-lg border-l-4 border-blue-600">
            <p className="text-xl text-gray-700 leading-relaxed italic">
            A hybrid IT Infrastructure and security engineer closing on a decade of experience, helping small to medium-sized businesses to
             reduce cost through resource optimisation and building resilient, high-performing, and secure environments that aim to create seamless digital experiences.
            While working in these organisations, I don't just handle one specialised task, like servers, or just networks. Instead, 
            I manage everything: servers, networking, cybersecurity, end-user support, printers, backups, phones, even random tech stuff like cameras or TVS.
            If anything remotely touches technology, it’s part of my job, whether it was officially listed in my job description or not!
            </p>
          </div>
        </div>
      </section>

      {/* Core Competencies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Core Competencies</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              My approach combines technical expertise with strategic vision, creating systems that are secure, scalable, and aligned with business goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Core competency cards */}
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg">Cloud Architecture</h3>
              </div>
              <p className="text-gray-600">
                Designing and implementing scalable cloud infrastructure with a focus on Microsoft Azure, leveraging IaaS and PaaS solutions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg">Security Solutions</h3>
              </div>
              <p className="text-gray-600">
                Implementing comprehensive security strategies with Microsoft Defender, Intune, and zero-trust principles to protect critical assets.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg">Automation & Efficiency</h3>
              </div>
              <p className="text-gray-600">
                Creating systems that work smarter through PowerShell scripting, Azure automation, and workflow optimization.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg">Infrastructure Optimization</h3>
              </div>
              <p className="text-gray-600">
                Assessing and refining existing systems to reduce costs, improve performance, and enhance reliability.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6, 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg">Strategic Leadership</h3>
              </div>
              <p className="text-gray-600">
                Translating technical concepts for stakeholders and aligning IT initiatives with business objectives and vision.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg">System Integration</h3>
              </div>
              <p className="text-gray-600">
                Connecting disparate systems to create cohesive, unified environments that enhance productivity and data flow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Journey Timeline */}
      <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Professional Journey</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A path of continuous growth and purposeful development in IT infrastructure and systems architecture.
          </p>
        </div>
        
        {/* Interactive Timeline */}
        <div className="relative mb-12">
          {/* Timeline Line */}
          <div className="absolute top-1/2 w-full h-1 bg-gray-300 transform -translate-y-1/2"></div>
          
          {/* Timeline Points with Icons */}
          <div className="flex flex-row justify-between items-center relative z-10">
            {timelineData.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={index} 
                  className="flex flex-col items-center"
                >
                  {/* Timeline Point with Icon */}
                  <div
                    className={`rounded-full h-16 w-16 flex items-center justify-center cursor-pointer border-4 transition-all ${
                      currentIndex === index 
                        ? "bg-blue-600 text-white border-blue-300" 
                        : "bg-white text-gray-600 border-gray-300 hover:border-blue-300"
                    }`}
                    onClick={() => setCurrentIndex(index)}
                  >
                    <IconComponent size={24} />
                  </div>
                  
                  {/* Small year label below icon (only visible on mobile) */}
                  <span className="mt-2 text-xs text-gray-500 md:hidden">{item.date}</span>
                  
                  {/* Timeline Title (visible only on mobile) */}
                  <h4 className="mt-1 text-sm font-semibold md:hidden">{item.title}</h4>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Selected Timeline Details */}
        <div className="bg-white p-8 shadow-lg rounded-lg border-l-4 border-blue-600">
          <div className="flex flex-col md:flex-row justify-between items-start mb-4">
            <h3 className="text-2xl font-bold text-gray-800">{timelineData[currentIndex].title}</h3>
            <p className="text-blue-600 font-semibold">{timelineData[currentIndex].date}</p>
          </div>
          <p className="text-lg font-medium text-gray-700 mb-4">{timelineData[currentIndex].role}</p>
          <p className="text-gray-600">{timelineData[currentIndex].company}</p>
        </div>
      </div>
    </section>

      {/* Technical Expertise Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Technical Expertise</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A comprehensive toolkit of technical skills honed through years of hands-on experience and continuous learning.
            </p>
          </div>
          
          {/* Skill Cards with Hover Effect */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCards.map((skill, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <div className="bg-white p-6 h-full transform group-hover:-translate-y-full transition-transform duration-500 ease-in-out">
                  <div className="flex items-center justify-center mb-4">
                    <img src={skill.icon} alt={skill.title} className="h-16 w-16 object-contain" />
                  </div>
                  <h3 className="text-xl font-bold text-center">{skill.title}</h3>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 p-6 flex items-center justify-center text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                  <p className="text-center">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications and Accreditations */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Certifications & Accreditations</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Formal recognition of my technical knowledge and specialized expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="flex items-start bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 mr-4">
                  <img 
                    src={cert.logo} 
                    alt={`${cert.issuer} Logo`} 
                    className="h-12 w-12 object-contain p-1 border border-gray-200 rounded"
                  />
                </div>
                <div className="flex-1 overflow-hidden">
                  <h3 className="text-lg font-semibold text-gray-900 break-words">
                    {cert.name}
                  </h3>
                  <div className="flex justify-between items-baseline mt-1">
                    <p className="text-gray-600 text-sm">{cert.issuer}</p>
                    <span className="text-gray-400 text-xs whitespace-nowrap ml-2">
                      {cert.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Memberships and Affiliations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Memberships & Affiliations</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Active participation in professional communities that keep me at the forefront of industry trends and best practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {memberships.map((membership, index) => (
              <div 
                key={index} 
                className="flex items-start bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 mr-4">
                  <img 
                    src={membership.logo} 
                    alt={`${membership.issuer} Logo`} 
                    className="h-12 w-12 object-contain p-1 border border-gray-200 rounded"
                  />
                </div>
                <div className="flex-1 overflow-hidden">
                  <h3 className="text-lg font-semibold text-gray-900 break-words">
                    {membership.name}
                  </h3>
                  <div className="flex justify-between items-baseline mt-1">
                    <p className="text-gray-600 text-sm">{membership.issuer}</p>
                    <span className="text-gray-400 text-xs whitespace-nowrap ml-2">
                      {membership.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A showcase of recent solutions I've designed and implemented.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-300 relative">
                <img 
                  src="/images/cloud-migration-banner1.jpg" 
                  alt="Cloud Migration Project" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold">Cloud Migration & Security Hardening</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Led the migration of on-premise infrastructure to Azure with implementation of zero-trust security framework.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Azure</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Security</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Migration</span>
                </div>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-300 relative">
                <img 
                  src="/images/power-automate.webp" 
                  alt="Automation Project" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold">IT Process Automation</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Developed PowerShell automation suite that reduced routine administration tasks by 70% and improved consistency.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">PowerShell</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Automation</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">ITSM</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="/projects" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors"
            >
              View All Projects
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

       {/* Call to Action Section */}
       <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-screen-lg mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Bridge New Possibilities?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's explore how my expertise in systems architecture can help transform your organization's technology and culture.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="px-8 py-3 bg-white text-blue-700 font-medium rounded-md shadow hover:bg-gray-100 transition-all"
            >
              Start a Conversation
            </a>
            <a
              href="/it-playbook"
              className="px-8 py-3 border border-white text-white font-medium rounded-md hover:bg-white hover:text-blue-700 transition-all"
            >
              Explore My Playbook
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