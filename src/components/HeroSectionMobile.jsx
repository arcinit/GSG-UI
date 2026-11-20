"use client";

import { CalendarDays, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroSectionMobile() {
  const targetDate = new Date("2026-01-30T18:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(getTime());

  function getTime() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    return {
      days: Math.max(Math.floor(diff / (1000 * 60 * 60 * 24)), 0),
      hours: Math.max(Math.floor((diff / (1000 * 60 * 60)) % 24), 0),
      minutes: Math.max(Math.floor((diff / (1000 * 60)) % 60), 0),
      seconds: Math.max(Math.floor((diff / 1000) % 60), 0),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0B2C36] text-white min-h-screen relative">
      {/* IMAGE */}
      <div className="w-full">
        <img src="/mobile.jpg" className="w-full h-[260px] object-cover" />
      </div>

      {/* CONTENT */}
      <div className="px-4 py-6">
        <p className="inline-block bg-[#0f4d57] text-[#38d9ff] px-4 py-1 rounded-full text-xs mb-4">
          Lead Purpose, Innovate with Passion
        </p>

        <h1 className="text-[28px] font-light mb-3">Yearly Business</h1>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-[20px] border border-[#38d9ff] px-3 py-1 rounded-lg text-[#38d9ff]">
            CONFERENCES
          </span>
          <span className="text-[20px]">“ 26 ”</span>
        </div>

        <button className="flex items-center gap-2 bg-[#38d9ff] text-[#00343a] px-5 py-2 rounded-full text-xs font-semibold mb-6">
          RESERVE MY SEAT
          <span className="w-5 h-5 flex items-center justify-center bg-white rounded-full text-[10px]">
            →
          </span>
        </button>

        {/* COUNTDOWN */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          {[
            { label: "D", value: timeLeft.days },
            { label: "H", value: timeLeft.hours },
            { label: "M", value: timeLeft.minutes },
            { label: "S", value: timeLeft.seconds },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white text-[#0b3c44] py-3 rounded-lg text-center"
            >
              <p className="text-sm font-bold">{item.value}</p>
              <p className="text-[10px]">{item.label}</p>
            </div>
          ))}
        </div>

        {/* EVENT INFO */}
        <div className="text-white  text-[18px] space-y-2">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg text-[13px] text-white">
            <span className="w-5 h-5 flex items-center justify-center rounded-full bg-white/20">
              <CalendarDays size={12} strokeWidth={2.5} />
            </span>

            <span className="">30 January 2026 - 6pm to 11:30pm</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg text-[13px] text-white">
            <span className="w-5 h-5 flex items-center justify-center rounded-full bg-white/20">
              <MapPin size={12} strokeWidth={2.5} />
            </span>

            <span className="">Park Hayat, Hitech City, Hyderabad</span>
          </div>
        </div>
      </div>
    </div>
  );
}
