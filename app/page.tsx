'use client';

import Navbar from './components/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFCFB]">
      <Navbar />

      {/* Hero Section: Editorial Split Layout */}
      <section className="pt-32 md:pt-48 pb-20 px-6 md:px-10 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Typography */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="px-4 py-1.5 rounded-full bg-stone-100 text-stone-600 text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase mb-8">
              The Art of Healing
            </span>

            <h1 className="text-6xl sm:text-7xl md:text-9xl font-black text-[#1A1A1A] tracking-tighter leading-[0.85] mb-8">
              SINK INTO <br /> 
              <span className="text-stone-300 italic font-serif font-light">Stillness.</span>
            </h1>

            <p className="text-lg md:text-xl text-stone-500 max-w-lg leading-relaxed mb-10">
              Beyond the surface tension lies a state of total clarity. Experience clinical 
              expertise wrapped in absolute tranquility.
            </p>

            <div className="flex flex-col sm:row gap-6 w-full sm:w-auto">
              <Link href="/services" className="group flex items-center gap-4">
                <div className="px-8 py-4 bg-[#1A1A1A] text-white rounded-full font-bold transition-transform group-hover:scale-105 text-sm">
                  Explore Treatments
                </div>
              </Link>
            </div>
          </div>

          {/* Right Side: Elegant Floating Image */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-[4rem] md:rounded-[6rem] shadow-2xl">
              <img 
                src="/hero-massage.jpg" 
                alt="Zen massage environment" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-stone-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Section 2: Zen Quotes */}
      <section className="bg-white py-24 border-y border-stone-100">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="flex flex-col items-center text-center">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-stone-200 mb-8">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
            </svg>
            <p className="text-2xl md:text-4xl font-serif italic text-stone-600 max-w-3xl leading-snug">
              "The soul speaks through the body, and the body finds its voice in the silence of a healing touch."
            </p>
            <span className="mt-8 text-xs font-bold uppercase tracking-[0.3em] text-stone-400">— Frontier Philosophy</span>
          </div>
        </div>
      </section>

      {/* Section 3: Payment Methods & Transparency */}
      <section className="py-20 px-6 md:px-10 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#1A1A1A] mb-2">Secure Payments</h3>
            <p className="text-stone-500 text-sm">We prioritize your privacy and digital security.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 items-center grayscale">
            {/* Disabled Payments */}
<div className="flex flex-wrap justify-center gap-8 items-center">
  
  {/* PayPal */}
  <div className="flex flex-col items-center opacity-40 cursor-not-allowed relative">
    <div className="relative flex items-center justify-center w-12 h-12 border border-stone-200 rounded-xl bg-white mb-1">
      <span className="text-blue-900 font-black italic text-lg">P</span>
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-xl">
        <div className="w-[140%] h-[2px] bg-red-500 rotate-45"></div>
      </div>
    </div>
    <span className="text-xs font-bold text-stone-600">PayPal</span>
    <span className="text-[10px] text-red-500 uppercase tracking-tighter font-bold">Unavailable</span>
  </div>

  {/* CashApp */}
  <div className="flex flex-col items-center opacity-40 cursor-not-allowed relative">
    <div className="relative flex items-center justify-center w-12 h-12 border border-stone-200 rounded-xl bg-white mb-1">
      <span className="text-green-600 font-bold text-xl">$</span>
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-xl">
        <div className="w-[140%] h-[2px] bg-red-500 rotate-45"></div>
      </div>
    </div>
    <span className="text-xs font-bold text-stone-600">CashApp</span>
    <span className="text-[10px] text-red-500 uppercase tracking-tighter font-bold">Unavailable</span>
  </div>

  {/* Apple Pay */}
  <div className="flex flex-col items-center opacity-40 cursor-not-allowed relative">
    <div className="relative flex items-center justify-center w-12 h-12 border border-stone-200 rounded-xl bg-white mb-1">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.05 20.28c-.98.95-2.05 1.72-3.11 1.72-1.01 0-1.43-.66-2.61-.66-1.18 0-1.66.64-2.59.66-1.01.02-2.12-.83-3.15-1.78-2.07-1.92-3.59-5.41-3.59-8.49 0-4.91 2.82-7.53 5.56-7.53 1.45 0 2.59.91 3.49.91.88 0 2.22-1.02 3.86-1.02 2.1 0 3.73 1.13 4.63 2.53-3.66 2.03-3.08 7.02.6 8.52-.77 1.95-1.76 3.65-3.09 5.09zM13.9 1.4c0 2.1-1.71 4.1-3.64 4.1-.21 0-.44-.02-.65-.05 0-2.06 1.76-4.14 3.52-4.14.24 0 .52.03.77.09z"/>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-xl">
        <div className="w-[140%] h-[2px] bg-red-500 rotate-45"></div>
      </div>
    </div>
    <span className="text-xs font-bold text-stone-600">Apple Pay</span>
    <span className="text-[10px] text-red-500 uppercase tracking-tighter font-bold">Unavailable</span>
  </div>

</div>

            {/* Available Payment: Bitcoin */}
            <div className="flex flex-col items-center opacity-100 grayscale-0 bg-orange-50 px-4 py-2 rounded-xl border border-orange-100">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center text-white text-[10px] font-bold">₿</div>
                <span className="text-sm font-bold text-orange-600">Bitcoin</span>
              </div>
              <span className="text-[10px] text-green-600 uppercase font-bold tracking-tighter underline">Active Now</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer className="pb-10 text-center text-stone-300 text-[10px] uppercase tracking-[0.5em]">
        © 2026 Frontier Massage & Wellness
      </footer>
    </main>
  );
}