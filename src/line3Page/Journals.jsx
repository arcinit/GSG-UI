import { Phone, Mail, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Journals = () => {
  return (
    <div className="bg-[#E7F9FF]">
      <JournalsHero />
      <JournalsPage />
    </div>
  );
};

export default Journals;

function JournalsHero() {
  return (
    <div className="bg-[#0B2C36] h-[50vh] px-6 md:px-16 pb-10 pt-40 border-b border-[#2C5B63]">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-[36px] md:text-[54px] font-semibold text-white">
          All <span className="text-[#01D4FF]">Journals</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-3 text-[#FFFFFF] text-[14px] md:text-[18px] ">
          Explore our comprehensive collection of peer-reviewed academic
          journals across multiple disciplines.
        </p>
      </div>
    </div>
  );
}

function JournalsPage() {
  const navigate = useNavigate();
  return (
    <div className=" min-h-screen px-6 md:px-16 py-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-[260px_1fr] gap-6">
        {/* ================= LEFT FILTER ================= */}
        <div className="bg-[#133C49] text-white rounded-[24px] p-[16px] h-fit">
          <h2 className="text-[20px] text-[#FFFFFF] font-semibold mb-4">
            Filters
          </h2>

          {/* Subjects */}
          <div className="mb-6">
            <p className="text-[14px] font-medium text-[#FFFFFF] mb-2">
              Subjects
            </p>
            <div className="space-y-2 text-[14px]">
              {[
                "Engineering",
                "Medical Sciences",
                "Computer Sciences",
                "Management",
                "Life Sciences",
                "Environmental Sciences",
                "Physics",
              ].map((item, i) => (
                <label key={i} className="flex items-center gap-2">
                  <img
                    src="/CheckBox.png"
                    alt=""
                    className="w-[16px] h-[16px] object-contain"
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>

          {/* Access */}
          <div className="mb-6">
            <p className="text-[14px] font-medium text-[#FFFFFF] mb-2">
              Access Type
            </p>
            <label className="flex items-center gap-2 text-[14px]">
              <img
                src="/CheckBox.png"
                alt=""
                className="w-[16px] h-[16px] object-contain"
              />
              Open Access Only
            </label>
          </div>

          {/* Frequency */}
          <div className="mb-6">
            <p className="text-[14px] font-medium text-[#FFFFFF] mb-2">
              Publication Frequency
            </p>
            <div className="space-y-2 text-[14px]">
              {["Monthly", "Bi-monthly", "Quarterly"].map((f, i) => (
                <label key={i} className="flex items-center gap-2">
                  <img
                    src="/CheckBox.png"
                    alt=""
                    className="w-[16px] h-[16px] object-contain"
                  />
                  {f}
                </label>
              ))}
            </div>
          </div>

          {/* Clear */}
          <button className="w-full bg-[#1C4754] border border-[#01D4FF] text-[#FFFFFF] px-[16px] py-[12px] rounded-[12px] text-sm hover:bg-[#00D4FF] hover:text-black transition">
            Clear Filters
          </button>
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div>
          {/* SEARCH */}
          <div className="bg-[#133C49] p-[12px] rounded-[16px] flex items-center gap-2 mb-6">
            <input
              type="text"
              placeholder="Search journals by title or subject..."
              className="flex-1 bg-transparent border border-[#235262] outline-none text-white/70 placeholder-[#FFFFFF]/70 p-[12px] rounded-[14px]"
            />
            <button className="w-[44px] h-[44px]">
              <img src="/s.png" alt="" className="w-full h-full" />
            </button>
          </div>

          {/* CARDS GRID */}
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="bg-[#FFFFFF] rounded-[16px] p-[16px] shadow-sm"
              >
                {/* Tags */}
                <div className="flex gap-2 mb-2">
                  <span className="text-[12px] px-[12px] bg-[#E7F9FF] py-[8px] border border-[#00849F] text-[#00849F] rounded-[30px]">
                    Medical Science
                  </span>

                  <span className="inline-flex items-center gap-1 text-[12px] px-[12px] py-[8px] border border-[#0BD400] bg-[#0BD400]/10 text-[#0BD400] rounded-[30px]">
                    {/* <span className="w-[6px] h-[6px] bg-[#0BD400] rounded-full"></span> */}
                    Open Access
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[15px] md:text-[18px] font-semibold text-[#133C49]">
                  Journal of Advanced Computing Systems
                </h3>

                {/* Desc */}
                <p className="text-[12px] md:text-[14px] font-medium text-[#4F5C60] mt-2">
                  Covering artificial intelligence, machine learning,
                  distributed systems, and computational theory.
                </p>

                {/* ISSN */}
                <p className="text-[11px] md:text-[14px] font-normal text-[#4F5C60] mt-3">
                  ISSN (Online): 2347-1234 &nbsp; ISSN (Print): 2347-1233
                </p>

                {/* Index tags */}
                <div className="flex gap-2 mt-3 text-[12px]">
                  {["PubMed", "Scopus", "MEDLINE"].map((tag, i) => (
                    <span
                      key={i}
                      className="bg-[#E7F9FF] px-[12px] py-[6px] rounded-[4px] text-[#133C49]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <button
                  onClick={() => navigate("/journals/about-journals")}
                  className="text-[#00849F] text-[12px] md:text-[14px] mt-3 font-semibold hover:underline"
                >
                  View Journal
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
