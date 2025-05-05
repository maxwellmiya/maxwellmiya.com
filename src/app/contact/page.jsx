"use client";
import React from "react";
import { Mail, MapPin, Linkedin, Twitter, Github } from "lucide-react";

export default function Contact() {
  // Areas of interest options - kept for reference
  const interestOptions = [
    "Cloud Architecture & Migration",
    "Security Solutions & Hardening",
    "IT Infrastructure Optimization",
    "System Integration",
    "Automation & Efficiency",
    "Strategic IT Leadership",
    "Other (please specify in message)"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header/Navigation */}
      <header className="bg-gray-900 text-white py-4 fixed w-full z-50">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="text-xl font-bold">Maxwell Miya</div>
          <nav>
            <ul className="flex space-x-6 text-sm">
              <li><a href="/" className="hover:text-blue-400 transition-colors">Home</a></li>
              {/*<li><a href="/about" className="hover:text-blue-400 transition-colors">Resume</a></li>
              <li><a href="/it-playbook" className="hover:text-blue-400 transition-colors">Playbook</a></li>
              <li><a href="/projects" className="hover:text-blue-400 transition-colors">Projects</a></li>
              <li><a href="/contact" className="text-blue-400 transition-colors">Contact</a></li>*/}
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section with matching gradient */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Let's Build Bridges Together</h1>
          <p className="text-xl max-w-2xl mx-auto mb-4 text-blue-300">
            Connect with me to discuss how we can transform your technology infrastructure and systems.
          </p>
          <p className="text-gray-300">
            Whether you're looking to optimize your cloud architecture, enhance security, or drive automation,
            I'm here to help build the bridges between your current systems and future possibilities.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-1">
              {/* Contact Information */}
              <div className="bg-gradient-to-br from-blue-700 to-blue-900 text-white p-8 flex flex-col items-center text-center">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <p className="mb-8 max-w-lg">I aim to respond to all inquiries within 24 hours during business days.</p>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-center">
                    <Mail className="h-5 w-5 mr-4" />
                    <span>maxwell@maxwellmiya.com</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <MapPin className="h-5 w-5 mr-4" />
                    <span>Nairobi, Kenya</span>
                  </div>
                </div>
                
                <div className="mt-12">
                  <h3 className="text-xl font-semibold mb-4">Professional Network</h3>
                  <div className="flex space-x-4 justify-center">
                    <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-500 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-500 transition-colors">
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-500 transition-colors">
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                <div className="mt-12 p-4 bg-blue-800 bg-opacity-40 rounded-lg max-w-xl">
                  <h3 className="text-lg font-semibold mb-2">My Approach</h3>
                  <p className="text-sm">
                    "I build bridges—between people, platforms, and possibilities. My purpose is to empower others through structure, truth, and service."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How I Work Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How I Work</h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg">Discovery</h3>
              </div>
              <p className="text-gray-600">
                I start by understanding your current infrastructure, challenges, and goals. This involves a thorough assessment of your systems and requirements.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg">Strategic Planning</h3>
              </div>
              <p className="text-gray-600">
                Together, we develop a strategic roadmap that addresses immediate needs while setting a foundation for future growth and technological evolution.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg">Implementation & Knowledge Transfer</h3>
              </div>
              <p className="text-gray-600">
                I execute solutions with minimal disruption and ensure your team has the knowledge needed to maintain and build upon the implemented systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Refined for your expertise */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Common Questions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">What services do you specialize in?</h3>
              <p className="text-gray-600">I specialize in cloud architecture (primarily Azure), security solutions, infrastructure optimization, system integration, and IT automation for businesses looking to modernize their technology stack.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">How do you approach security in cloud environments?</h3>
              <p className="text-gray-600">I implement comprehensive security using Microsoft Defender, Intune, and zero-trust principles, focusing on identity management, threat protection, and compliance requirements specific to your industry.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Do you work with clients remotely?</h3>
              <p className="text-gray-600">Yes, I work with clients globally using collaborative tools that allow for effective remote engagement while delivering the same quality of service as on-site work.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">What is your approach to knowledge transfer?</h3>
              <p className="text-gray-600">I believe in empowering your team through comprehensive documentation, hands-on training, and ongoing support to ensure you can maintain and build upon the systems we implement together.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter - Refined to match your brand */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Subscribe to receive insights on cloud architecture, security best practices, and infrastructure optimization.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-l-md text-gray-800 focus:outline-none"
            />
            <button
              className="bg-blue-900 px-6 py-3 rounded-r-md hover:bg-blue-800 transition-colors"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer Section - Matching the home page */}
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