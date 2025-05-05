import React from "react";
import ProjectNavigation from "../../../components/ProjectNavigation";

export default function ITInfrastructureBuild() {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-800">
       {/* Header/Navigation */}
       <header className="bg-gray-900 text-white py-4 fixed w-full z-50">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="text-xl font-bold">Maxwell Miya</div>
          <nav>
            <ul className="flex space-x-6 text-sm">
              <li><a href="/" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-blue-400 transition-colors">Resume</a></li>
              <li><a href="/it-playbook" className="hover:text-blue-400 transition-colors">Playbook</a></li>
              <li><a href="/projects" className="hover:text-blue-400 transition-colors">Projects</a></li>
              <li><a href="/contact" className="text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      
      {/* Hero Banner with Image Background */}
      <section className="relative h-[500px]">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img
          src="/images/server-room-banner.jpg"
          alt="Server room infrastructure"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-6xl mx-auto px-6 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Complete IT Infrastructure:<br />
              Ground-Up Design & Implementation
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
              <div className="space-y-3">
                <p><span className="font-semibold">Client:</span> Origen Fresh EPZ Limited</p>
                <p><span className="font-semibold">Year:</span> 2022</p>
              </div>
              <div className="space-y-3">
                <p><span className="font-semibold">Role:</span> IT Officer</p>
                <p>
                  <span className="font-semibold">Scope:</span>{" "}
                  <span className="text-blue-300">End-to-End Infrastructure</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Cards */}
      <section className="max-w-6xl mx-auto px-6 -mt-16 mb-20 z-30 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="text-blue-600 mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-2">100% Uptime</h3>
            <p className="text-gray-600">Stable network and server environment</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="text-blue-600 mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-2">12 VMs</h3>
            <p className="text-gray-600">Virtualized workloads for efficiency</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="text-blue-600 mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-2">10TB Storage</h3>
            <p className="text-gray-600">QNAP NAS-based centralized data</p>
          </div>
        
          {/* Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="text-blue-600 mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-2">Full Backup</h3>
            <p className="text-gray-600">Comprehensive data protection</p>
          </div>
        </div>
      </section>

      {/* Compact Challenge Section */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200">
            Infrastructure Challenges
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 text-blue-800 rounded-full p-2 mr-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg">Network Foundation</h3>
              </div>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>No existing LAN/WAN infrastructure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Required secure connectivity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Needed structured cabling system</span>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 text-blue-800 rounded-full p-2 mr-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 10-2 0v1H8a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg">Server Infrastructure</h3>
              </div>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>No existing server hardware</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Required virtualization capability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Needed to support business apps</span>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 text-blue-800 rounded-full p-2 mr-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg">Data Protection</h3>
              </div>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>No centralized storage solution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Lacked reliable backup system</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Critical need for data recoverability</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200">
            Infrastructure Solution
          </h2>
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <img
                src="/images/server-rack-diagram.jpg"
                alt="Server rack infrastructure"
                className="w-full h-auto rounded-lg shadow-md border border-gray-200"
              />
              <div className="mt-6 bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-3 text-blue-800">Implementation Stats</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span>Servers Deployed:</span> 
                    <span className="font-semibold">2 Physical + 12 VMs</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Storage Capacity:</span> 
                    <span className="font-semibold">10TB SAN</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Network Nodes:</span> 
                    <span className="font-semibold">50+ endpoints</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="space-y-8">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="font-bold text-xl mb-3">Network Infrastructure</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Designed physical network layout with Cat6 cabling</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Configured and installed network switches/routers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Implemented WAN connectivity with Sophos XG Firewall</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="font-bold text-xl mb-3">Server Infrastructure</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Specified and procured HP ProLiant servers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Installed VMware vSphere/Hyper-V for virtualization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Provisioned VMs for AD, file services, and applications</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="font-bold text-xl mb-3">Data Protection</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Implemented Network Area Storage (NAS) solution</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Configured Veeam/QNAP NAS tools for comprehensive backups</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Deployed Active Directory, DNS, and DHCP services</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Technologies Used
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
            {[
              { name: "HP ProLiant", icon: "/images/hp-proliant.png" },
              { name: "VMware vSphere", icon: "/images/vmware.png" },
              { name: "Windows Server", icon: "/images/windows-server.png" },
              { name: "Active Directory", icon: "/images/active-directory.png" },
              { name: "SAN Storage", icon: "/images/san.png" },
              { name: "Veeam Backup", icon: "/images/veeam.png" },
              { name: "Network Switches", icon: "/images/network-switch.png" },
              { name: "Cat6 Cabling", icon: "/images/cabling.png" },
              { name: "Sophos XG", icon: "/images/sophos.png" },
              { name: "DNS/DHCP", icon: "/images/dns.png" },
            ].map((tech, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="bg-white p-5 rounded-2xl shadow-md mb-4 group-hover:shadow-lg transition-shadow duration-300">
                  <img 
                    src={tech.icon} 
                    alt={tech.name} 
                    className="h-8 w-8 object-contain" 
                  />
                </div>
                <p className="text-gray-600 font-medium text-center">{tech.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Results Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200">
            Infrastructure Outcomes
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Operational Improvements</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-green-100 text-green-800 rounded-full p-1 mr-3">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      <strong>Business Enablement:</strong> Core IT systems for operations
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 text-green-800 rounded-full p-1 mr-3">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      <strong>Performance:</strong> Stable network and server environment
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Strategic Benefits</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full p-1 mr-3">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      <strong>Scalability:</strong> Virtualized infrastructure for growth
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full p-1 mr-3">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      <strong>Data Protection:</strong> Robust SAN and backup solution
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      <ProjectNavigation currentSlug="it-infrastructure-build" />
    </div>
  );
}