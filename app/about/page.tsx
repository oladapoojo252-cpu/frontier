'use client';

import Navbar from '../components/Navbar';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FDFCFB]">
      <Navbar />

      {/* Header Section */}
      <section className="pt-32 md:pt-40 pb-16 px-6 md:px-10 max-w-[1440px] mx-auto">
        <div className="max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-stone-400 mb-6 block">
            Our Story
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-[#1A1A1A] tracking-tighter leading-[0.9] mb-10">
            BEYOND THE <br />
            <span className="text-stone-400">SURFACE TENSION.</span>
          </h1>
          <p className="text-xl md:text-2xl text-stone-600 leading-relaxed font-medium">
            At Frontier Massage, we believe that wellness isn't a luxury, it's a 
            necessary frontier for the modern human. We combine clinical expertise 
            with a serene environment to help you rediscover your best self.
          </p>
        </div>
      </section>

      {/* Image Split Section */}
      <section className="px-6 md:px-10 max-w-[1440px] mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="h-[500px] rounded-[2rem] overflow-hidden bg-stone-200 shadow-xl">
             <img 
              src="/about-studio.jpg" 
              alt="Our tranquil studio space" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-8 md:pl-10">
            <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A]">Our Philosophy</h2>
            <div className="space-y-6 text-stone-500 leading-relaxed">
              <p>
                Founded in 2024, Frontier Massage was born out of a desire to bridge the gap between 
                medical-grade therapy and a spa-like experience. We don't believe in "one size fits all."
              </p>
              <p>
                Every session begins with a consultation to understand your lifestyle, 
                stressors, and physical goals. Whether you are an athlete recovering 
                from training or a professional seeking relief from desk-related tension, 
                our approach is tailored uniquely to you.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div>
                <span className="block text-3xl font-black text-[#1A1A1A]">10+</span>
                <span className="text-xs uppercase tracking-widest text-stone-400 font-bold">Years Experience</span>
              </div>
              <div>
                <span className="block text-3xl font-black text-[#1A1A1A]">5k+</span>
                <span className="text-xs uppercase tracking-widest text-stone-400 font-bold">Happy Clients</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Lead Therapist Section */}
      <section className="bg-white py-24 mt-20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/3 aspect-[4/5] rounded-[2rem] overflow-hidden bg-stone-100">
               <img 
                src="/therapist.jpg" 
                alt="Lead Therapist" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-sm font-bold uppercase tracking-widest text-stone-400 mb-4">Meet the Founder</h3>
              <h2 className="text-4xl font-bold text-[#1A1A1A] mb-6">Dominique Lamar Greene, LMT</h2>
              <p className="text-lg text-stone-500 leading-relaxed italic mb-8">
                "My mission is to help people inhabit their bodies more comfortably. 
                Massage is more than just relaxation; it's a conversation between 
                the therapist and the nervous system."
              </p>
              <div className="space-y-4">
                 <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                       <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="font-medium text-[#1A1A1A]">Licensed Massage Therapist (LMT)</span>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                       <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="font-medium text-[#1A1A1A]">Specialist in Neuromuscular Therapy</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}