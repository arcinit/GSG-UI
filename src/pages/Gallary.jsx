import React from "react";
import GallaryPage from "../components/GallaryPage";

const Gallary = () => {
  return (
    <div className="bg-[#E7F9FF]">
      <GallaryHero />
      <GallaryPage />
    </div>
  );
};

export default Gallary;

function GallaryHero() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <img
        src="/about.png"
        alt="about-bg"
        className="absolute inset-0 w-full h-full object-fill object-center"
      />

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-3xl md:text-[54px] font-medium">Gallary</h1>
      </div>
    </section>
  );
}
