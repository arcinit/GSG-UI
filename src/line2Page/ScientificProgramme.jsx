import { useState } from "react";
import { Clock, MapPin } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
const ScientificProgramme = ({ data }) => {
  return (
    <div className="bg-[#E7F9FF]">
      <ScientificHero />
      <ScheduleSection days={data.days} sessions={data.sessions} />
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

function ScheduleSection({ days = [], sessions = [] }) {
  const [active, setActive] = useState(0);
  const { slug } = useParams();

  const tabs = [
    { day: "Day 1", date: "September 15, 2026" },
    { day: "Day 2", date: "September 16, 2026" },
    { day: "Day 3", date: "September 17, 2026" },
  ];

  // const navigate = useNavigate();
  const [activeDayId, setActiveDayId] = useState(days?.[0]?.id);
  const navigate = useNavigate();

  // ✅ Filter sessions by selected day
  const filteredSessions = sessions.filter(
    (s) => s.day === activeDayId && s.is_enabled,
  );

  console.log("filterdata:-", filteredSessions);

  // ✅ Format time (06:00:00 → 06:00 AM)
  const formatTime = (time) => {
    const [h, m] = time.split(":");
    const hour = parseInt(h);
    const ampm = hour >= 12 ? "PM" : "AM";
    const formattedHour = hour % 12 || 12;
    return `${formattedHour}:${m} ${ampm}`;
  };
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="w-full  py-12 flex justify-center">
      <div className="w-[90%]">
        {/* Tabs */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* {tabs.map((tab, index) => (
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
          ))} */}
          {days.map((day, index) => (
            <div
              key={day.id}
              onClick={() => setActiveDayId(day.id)}
              className={`cursor-pointer rounded-[12px] p-[24px] border transition ${
                activeDayId === day.id
                  ? "bg-[#00849F] text-white border-[#00849F]"
                  : "bg-white text-[#00849F] border-[#00849F]"
              }`}
            >
              <div className="text-[20px] font-semibold">Day {index + 1}</div>
              <div className="text-[18px] mt-1 opacity-80">
                {formatDate(day.date)}
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Sessions List */}
        {filteredSessions.length === 0 ? (
          <div className="text-center text-gray-500">No sessions available</div>
        ) : (
          // filteredSessions.map((session) => (
          //   <div
          //     key={session.id}
          //     onClick={() =>
          //       navigate("/conference/program-details", {
          //         state: { session },
          //       })
          //     }
          //     className="bg-[#13404F] text-white rounded-[16px] p-[24px] flex flex-col md:flex-row items-center justify-between gap-4 mb-4 cursor-pointer"
          //   >
          //     {/* Left */}
          //     <div className="flex flex-col md:flex-row items-start gap-6">
          //       {/* Time */}
          //       <div className="flex items-center gap-2 text-[#01D4FF] font-semibold text-[20px]">
          //         <img src="/clock2.png" alt="" className="w-[20px]" />
          //         {formatTime(session.start_time)}
          //       </div>

          //       {/* Content */}
          //       <div>
          //         <h3 className="text-[20px] font-semibold">{session.title}</h3>

          //         {/* Tag */}
          //         <span className="inline-block mt-2 text-[18px] bg-[#035060] text-[#01D4FF] px-[12px] py-[6px] rounded-[40px]">
          //           Track {session.track}
          //         </span>

          //         {/* Description */}
          //         <div className="text-[16px] max-w-5xl text-white/70 mt-2 ">
          //           {session.description}
          //         </div>
          //       </div>
          //     </div>

          //     {/* Button */}
          //     <button className="border border-[#01D4FF] text-[#00D1FF] text-[12px] px-[16px] py-[8px] rounded-[12px] hover:bg-[#00D1FF] hover:text-black transition">
          //       View Details
          //     </button>
          //   </div>
          // ))
          filteredSessions.map((session) => (
            <div
              key={session.id}
              onClick={() =>
                navigate(`/conference/${slug}/program-details`, {
                  state: { session },
                })
              }
              className="bg-[#13404F] text-white rounded-[16px] p-[24px] 
              flex flex-col md:flex-row items-center justify-between gap-4 mb-4 cursor-pointer
              border border-transparent
              transition-all duration-300
              hover:-translate-y-1
              hover:border-[#00D1FF]
              hover:shadow-[0_0_20px_rgba(0,209,255,0.25)] hover:text-[#00D1FF]"
            >
              {/* Left */}
              <div className="flex flex-col md:flex-row items-start gap-6">
                {/* Time */}
                <div className="flex items-center gap-2 text-[#01D4FF] font-semibold text-[20px]">
                  <img src="/clock2.png" alt="" className="w-[20px]" />
                  {formatTime(session.start_time)}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-[20px] font-semibold ">
                    {session.title}
                  </h3>

                  {/* Tag */}
                  <span className="inline-block mt-2 text-[18px] bg-[#035060] text-[#01D4FF] px-[12px] py-[6px] rounded-[40px]">
                    Track {session.track}
                  </span>

                  {/* Description */}
                  <div className="text-[16px] max-w-5xl text-white/70 mt-2">
                    {session.description}
                  </div>
                </div>
              </div>

              {/* Button */}
              <button
                className="border border-[#01D4FF] text-[#00D1FF] text-[12px] px-[16px] py-[8px] rounded-[12px] 
                transition-all duration-300
                hover:bg-[#00D1FF] hover:text-black"
              >
                View Details
              </button>
            </div>
          ))
        )}

        {/* Schedule Card */}
        {/* <div
          onClick={() => navigate("/conference/program-details")}
          className="bg-[#13404F] text-white rounded-[16px] p-[24px] flex flex-col md:flex-row items-center justify-between gap-4 mb-4"
        >
         
          <div className="flex flex-col md:flex-row items-start gap-6">
            
            <div className="flex items-center gap-2 text-[#01D4FF] font-semibold text-[20px]">
              <img src="/clock2.png" alt="" className="w-[20px] h-[20px]" />
              08:00 AM
            </div>

            
            <div>
              <h3 className="text-[20px] font-semibold">
                Registration & Welcome Coffee
              </h3>

              
              <span className="inline-block mt-2 text-[18px] bg-[#035060] text-[#01D4FF] px-[12px] py-[6px] rounded-[40px]">
                General
              </span>

              
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

          
          <button className="border border-[#01D4FF] text-[#00D1FF] text-[12px] px-[16px] py-[8px] rounded-[12px] hover:bg-[#00D1FF] hover:text-black transition">
            View Details
          </button>
        </div> */}

        {/* Schedule Card */}
        {/* <div className="bg-[#13404F] text-white rounded-[16px] p-[24px] flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex flex-col md:flex-row items-start gap-6">
            
            <div className="flex items-center gap-2 text-[#01D4FF] font-semibold text-[20px]">
              <img src="/clock2.png" alt="" className="w-[20px] h-[20px]" />
              09:00 AM
            </div>

           
            <div>
              <h3 className="text-[20px] font-semibold">
                Opening Ceremony & Welcome Address
              </h3>

              
              <span className="inline-block mt-2 text-[18px] bg-[#035060] text-[#01D4FF] px-[12px] py-[6px] rounded-[40px]">
                General
              </span>

              
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

          
          <button className="border border-[#01D4FF] text-[#00D1FF] text-[12px] px-[16px] py-[8px] rounded-[12px] hover:bg-[#00D1FF] hover:text-black transition">
            View Details
          </button>
        </div> */}
      </div>
    </div>
  );
}
