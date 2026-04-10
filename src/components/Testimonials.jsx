"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Alex Smith",
    role: "Founder, Info Technologies",
    image: "/t1.jpg",
  },
  {
    id: 2,
    name: "Amy Jackson",
    role: "CEO, Apex Solutions",
    image: "/t2.jpg",
  },
  {
    id: 3,
    name: "John Carter",
    role: "Manager, Tech Corp",
    image: "/t1.jpg",
  },
  {
    id: 4,
    name: "Sophia Lee",
    role: "Designer, UI Studio",
    image: "/t2.jpg",
  },
  {
    id: 5,
    name: "Sophia Lee",
    role: "Designer, UI Studio",
    image: "/t2.jpg",
  },
];

export default function Testimonials() {
  const swiperRef = useRef(null);
  const [progress, setProgress] = useState(25);

  return (
    <section className="bg-[#133C49] py-16 px-4 sm:px-6 md:px-16 text-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-block font-medium bg-white/10 text-sm md:text-[16px] px-4 py-1 rounded-md mb-4">
          Testimonials
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-12">
          Our <span className="text-[#01D4FF]">Happy Clients</span> Say
        </h2>

        {/* SLIDER */}
        <Swiper
          spaceBetween={20}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => {
            const total = swiper.slides.length;
            const current = swiper.activeIndex + 1;
            setProgress((current / total) * 100);
          }}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-[#244F5C] rounded-2xl overflow-hidden">
                {/* Image */}
                <img
                  src={item.image}
                  className="w-full h-[280px] sm:h-[300px] md:h-[320px] object-cover"
                />

                {/* Content */}
                <div className="p-4 text-left">
                  <h3 className="font-semibold text-white text-[18px] md:text-[20px]">
                    {item.name}
                  </h3>
                  <p className="text-[13px] md:text-[14px] text-[#cfeaed]">
                    {item.role}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CONTROLS */}
        <div className="flex items-center justify-center gap-6 sm:gap-8 mt-12">
          {/* LEFT */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#01D4FF] flex items-center justify-center text-[#01D4FF] hover:bg-[#01D4FF] hover:text-[#00343a] transition"
          >
            <ChevronLeft size={18} strokeWidth={2.5} />
          </button>

          {/* PROGRESS */}
          <div className="w-40 sm:w-56 h-[3px] bg-[#1f4e55] rounded-full relative overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full bg-[#01D4FF] rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* RIGHT */}
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#01D4FF] text-[#00343a] flex items-center justify-center hover:bg-[#00c2ea] transition"
          >
            <ChevronRight size={18} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
