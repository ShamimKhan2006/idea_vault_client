"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    title: "Turn Your Startup Idea Into Reality",
    description:
      "Discover innovative startup ideas from creators around the world.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Innovation Starts With One Great Idea",
    description:
      "Explore creative startup concepts and connect with entrepreneurs.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Build. Launch. Inspire.",
    description:
      "Join a growing community of dreamers, builders, and innovators.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2070&auto=format&fit=crop",
  },
];

const Banner = () => {
  return (
    <div className="max-w-10/12 mx-auto my-20">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        loop={true}
        className="h-[90vh]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative h-[90vh] bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >

              <div className="absolute inset-0 bg-black/60"></div>


              <div className="relative z-10 flex h-full items-center justify-center px-4">
                <div className="max-w-3xl text-center text-white">
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    {slide.title}
                  </h1>

                  <p className="mt-5 text-base md:text-xl text-gray-200">
                    {slide.description}
                  </p>

                  <Link href="/ideas">
                    <button className="mt-8 rounded-full bg-white px-8 py-3 text-lg font-semibold text-black transition hover:scale-105">
                      Explore Ideas
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;