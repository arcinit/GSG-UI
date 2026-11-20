import { ArrowLeft } from "lucide-react";

export default function GalleryDetails() {
  const images = [
    "/b12.png",
    "/g1.jpg",
    "/g2.jpg",
    "/g3.jpg",
    "/b12.png",
    "/g1.jpg",
    "/g2.jpg",
    "/g3.jpg",
    "/b12.png",
    "/g1.jpg",
    "/g2.jpg",
    "/g3.jpg",
  ];

  return (
    <section className="bg-[#E7F9FF] min-h-screen py-10 px-4 md:px-10 pt-24 md:pt-40">
      <div className="max-w-7xl mx-auto">
        {/* BACK */}
        <button className="flex items-center gap-2 text-[#133C49] text-[12px] mb-4 hover:text-[#01D4FF] transition">
          <ArrowLeft size={16} />
          Back to Gallery
        </button>

        {/* TITLE */}
        <h1 className="text-[#133C49] text-[32px] md:text-[42px] font-semibold mb-8">
          Business World Event Introduction
        </h1>

        {/* IMAGE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {images.map((img, i) => (
            <div key={i} className="rounded-[12px] overflow-hidden">
              <img
                src={img}
                className="w-full h-[180px] object-cover rounded-[12px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
