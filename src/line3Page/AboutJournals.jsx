import { Phone, Mail, MessageCircle, Download, Link } from "lucide-react";
import { useEffect, useState } from "react";
import { data, useNavigate, useParams } from "react-router-dom";
import http from "../service/http";

const AboutJournals = () => {
  const [details, setDetails] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const resJournals = await http.get(`/journals/journal/${slug}/full/`);
        console.log("resJounals:-", resJournals?.data);

        setDetails(resJournals?.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchDetails();
  }, []);
  return (
    <div className="bg-[#E7F9FF]">
      <JournalsHero data={details} />
      <JournalDetails data={details} />
    </div>
  );
};

export default AboutJournals;

function JournalsHero({ data }) {
  const navigate = useNavigate();
  return (
    <div className="bg-[#0B2C36] px-6 md:px-16 py-16 border-b border-[#2C5B63] pt-40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-center md:items-start">
        {/* LEFT IMAGE */}
        <div className="w-[200px] h-[286px] bg-[#D9D9D9] rounded-xl shrink-0">
          <img
            src={data?.cover_image}
            alt=""
            className="w-full h-full rounded-xl"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1">
          {/* TAGS */}
          <div className="flex gap-2 mb-3">
            <span className="text-[12px] px-[12px] py-[8px] border border-[#01D4FF] text-[#01D4FF] rounded-[8px]">
              Medical Science
            </span>

            {data?.is_open_access && (
              <span className="text-[12px] px-[12px] py-[8px] border border-[#0BD400] text-[#0BD400] rounded-[8px]">
                Open Access
              </span>
            )}
          </div>

          {/* TITLE */}
          <h1 className="text-[26px] md:text-[32px] font-semibold text-white leading-snug">
            {/* International Journal of Advanced Engineering Research */}
            {data?.title}
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-3 text-[#FFFFFF] text-[14px] md:text-[18px] ">
            {/* A peer-reviewed journal covering all aspects of engineering sciences
            including mechanical, civil, electrical, and chemical engineering. */}
            {data?.short_description}
          </p>

          {/* META INFO */}
          <div className="flex flex-wrap gap-6 mt-4 text-[14px] text-[#FFFFFF]/70">
            <span>
              <img src="/global.png" alt="" className="inline mr-1" />{" "}
              Publisher:{data?.publisher || "N/A"}
              {/* Global Scientific Publications */}
            </span>
            <span>
              <img src="/bluecalendar.png" alt="" className="inline mr-1" />{" "}
              Frequency: {data?.publication_frequency || "N/A"}
            </span>
          </div>

          {/* ISSN */}
          <div className="mt-2 text-[14px] text-[#FFFFFF]/70">
            ISSN (Online): {data?.ISSN_online} &nbsp; ISSN (Print):{" "}
            {data?.ISSN_print}
          </div>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={() => navigate("/journals/submit-manuscript")}
              className="bg-[#01D4FF]  text-[#072A41] text-[14px] px-[12px] py-[8px] rounded-[12px] font-medium hover:opacity-90"
            >
              Submit Manuscript
            </button>

            <button
              onClick={() => {
                window.open(data?.guidelines_file, "_blank");
              }}
              className="border border-[#01D4FF] text-[#01D4FF] text-[14px] px-[12px] py-[8px] rounded-[12px] hover:bg-[#00D4FF] hover:text-black transition"
            >
              Download Guidelines
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function JournalDetails({ data }) {
  return (
    <div className="">
      {/* ================= STATS BAR ================= */}
      <div className="bg-[#133C49] text-center py-6 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 text-white">
          {[
            {
              value: `${data?.impact_factor || "N/A"}`,
              label: "Impact Factor",
            },
            { value: `${data?.h_index || "N/A"}`, label: "H-Index" },
            {
              value: `${data?.citation_score || "N/A"}`,
              label: "Citation Score",
            },
            {
              value: `${data?.acceptance_rate || "N/A"}`,
              label: "Acceptance Rate",
            },
            { value: `${data?.review_time || "N/A"}`, label: "Review Time" },
          ].map((item, i) => (
            <div key={i}>
              <p className="text-[#01D4FF] text-[22px] md:text-[34px] font-semibold">
                {item.value}
              </p>
              <p className="text-[12px] md:text-[18px] text-[#FFFFFF] mt-1">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= CONTENT AREA ================= */}
      <JournalSection data={data} />
    </div>
  );
}

function JournalSection({ data }) {
  const [activeTab, setActiveTab] = useState("About");

  const tabs = [
    "About",
    "Aim & Scope",
    "Editorial Board",
    "Articles",
    "Author Guidelines",
    "Indexing & Metrics",
  ];

  return (
    <div className="px-6 md:px-16 py-10 ">
      <div className="max-w-7xl mx-auto">
        {/* ================= TABS ================= */}
        <div className="bg-[#133C49] border border-[#235262] inline-flex rounded-[16px] p-[16px] mb-8 gap-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-[16px] py-[8px] text-[14px] rounded-[12px] transition-all duration-200 ${
                activeTab === tab
                  ? "bg-[#072A41] text-[#01D4FF]"
                  : "text-[#FFFFFF] hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ================= CONTENT ================= */}
        {activeTab === "About" && (
          <div>
            <h2 className="text-[26px] md:text-[36px] font-semibold text-[#133C49] mb-4">
              About the Journal
            </h2>

            {/* <p className="text-[14px] md:text-[18px] text-[#133C49] mb-4 ">
              A peer-reviewed journal covering all aspects of engineering
              sciences including mechanical, civil, electrical, and chemical
              engineering.
            </p>

            <p className="text-[14px] md:text-[18px] text-[#133C49]">
              The journal follows a rigorous double-blind peer review process to
              ensure the highest quality of published research. We are committed
              to rapid publication while maintaining academic integrity and
              ethical publishing standards.
            </p> */}
            {data?.about_content ? (
              <p className="text-[14px] md:text-[18px] text-[#133C49]">
                {data?.about_content}
              </p>
            ) : (
              ""
            )}
          </div>
        )}

        {activeTab === "Aim & Scope" && (
          <div>
            <h2 className="text-[26px] md:text-[36px] font-semibold text-[#133C49] mb-4">
              Aims & Scope
            </h2>

            <p className="text-[14px] md:text-[18px] text-[#133C49] mb-4 ">
              The journal aims to provide a platform for researchers, engineers,
              and academicians to share their innovative findings.
            </p>

            <ul className="space-y-1 text-[#133C49] text-[14px] md:text-[18px]">
              {[
                "Mechanical Engineering",
                "Civil and Structural Engineering",
                "Electrical and Electronics Engineering",
                "Chemical and Process Engineering",
                "Materials Science",
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span>-</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "Editorial Board" && <EditorialBoard />}
        {activeTab === "Articles" && <ArticlesSection />}
        {activeTab === "Author Guidelines" && <AuthorGuidelines data={data} />}
        {activeTab === "Indexing & Metrics" && <IndexingMetrics />}
      </div>
    </div>
  );
}

function EditorialBoard() {
  const members = [
    {
      name: "Prof. Dr. James Mitchell",
      role: "Editor-in-Chief",
      uni: "MIT",
      country: "USA",
    },
    {
      name: "Dr. Sarah Chen",
      role: "Associate Editor",
      uni: "Tsinghua University",
      country: "China",
    },
    {
      name: "Prof. Michael Weber",
      role: "Associate Editor",
      uni: "TU Munich",
      country: "Germany",
    },
    {
      name: "Dr. Priya Sharma",
      role: "Section Editor",
      uni: "IIT Delhi",
      country: "India",
    },
    {
      name: "Prof. Elena Rodriguez",
      role: "Section Editor",
      uni: "UC Barcelona",
      country: "Spain",
    },
    {
      name: "Dr. Ahmed Hassan",
      role: "Reviewer",
      uni: "Cairo University",
      country: "Egypt",
    },
  ];

  return (
    <div>
      {/* TITLE */}
      <h2 className="text-[26px] md:text-[42px] font-semibold text-[#133C49] mb-6">
        Editorial Board
      </h2>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-6">
        {members.map((m, i) => (
          <div
            key={i}
            className="bg-[#D5F4FF] border border-[#C6E4EF] rounded-[24px] p-[24px] flex gap-4 items-start hover:shadow-md transition"
          >
            {/* ICON */}
            <div className="w-[60px] h-[60px]">
              <img src="/p2.png" alt="" className="w-full h-full" />
            </div>

            {/* TEXT */}
            <div>
              <h3 className="text-[15px] md:text-[20px] font-semibold text-[#133C49]">
                {m.name}
              </h3>

              <p className="text-[12px] md:text-[14px] font-medium text-[#00849F] mt-1">
                {m.role}
              </p>

              <p className="text-[12px] md:text-[14px] text-[#4F5C60] mt-1">
                {m.uni}
              </p>

              <p className="text-[12px] md:text-[14px] text-[#4F5C60]">
                {m.country}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ArticlesSection() {
  const articles = [
    {
      title:
        "Machine Learning Approaches for Predictive Maintenance in Industrial Systems",
      authors: "J. Smith, M. Johnson, K. Lee",
    },
    {
      title: "Sustainable Construction Materials: A Comprehensive Review",
      authors: "A. Brown, L. Garcia",
    },
    {
      title: "Optimization of Renewable Energy Systems Using Deep Learning",
      authors: "R. Zhang, S. Kumar, T. Williams",
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* ================= LEFT SIDEBAR ================= */}
      <div className="bg-[#133C49] text-white rounded-[24px] p-[16px] w-full md:w-[260px] h-fit">
        <h3 className="text-[15px] md:text-[20px] font-semibold mb-4">
          Browse by Volume
        </h3>

        {/* YEAR BLOCK */}
        {["2025", "2024", "2023"].map((year, i) => (
          <div key={i} className="mb-5 text-[14px]">
            <p className="text-[#FFFFFF] font-semibold mb-2">{year}</p>

            <div className="space-y-1 text-[#FFFFFF] text=[14px] font-normal">
              <p className="hover:text-[#00D4FF] cursor-pointer">
                Vol 15, Issue 12
              </p>
              <p className="hover:text-[#00D4FF] cursor-pointer">
                Vol 15, Issue 11
              </p>
              <p className="hover:text-[#00D4FF] cursor-pointer">
                Vol 15, Issue 10
              </p>

              <p className="text-[#01D4FF] text-[12px] font-semibold mt-1 cursor-pointer">
                View all issues...
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ================= RIGHT CONTENT ================= */}
      <div className="flex-1">
        <h2 className="text-[20px] font-semibold text-[#133C49] mb-4">
          Recent Articles
        </h2>

        {/* ARTICLES LIST */}
        <div className="space-y-4">
          {articles.map((a, i) => (
            <div
              key={i}
              className="bg-[#D5F4FF] border border-[#C6E4EF] rounded-[16px] p-[24px] hover:shadow-md transition"
            >
              {/* TITLE */}
              <h3 className="text-[15px] md:text-[20px] font-semibold text-[#133C49]">
                {a.title}
              </h3>

              {/* AUTHORS */}
              <p className="text-[12px] md:text-[14px] text-[#00849F] mt-1">
                {a.authors}
              </p>

              {/* META */}
              <p className="text-[12px] md:text-[14px] font-normal text-[#4F5C60] mt-2">
                December 2025 &nbsp; Vol 15, Issue 12 &nbsp; pp. 145-162 &nbsp;
                <span className="text-[#00849F] cursor-pointer">
                  DOI: 10.1234/ijaer.2025.12.145
                </span>
              </p>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => navigate("/journals/article-details")}
            className="border border-[#00849F] font-semibold text-[#00849F] px-[16px] py-[8px] rounded-[12px] text-[14px] hover:bg-[#00AEEF] hover:text-white transition"
          >
            View all Articles
          </button>
        </div>
      </div>
    </div>
  );
}

function AuthorGuidelines({ data }) {
  return (
    <div>
      {/* CARD */}
      <div className="bg-[#D5F4FF] border border-[#C6E4EF] rounded-[12px] p-[12px] md:p-[16px]">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <h2 className="text-[22px] md:text-[28px] font-semibold text-[#133C49]">
            Author Guidelines
          </h2>

          <button className="mt-4 md:mt-0 inline-flex items-center gap-2 bg-[#01D4FF] text-[#133C49] px-[16px] py-[8px] rounded-[12px] text-[14px] font-medium hover:opacity-90">
            <img src="/down.png" alt="" className="w-[24px] h-[24px]" />
            Download Template
          </button>
        </div>

        {/* ================= SECTION 1 ================= */}
        <div className="mb-6">
          <h3 className="text-[16px] md:text-[24px] font-semibold text-[#133C49] mb-2">
            Manuscript Preparation
          </h3>

          <ul className="text-[14px] text-[#4F5C60] space-y-1 pl-4 list-disc">
            <li>
              Manuscripts should be prepared in Microsoft Word format (.doc or
              .docx)
            </li>
            <li>Use 12-point Times New Roman with 1.5 line spacing</li>
            <li>Include abstract (250–300 words) and 5–7 keywords</li>
            <li>Follow IMRaD structure for research articles</li>
          </ul>
        </div>

        {/* ================= SECTION 2 ================= */}
        <div className="mb-6">
          <h3 className="text-[16px] md:text-[24px] font-semibold text-[#133C49] mb-2">
            Submission Requirements
          </h3>

          <ul className="text-[14px] text-[#4F5C60] space-y-1 pl-4 list-disc">
            <li>Cover letter addressed to the Editor-in-Chief</li>
            <li>Declaration of originality and ethics compliance</li>
            <li>Author contributions statement</li>
            <li>Conflict of interest disclosure</li>
          </ul>
        </div>

        {/* ================= SECTION 3 ================= */}
        <div>
          <h3 className=" text-[16px] md:text-[24px] font-semibold text-[#133C49] mb-2">
            Reference Style
          </h3>

          <p className="text-[14px] text-[#4F5C60]">
            Use APA 7th edition citation style for all references.
          </p>
        </div>
      </div>
    </div>
  );
}

function IndexingMetrics() {
  const indexes = [
    "Scopus",
    "Web of Science",
    "DOAJ",
    "Google Scholar",
    "CrossRef",
  ];

  return (
    <div>
      {/* MAIN CARD */}
      <div className="bg-[#D5F4FF] border border-[#C6E4EF] rounded-[12px] p-[12px] md:p-[16px]">
        {/* ================= INDEXING ================= */}
        <h2 className="text-[22px] md:text-[28px] font-semibold text-[#133C49] mb-6">
          Indexing & Abstracting
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {indexes.map((item, i) => (
            <div
              key={i}
              className="bg-[#E7F9FF] rounded-[16px] px-[16px] pt-[24px] pb-[16px] flex flex-col items-center justify-center text-center hover:shadow-sm transition"
            >
              {/* ICON */}
              <div className="w-[49px] h-[49px] ">
                <img src="/lock2.png" alt="" className="w-full h-full" />
              </div>

              {/* TEXT */}
              <p className="text-[13px] md:text-[20px] font-medium text-[#00849F]">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* ================= METRICS ================= */}
        <h3 className="text-[18px] md:text-[28px] font-semibold text-[#133C49] mb-4">
          Journal Metrics
        </h3>

        <div className="grid md:grid-cols-2 gap-4">
          {/* METRIC CARD */}
          <div className="bg-[#E7F9FF] rounded-[16px] p-[16px]">
            <p className="text-[18px] text-[#00849F] mb-2">
              Impact Factor (2024)
            </p>
            <p className="text-[20px] font-semibold text-[#00849F]">3.245</p>
          </div>

          {/* METRIC CARD */}
          <div className="bg-[#E7F9FF] rounded-[16px] p-[16px]">
            <p className="text-[18px] text-[#00849F] mb-2">H-Index</p>
            <p className="text-[20px] font-semibold text-[#00849F]">42</p>
          </div>
        </div>
      </div>
    </div>
  );
}
