import React from "react";
import BlogPageDetails from "../components/BlogPageDetails";

const BlogDetails = () => {
  return (
    <div className="bg-[#E7F9FF]">
      <BlogDetailsHero />
      <BlogPageDetails />
    </div>
  );
};

export default BlogDetails;

function BlogDetailsHero() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <img
        src="/details.png"
        alt="about-bg"
        className="absolute inset-0 w-full h-full object-fill object-center"
      />

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">
          The Future of Cardiac Imaging: What to Expect in 2026
        </h1>
        <div className="flex items-center gap-3 text-[12px] text-[#FFFFFF]/85 mb-2">
          {/* USER */}
          <div className="flex items-center gap-2">
            <img
              src="/p1.jpg"
              className="w-[20px] h-[20px] rounded-[4px] object-cover"
              alt="John Carter"
            />
            <span className="font-medium text-[14px]">John Carter</span>
          </div>

          {/* DOT */}
          <span className="text-gray-400">•</span>

          {/* DATE */}
          <span className="font-medium text-[14px]">29 Dec, 2025</span>
        </div>
      </div>
    </section>
  );
}
