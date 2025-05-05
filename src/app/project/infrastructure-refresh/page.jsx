import React from "react";
import ProjectNavigation from "../../../components/ProjectNavigation";

export default function InfrastructureRefresh() {
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
          src="/images/infrastructure-banner.jpg"
          alt="Network infrastructure refresh"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-6xl mx-auto px-6 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Multi-Site Infrastructure<br />
              & Endpoint Refresh
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
              <div className="space-y-3">
                <p><span className="font-semibold">Clients:</span> Silentnight & Juanco Group</p>
                <p><span className="font-semibold">Years:</span> 2018 & 2020-2021</p>
              </div>
              <div className="space-y-3">
                <p><span className="font-semibold">Role:</span> IT Support Specialist / IT Officer</p>
                <p>
                  <span className="font-semibold">Scope:</span>{" "}
                  <span className="text-blue-300">Full Infrastructure Refresh</span>
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
            <h3 className="font-bold text-xl mb-2">70% Faster</h3>
            <p className="text-gray-600">Improved application performance</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="text-blue-600 mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-2">300+ Devices</h3>
            <p className="text-gray-600">Endpoints refreshed across sites</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="text-blue-600 mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-2">90% Less Downtime</h3>
            <p className="text-gray-600">Reduced hardware failures</p>
          </div>
        
          {/* Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="text-blue-600 mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-2">40% Cost Savings</h3>
            <p className="text-gray-600">Reduced maintenance costs</p>
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
                <h3 className="font-semibold text-lg">Performance Issues</h3>
              </div>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Slow application response times</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Network bottlenecks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Sluggish user endpoints</span>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 text-blue-800 rounded-full p-2 mr-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.536 5.879a1 1 0 001.415 0 3 3 0 014.242 0 1 1 0 001.415-1.415 5 5 0 00-7.072 0 1 1 0 000 1.415z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg">Reliability Problems</h3>
              </div>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Frequent hardware failures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Disruptive system downtime</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Aging out-of-warranty equipment</span>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 text-blue-800 rounded-full p-2 mr-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg">Security Risks</h3>
              </div>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Outdated operating systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Lacked modern security features</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Limited patch support</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200">
            Refresh Solution
          </h2>
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <img
                src="/images/equipment-refresh.jpg"
                alt="Server and network equipment refresh"
                className="w-full h-auto rounded-lg shadow-md border border-gray-200"
              />
              <div className="mt-6 bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-3 text-blue-800">Refresh Stats</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span>Endpoints Replaced:</span> 
                    <span className="font-semibold">300+ devices</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Servers Upgraded:</span> 
                    <span className="font-semibold">Multiple sites</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Network Gear:</span> 
                    <span className="font-semibold">Switches & routers</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="space-y-8">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="font-bold text-xl mb-3">Assessment & Planning</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Evaluated existing infrastructure</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Identified critical bottlenecks</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Planned phased refresh cycles</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="font-bold text-xl mb-3">Hardware Refresh</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>HP ProLiant & Dell PowerEdge servers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>HP, Dell, Lenovo laptops & desktops</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Upgraded network switches/routers</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="font-bold text-xl mb-3">Deployment & Support</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Configured new server hardware</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Migrated data and applications</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Provided end-user transition support</span>
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
              { name: "Dell PowerEdge", icon: "/images/dell-poweredge.png" },
              { name: "Windows Server", icon: "/images/windows-server.png" },
              { name: "Windows 10/11", icon: "/images/windows.png" },
              { name: "HP Laptops", icon: "/images/hp-laptop.png" },
              { name: "Dell Desktops", icon: "/images/dell-desktop.png" },
              { name: "Lenovo", icon: "/images/lenovo.png" },
              { name: "Network Switches", icon: "/images/network-switch.png" },
              { name: "QNAP NAS", icon: "/images/san.png" },
              { name: "Active Directory", icon: "/images/active-directory.png" },
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
            Business Outcomes
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Performance Gains</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-green-100 text-green-800 rounded-full p-1 mr-3">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      <strong>Enhanced Speed:</strong> 70% faster application performance
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 text-green-800 rounded-full p-1 mr-3">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      <strong>Improved Reliability:</strong> 90% less downtime
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Impact</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full p-1 mr-3">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      <strong>Increased Productivity:</strong> More efficient workflows
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full p-1 mr-3">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      <strong>Cost Savings:</strong> 40% lower maintenance costs
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      <ProjectNavigation currentSlug="infrastructure-refresh" />
    </div>
  );
}