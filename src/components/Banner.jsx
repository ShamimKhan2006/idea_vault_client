


"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    title: (
      <>
        Build. Launch. <br />
        <span className="text-[#10b981]">Inspire.</span>
      </>
    ),
    description: "Join a growing community of dreamers, builders, and innovators shaping the future.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: (
      <>
        Innovate. Solve. <br />
        <span className="text-[#10b981]">Transform.</span>
      </>
    ),
    description: "Turn your unique ideas into powerful startups with our global ecosystem of creators.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: (
      <>
        Collaborate. Grow. <br />
        <span className="text-[#10b981]">Succeed.</span>
      </>
    ),
    description: "Find the right mentors and investors to scale your vision from a concept to a reality.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
  },
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // অটো প্লে সেটআপ (৫ সেকেন্ড পর পর স্লাইড চেঞ্জ হবে)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-10/12  mx-auto my-10 px-4 md:px-8">
      <div className="relative h-[85vh] w-full rounded-lg overflow-hidden shadow-2xl bg-slate-100">
        
        {/* Slides Container */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out bg-cover bg-center ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{ backgroundImage: `url('${slide.image}')` }}
          >
            {/* Greenish Gradient Overlay (স্ক্রিনশটের মতো ভাইব) */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#edf7f4]/98 via-[#edf7f4]/80 to-transparent" />

            {/* Content Area */}
            <div className="relative z-20 flex h-full items-center px-8 md:px-20 lg:px-28">
              <div className={`max-w-2xl transform transition-transform duration-700 ${index === currentSlide ? "translate-y-0" : "translate-y-10"}`}>
                
                {/* Heading */}
                <h1 className="text-5xl sm:text-7xl font-extrabold text-[#111827] leading-[1.1] tracking-tight">
                  {slide.title}
                </h1>

                {/* Description */}
                <p className="mt-6 text-lg md:text-xl text-[#4b5563] max-w-lg font-medium leading-relaxed">
                  {slide.description}
                </p>

                {/* Buttons Group */}
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Link href="/ideas">
                    <button className="inline-flex items-center gap-2 rounded-full bg-[#10b981] px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:bg-[#059669] hover:shadow-xl hover:shadow-emerald-200 active:scale-95 group">
                      Explore Ideas
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </button>
                  </Link>

                  <button className="inline-flex items-center gap-2.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 px-7 py-4 text-base font-bold text-slate-700 transition-all hover:bg-white active:scale-95 shadow-sm">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#e6f4ea] text-[#10b981]">
                      ▶
                    </span>
                    Watch Overview
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slide Indicators (নিচের ছোট ডটগুলো) */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2.5 transition-all duration-300 rounded-full ${
                i === currentSlide ? "w-10 bg-[#10b981]" : "w-2.5 bg-[#10b981]/30"
              }`}
            />
          ))}
        </div>

        {/* Floating Stats Card (Glassmorphism) */}
        <div className="absolute bottom-12 right-12 z-30 hidden lg:block bg-white/70 backdrop-blur-xl border border-white/40 p-6 rounded-[2rem] shadow-xl max-w-xs">
          <div className="flex items-center gap-4 mb-3">
            <div className="h-10 w-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold">✓</div>
            <div className="text-slate-800 font-bold">Top Verified Projects</div>
          </div>
          <p className="text-slate-600 text-sm">Join 2,500+ successful entrepreneurs who launched their ideas this year.</p>
        </div>

      </div>
    </div>
  );
};

export default Banner;

