import { Search, Folder, Tag } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BlogPageDetails() {
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

  const navigate = useNavigate();
  return (
    <section className=" py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[320px_1fr] gap-6">
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
        <div className=" p-6 rounded-xl text-[#4F5C60] text-[15px] ">
          {/* CONTENT */}
          <p className="mb-4 text-[#4F5C60] font-medium text-[20px]">
            The landscape of cardiac imaging is undergoing a revolutionary
            transformation. As we approach 2026, new technologies are emerging
            that promise to change how we diagnose and treat heart conditions.
          </p>

          <h4 className="font-semibold text-[#133C49] mt-4 mb-2">
            Advanced 3D Imaging Technologies
          </h4>

          <p className="mb-4">
            Recent developments in three-dimensional cardiac imaging have opened
            new possibilities for understanding heart anatomy and function...
          </p>

          <p className="italic text-[#133C49] mb-4">
            "The combination of AI and advanced imaging is not just an
            incremental improvement—it's a paradigm shift in how we approach
            cardiac diagnostics."
            <br />— Dr. Sarah Mitchell
          </p>

          <h4 className="font-semibold text-[#133C49] mt-4 mb-2">
            Molecular Imaging Breakthroughs
          </h4>

          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>Early detection of atherosclerosis before symptoms appear</li>
            <li>Monitoring treatment response in real-time</li>
            <li>Identifying vulnerable plaques that may cause heart attacks</li>
            <li>Assessing myocardial viability after infarction</li>
          </ul>

          <h4 className="font-semibold text-[#133C49] mt-4 mb-2">
            Integration with Wearable Devices
          </h4>

          <p className="mb-4">
            The convergence of clinical imaging with data from wearable devices
            is creating a more comprehensive picture of cardiac health...
          </p>

          <h4 className="font-semibold text-[#133C49] mt-4 mb-2">
            Key Benefits of Integrated Monitoring
          </h4>

          <ul className="list-disc pl-5 space-y-1 mb-4">
            <li>
              Continuous tracking of cardiac function between clinic visits
            </li>
            <li>Early warning systems for developing conditions</li>
            <li>Personalized treatment adjustments based on real-world data</li>
            <li>Improved patient engagement in their own care</li>
          </ul>

          <h4 className="font-semibold text-[#133C49] mt-4 mb-2">
            Looking Ahead
          </h4>

          <p>
            As we move into 2026, the convergence of these technologies will
            continue to accelerate...
          </p>

          {/* DIVIDER */}
          <div className="border-t border-2 border-[#C6E4EF] my-6"></div>

          {/* AUTHOR CARD */}
          <div className="bg-[#D5F4FF] border border-[#C6E4EF] rounded-xl p-4 flex gap-4 items-start">
            {/* IMAGE */}
            <img
              src="/lady.jpg"
              className="w-[70px] h-[70px] rounded-lg object-cover"
            />

            {/* INFO */}
            <div className="flex-1">
              <h4 className="text-[#133C49] font-semibold mb-1">
                About the Author
              </h4>

              <p className="text-[#00849F] font-semibold text-sm mb-1">
                Dr. Sarah Mitchell
              </p>

              <p className="text-[13px] text-[#4F5C60] mb-3">
                Dr. Sarah Mitchell is a leading cardiologist specializing in
                advanced imaging techniques. With over 15 years of experience,
                she has pioneered several breakthrough diagnostic methods.
              </p>

              {/* SOCIAL */}
              <div className="flex gap-2">
                <img
                  src="/instagram.png"
                  alt=""
                  className="w-[24px] h-[24px]"
                />
                <img src="/linkedin.png" alt="" className="w-[24px] h-[24px]" />
                <img src="/twitter.png" alt="" className="w-[24px] h-[24px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
