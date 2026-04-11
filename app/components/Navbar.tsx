'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md pt-4 md:pt-5 pb-4 border-b border-gray-50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex items-center justify-between">
        
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2 group relative z-50">
          <div className="flex items-center justify-center w-8 h-8 md:w-9 md:h-9 bg-[#1A1A1A] rounded-lg text-white">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-lg md:text-xl font-black text-[#1A1A1A] tracking-tighter uppercase">Frontier</span>
            <span className="hidden md:block text-[10px] font-medium tracking-[0.2em] text-[#888888] uppercase">Massage & Wellness</span>
          </div>
        </Link>

        {/* Center Navigation (Desktop Only) */}
        <div className="hidden md:flex items-center">
          <Link href="/" className="text-gray-900 pr-6 hover:opacity-70 transition">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </Link>
          <div className="h-6 w-[1px] bg-gray-200"></div>
          <nav className="flex items-center gap-8 pl-8">
            <Link href="/about" className="text-sm font-semibold text-[#666666] hover:text-black transition">About Us</Link>
            <Link href="/services" className="text-sm font-semibold text-[#666666] hover:text-black transition">Treatments</Link>
            {/* Location Link Removed */}
          </nav>
        </div>

        {/* Right: CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link 
            href="https://t.me/frontiermassage" 
            className="hidden sm:flex px-6 py-2.5 bg-[#0E0E0E] text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#222222] transition-all items-center gap-2"
          >
            Book Now
          </Link>

          {/* Hamburger Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#1A1A1A] z-50"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-black transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`h-0.5 w-full bg-black transition-all ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 w-full bg-black transition-all ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
<div 
  className={`fixed inset-0 bg-white z-[100] h-screen w-screen transition-transform duration-500 ease-in-out ${
    isOpen ? 'translate-x-0' : 'translate-x-full'
  } md:hidden pt-32 px-10`}
>
  <button 
    onClick={() => setIsOpen(false)}
    className="absolute top-6 right-6 p-2 text-black"
  >
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  </button>

  <nav className="flex flex-col gap-10 text-4xl font-black text-[#1A1A1A] tracking-tighter">
    <Link href="/" onClick={() => setIsOpen(false)}>
      Home
    </Link>
    <Link href="/about" onClick={() => setIsOpen(false)}>
      About Us
    </Link>
    <Link href="/services" onClick={() => setIsOpen(false)}>
      Treatments
    </Link>
    
    <div className="h-[1px] w-full bg-stone-100 my-2"></div>
    
    {/* FIXED TELEGRAM LINK FOR MOBILE */}
    <a 
      href="https://t.me/frontiermassage" 
      target="_blank" 
      rel="noopener noreferrer"
      onClick={() => setIsOpen(false)} 
      className="text-stone-400 text-2xl flex items-center gap-2"
    >
      Book a Session
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="7" y1="17" x2="17" y2="7"></line>
        <polyline points="7 7 17 7 17 17"></polyline>
      </svg>
    </a>
  </nav>

  <div className="absolute bottom-12 left-10">
    <p className="text-[10px] uppercase tracking-[0.3em] text-stone-300 font-bold">
      Frontier Massage & Wellness
    </p>
  </div>
</div>
</div>
    </header>
  );
}