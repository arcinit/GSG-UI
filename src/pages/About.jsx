import React from "react";
import EventSchedule from "../components/EventSchedule";
import TeamSection from "../components/TeamSection";
import TestimonialsAbout from "../components/TestimonialsAbout";

const About = () => {
  return (
    <div>
      <AboutHero />
      <AboutContent />
      <StatsSection />
      <EventSchedule />
      <TeamSection />
      <TestimonialsAbout />
    </div>
  );
};

export default About;

function AboutHero() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <img
        src="/about.png"
        alt="about-bg"
        className="absolute inset-0 w-full h-full object-fill object-center"
      />

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-3xl md:text-[54px] font-medium">
          About <span className="text-[#01D4FF]">Us</span>
        </h1>
      </div>
    </section>
  );
}

function AboutContent() {
  return (
    <section className="bg-[#E7F9FF] py-16 px-6 md:px-16 text-center">
      <div className="max-w-7xl mx-auto">
        {/* Small Label */}
        <p className="text-[18px] font-medium text-[#133C49] mb-3">
          About{" "}
          <span className="text-[#00849F] font-medium">
            Global Scientific Group
          </span>
        </p>

        {/* Heading */}
        <h2 className="text-2xl md:text-[42px] font-semibold text-[#133C49] leading-snug mb-6">
          Growth Through World Class And{" "}
          <span className="text-[#00849F]">Conferences</span>
        </h2>

        {/* Paragraph */}
        <p className="text-[#4F5C60] text-sm md:text-[18px] font-normal leading-relaxed">
          Global Scientific Group (GSG) is a scientific event organizer and
          publisher founded in 2014 in San Jose, CA. In 2016, it relocated to
          Plano, TX. GSG is known for organizing national and international
          scientific conferences with participant numbers ranging from 50 to
          350. It holds tax-exempt status under Section 501(c)(3) of the
          Internal Revenue Service in the United States.
          <br />
          <br />
          GSG’s primary goal is to establish scientific networking platforms
          through conferences. These platforms aim to bridge the gap between
          research and business, facilitating the translation of scientific
          discoveries and innovative ideas into practical solutions and products
          for the betterment of humanity.
          <br />
          GSG is governed by a board of directors comprising renowned
          scientists. Their dedication lies in supporting the scientific
          community by providing exceptional services in organizing scientific
          conferences and open access scientific publications.
        </p>
      </div>
    </section>
  );
}

const stats = [
  {
    id: 1,
    icon: "/ab1.png",
    number: "200",
    title: "CONFERENCES",
    desc: "By Our Experienced Team",
  },
  {
    id: 2,
    icon: "/ab2.png",
    number: "2345",
    title: "SPEAKERS",
    desc: "Keynotes, Featured Speakers",
  },
  {
    id: 3,
    icon: "/ab3.png",
    number: "65",
    title: "PARTNERS",
    desc: "We Provide All Industry Services",
  },
  {
    id: 4,
    icon: "/ab4.png",
    number: "87",
    title: "Countries",
    desc: "We are in All Continents",
  },
];

function StatsSection() {
  return (
    <section className="bg-[#E7F9FF] px-6 md:px-16 pb-10">
      <div className="max-w-7xl mx-auto">
        {/* Card */}
        <div className="bg-[#13404F] rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className={`p-6 flex flex-col gap-3 ${
                  index !== stats.length - 1
                    ? "border-b md:border-b-0 md:border-r border-[#FFFFFF]"
                    : ""
                }`}
              >
                {/* Top Row */}
                <div className="flex items-center justify-between">
                  {/* Icon */}
                  <div className="w-[54px] h-[54px]">
                    <img src={item.icon} alt="" className="w-full h-full" />
                  </div>

                  {/* Number */}
                  <h3 className="text-[#01D4FF] font-semibold text-[42px]">
                    {item.number}
                  </h3>
                </div>

                {/* Title */}
                <h4 className="text-[#FFFFFF] font-semibold tracking-wide text-[20px]">
                  {item.title}
                </h4>

                {/* Description */}
                <p className="text-[14px] text-[#FFFFFF]/70 font-normal">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
