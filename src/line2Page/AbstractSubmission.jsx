import { Check, Calendar, Clock, FileText, Send, Shield } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import http from "../service/http";
const AbstractSubmission = ({ data }) => {
  return (
    <div className="bg-[#E7F9FF]">
      <AbstractHero section={data?.section} />
      <SubmissionSection
        guidelines={data?.guidelines}
        topics={data?.topics}
        dates={data?.dates}
        slug={data?.conference?.slug}
      />
    </div>
  );
};

export default AbstractSubmission;

function AbstractHero({ section }) {
  return (
    <section className="relative h-[60vh] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <img
        src="/about.png"
        alt="about-bg"
        className="absolute inset-0 w-full h-full object-fill object-center"
      />

      {/* Content */}
      <div className="relative z-10 text-center text-[#FFFFFF]">
        {/* Badge */}
        <div className="inline-block bg-[#133C49]/50 text-[#01D4FF] text-[18px] px-[16px] py-[8px] rounded-full mb-4">
          GCC-2026
        </div>

        {/* Heading */}
        <h1 className="text-[32px] md:text-[54px] font-medium leading-tight">
          {/* Abstract <span className="text-[#01D4FF]">Submission</span> */}
          {section?.title}
        </h1>

        {/* Subtitle */}
        <p className="text-[#FFFFFF] font-normal text-[14px] md:text-[18px] mt-3">
          {/* Share your research with the global cardiology community */}
          {section?.subtitle}
        </p>
      </div>
    </section>
  );
}

function SubmissionSection({ guidelines, topics, dates, slug }) {
  // const guidelines = [
  //   "Abstract must be written in English",
  //   "Maximum 300 words excluding title and authors",
  //   "Include structured sections: Background, Methods, Results, Conclusions",
  //   "Tables and figures are not permitted in abstract submissions",
  //   "All authors must be listed with affiliations",
  //   "Presenting author must be registered for the conference",
  // ];

  // const topics = [
  //   "Artificial Intelligence & Digital Cardiology",
  //   "Heart Failure & Cardiomyopathies",
  //   "Interventional & Structural Cardiology",
  //   "Electrophysiology & Arrhythmias",
  //   "Preventive Cardiology & Lipidology",
  //   "Coronary Artery Disease & Imaging",
  //   "Cardio-Oncology",
  //   "Global Cardiology & Public Health",
  //   "Pediatric & Congenital Cardiology",
  // ];

  // const dates = [
  //   {
  //     icon: "/abs1.png",
  //     title: "Submission Opens",
  //     date: "March 1, 2026",
  //   },
  //   {
  //     icon: "/abs2.png",
  //     title: "Submission Deadline",
  //     date: "June 30, 2026",
  //   },
  //   {
  //     icon: "/abs3.png",
  //     title: "Review Period",
  //     date: "July 15, 2026",
  //   },
  //   {
  //     icon: "/abs4.png",
  //     title: "Acceptance Notification",
  //     date: "August 1, 2026",
  //   },
  //   {
  //     icon: "/abs5.png",
  //     title: "Presentation",
  //     date: "September 15, 2026",
  //   },
  // ];

  const navigate = useNavigate();

  return (
    <div className="w-full py-16 flex justify-center">
      <div className="w-[90%] grid md:grid-cols-2 gap-8">
        {/* LEFT SIDE */}
        <div className="space-y-8">
          {/* Guidelines */}
          <div>
            <h2 className=" text-[20px] md:text-[24px] font-semibold text-[#133C49] mb-4">
              Submission <span className="text-[#00849F]">Guidelines</span>
            </h2>

            {/* <div className="bg-[#D5F4FF] border border-[#C6E4EF] rounded-[24px] p-[24px] space-y-4">
              {guidelines.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 text-[#4F5C60] text-[14px] md:text-[18px]"
                >
                  <img src="/tick.png" alt="" className="w-[20px] h-[20px]" />
                  <span>{item}</span>
                </div>
              ))}
            </div> */}
            <div className="bg-[#D5F4FF] border border-[#C6E4EF] rounded-[24px] p-[24px] space-y-4">
              {guidelines
                ?.filter((item) => item.is_enabled) // optional: show only enabled
                .map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start gap-3 text-[#4F5C60] text-[14px] md:text-[18px]"
                  >
                    <img src="/tick.png" alt="" className="w-[20px] h-[20px]" />
                    <span>{item.text}</span>
                  </div>
                ))}
            </div>
          </div>

          {/* Topics */}
          <div>
            <h2 className="text-[20px] md:text-[24px] font-semibold text-[#133C49] mb-4">
              Topics & Tracks
            </h2>

            {/* <div className="flex flex-wrap gap-3">
              {topics.map((topic, i) => (
                <span
                  key={i}
                  className="bg-[#C6E4EF] text-[#133C49] text-[14px] px-[16px] py-[12px] rounded-[30px]"
                >
                  {topic}
                </span>
              ))}
            </div> */}
            <div className="flex flex-wrap gap-3">
              {topics
                ?.filter((topic) => topic.is_enabled) // optional
                .map((topic) => (
                  <span
                    key={topic.id}
                    className="bg-[#C6E4EF] text-[#133C49] text-[14px] px-[16px] py-[12px] rounded-[30px]"
                  >
                    {topic.name}
                  </span>
                ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">
          {/* Important Dates */}
          <div>
            <h2 className=" text-[20px] md:text-[24px] font-semibold text-[#133C49] mb-4">
              Important <span className="text-[#00849F]">Dates</span>
            </h2>

            {/* <div className="space-y-4">
              {dates.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-[#13404F] border border-[#1B5061] text-white rounded-[12px] p-[16px]"
                >
                  <div className="w-[60px] h-[60px] ">
                    <img src={item.icon} alt="" className="w-full h-full" />
                  </div>

                  <div>
                    <p className=" text-[16px] md:text-[20px] font-semibold">
                      {item.title}
                    </p>
                    <p className="text-[12px] md:text-[18px] text-white/70">
                      {item.date}
                    </p>
                  </div>
                </div>
              ))}
            </div> */}
            <div className="space-y-4">
              {dates
                ?.filter((item) => item.is_enabled)
                .map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 bg-[#13404F] border border-[#1B5061] text-white rounded-[12px] p-[16px]"
                  >
                    {/* ICON (fallback) */}
                    <div className="w-[60px] h-[60px] ">
                      <img
                        src={item.icon || "/abs1.png"}
                        alt=""
                        className="w-full h-full"
                      />
                    </div>

                    {/* TEXT */}
                    <div>
                      <p className="text-[16px] md:text-[20px] font-semibold">
                        {item.label}
                      </p>
                      <p className="text-[12px] md:text-[18px] text-white/70">
                        {item.date}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-[#13404F] border border-[#235262] text-white rounded-[12px] px-[16px] py-[40px] text-center">
            <h3 className="text-[16px] md:text-[20px] font-semibold mb-2">
              Ready to Submit?
            </h3>

            <p className="text-[12px] md:text-[18px] text-white/70 mb-4">
              Create an account or login to submit your abstract
            </p>

            <div className="flex justify-center gap-3">
              <button
                onClick={() => navigate(`/conference/${slug}/submitabstract`)}
                className="bg-[#01D4FF] text-[#072A41] px-[16px] py-[8px] rounded-[12px] text-[14px] font-semibold"
              >
                Submit Abstract
              </button>

              <button
                onClick={() => navigate(`/conference/${slug}/register`)}
                className="border border-[#01D4FF] text-[#01D4FF] px-[16px] py-[8px] rounded-[12px] text-[14px]"
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
