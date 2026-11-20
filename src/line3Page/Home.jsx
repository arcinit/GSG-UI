"use client";

import { ArrowRight, CheckCircle, Link2 } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ homedata }) => {
  return (
    <div className="bg-[#133C49]">
      <JournalsHero hero={homedata?.hero} />
      <BrowseSubjects subjects={homedata?.subjects} />
      <FeaturedJournals featured_journals={homedata?.featured_journals} />
      <WhyPublish why_choose={homedata?.why_choose} />
      <PlatformStats statistics={homedata?.statistics} cta={homedata?.cta} />
    </div>
  );
};

export default Home;

function JournalsHero({ hero }) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen">
      <img
        src="/thirdbanner.png"
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
        <div className="mb-6">
          <span className="bg-[#184655] text-[#01D4FF] text-[14px] md:text-[18px] px-[12px] py-[6px] rounded-[12px]">
            Peer-Reviewed Scientific Publishing
          </span>
        </div>

        <h1 className="text-white text-[28px] md:text-[54px] leading-tight font-medium max-w-4xl">
          {hero?.heading}
        </h1>

        <p className="text-white/80 text-[14px] md:text-[18px] mt-4 max-w-2xl">
          {hero?.subheading}
        </p>

        <div className="mt-6 w-full max-w-2xl flex items-center bg-[#223E47] border border-[#235262] rounded-[8px] overflow-hidden">
          <img
            src="/search-normal.png"
            alt=""
            className="w-[20px] h-[20px] ml-4"
          />
          <input
            type="text"
            placeholder={hero?.search_placeholder}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-transparent p-[12px] text-sm text-white placeholder:text-white/60 focus:outline-none"
          />

          <button className="bg-[#01D4FF] text-[#235262] p-[6px] mr-2 rounded-[6px] text-[12px] font-medium">
            Search
          </button>
        </div>

        <p className="text-white/70 text-[13px] mt-4">
          Popular: Machine Learning • Biotechnology • Sustainability
        </p>

        <div className="flex gap-4 mt-6 flex-wrap justify-center">
          <button
            onClick={() => navigate("/journals/all-journals")}
            className="bg-[#01D4FF] text-[#0B2C36] px-6 py-2 rounded-full text-sm font-semibold"
          >
            {hero?.explore_button_text}
          </button>

          <button
            onClick={() => navigate("/journals/submit-manuscript")}
            className="border border-[#01D4FF] text-[#01D4FF] px-6 py-2 rounded-full text-sm"
          >
            {hero?.submit_button_text}
          </button>
        </div>
      </div>
    </div>
  );
}

function BrowseSubjects({ subjects }) {
  if (!subjects || subjects.length === 0) return null;
  // const subjects = [
  //   { title: "Computer Science", count: "8 Journals" },
  //   { title: "Medical Science", count: "8 Journals" },
  //   { title: "Engineering", count: "8 Journals" },
  //   { title: "Managment", count: "8 Journals" },
  //   { title: "Social Science", count: "8 Journals" },
  //   { title: "Physical Science", count: "8 Journals" },
  // ];

  const navigate = useNavigate();
  return (
    <div className="w-full bg-[#133C49] py-16 flex justify-center">
      <div className="w-[90%] text-center">
        {/* Badge */}
        <div className="mb-4">
          <span className="bg-white/10 text-white text-[12px] md:text-[18px] px-[12px] py-[6px] rounded-[6px]">
            Explore
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-white text-[28px] md:text-[42px] font-semibold">
          Browse by <span className="text-[#01D4FF]">Subject</span>
        </h2>

        {/* Description */}
        <p className="text-white/90 text-[13px] md:text-[18px] mt-3 max-w-2xl mx-auto">
          Discover peer-reviewed journals across diverse scientific disciplines,
          each maintaining the highest standards of academic excellence.
        </p>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">
          {/* {subjects.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-[#13404F] border border-[#235262] rounded-[16px] p-[16px] hover:bg-[#114652] transition"
            >
              
              <div className="w-[69px] h-[69px]">
                <img src="/lock.png" alt="" className="w-full h-full" />
              </div>

             
              <div className="text-left flex flex-col gap-2">
                <h3 className="text-white text-[15px] md:text-[24px] font-semibold">
               
                  {item.name}
                </h3>
                <p className="text-white/70 text-[12px] md:text-[18px] ">
                  {item.journal_count} Journals
                </p>
              </div>
            </div>
          ))} */}
          {subjects.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate("/journals/subjects")}
              className="group flex items-end justify-between gap-4 
            bg-[#13404F] border border-[#235262] rounded-[16px] p-[16px] 
            transition-all duration-300 cursor-pointer

            hover:bg-[#114652]
            hover:border-[#01D4FF]
            hover:shadow-[0_0_20px_rgba(1,212,255,0.25)]"
            >
              {/* Left Content */}
              <div className="flex items-center gap-4">
                {/* Icon */}
                <div
                  className="w-[69px] h-[69px] bg-[#0F3642] rounded-[14px] flex items-center justify-center 
                  transition group-hover:bg-[#184655]"
                >
                  <img src="/lock.png" className="w-[32px] h-[32px]" />
                </div>

                {/* Text */}
                <div className="text-left flex flex-col gap-1">
                  <h3
                    className="text-white text-[15px] md:text-[24px] font-semibold 
                   group-hover:text-[#01D4FF] transition"
                  >
                    {item.name}
                  </h3>

                  <p className="text-white/70 text-[12px] md:text-[18px]">
                    {item.journal_count} Journals
                  </p>
                </div>
              </div>

              {/* Arrow (hidden → show on hover) */}
              <div
                className="opacity-0 translate-x-[-10px] 
                group-hover:opacity-100 group-hover:translate-x-0 
                transition-all duration-300"
              >
                <svg
                  className="w-6 h-6 text-[#01D4FF]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <button
          onClick={() => navigate("/journals/subjects")}
          className="mt-8 bg-[#01D4FF] font-semibold text-[#0B2C36] px-[16px] py-[10px] rounded-[50px] text-[12px]  flex items-center gap-2 mx-auto"
        >
          View All Subjects
          <span className="bg-[#FFFFFF] text-[#0B2C36]  w-5 h-5 rounded-full flex items-center justify-center text-xs">
            →
          </span>
        </button>
      </div>
    </div>
  );
}

function FeaturedJournals({ featured_journals }) {
  if (!featured_journals || featured_journals.length === 0) return null;
  const journals = [
    {
      title: "Journal of Advanced Computing Systems",
      category: "Computer Science",
      impact: "4.8",
      color: "from-[#00F58B] to-[#01D4FF]",
    },
    {
      title: "International Medical Research Review",
      category: "Medical Science",
      impact: "5.2",
      color: "from-[#00D1FF] to-[#FF6EC7]",
    },
    {
      title: "Sustainable Engineering Quarterly",
      category: "Engineering",
      impact: "3.9",
      color: "from-[#00D1FF] to-[#FFA500]",
    },
    {
      title: "Molecular Biology Frontiers",
      category: "Life Science",
      impact: "6.1",
      color: "from-[#A855F7] to-[#00D1FF]",
    },
    {
      title: "Global Business & Management Review",
      category: "Management",
      impact: "3.2",
      color: "from-[#00D1FF] to-[#34D399]",
    },
    {
      title: "Quantum Physics Letters",
      category: "Physical Science",
      impact: "7.4",
      color: "from-[#FF4D4D] to-[#FF8A8A]",
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#13404F] py-16 flex justify-center">
      <div className="w-[90%]  text-center">
        {/* Badge */}
        <div className="mb-4">
          <span className="bg-white/10 text-[#FFFFFF] text-[12px] md:text-[18px] px-[12px] py-[6px] rounded-[6px]">
            Featured
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-white text-[28px] md:text-[42px] font-semibold">
          Featured <span className="text-[#01D4FF]">Journals</span>
        </h2>

        {/* Description */}
        <p className="text-white/90 text-[13px] md:text-[18px] mt-3 max-w-2xl mx-auto">
          Explore our top-rated peer-reviewed journals across various scientific
          disciplines.
        </p>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {/* {journals.map((item, index) => (
            <div
              key={index}
              className="relative bg-[#133C49] border border-[#235262] rounded-[16px] pt-[24px] pb-[16px] px-[16px] text-left overflow-hidden"
            >
              
              <div
                className={`absolute top-0 left-0 w-full h-[8px] bg-gradient-to-r ${item.color}`}
              />

              
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[12px] bg-[#01D4FF]/10 border border-[#01D4FF] font-normal text-[#01D4FF] px-[12px] py-[8px] rounded-[30px]">
                  {item.category}
                </span>
                <span
                  className="inline-flex items-center gap-1 text-[12px] font-normal
                  bg-[#0BD400]/10 border border-[#0BD400] text-[#0BD400]
                 px-[12px] py-[8px] rounded-[30px] "
                >
                  <span className="w-[6px] h-[6px] bg-[#0BD400] rounded-full"></span>
                  Open Access
                </span>
              </div>

              
              <h3 className="text-white text-[14px] md:text-[20px] font-semibold mb-2">
                {item.title}
              </h3>

              
              <p className="text-white/70 text-[12px] md:text-[14px] mb-4">
                ISSN: 2XXX-XXXX (Online)
              </p>

              <p className="text-white/70 text-[12px] md:text-[14px] mb-4">
                Publishing clinical trials, medical innovations, and healthcare
                advancement research.
              </p>

             
              <div className="border-t border-[#235262] my-3" />

              
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/70 text-[11px] md:text-[14px]">
                    Impact Factor
                  </p>
                  <p className="text-[#01D4FF] font-semibold text-[14px] md:text-[24px]">
                    {item.impact}
                  </p>
                </div>

                <button className="text-[12px] md:text-[14px] font-semibold text-[#E7F9FF] flex items-center gap-1 hover:text-[#01D4FF]">
                  View Journal <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))} */}
          {/* {featured_journals?.map((item, index) => (
            <div
              key={index}
              className="relative bg-[#133C49] border border-[#235262] rounded-[16px] pt-[24px] pb-[16px] px-[16px] text-left overflow-hidden"
            >
              <div
                className={`absolute top-0 left-0 w-full h-[8px] bg-gradient-to-r from-[#00F58B] to-[#01D4FF]`}
              />

              <div className="flex items-center gap-2 mb-3">
                <span className="text-[12px] bg-[#01D4FF]/10 border border-[#01D4FF] font-normal text-[#01D4FF] px-[12px] py-[8px] rounded-[30px]">
                  
                  Computer Science
                </span>
                <span
                  className="inline-flex items-center gap-1 text-[12px] font-normal
                  bg-[#0BD400]/10 border border-[#0BD400] text-[#0BD400]
                 px-[12px] py-[8px] rounded-[30px] "
                >
                  <span className="w-[6px] h-[6px] bg-[#0BD400] rounded-full"></span>
                 
                  {item?.is_open_access ? "Open Access" : "Closed Access"}
                </span>
              </div>

              <h3 className="text-white text-[14px] md:text-[20px] font-semibold mb-2">
                {item?.title}
              </h3>

              <p className="text-white/70 text-[12px] md:text-[14px] mb-4">
                
                ISSN: {item?.ISSN_print} ({item?.ISSN_online})
              </p>

              <p className="text-white/70 text-[12px] md:text-[14px] mb-4">
                
                {item?.short_description}
              </p>

              <div className="border-t border-[#235262] my-3" />

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/70 text-[11px] md:text-[14px]">
                    Impact Factor
                  </p>
                  <p className="text-[#01D4FF] font-semibold text-[14px] md:text-[24px]">
                    
                    {item?.impact_factor}
                  </p>
                </div>

                <button className="text-[12px] md:text-[14px] font-semibold text-[#E7F9FF] flex items-center gap-1 hover:text-[#01D4FF]">
                  View Journal <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))} */}
          {featured_journals?.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(`/journals/about-journals/${item?.slug}`)}
              className="group relative bg-[#133C49] border border-[#235262] rounded-[16px] 
              pt-[24px] pb-[16px] px-[16px] text-left overflow-hidden
              transition-all duration-300 cursor-pointer

              hover:-translate-y-1
              hover:border-[#01D4FF]
              hover:shadow-[0_0_25px_rgba(1,212,255,0.25)]"
            >
              {/* Top Gradient Bar */}
              <div
                className="absolute top-0 left-0 w-full h-[6px] 
                bg-gradient-to-r from-[#00F58B] to-[#01D4FF]
                opacity-70 group-hover:opacity-100 transition"
              />

              {/* Badges */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[12px] bg-[#01D4FF]/10 border border-[#01D4FF] text-[#01D4FF] px-[12px] py-[6px] rounded-full">
                  Computer Science
                </span>

                <span
                  className="inline-flex items-center gap-1 text-[12px] 
                  bg-[#0BD400]/10 border border-[#0BD400] text-[#0BD400]
                  px-[12px] py-[6px] rounded-full"
                >
                  <span className="w-[6px] h-[6px] bg-[#0BD400] rounded-full"></span>
                  {item?.is_open_access ? "Open Access" : "Closed Access"}
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-white text-[14px] md:text-[20px] font-semibold mb-2 
              group-hover:text-[#01D4FF] transition"
              >
                {item?.title}
              </h3>

              {/* ISSN */}
              <p className="text-white/70 text-[12px] md:text-[14px] mb-3">
                ISSN: {item?.ISSN_print} ({item?.ISSN_online})
              </p>

              {/* Description */}
              <p
                className="text-white/70 text-[12px] md:text-[14px] mb-4 
              group-hover:text-white/90 transition"
              >
                {item?.short_description}
              </p>

              {/* Divider */}
              <div className="border-t border-[#235262] my-3 group-hover:border-[#01D4FF]/40 transition" />

              {/* Bottom */}
              <div className="flex items-center justify-between">
                {/* Impact */}
                <div>
                  <p className="text-white/70 text-[11px] md:text-[14px]">
                    Impact Factor
                  </p>
                  <p className="text-[#01D4FF] font-semibold text-[14px] md:text-[24px]">
                    {item?.impact_factor}
                  </p>
                </div>

                {/* Button */}
                <button
                  className="flex items-center gap-1 text-[12px] md:text-[14px] font-semibold 
                text-[#E7F9FF] transition-all duration-300
                group-hover:text-[#01D4FF]"
                >
                  View Journal
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 hidden group-hover:block group-hover:translate-x-1"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <button
          onClick={() => navigate("/journals/all-journals")}
          className="mt-8 bg-[#01D4FF] text-[#0B2C36] px-[16px] py-[10px] rounded-[50px] text-[12px] font-semibold flex items-center gap-2 mx-auto"
        >
          View All Journals
          <span className="bg-[#FFFFFF] text-[#0B2C36]  w-5 h-5 rounded-full flex items-center justify-center text-xs">
            →
          </span>
        </button>
      </div>
    </div>
  );
}

function WhyPublish({ why_choose }) {
  if (!why_choose || why_choose.length === 0) return null;
  const bullets = [
    "No hidden fees or charges",
    "Permanent archiving and preservation",
    "Author-friendly copyright policies",
    "DOI assignment for all articles",
    "Citation tracking and metrics",
    "Multimedia content support",
  ];

  const features = [
    {
      title: "Rigorous Peer Review",
      desc: "Double-blind peer review process ensuring the highest quality and integrity of published research.",
    },
    {
      title: "Global Indexing",
      desc: "Indexed in major databases including Scopus, Web of Science, PubMed, and discipline-specific indexes.",
    },
    {
      title: "Open Access Options",
      desc: "Flexible publishing models with open access options for maximum visibility and impact.",
    },
    {
      title: "Open Access Options",
      desc: "Average first decision within 4 weeks. Streamlined process from submission to publication.",
    },
    {
      title: "Ethical Standards",
      desc: "Committed to COPE guidelines, ensuring research integrity and ethical publishing practices.",
    },
    {
      title: "Expert Editorial Boards",
      desc: "Distinguished scholars and researchers guiding editorial decisions in their fields.",
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#133C49] py-16 flex justify-center">
      <div className="w-[90%]">
        <div className="mb-4">
          <span className="bg-white/10 text-[#FFFFFF] text-[12px] md:text-[18px] px-[12px] py-[6px] rounded-[6px]">
            Why Choose Us
          </span>
        </div>
        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* LEFT */}
          <div>
            <h2 className="text-white text-[26px] md:text-[42px] font-semibold mt-4 leading-snug">
              Why Publish With{" "}
              <span className="text-[#01D4FF]">Global Scientific?</span>
            </h2>

            <p className="text-white/70 text-[13px] md:text-[18px] mt-3 ">
              Join thousands of researchers who trust us to disseminate their
              work to a global audience with the highest standards of academic
              publishing.
            </p>
          </div>

          {/* RIGHT */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-[14px] text-white">
              {bullets.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <img
                    src="/tick-circle.png"
                    alt=""
                    className="w-[20px] h-[20px]"
                  />
                  {item}
                </div>
              ))}
            </div>

            <button
              onClick={() => navigate("/journals/submit-manuscript")}
              className="mt-8 bg-[#01D4FF] text-[#0B2C36] px-[16px] py-[10px] rounded-[50px] text-[12px] font-semibold flex items-center gap-2 "
            >
              Start Your Submission
              <span className="bg-[#FFFFFF] text-[#0B2C36]  w-5 h-5 rounded-full flex items-center justify-center text-xs">
                →
              </span>
            </button>
          </div>
        </div>

        {/* FEATURES BOX */}
        <div className="mt-10 bg-[#133C49] border border-[#01D4FF] rounded-[18px] p-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* {features.map((item, index) => (
              <div key={index} className="bg-[#0F3A44] rounded-[16px] p-[16px]">
                
                <div className="w-[50px] h-[50px] mb-4">
                  <img src="/lock.png" alt="" className="w-full h-full" />
                </div>

                
                <h3 className="text-[14px] md:text-[18px] text-[#01D4FF] font-semibold mb-2">
                  {item.title}
                </h3>

                
                <p className="text-white/70 text-[12px] md:text-[18px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))} */}

            {why_choose.map((item, index) => (
              <div key={index} className="bg-[#0F3A44] rounded-[16px] p-[16px]">
                {/* Icon */}
                <div className="w-[50px] h-[50px] mb-4">
                  <img src="/lock.png" alt="" className="w-full h-full" />
                </div>

                {/* Title */}
                <h3 className="text-[14px] md:text-[18px] text-[#01D4FF] font-semibold mb-2">
                  {item.title}
                </h3>

                {/* Desc */}
                <p className="text-white/70 text-[12px] md:text-[18px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function PlatformStats({ statistics, cta }) {
  if (!statistics || statistics.length === 0 || !cta) return null;
  const stats = [
    {
      value: "50+",
      title: "Peer - Revised Journals",
      desc: "Across 8 major disciplines",
    },
    {
      value: "12,500+",
      title: "Published Articles",
      desc: "Growing archive of research",
    },
    {
      value: "850+",
      title: "Editorial Board Members",
      desc: "Expert reviewers worldwide",
    },
    {
      value: "180+",
      title: "Countries Represented",
      desc: "Truly global research network",
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#13404F]">
      {/* ================= STATS ================= */}
      <div className="py-16 flex justify-center">
        <div className="w-[90%] text-center">
          {/* Badge */}
          <span className="bg-white/10 text-[#FFFFFF] text-[12px] md:text-[18px] px-[12px] py-[6px] rounded-[6px]">
            Our Impact
          </span>

          {/* Heading */}
          <h2 className="text-white text-[28px] md:text-[42px] font-semibold mt-4">
            Platform <span className="text-[#01D4FF]">Statistics</span>
          </h2>

          {/* Description */}
          <p className="text-white/90 text-[13px] md:text-[18px] mt-3 ">
            Trusted by researchers and institutions worldwide for rigorous,
            accessible, and impactful scientific publishing.
          </p>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {statistics.map((item, index) => (
              <div
                key={index}
                className="bg-[#133C49] rounded-[16px] pt-[24px] pb-[16px] px-[16px] text-center border border-[#1f5563]"
              >
                {/* Icon */}
                <div className="w-[49px] h-[49px] mx-auto shadow border border-[#235262] rounded-[8.33px]">
                  <img src="/lock.png" alt="" className="w-full h-full" />
                </div>

                {/* Value */}
                <h3 className="text-[#01D4FF] text-[22px] md:text-[42px] font-semibold">
                  {item.value}
                </h3>

                {/* Title */}
                <p className="text-white text-[13px] md:text-[20px] mt-2 font-medium">
                  {item.label}
                </p>

                {/* Desc */}
                {/* <p className="text-white/70 text-[11px] md:text-[14px] mt-1">
                  {item.desc}
                </p> */}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= CTA ================= */}
      <div className="bg-[#133C49] py-16 text-center flex justify-center">
        <div className="w-[90%]">
          {/* Heading */}
          <h2 className="text-white text-[24px] md:text-[42px] font-semibold">
            {/* Ready to Share Your{" "}
            <span className="text-[#01D4FF]">Research?</span> */}
            {cta?.heading}
          </h2>

          {/* Description */}
          <p className="text-white/70 text-[13px] md:text-[20px] mt-3">
            Join our global community of researchers. Submit your manuscript
            today and let your work reach a worldwide academic audience.
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mt-6 flex-wrap">
            <button
              onClick={() => navigate("/journals/submit-manuscript")}
              className="mt-8 bg-[#01D4FF] text-[#0B2C36] px-[16px] py-[10px] rounded-[50px] text-[12px] font-semibold flex items-center gap-2"
            >
              {/* Submit Manuscript */}
              {cta?.button_one_text}
              <span className="bg-[#FFFFFF] text-[#0B2C36]  w-5 h-5 rounded-full flex items-center justify-center text-xs">
                →
              </span>
            </button>

            <button
              onClick={() => navigate("/journals/authors")}
              className="mt-8 bg-[#01D4FF] text-[#0B2C36] px-[16px] py-[10px] rounded-[50px] text-[12px] font-semibold flex items-center gap-2"
            >
              {/* Author Guidelines */}
              {cta?.button_two_text}
              <span className="bg-[#FFFFFF] text-[#0B2C36]  w-5 h-5 rounded-full flex items-center justify-center text-xs">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
