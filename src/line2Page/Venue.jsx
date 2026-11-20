"use client";

import { MapPin } from "lucide-react";
import { useState } from "react";

const Venue = ({ data }) => {
  return (
    <div className="bg-[#E7F9FF]">
      <VenueHero data={data} />
      <VenueSection data={data} />
      <TravelInfo data={data} />
    </div>
  );
};

export default Venue;

function VenueHero({ data }) {
  if (!data) return null;
  const { conference, venue } = data;

  // Prefer banner_image, fallback to first enabled banner from banners array
  const enabledBanners = conference?.banners?.filter((b) => b.is_enabled) || [];
  const sortedBanners = [...enabledBanners].sort(
    (a, b) => (a.order ?? 0) - (b.order ?? 0),
  );
  const bannerImage =
    conference?.banner_image || sortedBanners[0]?.image || "/default-banner.jpg";

  return (
    <section className="relative h-[60vh] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <img
        src={bannerImage}
        alt="about-bg"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Content */}
      <div className="relative z-10 text-center text-[#FFFFFF]">
        {/* Badge */}
        <div className="inline-block bg-[#133C49]/50 text-[#01D4FF] text-[18px] px-[16px] py-[8px] rounded-full mb-4">
          GCC-2026
        </div>

        {/* Heading */}
        <h1 className="text-[32px] md:text-[54px] font-medium leading-tight">
          {venue?.hero_title}
        </h1>

        {/* Subtitle */}
        {venue?.hero_subtitle && (
          <p className="text-[#FFFFFF] font-normal text-[14px] md:text-[18px] mt-3">
            {venue?.hero_subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

// Extracts actual URL whether backend sends a plain URL or a full <iframe> HTML string
function getMapSrc(embedValue) {
  if (!embedValue) return "";
  const trimmed = embedValue.trim();

  // Case 1: backend sends plain URL
  if (trimmed.startsWith("http")) return trimmed;

  // Case 2: backend sends full <iframe src="..."></iframe> string
  const match = trimmed.match(/src="([^"]+)"/);
  return match ? match[1] : "";
}

function VenueSection({ data }) {
  if (!data) return null;

  const { venue, images } = data;
  const [active, setActive] = useState(0);

  const galleryImages = images?.filter((i) => i.is_enabled) || [];
  const mapSrc = getMapSrc(venue?.map_embed_url);

  return (
    <div className="w-full bg-[#E7F9FF] py-16 flex justify-center">
      <div className="w-[90%]  space-y-8">
        {/* Heading */}
        <h2 className="text-[20px] md:text-[24px] font-semibold text-[#133C49]">
          {venue?.venue_name}
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

              {venue?.directions_url ? (
                <a
href = { venue.directions_url }
                  target="_blank"
              rel="noopener noreferrer"
              className="border border-[#01D4FF] text-[#01D4FF] px-[16px] py-[8px] rounded-[8px] text-[12px]"
                >
              Get Directions
            </a>
              ) : null}
          </div>

          <p className="text-[18px] text-center text-white/70">
            {venue?.address}
          </p>

          <p className="text-[18px] text-white/70 leading-relaxed">
            {venue?.description}
          </p>

          {/* Stats */}
          <div className="flex gap-4 mt-4">
            <div className="flex-1 bg-[#133C49] rounded-[12px] p-[16px]">
              <p className="text-[#01D4FF] text-[18px] md:text-[20px] font-semibold">
                {venue?.total_space || "—"}
              </p>
              <p className=" text-[12px] md:text-[18px] text-white/70">
                Total Space
              </p>
            </div>

            <div className="flex-1 bg-[#133C49] rounded-[12px] p-[16px]">
              <p className="text-[#01D4FF] text-[18px] md:text-[20px] font-semibold">
                {venue?.capacity || "—"}
              </p>
              <p className=" text-[12px] md:text-[18px] text-white/70">
                Capacity
              </p>
            </div>
          </div>
        </div>

        {/* MAP */}
        <div className="rounded-[20px] overflow-hidden">
          {mapSrc ? (
            <iframe
              src={mapSrc}
              className="w-full h-full min-h-[300px]"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full min-h-[300px] flex items-center justify-center text-[#133C49] bg-[#D5F4FF] text-[14px]">
              Map not available
            </div>
          )}
        </div>
      </div>

      {/* GALLERY */}
      {galleryImages.length > 0 && (
        <div className="space-y-4">
          {/* Images */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <img
                key={img.id}
                src={img.image}
                className="rounded-[16px] w-full h-[120px] md:h-[180px] object-cover"
              />
            ))}
          </div>

          {/* Controls */}
          {galleryImages.length > 1 && (
            <div className="flex items-center justify-center gap-5 mt-6">
              {/* Prev */}
              <button
                onClick={() =>
                  setActive((prev) =>
                    prev === 0 ? galleryImages.length - 1 : prev - 1,
                  )
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
                    width: `${((active + 1) / galleryImages.length) * 100}%`,
                  }}
                />
              </div>

              {/* Next */}
              <button
                onClick={() =>
                  setActive((prev) => (prev + 1) % galleryImages.length)
                }
                className="w-10 h-10 rounded-full bg-[#01D4FF] flex items-center justify-center text-[#13404F] hover:scale-105 transition"
              >
                <img src="/arrow-right.png" alt="" className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
    </div >
  );
}

function TravelInfo({ data }) {
  if (!data || !data.travel_info || data.travel_info.length === 0)
    return null;

  // Step 1: filter enabled items
  const travel = data.travel_info.filter((item) => item.is_enabled);

  if (travel.length === 0) return null;

  // Step 2: map icon → local image
  const getIcon = (icon) => {
    if (!icon) return "/aeroplane.png";

    const key = icon.toLowerCase().replace(/\s/g, "");

    if (key.includes("plane")) return "/aeroplane.png";
    if (key.includes("train")) return "/train.png";
    if (key.includes("car")) return "/car.png";

    return "/aeroplane.png"; // fallback
  };

  return (
    <div className="w-full bg-[#E7F9FF] py-14 flex justify-center">
      <div className="w-[90%]">
        {/* Heading */}
        <h2 className="text-[20px] md:text-[24px] font-semibold text-[#133C49] mb-6">
          Travel <span className="text-[#00849F]">Information</span>
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {travel.map((item) => (
            <div
              key={item.id}
              className="bg-[#D5F4FF] border border-[#1B5061] rounded-[12px] p-[16px] text-[#133C49] hover:text-[#01D4FF]
               transition-all duration-300 cursor-pointer
              hover:-translate-y-1
              hover:border-[#00849F]
              hover:shadow-[0_0_25px_rgba(1,212,255,0.25)]
              "
            >
              {/* Icon */}
              <div className="w-[48px] h-[48px] mb-3">
                <img
                  src={getIcon(item.icon)}
                  alt={item.title}
                  className="w-full h-full"
                />
              </div>

              {/* Title */}
              <h3 className="text-[18px] md:text-[28px] font-semibold  mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[13px] md:text-[18px] text-[#4F5C60] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}