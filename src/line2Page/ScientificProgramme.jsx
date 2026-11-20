import { useState } from "react";
import { Clock, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
const ScientificProgramme = () => {
  return (
    <div className="bg-[#E7F9FF]">
      <ScientificHero />
      <ScheduleSection />
    </div>
  );
};

export default ScientificProgramme;

function ScientificHero() {
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
          Scientific <span className="text-[#01D4FF]">Programme</span>
        </h1>

        {/* Subtitle */}
        <p className="text-[#FFFFFF] font-normal text-[14px] md:text-[18px] mt-3">
          Explore the complete conference agenda
        </p>
      </div>
    </section>
  );
}

function ScheduleSection() {
  const [active, setActive] = useState(0);

  const tabs = [
    { day: "Day 1", date: "September 15, 2026" },
    { day: "Day 2", date: "September 16, 2026" },
    { day: "Day 3", date: "September 17, 2026" },
  ];

  const navigate = useNavigate();
  return (
    <div className="w-full  py-12 flex justify-center">
      <div className="w-[90%]">
        {/* Tabs */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {tabs.map((tab, index) => (
            <div
              key={index}
              onClick={() => setActive(index)}
              className={`cursor-pointer rounded-[12px] p-[24px] border transition ${
                active === index
                  ? "bg-[#00849F] text-white border-[#00849F]"
                  : "bg-white text-[#00849F] border-[#00849F]"
              }`}
            >
              <div className="text-[20px] font-semibold">{tab.day}</div>
              <div className="text-[18px] mt-1 opacity-80">{tab.date}</div>
            </div>
          ))}
        </div>

        {/* Schedule Card */}
        <div
          onClick={() => navigate("/conference/program-details")}
          className="bg-[#13404F] text-white rounded-[16px] p-[24px] flex flex-col md:flex-row items-center justify-between gap-4 mb-4"
        >
          {/* Left */}
          <div className="flex flex-col md:flex-row items-start gap-6">
            {/* Time */}
            <div className="flex items-center gap-2 text-[#01D4FF] font-semibold text-[20px]">
              <img src="/clock2.png" alt="" className="w-[20px] h-[20px]" />
              08:00 AM
            </div>

            {/* Content */}
            <div>
              <h3 className="text-[20px] font-semibold">
                Registration & Welcome Coffee
              </h3>

              {/* Tag */}
              <span className="inline-block mt-2 text-[18px] bg-[#035060] text-[#01D4FF] px-[12px] py-[6px] rounded-[40px]">
                General
              </span>

              {/* Location */}
              <div className="flex items-center gap-1 text-[18px] text-white/70 mt-2">
                <img
                  src="/location2.png"
                  alt=""
                  className="w-[20px] h-[20px]"
                />
                Main Lobby
              </div>
            </div>
          </div>

          {/* Button */}
          <button className="border border-[#01D4FF] text-[#00D1FF] text-[12px] px-[16px] py-[8px] rounded-[12px] hover:bg-[#00D1FF] hover:text-black transition">
            View Details
          </button>
        </div>

        {/* Schedule Card */}
        <div className="bg-[#13404F] text-white rounded-[16px] p-[24px] flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left */}
          <div className="flex flex-col md:flex-row items-start gap-6">
            {/* Time */}
            <div className="flex items-center gap-2 text-[#01D4FF] font-semibold text-[20px]">
              <img src="/clock2.png" alt="" className="w-[20px] h-[20px]" />
              09:00 AM
            </div>

            {/* Content */}
            <div>
              <h3 className="text-[20px] font-semibold">
                Opening Ceremony & Welcome Address
              </h3>

              {/* Tag */}
              <span className="inline-block mt-2 text-[18px] bg-[#035060] text-[#01D4FF] px-[12px] py-[6px] rounded-[40px]">
                General
              </span>

              {/* Location */}
              <div className="flex flex-col md:flex-row gap-2">
                <div className="flex items-center gap-1 text-[18px] text-white/70 mt-2">
                  <img src="/user.png" alt="" className="w-[20px] h-[20px]" />
                  Prof. David Anderson
                </div>
                <div className="flex items-center gap-1 text-[18px] text-white/70 mt-2">
                  <img
                    src="/location2.png"
                    alt=""
                    className="w-[20px] h-[20px]"
                  />
                  Main Lobby
                </div>
              </div>
            </div>
          </div>

          {/* Button */}
          <button className="border border-[#01D4FF] text-[#00D1FF] text-[12px] px-[16px] py-[8px] rounded-[12px] hover:bg-[#00D1FF] hover:text-black transition">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
