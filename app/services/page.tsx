'use client';

import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function TreatmentsPage() {
  // Moved inside the component to fix the 'Cannot find name' error
  const treatments = [
    {
      title: "Swedish Massage",
      duration: "60/90 min",
      description: "A classic treatment using long, gliding strokes to improve circulation and promote total body relaxation.",
      image: "/swedish.jpg"
    },
    {
      title: "Deep Tissue",
      duration: "60/90 min",
      description: "Designed to relieve severe tension in the muscle and the connective tissue. Ideal for chronic aches and pains.",
      image: "/deep-tissue.jpg"
    },
    {
      title: "Sports Recovery",
      duration: "75 min",
      description: "Targeted therapy for athletes focusing on areas of the body that are overused and stressed from repetitive movement.",
      image: "/sports.jpg"
    },
    {
      title: "Hot Stone Therapy",
      duration: "90 min",
      description: "Warmed stones are placed on key points of the body to deepen relaxation and melt away muscle tension.",
      image: "/hot-stone.jpg"
    }
  ];

  return (
    <main className="min-h-screen bg-[#FDFCFB]">
      <Navbar />

      {/* Header Section */}
      <section className="pt-32 md:pt-40 pb-16 px-6 md:px-10 max-w-[1440px] mx-auto">
        <div className="max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-stone-400 mb-6 block">
            The Menu
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-[#1A1A1A] tracking-tighter leading-[0.9] mb-10">
            CURATED <br />
            <span className="text-stone-400">TREATMENTS.</span>
          </h1>
          <p className="text-xl text-stone-600 max-w-2xl leading-relaxed font-medium">
            A selection of our core offerings. Every therapy is a bespoke experience 
            designed to help you navigate your way back to wellness.
          </p>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="px-6 md:px-10 max-w-[1440px] mx-auto pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {treatments.map((item, index) => (
            <div key={index} className="group">
              <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-stone-100 mb-8">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <h3 className="text-3xl font-bold text-[#1A1A1A] tracking-tight">{item.title}</h3>
                  <div className="h-[1px] flex-grow bg-stone-200"></div>
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-stone-400 whitespace-nowrap">
                    {item.duration}
                  </span>
                </div>
                <p className="text-stone-500 leading-relaxed max-w-lg text-lg">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* "And More" Section with Customer Care Focus */}
      <section className="px-6 md:px-10 max-w-[1440px] mx-auto py-20 border-t border-stone-100 mt-10">
        <div className="bg-[#1A1A1A] text-white rounded-[3rem] p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-10">
           <div className="max-w-lg text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Looking for something specific?</h2>
              <p className="text-stone-400 leading-relaxed text-lg">
                Our menu extends far beyond these core offerings. Our customer care specialists 
                are ready to help you find the perfect treatment tailored to your physical needs.
              </p>
           </div>
           
           <div className="flex flex-col items-center md:items-end gap-6">
              <Link 
                href="https://t.me/frontiermassage" 
                className="group flex items-center gap-4 bg-white text-[#1A1A1A] px-10 py-5 rounded-full font-bold text-lg hover:bg-stone-200 transition-all shadow-xl"
              >
                Contact Customer Care
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
              <p className="text-stone-500 text-sm font-medium italic">
                Typical response time: Under 2 hours
              </p>
           </div>
        </div>
      </section>

      {/* Final Booking Footer */}
      <section className="py-24 px-6 text-center">
        <Link 
          href="https://t.me/frontiermassage" 
          className="text-[#1A1A1A] text-2xl font-black uppercase tracking-tighter border-b-4 border-[#1A1A1A] pb-2 hover:text-stone-500 hover:border-stone-500 transition-all"
        >
          Begin your journey
        </Link>
      </section>
    </main>
  );
}