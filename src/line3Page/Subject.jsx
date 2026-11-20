import { Phone, Mail, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Link } from "lucide-react";
const Subject = () => {
  return (
    <div className="bg-[#E7F9FF]">
      <JournalsHero />
      <CategoriesGrid />
    </div>
  );
};

export default Subject;

function JournalsHero() {
  return (
    <div className="bg-[#0B2C36] h-[50vh] px-6 md:px-16 pb-10 pt-40 border-b border-[#2C5B63]">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-[36px] md:text-[54px] font-semibold text-white">
          Browse by <span className="text-[#01D4FF]">Subject</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-3 text-[#FFFFFF] text-[14px] md:text-[18px] ">
          Explore our comprehensive collection of peer-reviewed journals
          organized by academic disciplines.
        </p>
      </div>
    </div>
  );
}

function CategoriesGrid() {
  const categories = [
    {
      title: "Engineering",
      desc: "Mechanical, civil, electrical, chemical, and industrial engineering research",
      journals: 12,
      articles: 3450,
    },
    {
      title: "Medical Science",
      desc: "Clinical medicine, surgery, pharmacology, nursing, and public health",
      journals: 8,
      articles: 2890,
    },
    {
      title: "Life Sciences",
      desc: "Biology, biochemistry, genetics, ecology, and biotechnology",
      journals: 8,
      articles: 1980,
    },
    {
      title: "Medical Science",
      desc: "Clinical medicine, surgery, pharmacology, nursing, and public health",
      journals: 8,
      articles: 2890,
    },
    {
      title: "Life Sciences",
      desc: "Biology, biochemistry, genetics, ecology, and biotechnology",
      journals: 8,
      articles: 1980,
    },
    {
      title: "Engineering",
      desc: "Mechanical, civil, electrical, chemical, and industrial engineering research",
      journals: 12,
      articles: 3450,
    },
  ];

  return (
    <div className=" px-6 md:px-16 py-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="bg-[#E7F9FF] border border-[#C6E4EF] rounded-[16px] p-[16px] hover:shadow-md transition"
          >
            {/* ICON */}
            <div className="w-[50px] h-[50px] mb-3">
              <img src="/lock2.png" alt="" className="w-full h-full" />
            </div>

            {/* TITLE */}
            <h3 className="text-[20px] font-semibold text-[#133C49]">
              {cat.title}
            </h3>

            {/* DESC */}
            <p className="text-[14px] text-[#4F5C60] mt-1">{cat.desc}</p>

            {/* DIVIDER */}
            <div className="border-t border-[#C6E4EF] my-4"></div>

            {/* STATS */}
            <div className="flex items-center justify-between">
              <div className="flex gap-6">
                <div>
                  <p className="text-[18px] md:text-[24px] font-semibold text-[#133C49]">
                    {cat.journals}
                  </p>
                  <p className="text-[14px] text-[#4F5C60]">Journals</p>
                </div>

                <div>
                  <p className="text-[18px] md:text-[24px] font-semibold text-[#133C49]">
                    {cat.articles.toLocaleString()}
                  </p>
                  <p className="text-[14px] text-[#4F5C60]">Articles</p>
                </div>
              </div>

              {/* VIEW LINK */}
              <button className="text-[#00849F] text-[14px] font-semibold hover:underline">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
