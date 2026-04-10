import { ArrowLeft, CalendarDays, Clock, MapPin, Award } from "lucide-react";

export default function SessionDetails() {
  return (
    <div className="w-full min-h-screen bg-[#E7F9FF] py-10 flex justify-center pt-40">
      <div className="w-[90%]">
        {/* Back */}
        <div className="flex items-center gap-2 text-[#133C49] text-[12px] mb-4 cursor-pointer">
          <ArrowLeft size={16} />
          Back to Programme
        </div>

        {/* Tag */}
        <span className="inline-block bg-[#025C6E] text-[#01D4FF] text-[12px] px-[16px] py-[8px] rounded-[30px] mb-4">
          Digital Cardiology
        </span>

        {/* Title */}
        <h1 className="text-[28px] md:text-[42px] font-semibold text-[#133C49] mb-4">
          Keynote: The Future of AI in Cardiovascular Medicine
        </h1>

        {/* Meta */}
        <div className="flex flex-wrap gap-6 text-[18px] text-[#4F5C60] mb-8">
          <span className="flex items-center gap-1">
            <img src="/calendar.png" alt="" className="w-[20px] h-[20px]" />{" "}
            September 15, 2026
          </span>
          <span className="flex items-center gap-1">
            <img src="/clock.png" alt="" className="w-[20px] h-[20px]" /> 10:00
            AM - 11:00 AM
          </span>
          <span className="flex items-center gap-1">
            <img src="/location.png" alt="" className="w-[20px] h-[20px]" />{" "}
            Main Lobby
          </span>
          <span className="flex items-center gap-1">
            <img src="/award2.png" alt="" className="w-[20px] h-[20px]" /> 1.5
            CME Credits
          </span>
        </div>

        {/* Main Layout */}
        <div className="grid md:grid-cols-[1fr_408px] gap-6">
          {/* LEFT CONTENT */}
          <div className="flex flex-col gap-6">
            {/* Description */}
            <div className="bg-[#D5F4FF] rounded-[24px] p-[24px] border border-[#C6E4EF]">
              <h3 className="text-[#133C49] text-[24px] font-semibold mb-3 flex items-center gap-2">
                <img src="/book.png" alt="" className="w-[32px] h-[32px]" />{" "}
                Session Description
              </h3>

              <p className="text-[#4F5C60] text-[20px] font-medium leading-relaxed">
                This keynote session explores the transformative potential of
                artificial intelligence in cardiovascular medicine. From
                advanced imaging analysis to predictive modeling, AI is
                reshaping how we diagnose, treat, and prevent heart disease.
                Join Dr. James Miller as he presents groundbreaking research and
                real-world applications that are setting new standards in
                cardiac care.
              </p>
            </div>

            {/* Learning Objectives */}
            <div className="bg-[#D5F4FF] rounded-[24px] p-[24px] border border-[#C6E4EF]">
              <h3 className="text-[#133C49] text-[24px] font-semibold mb-3 flex items-center gap-2">
                <img src="/learning.png" alt="" className="w-[32px] h-[32px]" />{" "}
                Learning Objectives
              </h3>

              <ul className="space-y-4">
                {[
                  "Understand the current landscape of AI applications in cardiology",
                  "Explore machine learning algorithms for cardiac imaging interpretation",
                  "Discuss ethical considerations and challenges in AI implementation",
                  "Preview upcoming innovations and research directions",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-[14px] text-[#1c3b44]/80"
                  >
                    {/* Number Circle */}
                    <div className="w-6  h-6 rounded-full bg-[#00657A] text-[#01D4FF] text-[12px] flex items-center justify-center">
                      {index + 1}
                    </div>

                    <span className="text-[#4F5C60] md:text-[20px]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Learning Objectives */}
            <div className="bg-[#D5F4FF] rounded-[24px] p-[24px] border border-[#C6E4EF]">
              <h3 className="text-[#133C49] text-[24px] font-semibold mb-3 flex items-center gap-2">
                <img
                  src="/learningoutcome.png"
                  alt=""
                  className="w-[32px] h-[32px]"
                />{" "}
                Learning Outcomes
              </h3>

              <h4 className="text-[#4F5C60] md:text-[20px] font-medium mb-3">
                After completing this session, participants will be able to:
              </h4>

              <ul className="space-y-4">
                {[
                  "Identify key AI technologies applicable to cardiovascular practice",
                  "Evaluate the evidence supporting AI-assisted diagnosis",
                  "Apply AI insights to improve patient outcomes",
                  "Navigate regulatory and ethical frameworks for AI in medicine",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-[14px] text-[#1c3b44]/80"
                  >
                    {/* Number Circle */}
                    <div className="w-[8px] h-[8px] rounded-full bg-[#01D4FF]"></div>

                    <span className="text-[#4F5C60] md:text-[20px]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="flex flex-col gap-6">
            {/* Session Details */}
            <div className="bg-[#13404F] border border-[#235262] text-[#FFFFFF] rounded-[24px] p-[24px]">
              <h3 className="text-[18px] font-semibold mb-4">
                Session Details
              </h3>

              <div className="space-y-3 text-[18px]">
                <div className="flex justify-between">
                  <span className="text-white">Duration</span>
                  <span>60 minutes</span>
                </div>
                <div className="flex justify-between text-[18px]">
                  <span className="text-white">CME Credits</span>
                  <span className="text-[#01D4FF]">1.5</span>
                </div>
                <div className="flex justify-between text-[18px]">
                  <span className="text-white">Track</span>
                  <span>Digital Cardiology</span>
                </div>
              </div>
            </div>

            {/* Speaker */}
            <div className="bg-[#13404F] border border-[#235262] text-[#FFFFFF] rounded-[24px] p-[24px]">
              <h3 className="text-[18px] font-semibold mb-4">Speaker</h3>

              <div className="flex items-center gap-3">
                <img
                  src="/team1.jpg"
                  alt="speaker"
                  className="w-[60px] h-[60px] border-2 border-[#01D4FF] rounded-full object-cover"
                />

                <div className="space-y-1">
                  <h4 className="text-[24px] font-semibold">
                    Prof. Elena Martinez
                  </h4>
                  <p className="text-[18px] text-white/70">Primary Speaker</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
