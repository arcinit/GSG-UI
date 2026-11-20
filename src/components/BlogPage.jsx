import { Search, Folder, Tag } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const blogs = [
  {
    id: 1,
    image: "/b3.png",
    title:
      "Highlights from CGT Summit 2025: A Step Forward in Cell & Gene Therapy",
  },
  {
    id: 2,
    image: "/b2.png",
    title:
      "Highlights from CGT Summit 2025: A Step Forward in Cell & Gene Therapy",
  },
  {
    id: 3,
    image: "/b3.png",
    title:
      "Highlights from CGT Summit 2025: A Step Forward in Cell & Gene Therapy",
  },

  {
    id: 4,
    image: "b2.png",
    title:
      "Highlights from CGT Summit 2025: A Step Forward in Cell & Gene Therapy",
  },
  {
    id: 5,
    image: "b3.png",
    title:
      "Highlights from CGT Summit 2025: A Step Forward in Cell & Gene Therapy",
  },
  {
    id: 6,
    image: "b2.png",
    title:
      "Highlights from CGT Summit 2025: A Step Forward in Cell & Gene Therapy",
  },
];

export default function BlogPage() {
  const popularPosts = [
    {
      id: 1,
      title: "Correlation with major bond returns (German, US)",
      date: "09 Jan, 2025",
      image: "/lady.jpg",
    },
    {
      id: 2,
      title: "Pre Booking Benifits for the Traveller on our Hotel",
      date: "09 Jan, 2025",
      image: "/aud.jpg",
    },
    {
      id: 3,
      title: "How to Book a Room online Step by Step Guide",
      date: "09 Jan, 2025",
      image: "/aud2.jpg",
    },
  ];

  const ITEMS_PER_PAGE = 4;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogs.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentBlogs = blogs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const navigate = useNavigate();
  return (
    <section className=" py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[320px_1fr] gap-8">
        {/* ================= SIDEBAR ================= */}
        <div className="bg-[#133C49] text-white rounded-[20px] p-5 space-y-6 h-fit md:sticky top-24">
          {/* Search */}
          <div className="flex items-center bg-[#13404F] border border-[#235262] backdrop-blur-md rounded-[12px] px-3 py-2 w-full max-w-sm">
            {/* INPUT */}
            <input
              placeholder="Search Here"
              className="flex-1 bg-transparent outline-none text-[13px] text-white placeholder:text-white/60 p-[12px] rounded-[14px] border border-[#235262] "
            />

            {/* BUTTON */}
            <button className="ml-2 w-[44px] h-[44px]  transition">
              <img src="/s.png" alt="" className="w-full h-full" />
            </button>
          </div>

          {/* Categories */}
          <div className="bg-[#13404F] border border-[#235262] rounded-[12px] p-4">
            <h3 className="font-semibold text-[20px] text-white mb-3">
              Categories
            </h3>

            <div className="space-y-3 text-[14px] font-normal">
              {[
                "Business Event",
                "Design Conference",
                "Marketing events",
                "Finance Conference",
                "Uncategories",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 border border-[#1e555a] rounded-lg px-3 py-2"
                >
                  <Folder size={14} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Popular Post */}
          <div className="bg-[#13404F] border border-[#235262] rounded-[12px] p-4">
            <h3 className="font-semibold text-[20px] text-white mb-3">
              Popular Post
            </h3>

            <div className="space-y-4">
              {popularPosts.map((post) => (
                <div key={post.id} className="flex gap-3">
                  <img
                    src={post.image}
                    className="w-[65px] h-[65px] rounded-[6px] object-cover"
                  />

                  <div>
                    <p className="text-[13px] text-white leading-snug">
                      {post.title}
                    </p>
                    <span className="text-[13px] text-[#01D4FF]">
                      {post.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="bg-[#13404F] border border-[#235262] rounded-[12px] p-4">
            <h3 className="font-semibold mb-3">Tags</h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {["Conference", "Business", "Marketing", "Designing"].map(
                (tag, i) => (
                  <span
                    key={i}
                    className="text-xs text-center border border-[#235262] bg-[#133C49] px-3 py-2 rounded-full"
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>

        {/* ================= BLOG GRID ================= */}
        <div>
          <div className="grid sm:grid-cols-2 gap-6">
            {currentBlogs.map((blog) => (
              <div
                key={blog.id}
                onClick={() => navigate(`/blogs-details?id=${blog.id}`)}
                className="bg-[#D5F4FF] rounded-[24px] p-[16px]"
              >
                {/* Image */}
                <img
                  src={blog.image}
                  className="w-full h-[199px] object-cover rounded-[12px] mb-3"
                />

                {/* Meta */}
                <div className="flex items-center gap-3 text-[12px] text-[#4F5C60] mb-2">
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

                {/* Title */}
                <h3 className="text-[18px] font-medium mb-2 text-[#133C49]">
                  {blog.title}
                </h3>

                {/* Desc */}
                <p className="text-[#4F5C60] text-[14px] font-normal leading-relaxed">
                  The 2nd Global Cell & Gene Therapy (CGT) Summit was held from
                  July 7–9, 2025, in Orlando, Florida, and brought together an
                  exceptional lineup of scientists, clinicians, industry
                  leaders, regulatory authorities, and innovators from around
                  the world...
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-12 px-2">
            {/* PREV */}
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className={`text-[16px] md:text-[20px] font-medium transition ${
                currentPage === 1
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-[#BCBCBC] hover:text-[#01D4FF]"
              }`}
            >
              Prev
            </button>

            {/* PAGE NUMBERS */}
            <div className="flex flex-wrap justify-center gap-2">
              {[...Array(totalPages)].map((_, i) => {
                const page = i + 1;

                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full text-xs md:text-sm border transition ${
                      currentPage === page
                        ? "bg-[#00849F] text-white border-[#00849F]"
                        : "border-[#00849F] text-[#00849F] hover:bg-[#00849F] hover:text-white"
                    }`}
                  >
                    {page.toString().padStart(2, "0")}
                  </button>
                );
              })}
            </div>

            {/* NEXT */}
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className={`text-[16px] md:text-[20px] font-medium ${
                currentPage === totalPages
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-[#01D4FF] hover:underline"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
