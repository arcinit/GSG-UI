import { Clock, MapPin } from "lucide-react";
import React from "react";

const EventSchedule = () => {
  const events = [
    {
      id: 1,
      title: "Business World Event Introduction",
      time: "10.00 AM - 12.00 PM",
      location: "26/C Asana, New York",
      image: "/b1.png",
      speakers: [
        {
          name: "Alex Roberton",
          role: "UI/UX Designer",
          img: "/p1.jpg",
        },
        {
          name: "Alexys Archer",
          role: "WP Developer",
          img: "/p2.jpg",
        },
      ],
    },
    {
      id: 2,
      title: "Digital Marketing Conference",
      time: "01.00 PM - 03.00 PM",
      location: "New Jersey Hall",
      image: "/b2.png",
      speakers: [
        {
          name: "John Smith",
          role: "Marketing Lead",
          img: "/p1.jpg",
        },
        {
          name: "Emma Watson",
          role: "SEO Expert",
          img: "/p2.jpg",
        },
      ],
    },
    {
      id: 3,
      title: "Startup Growth Summit",
      time: "04.00 PM - 06.00 PM",
      location: "Silicon Valley",
      image: "/b1.png",
      speakers: [
        {
          name: "David Warner",
          role: "Founder",
          img: "/p1.jpg",
        },
        {
          name: "Lisa Ray",
          role: "Investor",
          img: "/p2.jpg",
        },
      ],
    },
    {
      id: 4,
      title: "Tech Innovation Meetup",
      time: "07.00 PM - 09.00 PM",
      location: "San Francisco",
      image: "/b2.png",
      speakers: [
        {
          name: "Chris Evans",
          role: "Engineer",
          img: "/p1.jpg",
        },
        {
          name: "Sophia Lee",
          role: "Product Manager",
          img: "/p2.jpg",
        },
      ],
    },
  ];
  return (
    <section className="bg-[#E7F9FF] py-16 px-4 sm:px-6 md:px-12 lg:px-16 text-[#133C49] ">
      <div className="max-w-7xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-block font-semibold bg-[#133C49]/10 text-sm md:text-[16px] text-[#133C49] px-4 py-1 rounded-md mb-4">
          Event Schedule
        </div>

        {/* Heading */}
        <h2 className="text-2xl text-[#133C49] sm:text-3xl md:text-4xl font-semibold mb-10">
          Our Upcoming <span className="text-[#00849F]">Events</span>
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-[#D5F4FF] rounded-2xl p-4 flex flex-col sm:flex-row gap-4"
            >
              {/* Image */}
              <img
                src={event.image}
                alt=""
                className="w-full sm:w-[160px] md:w-[190px] h-[190px] object-cover rounded-xl"
              />

              {/* Content */}
              <div className="flex-1">
                {/* Meta */}
                <div className="flex flex-wrap items-center text-[#133C49] text-[12px] sm:text-[13px] font-semibold mb-2 gap-3">
                  {/* TIME */}
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 flex items-center justify-center rounded-full bg-[#133C49]/20">
                      <Clock size={12} strokeWidth={2.5} />
                    </span>
                    {event.time}
                  </div>

                  {/* Divider */}
                  <div className="hidden sm:block h-4 w-[1px] bg-[#133C49]/40"></div>

                  {/* LOCATION */}
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 flex items-center justify-center rounded-full bg-white/20">
                      <MapPin size={12} strokeWidth={2.5} />
                    </span>
                    {event.location}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-[#00849F] text-[16px] sm:text-[17px] font-semibold mb-3">
                  {event.title}
                </h3>

                {/* Speakers */}
                <div className="flex flex-col sm:flex-row gap-3 mb-4 bg-[#B5E0EF] rounded-xl p-2">
                  {event.speakers.map((sp, i) => (
                    <div key={i} className="flex items-center gap-3 px-2 py-2">
                      <img
                        src={sp.img}
                        className="w-10 h-10 sm:w-[45px] sm:h-[45px] rounded-lg object-cover"
                      />
                      <div className="space-y-2">
                        <p className="text-[12px] sm:text-[13px] font-semibold">
                          {sp.name}
                        </p>
                        <p className="text-[10px] text-[#133C49]">{sp.role}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <button className="flex items-center gap-3 bg-[#01D4FF] text-[#00343a] text-[12px] sm:text-[13px] font-semibold px-5 py-2.5 rounded-full hover:bg-[#00c2ea] transition">
                  RESERVE MY SEAT
                  <span className="w-5 h-5 flex items-center justify-center bg-white text-black rounded-full text-xs">
                    →
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventSchedule;
