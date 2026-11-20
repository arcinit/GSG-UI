("use client");

import { MapPin } from "lucide-react";
import { useState } from "react";

const Venue = () => {
  return (
    <div className="bg-[#E7F9FF]">
      <VenueHero />
      <VenueSection />
      <TravelInfo />
    </div>
  );
};

export default Venue;

function VenueHero() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <img
        src="/about.png"
        alt="about-bg"
        className="absolute inset-0 w-full h-full object-fill object-center"
      />

      {/* Content */}
      <div className="relative z-10 text-center text-[#FFFFFF]">
        {/* Badge */}
        <div className="inline-block bg-[#133C49]/50 text-[#01D4FF] text-[18px] px-[16px] py-[8px] rounded-full mb-4">
          GCC-2026
        </div>

        {/* Heading */}
        <h1 className="text-[32px] md:text-[54px] font-medium leading-tight">
          Venue <span className="text-[#01D4FF]">Barcelona, Spain</span>
        </h1>

        {/* Subtitle */}
        <p className="text-[#FFFFFF] font-normal text-[14px] md:text-[18px] mt-3">
          Experience world-class cardiology in the heart of Mediterranean
          culture
        </p>
      </div>
    </section>
  );
}

function VenueSection() {
  const images = ["/g4.jpg", "/g3.jpg", "/g2.jpg", "/g1.jpg"];

  const [active, setActive] = useState(0);

  return (
    <div className="w-full bg-[#E7F9FF] py-16 flex justify-center">
      <div className="w-[90%]  space-y-8">
        {/* Heading */}
        <h2 className="text-[20px] md:text-[24px] font-semibold text-[#133C49]">
          Barcelona International{" "}
          <span className="text-[#00849F]">Convention Center</span>
        </h2>

        {/* TOP GRID */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* LEFT CARD */}
          <div className="bg-[#13404F] border border-[#235262] text-white rounded-[24px] p-[24px] space-y-4">
            {/* Address */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <img
                  src="/location3.png"
                  alt=""
                  className="w-[20px] h-[20px]"
                />
                <h3 className="font-semibold text-[#FFFFFF] text-[16px] md:text-[20px]">
                  Address
                </h3>
              </div>

              <button className="border border-[#01D4FF] text-[#01D4FF] px-[16px] py-[8px] rounded-[8px] text-[12px]">
                Get Directions
              </button>
            </div>

            <p className="text-[18px] text-center text-white/70">
              Plaça de Willy Brandt, 11-14 08019 Barcelona, Spain
            </p>

            <p className="text-[18px] text-white/70 leading-relaxed">
              The Barcelona International Convention Center (CCIB) is one of
              Europe's largest and most modern conference centers, featuring
              state-of-the-art facilities and stunning Mediterranean
              architecture.
            </p>

            {/* Stats */}
            <div className="flex gap-4 mt-4">
              <div className="flex-1 bg-[#133C49] rounded-[12px] p-[16px]">
                <p className="text-[#01D4FF] text-[18px] md:text-[20px] font-semibold">
                  100,000 m²
                </p>
                <p className=" text-[12px] md:text-[18px] text-white/70">
                  Total Space
                </p>
              </div>

              <div className="flex-1 bg-[#133C49] rounded-[12px] p-[16px]">
                <p className="text-[#01D4FF] text-[18px] md:text-[20px] font-semibold">
                  15,000
                </p>
                <p className=" text-[12px] md:text-[18px] text-white/70">
                  Capacity
                </p>
              </div>
            </div>
          </div>

          {/* MAP */}
          <div className="rounded-[20px] overflow-hidden">
            <img
              src="/map.png"
              alt="map"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* GALLERY */}
        <div className="space-y-4">
          {/* Images */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                className="rounded-[16px] w-full h-[120px] md:h-[180px] object-cover"
              />
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-5 mt-6">
            {/* Prev */}
            <button
              onClick={() =>
                setActive((prev) => (prev === 0 ? images.length - 1 : prev - 1))
              }
              className="w-10 h-10 rounded-full border border-[#01D4FF] flex items-center justify-center text-[#01D4FF] hover:bg-[#01D4FF]/10 transition"
            >
              <img src="/arrow-left.png" alt="" className="w-4 h-4" />
            </button>

            {/* Progress */}
            <div className="w-48 h-[4px] bg-[#1B4C5B] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#01D4FF] transition-all duration-300"
                style={{
                  width: `${((active + 1) / images.length) * 100}%`,
                }}
              />
            </div>

            {/* Next */}
            <button
              onClick={() => setActive((prev) => (prev + 1) % images.length)}
              className="w-10 h-10 rounded-full bg-[#01D4FF] flex items-center justify-center text-[#13404F] hover:scale-105 transition"
            >
              <img src="/arrow-right.png" alt="" className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function TravelInfo() {
  const data = [
    {
      icon: "/aeroplane.png",
      title: "By Air",
      desc: "Barcelona-El Prat Airport (BCN) is located 15km from the city center. Direct flights from major cities worldwide.",
    },
    {
      icon: "/train.png",
      title: "By Train",
      desc: "Barcelona Sants is the main railway station with high-speed AVE connections to Madrid, Paris, and other European cities.",
    },
    {
      icon: "/car.png",
      title: "By Car",
      desc: "The venue is easily accessible via the AP-7 motorway. Parking facilities available at the venue.",
    },
  ];

  return (
    <div className="w-full bg-[#E7F9FF] py-14 flex justify-center">
      <div className="w-[90%]">
        {/* Heading */}
        <h2 className="text-[20px] md:text-[24px] font-semibold text-[#133C49] mb-6">
          Travel <span className="text-[#00849F]">Information</span>
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-[#D5F4FF] border border-[#1B5061] rounded-[12px] p-[16px]"
            >
              {/* Icon */}
              <div className="w-[48px] h-[48px] mb-3">
                <img src={item.icon} alt="" className="w-full h-full" />
              </div>

              {/* Title */}
              <h3 className="text-[18px] md:text-[28px] font-semibold text-[#133C49] mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[13px] md:text-[18px] text-[#4F5C60] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
