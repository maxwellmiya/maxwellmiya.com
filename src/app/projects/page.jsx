// src/app/projects/page.jsx
import React from "react";
import MobileMenuToggle from "../../components/MobileMenuToggle";


export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Responsive Header */}
      <header className="bg-gray-900 text-white py-4 fixed w-full z-50">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="logo text-xl font-bold">Maxwell Miya</div>
          
          {/* Mobile Menu Toggle Button - Client Component */}
          <MobileMenuToggle />
          
          {/* Desktop Navigation - Hidden on small screens */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><a href="/" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-blue-400 transition-colors">Resume</a></li>
              <li><a href="/it-playbook" className="hover:text-blue-400 transition-colors">Playbook</a></li>
              <li><a href="/projects" className="text-blue-400 transition-colors">Projects</a></li>
              <li><a href="/contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
        
        {/* Mobile Navigation Menu - Hidden by default, controlled by MobileMenuToggle */}
        <div id="mobile-menu" className="hidden md:hidden">
          <nav className="px-4 pt-2 pb-4 bg-gray-800">
            <ul className="space-y-2">
              <li><a href="/" className="block py-2 hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="/about" className="block py-2 hover:text-blue-400 transition-colors">Resume</a></li>
              <li><a href="/it-playbook" className="block py-2 hover:text-blue-400 transition-colors">Playbook</a></li>
              <li><a href="/projects" className="block py-2 text-blue-400 transition-colors">Projects</a></li>
              <li><a href="/contact" className="block py-2 hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Projects Hero Section - Add padding-top to prevent content from being hidden under the fixed header */}
      <section className="relative pt-24 py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grid-pattern)" />
          </svg>
          <defs>
            <pattern id="grid-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
        </div>
        <div className="max-w-screen-lg mx-auto px-6 relative z-10">
          <span className="inline-block px-3 py-1 text-sm font-semibold bg-blue-800 rounded-full mb-4">
            Systems at Work
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Architecture That <span className="text-blue-300">Bridges Worlds</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mb-8">
            A portfolio of solutions that connect technology and human consciousness to solve real-world challenges.
          </p>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-12 bg-white">
        <div className="max-w-screen-lg mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "All Projects", 
              "Cloud Solutions", 
              "Security Architecture", 
              "Automation", 
              "Microsoft 365", 
              "Infrastructure"
            ].map((category, index) => (
              <button 
                key={index} 
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                  ${index === 0 
                    ? "bg-blue-600 text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-white">
      <div className="max-w-screen-lg mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Highlighted work demonstrating the integration of technical excellence with human-centered design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "On-Premise to Azure & Microsoft 365 Cloud Migration",
              description: "A comprehensive migration from legacy on-premise infrastructure to Azure Cloud and Microsoft 365, resulting in enhanced collaboration capabilities, improved security posture, and significant reduction in operational costs.",
              image: "/images/cloud-migration-banner1.jpg",
              tags: ["Cloud", "Azure", "Microsoft 365", "Migration"],
              impact: "40% cost reduction, 99.9% uptime",
              caseStudyLink: "/project/azure-cloud-migration"
            },
            {
              title: "Microsoft Intune Deployment for Endpoint Security & Compliance",
              description: "Implementation of Microsoft Intune for centralized device management and security enforcement across the organization, ensuring compliance with industry standards while enabling secure remote work capabilities.",
              image: "/images/MS Intune.webp",
              tags: ["Security", "Intune", "Compliance", "Endpoint Management"],
              impact: "100% compliance, 85% reduction in security incidents",
              caseStudyLink: "/project/intune-endpoint-security"
            },
          ].map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all">
              <div className="relative h-64">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 bg-blue-600 bg-opacity-70 text-white text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">
                    Impact: <span className="text-green-600">{project.impact}</span>
                  </span>
                  <a 
                    href={project.caseStudyLink}
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                  >
                    View case study
                    <svg 
                      className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

   {/* All Projects Grid */}
    <section className="py-16 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">All Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Infrastructure Automation with PowerShell & Ansible",
              description: "Created a self-service platform for infrastructure provisioning and management, reducing deployment time from days to minutes through advanced automation.",
              icon: (
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ),
              category: "Automation",
              projectLink: "/projects/infrastructure-automation"
            },
            {
              title: "Enterprise Network Security Enhancement",
              description: "Deployed Next-Generation Firewall (NGFW) and Security Information and Event Management (SIEM) solutions to strengthen the organization's security posture.",
              icon: (
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
              category: "Security Architecture",
              projectLink: "/project/enterprise-security-upgrade"
            },
            {
              title: "Automating Business Processes with SharePoint & Power Automate",
              description: "Built automated workflows to streamline business processes, eliminating manual tasks and improving productivity across departments.",
              icon: (
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              ),
              category: "Automation",
              projectLink: "/projects/automating-business-processes"
            },
            {
              title: "Modern SharePoint Online Intranet Portal Development",
              description: "Designed and implemented a comprehensive SharePoint Online intranet portal fostering secure collaboration and knowledge sharing across the organization.",
              icon: (
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              ),
              category: "Microsoft 365",
              projectLink: "/projects/sharepoint-intranet-workflows"
            },
            {
              title: "Multi-Site Infrastructure & Endpoint Refresh",
              description: "Executed a complete refresh of network infrastructure and end-user devices across multiple locations, minimizing business disruption while modernizing the technology stack.",
              icon: (
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              ),
              category: "Infrastructure",
              projectLink: "/projects/nfrastructure-refresh"
            },
            {
              title: "Complete IT Infrastructure Design & Build",
              description: "Designed and implemented a comprehensive IT infrastructure from the ground up, including networking, servers, storage, and security components.",
              icon: (
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              ),
              category: "Infrastructure",
              projectLink: "/projects/it-infrastructure-design-build"
            },
            {
              title: "Google Workspace Implementation & Administration",
              description: "Migrated and configured Google Workspace for seamless collaboration and communication across the organization, including comprehensive user training.",
              icon: (
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              ),
              category: "Cloud Solutions",
              projectLink: "/projects/google-workspace"
            },
            {
              title: "Microsoft Intune Deployment for Endpoint Security & Compliance",
              description: "Implemented Microsoft Intune to centralize device management and security enforcement across the organization, ensuring compliance with industry standards.",
              icon: (
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              ),
              category: "Security Architecture",
              projectLink: "/project/intune-security-compliance"
            },
            {
              title: "On-Premise to Azure & Microsoft 365 Cloud Migration",
              description: "Led a comprehensive migration from legacy on-premise infrastructure to Azure Cloud and Microsoft 365, enhancing collaboration and reducing costs.",
              icon: (
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              ),
              category: "Cloud Solutions",
              projectLink: "/project/azure-cloud-migration"
            }
          ].map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center mb-4">
                {project.icon}
              </div>
              <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 rounded-full mb-3">
                {project.category}
              </span>
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a 
                href={project.projectLink}
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
              >
                Learn more
                <svg 
                  className="ml-1 w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-screen-lg mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-sm font-semibold bg-blue-800 bg-opacity-50 rounded-full mb-3">
              Testimonials
            </span>
            <h2 className="text-3xl font-bold mb-4">Client Perspectives</h2>
            <p className="text-blue-300 max-w-2xl mx-auto">
              Feedback from partners who experienced the transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "Maxwell's approach to systems architecture harmonizes technical excellence with a deep understanding of human needs. The result was a solution that not only met our technical requirements but transformed how our teams collaborate.",
                author: "Leonard Nawiri",
                title: "MD, Ethicl Trade Services Africa",
                image: "/api/placeholder/60/60"
              },
              {
                quote: "Working with Maxwell was a revelation. His ability to see beyond the immediate technical challenges to create a cohesive, forward-thinking architecture has revolutionized our operations and given us a competitive edge.",
                author: "Erica Moraa",
                title: "Head, Finance & Admin, SIlentnight.",
                image: "/api/placeholder/60/60"
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
                <svg className="w-8 h-8 text-blue-400 mb-4" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10.7 25.4c-1.2 0-2.3-0.3-3.4-0.9-1.1-0.6-1.9-1.4-2.5-2.4-0.6-1-0.9-2.1-0.9-3.3 0-1.7 0.5-3.2 1.5-4.6 1-1.4 2.4-2.6 4-3.6 1.7-1 3.4-1.8 5.2-2.4l0.7 1.8c-1.8 0.5-3.4 1.2-4.9 2.2-1.4 0.9-2.5 2-3.2 3.2 0.4-0.1 0.8-0.2 1.2-0.2 1.5 0 2.7 0.5 3.7 1.4s1.5 2.1 1.5 3.6c0 1.4-0.5 2.6-1.5 3.6s-2.2 1.6-3.6 1.6zM24.1 25.4c-1.2 0-2.3-0.3-3.4-0.9-1.1-0.6-1.9-1.4-2.5-2.4-0.6-1-0.9-2.1-0.9-3.3 0-1.7 0.5-3.2 1.5-4.6 1-1.4 2.4-2.6 4-3.6 1.7-1 3.4-1.8 5.2-2.4l0.7 1.8c-1.8 0.5-3.4 1.2-4.9 2.2-1.4 0.9-2.5 2-3.2 3.2 0.4-0.1 0.8-0.2 1.2-0.2 1.5 0 2.7 0.5 3.7 1.4s1.5 2.1 1.5 3.6c0 1.4-0.5 2.6-1.5 3.6s-2.2 1.6-3.6 1.6z" />
                </svg>
                <p className="text-lg mb-6">{testimonial.quote}</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.author}</h4>
                    <p className="text-blue-300 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-screen-lg mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Something Meaningful?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can create systems that bridge technology and human potential for your organization.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors shadow-sm"
          >
            Start a Conversation
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
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
