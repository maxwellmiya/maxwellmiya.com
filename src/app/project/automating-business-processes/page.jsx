import React from "react";
import ProjectNavigation from "../../../components/ProjectNavigation";

export default function AutomatingBusinessProcesses() {
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
          src="/images/power-automate1.webp"
          alt="Workflow automation diagram"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-6xl mx-auto px-6 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Automating Business Processes<br />
              with SharePoint & Power Automate
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-lg">
              <div className="space-y-3">
                <p><span className="font-semibold">Client:</span> Non-Profit Organization (ETSA)</p>
                <p><span className="font-semibold">Year:</span> 2024 - Present</p>
              </div>
              <div className="space-y-3">
                <p><span className="font-semibold">Role:</span> IT Infrastructure Administrator</p>
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
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-2">70% Faster Approvals</h3>
            <p className="text-gray-600">Reduced processing time from days to hours</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="text-blue-600 mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-2">100% Visibility</h3>
            <p className="text-gray-600">Real-time tracking of all requests</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="text-blue-600 mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-2">12+ Processes</h3>
            <p className="text-gray-600">Automated workflows implemented</p>
          </div>
        
          {/* Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="text-blue-600 mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-2">Zero Errors</h3>
            <p className="text-gray-600">Eliminated manual data entry mistakes</p>
          </div>
        </div>
      </section>

      {/* Compact Challenge Section */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200">
            The Challenge
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 text-blue-800 rounded-full p-2 mr-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg">Inefficient Approvals</h3>
              </div>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Slow email-based approval cycles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Lost requests in crowded inboxes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>No standardized process</span>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 text-blue-800 rounded-full p-2 mr-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg">Lack of Visibility</h3>
              </div>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>No central tracking system</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Manual status updates required</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Constant follow-up emails</span>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 text-blue-800 rounded-full p-2 mr-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.536 5.879a1 1 0 001.415 0 3 3 0 014.242 0 1 1 0 001.415-1.415 5 5 0 00-7.072 0 1 1 0 000 1.415z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg">Compliance Gaps</h3>
              </div>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>No audit trail for approvals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Bypassed approval steps</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Paper records hard to track</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200">
            The Solution & My Role
          </h2>
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <img
                src="/images/power_automate_architecture_diagram.jpg"
                alt="Workflow automation architecture"
                className="w-full h-auto rounded-lg shadow-md border border-gray-200"
              />
              <div className="mt-6 bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-3 text-blue-800">Implementation Stats</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span>Automated Workflows:</span> 
                    <span className="font-semibold">12 Power Automate flows</span>
                  </li>
                  <li className="flex justify-between">
                    <span>SharePoint Lists:</span> 
                    <span className="font-semibold">5 custom solutions</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Document Libraries:</span> 
                    <span className="font-semibold">3 enhanced systems</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="space-y-8">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="font-bold text-xl mb-3">Document Management System</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Configured SharePoint libraries with custom metadata</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Implemented version control and content approval</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Built Power Automate flows for document approvals</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="font-bold text-xl mb-3">Funds Requisition System</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Custom SharePoint list with tailored columns</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Multi-stage approval workflow with conditional routing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Automated email notifications and status updates</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="font-bold text-xl mb-3">Audit Tracking System</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Centralized SharePoint log for audit findings</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Automated reminders for upcoming deadlines</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Real-time status tracking and reporting</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Integration with Microsoft Teams for notifications</span>
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
              { name: "SharePoint Online", icon: "/images/sharepoint.png" },
              { name: "Power Automate", icon: "/images/power-automate.png" },
              { name: "Microsoft 365", icon: "/images/microsoft365.png" },
              { name: "Microsoft Teams", icon: "/images/teams.png" },
              { name: "Microsoft Forms", icon: "/images/forms.png" },
              { name: "Power Apps", icon: "/images/power-apps.png" },
              { name: "Azure AD", icon: "/images/activedirectory.png" },
              { name: "UX Design", icon: "/images/ux-design.png" },
              { name: "Workflow Logic", icon: "/images/workflow.png" },
              { name: "Data Modeling", icon: "/images/data-model.png" },
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
            Results & Outcome
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-xl mb-4">Operational Improvements</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-green-100 text-green-800 rounded-full p-1 mr-3">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      <strong>Streamlined Processes:</strong> Reduced manual effort and accelerated processing time
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 text-green-800 rounded-full p-1 mr-3">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      <strong>Enhanced Accuracy:</strong> Eliminated manual data entry errors
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-4">Business Impact</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full p-1 mr-3">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      <strong>Increased Compliance:</strong> Standardized approval processes with audit trails
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 text-blue-800 rounded-full p-1 mr-3">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700">
                      <strong>Improved Efficiency:</strong> Freed up staff time for core responsibilities
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      <ProjectNavigation currentSlug="sharepoint-automation" />
    </div>
  );
}