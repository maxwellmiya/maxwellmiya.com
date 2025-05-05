// src/app/components/MobileMenuToggle.jsx
"use client";

import React from "react";

export default function MobileMenuToggle() {
  const toggleMenu = () => {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
      menu.classList.toggle('hidden');
    }
  };

  return (
    <button 
      className="md:hidden focus:outline-none" 
      onClick={toggleMenu}
      aria-label="Toggle menu"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  );
}