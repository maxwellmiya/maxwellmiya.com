import React from "react";
import ProjectNavigation from "../../../components/ProjectNavigation";

export default function InfrastructureAutomation() {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-800">
       {/* Header/Navigation */}
       <header className="bg-gray-900 text-white py-4 fixed w-full z-50">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="text-xl font-bold">Maxwell Miya</div>
          <nav>
            <ul className="flex space-x-6 text-sm">
              
              <li><a href="/projects" className="hover:text-blue-400 transition-colors">Projects</a></li>
              
            </ul>
          </nav>
        </div>
      </header>


      {/* Hero Banner with Image Background */}
      <section className="relative h-[500px]">
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <img
        src="/images/infrastructure-automation.jpg"
        alt="Cloud servers and network diagram"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-6xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          IT Infrastructure Automation

          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
            <div className="space-y-3">
              <p><span className="font-semibold">Clients:</span> Various MSP Clients & Internal Operations</p>
              <p><span className="font-semibold">Duration:</span>  2016-Present</p>
            </div>
            <div className="space-y-3">
              <p><span className="font-semibold">Role:</span> IT Officer</p>
              <p>
                <span className="font-semibold">Scope:</span> Windows, Linux, Cloud Environments</p>
               
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
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-2">75% Faster</h3>
            <p className="text-gray-600">Task execution with automation</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="text-blue-600 mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-2">200+ Scripts</h3>
            <p className="text-gray-600">Developed for various workflows</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="text-blue-600 mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-2">90% Reduction</h3>
            <p className="text-gray-600">In manual configuration errors</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
            <div className="text-blue-600 mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="font-bold text-xl mb-2">40 Hours/Week</h3>
            <p className="text-gray-600">Time saved across teams</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        {/* The Challenge Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200">
            Manual Processes Challenges
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 text-blue-800 rounded-full p-2 mr-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg">Time Intensive</h3>
              </div>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Hours spent on repetitive admin tasks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Slow response to routine requests</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Difficulty scaling operations</span>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 text-blue-800 rounded-full p-2 mr-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg">Error Prone</h3>
              </div>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Inconsistent configurations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Human mistakes in repetitive tasks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Difficult to audit changes</span>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 text-blue-800 rounded-full p-2 mr-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg">Limited Scalability</h3>
              </div>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Manual processes didn't scale</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>Difficulty managing hybrid environments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  <span>No standard operating procedures</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* The Solution Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200">
            Automation Implementation
          </h2>
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <img
                src="/images/auto.jpg"
                alt="Automation workflow diagram"
                className="w-full h-auto rounded-lg shadow-md border border-gray-200"
              />
              <div className="mt-6 bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-3 text-blue-800">Automation Metrics</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span>Scripts Developed:</span> 
                    <span className="font-semibold">200+ PowerShell/Ansible</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Environments Covered:</span> 
                    <span className="font-semibold">Windows, Linux, Azure, M365</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Processes Automated:</span> 
                    <span className="font-semibold">85+ repetitive tasks</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Execution Frequency:</span> 
                    <span className="font-semibold">500+ automated runs weekly</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="space-y-8">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="font-bold text-xl mb-3">PowerShell Automation</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>
                        <strong>Active Directory:</strong> User provisioning, group management, OU maintenance
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>
                        <strong>Microsoft 365:</strong> License management, mailbox configurations, reporting
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>
                        <strong>Azure:</strong> Resource provisioning, cost monitoring, security checks
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="font-bold text-xl mb-3">Ansible Implementation</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>
                        <strong>Configuration Management:</strong> Enforcing consistent server configurations
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>
                        <strong>Application Deployment:</strong> Automated software installations and updates
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>
                        <strong>Hybrid Environment:</strong> Managing both Windows and Linux systems
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="font-bold text-xl mb-3">Process Optimization</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>
                        <strong>Scheduled Tasks:</strong> Automated routine maintenance and reporting
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>
                        <strong>Self-Service:</strong> Created user-facing scripts for common requests
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>
                        <strong>Documentation:</strong> Comprehensive runbooks and comment-based help
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
            {[
              { name: "PowerShell", icon: "/images/powershell.png" },
              { name: "Ansible", icon: "/images/ansible.png" },
              { name: "Power Automate", icon: "/images/pa.png" },
              { name: "Git", icon: "/images/git.png" },
              { name: "Windows Admin Center", icon: "/images/wic.png" },
              { name: "REST APIs", icon: "/images/pi.png" },
              { name: "Azure CLI", icon: "/images/azcli.png" },
              { name: "Terraform", icon: "/images/terraform.png" },
              
              { name: "Docker", icon: "/images/docker.png" },
              { name: "Kubernetes", icon: "/images/k8s.png" },
              { name: "VMware", icon: "/images/vmware.png" },
              { name: "Linux", icon: "/images/linux.png" },
              /* { name: "Python", icon: "/images/python.png" },
              { name: "Bash", icon: "/images/bash.png" },
              { name: "Azure DevOps", icon: "/images/ado.png" },*/
              
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
        <section className="mb-20 bg-gray-50 p-12 rounded-xl">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Automation Outcomes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Efficiency Gains</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-4">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span><strong>75% Faster:</strong> Task completion times reduced</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-4">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span><strong>40 Hours/Week:</strong> Time saved across teams</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Operational Improvements</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-4">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span><strong>90% Fewer Errors:</strong> Consistent, reliable execution</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-4">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span><strong>Scalable Operations:</strong> Manage growth without adding staff</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <ProjectNavigation currentSlug="infrastructure-automation" />
    </div>
  );
}