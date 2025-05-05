import React from "react";
import ProjectNavigation from "../../../components/ProjectNavigation";

export default function AzureCloudMigration() {
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
        src="/images/cloud-migration-banner.jpg"
        alt="Cloud servers and network diagram"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-6xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Enterprise Cloud Transformation:<br />
            On-Premise to Azure & Microsoft 365 Migration
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
            <div className="space-y-3">
              <p><span className="font-semibold">Client:</span> Ethical Trade Services Africa (ETSA)</p>
              <p><span className="font-semibold">Year:</span> 2023 (6 month engagement)</p>
            </div>
            <div className="space-y-3">
              <p><span className="font-semibold">Role:</span> IT Infrastructure Administrator</p>
              <p>
                <span className="font-semibold">Website:</span>{" "}
                <a 
                  href="https://www.ethicaltradeservices.co.ke" 
                  className="text-blue-300 hover:underline hover:text-blue-200 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.ethicaltradeservices.co.ke
                </a>
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
                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-2">35% Cost Reduction</h3>
            <p className="text-gray-600">Saved KES 500K annually in infrastructure costs.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="text-blue-600 mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-2">99.9% Uptime</h3>
            <p className="text-gray-600">Azure SLA-backed reliability vs. previous 98.5% on-premise</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="text-blue-600 mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-1a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v1h-3zM4.75 12.094A5.973 5.973 0 004 15v1H1v-1a3 3 0 013.75-2.906z" />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-2">Enhanced Collaboration</h3>
            <p className="text-gray-600">Deployed 365 Business Apps.</p>
          </div>
        

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="text-blue-600 mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-2">IT Productivity</h3>
            <p className="text-gray-600"> 60% reduction in time spent on maintenance tasks.</p>
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
                <h3 className="font-semibold text-lg">Cost & Maintenance</h3>
              </div>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>KES 250k annual server maintenance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>4-year old hardware nearing EOL</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>No scalable storage solution</span>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 text-blue-800 rounded-full p-2 mr-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg">Performance</h3>
              </div>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Slow VM performance during peak</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>No load balancing capabilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Single point of failure architecture</span>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 text-blue-800 rounded-full p-2 mr-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-1a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v1h-3zM4.75 12.094A5.973 5.973 0 004 15v1H1v-1a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg">Collaboration</h3>
              </div>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Legacy IMAP email system</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>No modern document sharing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Limited mobile access</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200">
            Cloud Migration Solution
          </h2>
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <img
                src="/images/cloud-results.webp"
                alt="Azure migration architecture"
                className="w-full h-auto rounded-lg shadow-md border border-gray-200"
              />
              <div className="mt-6 bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-3 text-blue-800">Migration Stats</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span>Servers Migrated:</span> 
                    <span className="font-semibold">2 (Physical to Azure VM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Data Transferred:</span> 
                    <span className="font-semibold">2.2TB via Data Box</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Users Transitioned:</span> 
                    <span className="font-semibold">37 mailboxes to Exchange Online</span>
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
                      <span>Comprehensive Infrastructure Audit</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Developed phased plan with 80% IaaS (Azure VMs) and 20% PaaS solutions where applicable</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Projected 40% 3-year TCO reduction through cloud optimization</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="font-bold text-xl mb-3">Azure Infrastructure Deployment</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Designed hub-spoke VNet topology with NSGs for segmentation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Provisioned 2 Azure VMs (B and D-series) with Azure Backup</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Implemented Azure Files for department shares and blob storage for archives</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="font-bold text-xl mb-3">Microsoft 365 Migration & Transition</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Phased migration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Implemented EOP with custom mail flow rules</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Retired 1 physical server post-migration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Right-sized VMs after 30-day monitoring period
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span> Conducted 8 training sessions and created 12 knowledge base articles.
                      </span>
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
              { name: "Microsoft Azure", icon: "/images/azure.png" },
              { name: "Exchange Online", icon: "/images/microsoft365.png" },
              { name: "Active Directory", icon: "/images/ad.png" },
              { name: "PowerShell", icon: "/images/powershell.png" },
              { name: "Network Administration", icon: "/images/network.png" },
              { name: "Windows Server", icon: "/images/windowsserver.png" },
              { name: "Azure AD", icon: "/images/activedirectory.png" },
              { name: "Azure Site Recovery", icon: "/images/asr.png" },
              { name: "Azure Migrate", icon: "/images/azure-migrate.png" },
              { name: "Azure VMs", icon: "/images/azure-vm.png" },
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
      </div>

      <ProjectNavigation currentSlug="azure-cloud-migration" />
    </div>
  );
}