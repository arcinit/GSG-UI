import React from "react";
import { useEffect, useState } from "react";

import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
} from "lucide-react";
import Testimonials from "../components/Testimonials";
import HeroSectionMobile from "../components/HeroSectionMobile";

const Home = () => {
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
    <div>
      {/* <HeroSection /> */}
      <HeroSectionWrapper />
      <section className="bg-[#0f3b3f] text-white py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT IMAGE GRID */}
          <div className="grid grid-cols-2 gap-4">
            {/* Big Left Image */}
            <div className="col-span-1 row-span-2">
              <img
                src="/b1.png"
                alt="Speaker"
                className=" w-full h-full rounded-l-3xl object-cover"
              />
            </div>

            {/* Top Right */}
            <div>
              <img
                src="/b2.png"
                alt="Audience"
                className=" w-full h-full rounded-tr-3xl object-cover"
              />
            </div>

            {/* Bottom Right */}
            <div>
              <img
                src="/b3.png"
                alt="Conference"
                className=" w-full h-full rounded-br-3xl object-cover"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="max-w-xl">
            {/* BADGE */}
            <span className="inline-block bg-[#FFFFFF1A] text-[#FFFFFF] text-[13px] px-5 py-2 rounded-[6px] mb-6">
              About our business conferences
            </span>

            {/* HEADING */}
            <h2 className="text-[42px] leading-[1.25] font-semibold text-white mb-5">
              Growth Through World Class <br />
              And <span className="text-[#01D4FF]">Conferences</span>
            </h2>

            {/* DESCRIPTION */}
            <p className="text-[#FFFFFFE5] text-[15px] leading-[1.7] mb-8">
              At Business, we bring together brightest minds, leaders, and
              trailblazers from across industries to explore latest trends,
              technologies, and strategies shaping the future.
            </p>

            {/* STATS */}
            <div className="flex gap-4 mb-8">
              <div className="flex items-center gap-3 bg-[#FFFFFF0A] px-[12px] py-[10px] rounded-xl min-w-[160px]">
                <div className="w-[48px] h-[48px]">
                  <img src="/mic.png" alt="" className="w-full h-full" />
                </div>
                <span className="text-[14px] text-white font-medium">
                  40 + Speakers
                </span>
              </div>

              <div className="flex items-center gap-3 bg-[#FFFFFF0A] px-[12px] py-[10px] rounded-xl min-w-[160px]">
                <div className="w-[48px] h-[48px]">
                  <img src="/crown.png" alt="" className="w-full h-full" />
                </div>
                <span className="text-[14px] text-white font-medium">
                  19+ Sponsors
                </span>
              </div>
            </div>

            {/* BUTTON */}
            <button className="flex items-center gap-3 bg-[#01D4FF] text-[#00343a] px-6 py-3 rounded-full text-[14px] font-semibold shadow-md hover:bg-[#22c7ee] transition">
              BECOME AN ATTENDEE
              <span className="w-6 h-6 flex items-center justify-center bg-white text-black rounded-full text-xs">
                →
              </span>
            </button>
          </div>
        </div>
      </section>
      <section className="bg-[#154351] py-12 px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <h3 className="text-white text-lg md:text-[28px] font-medium mb-8">
            Join 4,000+ companies already growing
          </h3>

          {/* Logos Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Card 1 */}
            <div className="flex items-center justify-center gap-3 bg-[#FFFFFF0F] px-[66px] py-[32px] rounded-xl">
              <img src="/c3.png" alt="" className="w-[166px] h-[48px]" />
            </div>

            {/* Card 2 */}
            <div className="flex items-center justify-center gap-3 bg-[#FFFFFF0F] px-[66px] py-[32px] rounded-xl">
              <img src="/c1.png" alt="" className="w-[166px] h-[48px]" />
            </div>

            {/* Card 3 */}
            <div className="flex items-center justify-center gap-3 bg-[#FFFFFF0F] px-[66px] py-[32px] rounded-xl">
              <img src="/c2.png" alt="" className="w-[166px] h-[48px]" />
            </div>

            {/* Card 4 */}
            <div className="flex items-center justify-center gap-3 bg-[#FFFFFF0F] px-[66px] py-[32px] rounded-xl">
              <img src="/c4.png" alt="" className="w-[166px] h-[48px]" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#133C49] py-16 px-4 sm:px-6 md:px-12 lg:px-16 text-white">
        <div className="max-w-7xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-block font-medium bg-white/10 text-sm md:text-[16px] px-4 py-1 rounded-md mb-4">
            Event Schedule
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-10">
            Our Upcoming <span className="text-[#01D4FF]">Events</span>
          </h2>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-[#154351] rounded-2xl p-4 flex flex-col sm:flex-row gap-4"
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
                  <div className="flex flex-wrap items-center text-white text-[12px] sm:text-[13px] font-medium mb-2 gap-3">
                    {/* TIME */}
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 flex items-center justify-center rounded-full bg-white/20">
                        <Clock size={12} strokeWidth={2.5} />
                      </span>
                      {event.time}
                    </div>

                    {/* Divider */}
                    <div className="hidden sm:block h-4 w-[1px] bg-white/40"></div>

                    {/* LOCATION */}
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 flex items-center justify-center rounded-full bg-white/20">
                        <MapPin size={12} strokeWidth={2.5} />
                      </span>
                      {event.location}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-[#01D4FF] text-[16px] sm:text-[17px] font-semibold mb-3">
                    {event.title}
                  </h3>

                  {/* Speakers */}
                  <div className="flex flex-col sm:flex-row gap-3 mb-4 bg-[#133C49] rounded-xl p-2">
                    {event.speakers.map((sp, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 px-2 py-2"
                      >
                        <img
                          src={sp.img}
                          className="w-10 h-10 sm:w-[45px] sm:h-[45px] rounded-lg object-cover"
                        />
                        <div className="space-y-2">
                          <p className="text-[12px] sm:text-[13px] font-semibold">
                            {sp.name}
                          </p>
                          <p className="text-[10px] text-[#a9c3c7]">
                            {sp.role}
                          </p>
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

      <BlogSection />
      <Testimonials />
      <Gallery />
    </div>
  );
};

export default Home;

function HeroSectionWrapper() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();

    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile ? <HeroSectionMobile /> : <HeroSection />;
}

function HeroSection() {
  const targetDate = new Date("2026-03-30T18:00:00").getTime();

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

  const navClass = ({ isActive }) =>
    `transition ${
      isActive
        ? "text-[#0b3c44] font-semibold"
        : "text-gray-600 hover:text-[#0b3c44]"
    }`;

  return (
    <div className="w-full min-h-screen bg-[#0B2C36] text-white relative overflow-hidden">
      <div>
        <img
          src="/topright.png"
          alt=""
          className="absolute top-0 right-0 z-50"
        />
      </div>
      {/* ✅ HEADER FIXED */}
      {/* <header className="fixed top-0 left-0 w-full z-[999] flex justify-center">
        <div className="w-[90%] flex items-center justify-between px-10 py-4 bg-white text-black rounded-b-3xl shadow-md">
          
          <div className="flex items-center gap-2 font-bold text-lg">
            <img src="/logo.png" className="h-[50px]" />
          </div>

          
          <nav className="flex gap-8 text-[18px] font-medium">
            <a className="text-[#0b3c44] font-semibold">Home</a>
            <a>About Us</a>
            <a>Conferences</a>
            <a>Journals</a>
            <a>Blogs</a>
            <a>Gallery</a>
            <a>Contact Us</a>
          </nav>
        </div>
      </header> */}

      {/* <Header /> */}

      <div className="grid md:grid-cols-2 items-center h-screen">
        {/* LEFT */}
        <div className="px-24 pt-10">
          {/* TAGLINE */}
          <p className="inline-block bg-[#0f4d57] text-[#38d9ff] px-5 py-2 rounded-full text-sm mb-8 tracking-wide">
            Lead Purpose, Innovate with Passion
          </p>

          {/* HEADING */}
          <h1 className="text-[56px] leading-[1.2] font-light text-white mb-6">
            Yearly Business
          </h1>

          {/* CONFERENCE TEXT */}
          <div className="flex items-center gap-6 mb-8">
            <span className="text-[40px] font-semibold border border-[#38d9ff] px-6 py-2 rounded-xl text-[#38d9ff] tracking-wide">
              CONFERENCES
            </span>

            <span className="text-[34px] text-white font-light">“ 26 ”</span>
          </div>

          {/* BUTTON */}
          <button className="flex items-center gap-3 bg-[#38d9ff] text-[#00343a] px-6 py-3 rounded-full text-sm font-semibold shadow-md hover:bg-[#22c7ee] transition">
            RESERVE MY SEAT
            <span className="w-6 h-6 flex items-center justify-center bg-white text-black rounded-full text-xs">
              →
            </span>
          </button>
        </div>

        {/* RIGHT IMAGE WITH DIAGONAL CUT */}
        <div className="relative h-full">
          <img src="/b.png" className="w-full h-[732px] object-cover" />

          {/* 🔥 DIAGONAL SHAPE (important fix) */}
          {/* <div className="absolute inset-0 bg-[#0b3c44] clip-diagonal"></div> */}
        </div>
      </div>

      {/* ✅ COUNTDOWN CENTERED */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[65%] z-[50]">
        <div className="flex items-center  gap-6 bg-[#01D4FF26] backdrop-blur-md px-6 py-6 rounded-t-2xl">
          {/* COUNT BOXES */}
          <div className="flex gap-4">
            {[
              { label: "DAYS", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#FFFFFF] text-[#0B2C36] w-[150px] h-[94px] rounded-lg flex flex-col items-center justify-center"
              >
                <p className="text-[34px] font-semibold leading-none">
                  {item.value}
                </p>
                <p className="text-[18px] mt-1 tracking-wide ">{item.label}</p>
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

      {/* DECORATIVE CURVE bottom left */}
      <div>
        <img
          src="/bottomleft.png"
          alt=""
          className="absolute bottom-0 left-0"
        />
      </div>
    </div>
  );
}

const blogs = [
  {
    id: 1,
    image: "/b12.png",
    author: "John Carter",
    avatar: "/p1.jpg",
    date: "29 Dec, 2025",
    title:
      "Highlights from CGT Summit 2025: A Step Forward in Cell & Gene Therapy",
    desc: "The 2nd Global Cell & Gene Therapy (CGT) Summit was held from July 7–9, 2025, in Orlando, Florida, and brought together an exceptional lineup of scientists, clinicians, industry leaders, regulatory authorities, and innovators from around the world...",
  },
  {
    id: 2,
    image: "/b2.png",
    author: "John Carter",
    avatar: "/p1.jpg",
    date: "29 Dec, 2025",
    title:
      "Highlights from CGT Summit 2025: A Step Forward in Cell & Gene Therapy",
    desc: "The 2nd Global Cell & Gene Therapy (CGT) Summit was held from July 7–9, 2025, in Orlando, Florida, and brought together an exceptional lineup of scientists, clinicians, industry leaders, regulatory authorities, and innovators from around the world...",
  },
  {
    id: 3,
    image: "/b3.png",
    author: "John Carter",
    avatar: "/p1.jpg",
    date: "29 Dec, 2025",
    title:
      "Highlights from CGT Summit 2025: A Step Forward in Cell & Gene Therapy",
    desc: "The 2nd Global Cell & Gene Therapy (CGT) Summit was held from July 7–9, 2025, in Orlando, Florida, and brought together an exceptional lineup of scientists, clinicians, industry leaders, regulatory authorities, and innovators from around the world...",
  },
];

function BlogSection() {
  return (
    <section className="bg-[#154351] py-16 px-6 md:px-16 text-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-block font-medium bg-white/10 text-sm md:text-[16px] px-4 py-1 rounded-md mb-4">
          Blog
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          Our Latest <span className="text-[#01D4FF]">Articles</span>
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {/* Button */}
        <div className="mt-12 flex justify-center">
          <button className="flex items-center gap-4 bg-[#01D4FF] text-[#00343a] text-[14px] font-semibold px-8 py-4 rounded-full shadow-sm hover:bg-[#00c2ea] transition">
            View More
            <span className="w-7 h-7 flex items-center justify-center bg-white text-black rounded-full text-sm">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-[#13404F] backdrop-blur-md rounded-2xl p-4  hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)] transition">
      {/* Image */}
      <img
        src={blog.image}
        alt={blog.title}
        className="w-[370px] h-[199px] object-cover rounded-[12px] mb-4"
      />

      {/* Meta */}
      <div className="flex items-center gap-2 text-[12px] text-gray-300 mb-2">
        <img src={blog.avatar} className="w-[20px] h-[20px] rounded-[4px]" />
        <span className="font-normal text-[14px] text-[#FFFFFF]/70">
          {blog.author}
        </span>
        <span className="text-[#FFFFFF]/70 text-[14px] font-normal">•</span>
        <span className="text-[#FFFFFF]/70 text-[14px] font-normal">
          {blog.date}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-[18px] text-start font-medium leading-snug text-white mb-2 line-clamp-2">
        {blog.title}
      </h3>

      {/* Description */}
      <p className="text-[14px] text-start text-[#FFFFFF]/70 font-normal leading-relaxed line-clamp-3">
        {blog.desc}
      </p>
    </div>
  );
};

const galleryData = [
  {
    id: 1,
    image: "/b12.png",
    title: "Business World Event Introduction",
    date: "24 Nov 2025",
  },
  {
    id: 2,
    image: "/g1.jpg",
    title: "Business World Event Introduction",
    date: "24 Nov 2025",
  },
  {
    id: 3,
    image: "/g2.jpg",
    title: "Business World Event Introduction",
    date: "24 Nov 2025",
  },
  {
    id: 4,
    image: "/g3.jpg",
    title: "Business World Event Introduction",
    date: "24 Nov 2025",
  },
];

function Gallery() {
  return (
    <section className="bg-[#133C49] py-16 px-6 md:px-16 text-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">Gallery</h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
          {galleryData.map((item) => (
            <div
              key={item.id}
              className="bg-[#13404F] rounded-2xl overflow-hidden hover:-translate-y-1 transition"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[180px] object-cover"
              />

              {/* Content */}
              <div className="p-4">
                <h3 className="text-[14px] text-[#FFFFFF] font-medium mb-2">
                  {item.title}
                </h3>

                <div className="flex items-center gap-2 text-[12px] text-[#FFFFFF]/70">
                  <span>
                    <CalendarDays size={16} strokeWidth={2.5} />
                  </span>
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12 flex justify-center">
          <button className="flex items-center gap-4 bg-[#01D4FF] text-[#00343a] text-[14px] font-semibold px-8 py-4 rounded-full shadow-sm hover:bg-[#00c2ea] transition">
            View More
            <span className="w-7 h-7 flex items-center justify-center bg-white text-black rounded-full text-sm">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
