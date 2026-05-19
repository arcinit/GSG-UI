import { Phone, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Journals = ({ journals }) => {
  return (
    <div className="bg-[#E7F9FF]">
      <JournalsHero />
      <JournalsPage journals={journals} />
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

function JournalsPage({ journals }) {
  const list = journals?.results || [];
  console.log(journals);
  const subjects = journals?.subjects || [];
  const [search, setSearch] = useState("");
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [openAccessOnly, setOpenAccessOnly] = useState(false);
  const [frequencies, setFrequencies] = useState([]);

  const filteredList = list.filter((item) => {
    // 🔍 Search
    const matchesSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());

    // 🎯 Subject filter
    const matchesSubject =
      selectedSubjects.length === 0 || selectedSubjects.includes(item.subject);

    // ✅ Open access
    const matchesAccess = !openAccessOnly || item.is_open_access;

    // 📅 Frequency
    const matchesFrequency =
      frequencies.length === 0 ||
      frequencies.includes(item.publication_frequency);

    return matchesSearch && matchesSubject && matchesAccess && matchesFrequency;
  });
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
              {/* {[
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
              ))} */}
              {subjects.map((item) => (
                <label
                  key={item.id}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedSubjects.includes(item.id)}
                    onChange={() => {
                      setSelectedSubjects((prev) =>
                        prev.includes(item.id)
                          ? prev.filter((id) => id !== item.id)
                          : [...prev, item.id],
                      );
                    }}
                  />
                  {item.name}
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
              {/* <img
                src="/CheckBox.png"
                alt=""
                className="w-[16px] h-[16px] object-contain"
              />
              Open Access Only */}
              <input
                type="checkbox"
                checked={openAccessOnly}
                onChange={() => setOpenAccessOnly(!openAccessOnly)}
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
              {["monthly", "bi-monthly", "quarterly"].map((f) => (
                <label
                  key={f}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={frequencies.includes(f)}
                    onChange={() => {
                      setFrequencies((prev) =>
                        prev.includes(f)
                          ? prev.filter((x) => x !== f)
                          : [...prev, f],
                      );
                    }}
                  />
                  {f}
                </label>
              ))}
            </div>
          </div>

          {/* Clear */}
          {/* <button className="w-full bg-[#1C4754] border border-[#01D4FF] text-[#FFFFFF] px-[16px] py-[12px] rounded-[12px] text-sm hover:bg-[#00D4FF] hover:text-black transition">
            Clear Filters
          </button> */}
          <button
            onClick={() => {
              setSearch("");
              setSelectedSubjects([]);
              setOpenAccessOnly(false);
              setFrequencies([]);
            }}
            className="w-full bg-[#1C4754] border border-[#01D4FF] text-white px-[16px] py-[12px] rounded-[12px]"
          >
            Clear Filters
          </button>
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div>
          {/* SEARCH */}
          <div className="bg-[#133C49] p-[12px] rounded-[16px] flex items-center gap-2 mb-6">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search journals by title or subject..."
              className="flex-1 bg-transparent border border-[#235262] outline-none text-white/70 p-[12px] rounded-[14px]"
            />
            <button className="w-[44px] h-[44px]">
              <img src="/s.png" alt="" className="w-full h-full" />
            </button>
          </div>

          {/* CARDS GRID */}
          {/* <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="bg-[#FFFFFF] rounded-[16px] p-[16px] shadow-sm"
              >
                
                <div className="flex gap-2 mb-2">
                  <span className="text-[12px] px-[12px] bg-[#E7F9FF] py-[8px] border border-[#00849F] text-[#00849F] rounded-[30px]">
                    Medical Science
                  </span>

                  <span className="inline-flex items-center gap-1 text-[12px] px-[12px] py-[8px] border border-[#0BD400] bg-[#0BD400]/10 text-[#0BD400] rounded-[30px]">
                   
                    Open Access
                  </span>
                </div>

                
                <h3 className="text-[15px] md:text-[18px] font-semibold text-[#133C49]">
                  Journal of Advanced Computing Systems
                </h3>

                
                <p className="text-[12px] md:text-[14px] font-medium text-[#4F5C60] mt-2">
                  Covering artificial intelligence, machine learning,
                  distributed systems, and computational theory.
                </p>

                
                <p className="text-[11px] md:text-[14px] font-normal text-[#4F5C60] mt-3">
                  ISSN (Online): 2347-1234 &nbsp; ISSN (Print): 2347-1233
                </p>

                
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

                
                <button
                  onClick={() => navigate("/journals/about-journals")}
                  className="text-[#00849F] text-[12px] md:text-[14px] mt-3 font-semibold hover:underline"
                >
                  View Journal
                </button>
              </div>
            ))}
          </div> */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* {filteredList.map((item) => (
              <div
                key={item.id}
                className="bg-[#FFFFFF] rounded-[16px] p-[16px] shadow-sm"
              >
                
                <div className="flex gap-2 mb-2 flex-wrap">
                  
                  <span className="text-[12px] px-[12px] bg-[#E7F9FF] py-[8px] border border-[#00849F] text-[#00849F] rounded-[30px]">
                    {subjects.find((s) => s.id === item.subject)?.name ||
                      "General"}
                  </span>

                  
                  {item.is_open_access && (
                    <span className="inline-flex items-center gap-1 text-[12px] px-[12px] py-[8px] border border-[#0BD400] bg-[#0BD400]/10 text-[#0BD400] rounded-[30px]">
                      Open Access
                    </span>
                  )}
                </div>

               
                <h3 className="text-[15px] md:text-[18px] font-semibold text-[#133C49]">
                  {item.title}
                </h3>

                
                <p className="text-[12px] md:text-[14px] font-medium text-[#4F5C60] mt-2">
                  {item.short_description}
                </p>

               
                <p className="text-[11px] md:text-[14px] text-[#4F5C60] mt-3">
                  ISSN (Online): {item.ISSN_online} &nbsp; ISSN (Print):{" "}
                  {item.ISSN_print}
                </p>

                
                <div className="flex gap-2 mt-3 text-[12px] flex-wrap">
                  {item.indexing_list?.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-[#E7F9FF] px-[12px] py-[6px] rounded-[4px] text-[#133C49]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

               
                <button
                  onClick={() => navigate(`/journals/${item.slug}`)}
                  className="text-[#00849F] text-[12px] md:text-[14px] mt-3 font-semibold hover:underline"
                >
                  View Journal
                </button>
              </div>
            ))} */}
            {filteredList.map((item) => (
              <div
                key={item.id}
                onClick={() =>
                  navigate(`/journals/about-journals/${item.slug}`)
                }
                className="group bg-[#FFFFFF] rounded-[16px] p-[18px] 
                border border-transparent
                shadow-sm cursor-pointer
                transition-all duration-300

                hover:border-[#00849F]
                hover:shadow-[0_0_20px_rgba(1,212,255,0.25)]
                hover:bg-[#F2FBFF]"
              >
                {/* Tags */}
                <div className="flex gap-2 mb-3 flex-wrap">
                  <span
                    className="text-[12px] px-[12px] py-[6px] 
                  bg-[#E7F9FF] border border-[#00849F] text-[#00849F] rounded-full"
                  >
                    {subjects.find((s) => s.id === item.subject)?.name ||
                      "General"}
                  </span>

                  {item.is_open_access && (
                    <span
                      className="inline-flex items-center gap-1 text-[12px] px-[12px] py-[6px] 
                      border border-[#0BD400] bg-[#0BD400]/10 text-[#0BD400] rounded-full"
                    >
                      Open Access
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3
                  className="text-[16px] md:text-[20px] font-semibold text-[#133C49] 
                  group-hover:text-[#00849F] transition"
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="text-[13px] md:text-[15px] text-[#4F5C60] mt-2 
                group-hover:text-[#3a4a4f] transition"
                >
                  {item.short_description}
                </p>

                {/* ISSN */}
                <p className="text-[12px] md:text-[14px] text-[#4F5C60] mt-3">
                  ISSN (Online): {item.ISSN_online} &nbsp; ISSN (Print):{" "}
                  {item.ISSN_print}
                </p>

                {/* Indexing */}
                <div className="flex gap-2 mt-3 flex-wrap">
                  {item.indexing_list?.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-[#E7F9FF] px-[10px] py-[5px] rounded-[6px] text-[#133C49] text-[12px]
                    group-hover:bg-[#D5F4FF] transition"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div className="flex items-center gap-2 mt-4">
                  <button
                    onClick={() => navigate(`/journals/${item.slug}`)}
                    className="text-[#00849F] group-hover:text-[#01D4FF] text-[13px] md:text-[15px] font-semibold 
                   flex items-center gap-2 transition"
                  >
                    View Journal
                    {/* Arrow */}
                    <span
                      className="opacity-0 translate-x-[-6px] 
                      group-hover:opacity-100 group-hover:translate-x-0 
                      transition-all duration-300"
                    >
                      →
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
