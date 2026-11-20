import { Search, Folder, Tag, CalendarDays } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import http from "../service/http";

const galleryItems = [
  {
    id: 1,
    title: "Business World Event Introduction",
    date: "24 Nov 2025",
    image: "/b12.png",
  },
  {
    id: 2,
    title: "Global Business Conference 2025",
    date: "12 Dec 2025",
    image: "/b12.png",
  },
  {
    id: 3,
    title: "Marketing Strategy Summit",
    date: "05 Jan 2026",
    image: "/b12.png",
  },
  {
    id: 4,
    title: "Startup Networking Meetup",
    date: "18 Feb 2026",
    image: "/b12.png",
  },
];

export default function GallaryPage() {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [search, setSearch] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const [debouncedSearch, setDebouncedSearch] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500); // wait 500ms

    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    fetchGallery();
  }, [currentPage, selectedCategory, debouncedSearch]);

  const fetchGallery = async () => {
    setLoading(true); // ✅ IMPORTANT

    try {
      const res = await http.get("/gallery", {
        params: {
          page: currentPage,
          category: selectedCategory,
          search: debouncedSearch,
        },
      });

      const data = res.data;

      setItems(data.results || []);
      setCategories(data.categories || []);
      setTotalPages(data.num_pages || 1); // ✅ added
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  const navigate = useNavigate();

  return (
    <section className=" py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[320px_1fr] gap-8">
        {/* ================= SIDEBAR ================= */}
        <div className="bg-[#133C49] text-white rounded-[20px] p-5 space-y-6 h-fit md:sticky top-24">
          {/* Search */}
          <div className="flex items-center bg-[#13404F] border border-[#235262] backdrop-blur-md rounded-[12px] px-3 py-2 w-full max-w-sm">
            {/* INPUT */}
            {/* <input
              placeholder="Search Here"
              className="flex-1 bg-transparent outline-none text-[13px] text-white placeholder:text-white/60 p-[12px] rounded-[14px] border border-[#235262] "
            /> */}

            <input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
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
              {/* {[
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
              ))} */}
              <div
                onClick={() => {
                  setSelectedCategory(null);
                  setCurrentPage(1);
                }}
                className={`flex items-center gap-2 border rounded-lg px-3 py-2 cursor-pointer ${
                  selectedCategory === null
                    ? "bg-[#01D4FF] text-black"
                    : "border-[#1e555a]"
                }`}
              >
                <Folder size={14} />
                All
              </div>
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setCurrentPage(1);
                  }}
                  className={`flex items-center gap-2 border rounded-lg px-3 py-2 cursor-pointer ${
                    selectedCategory === cat.id
                      ? "bg-[#01D4FF] text-black"
                      : "border-[#1e555a]"
                  }`}
                >
                  <Folder size={14} />
                  {cat.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= BLOG GRID ================= */}
        <div>
          <div className="grid sm:grid-cols-3 gap-4">
            {/* {currentItems.map((blog) => (
              <div
                key={blog.id}
                onClick={() => navigate(`/gallery-details?id=${blog.id}`)}
                className="bg-[#D5F4FF] rounded-[24px]  overflow-hidden w-full max-w-sm"
              >
                
                <div className="">
                  <img
                    src={blog.image}
                    className="w-full h-[180px] object-cover rounded-t-[14px]"
                  />
                </div>

                
                <div className="px-4 py-4">
                  
                  <h3 className="text-[#133C49] text-[14px] font-medium mb-2">
                    {blog.title}
                  </h3>

                 
                  <div className="flex items-center gap-2 text-[#6b8b93] text-[12px]">
                    <span className="w-[16px] h-[16px]">
                      <CalendarDays size={12} />
                    </span>

                    <span>{blog.date}</span>
                  </div>
                </div>
              </div>
            ))} */}
            {/* {loading ? (
              <div className="col-span-3 text-center py-10">Loading...</div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  onClick={() =>
                    navigate(`/main/gallery-details?id=${item.id}`)
                  }
                  className="bg-[#D5F4FF] rounded-[24px] overflow-hidden w-full max-w-sm"
                >
                  
                  <img
                    src={item.preview_image || "/b12.png"}
                    className="w-full h-[180px] object-cover rounded-t-[14px]"
                  />

                  <div className="px-4 py-4">
                    <h3 className="text-[#133C49] text-[14px] font-medium mb-2">
                      {item.title}
                    </h3>

                    <div className="flex items-center gap-2 text-[#6b8b93] text-[12px]">
                      <CalendarDays size={12} />
                      <span>{new Date(item.event_date).toDateString()}</span>
                    </div>
                  </div>
                </div>
              ))
            )} */}
            {loading ? (
              <div className="col-span-3 text-center py-10">Loading...</div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  onClick={() =>
                    navigate(`/main/gallery-details?id=${item.id}`)
                  }
                  className="bg-[#D5F4FF] text-[#133C49] hover:text-[#00C2E0] rounded-[24px] overflow-hidden w-full max-w-sm cursor-pointer group"
                >
                  {/* IMAGE WRAPPER */}
                  <div className="relative">
                    {/* Image */}
                    <img
                      src={item.preview_image || "/b12.png"}
                      className="w-full h-[180px] object-cover rounded-t-[14px]"
                    />

                    {/* HOVER OVERLAY */}
                    <div
                      className="absolute inset-0 flex items-center justify-center
                        bg-black/30 backdrop-blur-xs
                        opacity-0 group-hover:opacity-100
                        transition duration-300"
                    >
                      {/* BUTTON */}
                      <button
                        onClick={() => navigate("/main/gallery")}
                        className="flex items-center gap-3 bg-[#01D4FF] text-[#00343a] 
                        text-[13px] font-semibold px-5 py-2.5 rounded-full 
                        shadow-lg hover:bg-[#00c2ea] transition"
                      >
                        View gallery
                        <span className="w-5 h-5 flex items-center justify-center bg-white text-black rounded-full text-xs">
                          →
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="px-4 py-4">
                    <h3 className=" text-[14px] font-semibold mb-2">
                      {item.title}
                    </h3>

                    <div className="flex items-center gap-2 text-[#6b8b93] text-[12px]">
                      <CalendarDays size={12} />
                      <span>{new Date(item.event_date).toDateString()}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
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
