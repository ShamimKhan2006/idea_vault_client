// "use client";

// import Link from "next/link";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";

// const slides = [
//   {
//     id: 1,
//     title: "Turn Your Startup Idea Into Reality",
//     description:
//       "Discover innovative startup ideas from creators around the world.",
//     image:
//       "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2070&auto=format&fit=crop",
//   },
//   {
//     id: 2,
//     title: "Innovation Starts With One Great Idea",
//     description:
//       "Explore creative startup concepts and connect with entrepreneurs.",
//     image:
//       "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
//   },
//   {
//     id: 3,
//     title: "Build. Launch. Inspire.",
//     description:
//       "Join a growing community of dreamers, builders, and innovators.",
//     image:
//       "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2070&auto=format&fit=crop",
//   },
// ];

// const Banner = () => {
//   return (
//     <div className="w-full max-w-10/12 mx-auto my-20">
//       <Swiper
//         modules={[Autoplay, Pagination]}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         pagination={{ clickable: true }}
//         loop={true}
//         className="h-[90vh]"
//       >
//         {slides.map((slide) => (
//           <SwiperSlide key={slide.id}>
//             <div
//               className="relative h-[90vh] bg-cover bg-center"
//               style={{
//                 backgroundImage: `url(${slide.image})`,
//               }}
//             >

//               <div className="absolute inset-0 bg-white/10"></div>


//               <div className="relative z-10 flex h-full items-center justify-center px-4">
//                 <div className="max-w-3xl text-center ">
//                   <h1 className="text-4xl md:text-6xl font-bold text-forgroud leading-tight">
//                     {slide.title}
//                   </h1>

//                   <p className="mt-5 text-base md:text-xl ">
//                     {slide.description}
//                   </p>

//                   <Link href="/ideas">
//                     <button className="mt-8 rounded-full bg-green-500 px-8 py-3 text-lg font-semibold text-white transition hover:scale-105">
//                       Explore Ideas
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Banner;


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

// "use client";

// import Link from "next/link";

// const Banner = () => {
//   return (
//     <div className="w-full max-w-[1400px] mx-auto my-10 px-4 md:px-8">
//       <div 
//         className="relative min-h-[75vh] md:h-[80vh] w-full rounded-[2.5rem] overflow-hidden bg-cover bg-right md:bg-center bg-no-repeat shadow-sm"
//         style={{
//           backgroundImage: `url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2070&auto=format&fit=crop')`,
//         }}
//       >
//         {/* Left-to-Right Greenish Gradient Overlay (স্ক্রিনশটের মতো ভাইব দেওয়ার জন্য) */}
//         <div className="absolute inset-0 bg-gradient-to-r from-[#edf7f4]/95 via-[#edf7f4]/85 to-[#edf7f4]/20 md:to-transparent" />

//         {/* Content Container */}
//         <div className="relative z-10 flex h-full min-h-[75vh] md:h-[80vh] items-center px-6 sm:px-12 md:px-20 lg:px-24">
//           <div className="max-w-2xl">
            
//             {/* Main Heading */}
//             <h1 className="text-5xl sm:text-6xl lg:text-[70px] font-extrabold text-[#111827] leading-[1.15] tracking-tight">
//               Build. Launch. <br />
//               <span className="text-[#10b981]">Inspire.</span>
//             </h1>

//             {/* Subtitle / Description */}
//             <p className="mt-6 text-base sm:text-lg text-[#4b5563] max-w-lg font-normal leading-relaxed">
//               Join a growing community of dreamers, builders, and innovators shaping the future.
//             </p>

//             {/* Buttons */}
//             <div className="mt-10 flex flex-wrap items-center gap-4">
//               <Link href="/ideas">
//                 <button className="inline-flex items-center gap-2 rounded-full bg-[#10b981] px-7 py-3.5 text-sm sm:text-base font-semibold text-white transition-all duration-300 hover:bg-[#059669] hover:shadow-lg hover:shadow-emerald-100 active:scale-95 group">
//                   Explore Ideas
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={2.5}
//                     stroke="currentColor"
//                     className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
//                     />
//                   </svg>
//                 </button>
//               </Link>

//               <button className="inline-flex items-center gap-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/80 px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-700 transition-all duration-300 hover:bg-white hover:border-slate-300 shadow-sm active:scale-95">
//                 {/* Play Icon */}
//                 <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#e6f4ea] text-[#10b981]">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 24 24"
//                     fill="currentColor"
//                     className="w-3 h-3 ml-0.5"
//                   >
//                     <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
//                   </svg>
//                 </span>
//                 Watch Overview
//               </button>
//             </div>

//             {/* Info Cards (নিচের কাউন্টারগুলো ইমেজের সাথে ম্যাচ করে যুক্ত করা হয়েছে) */}
//             <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 bg-white/60 backdrop-blur-md rounded-2xl p-5 border border-white/40 max-w-xl shadow-sm">
//               <div>
//                 <div className="text-xl font-bold text-slate-800">10K+</div>
//                 <div className="text-xs text-slate-500">Ideas Shared</div>
//               </div>
//               <div>
//                 <div className="text-xl font-bold text-slate-800">5K+</div>
//                 <div className="text-xs text-slate-500">Innovators</div>
//               </div>
//               <div>
//                 <div className="text-xl font-bold text-slate-800">2K+</div>
//                 <div className="text-xs text-slate-500">Successful Projects</div>
//               </div>
//               <div>
//                 <div className="text-xl font-bold text-slate-800">100+</div>
//                 <div className="text-xs text-slate-500">Industries</div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;