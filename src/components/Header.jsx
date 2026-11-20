"use client";

import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import http from "../service/http";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const navClass = ({ isActive }) =>
    `transition ${
      isActive
        ? "text-[#0b3c44] font-semibold"
        : "text-gray-600 hover:text-[#0b3c44]"
    }`;

  const mobileNavClass = ({ isActive }) =>
    `block py-3 text-lg ${
      isActive ? "text-[#01D4FF] font-semibold" : "text-white/80"
    }`;

  const [showConference, setShowConference] = useState(false);
  const [mobileConference, setMobileConference] = useState(false);
  const [conferences, setConferences] = useState([]);
  useEffect(() => {
    const fetchConferences = async () => {
      try {
        const res = await http.get("/conferences/");
        setConferences(res.data || []);
      } catch (err) {
        console.error("Error fetching conferences:", err);
      }
    };

    fetchConferences();
  }, []);

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-[999] flex justify-center">
        <div className="w-[95%] md:w-[90%] flex items-center justify-between px-4 md:px-10 py-3 md:py-4 bg-white text-black rounded-b-2xl md:rounded-b-3xl shadow-md">
          {/* LOGO */}
          <img src="/logo.png" className="w-[90px] md:w-[103px] h-auto" />

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-8 text-[18px] font-medium">
            <NavLink to="/main" className={navClass}>
              Home
            </NavLink>
            <NavLink to="/main/about" className={navClass}>
              About Us
            </NavLink>
            {/* <NavLink to="/conference" className={navClass}>
              <div
                onMouseEnter={() => setShowConference(true)}
                onMouseLeave={() => setShowConference(false)}
              >
                <div className="flex items-center gap-1 cursor-pointer">
                  Conferences <ChevronDown size={18} />
                </div>
              </div>
            </NavLink> */}
            <div className="relative">
              {/* CLICKABLE LABEL */}
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setShowConference((prev) => !prev);
                }}
                className="flex items-center gap-1 cursor-pointer text-gray-600 hover:text-[#0b3c44]"
              >
                Conferences <ChevronDown size={18} />
              </div>

              {/* DROPDOWN */}
              {showConference && (
                <div className="fixed top-[70px] left-1/2 transform -translate-x-1/2 w-[90%] rounded-b-2xl bg-white shadow-xl z-[999]">
                  <div className="max-w-7xl mx-auto px-10 py-6 grid grid-cols-4 gap-8">
                    {conferences.length === 0 ? (
                      <p className="text-gray-500">No conferences found</p>
                    ) : (
                      conferences.map((conf) => (
                        <div
                          key={conf.id}
                          onClick={() => navigate(`/conference/${conf.slug}`)}
                          className="border-b border-gray-300 pb-2 cursor-pointer hover:bg-gray-50"
                        >
                          {/* TITLE */}
                          <p className="text-[#133C49] font-medium text-[14px]">
                            {conf.name} {conf.is_virtual ? "(Virtual)" : ""}
                          </p>

                          {/* DATE */}
                          <p className="text-[12px] text-gray-500">
                            {new Date(conf.start_date).toDateString()} -{" "}
                            {new Date(conf.end_date).toDateString()}
                          </p>

                          {/* LOCATION */}
                          <p className="text-[11px] text-gray-400">
                            {conf.city}, {conf.country}
                          </p>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>
            <NavLink to="/journals" className={navClass}>
              <div className="flex items-center gap-1">
                Journals
                {/* <ChevronDown size={20} /> */}
              </div>
            </NavLink>
            <NavLink to="/main/blogs" className={navClass}>
              Blogs
            </NavLink>
            <NavLink to="/main/gallery" className={navClass}>
              Gallery
            </NavLink>
            <NavLink to="/main/contact" className={navClass}>
              Contact Us
            </NavLink>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-black"
            onClick={() => setOpen(true)}
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      {/* {showConference && (
        <div
          className="fixed top-[75px] left-1/2 transform -translate-x-1/2 w-[90%] rounded-b-2xl bg-white shadow-xl z-[999]"
          onMouseEnter={() => setShowConference(true)}
          onMouseLeave={() => setShowConference(false)}
        >
          <div className="max-w-7xl mx-auto px-10 py-6 grid grid-cols-4 gap-8">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-b border-gray-300 pb-2">
                <p className="text-[#133C49] font-medium text-[14px]">
                  Myco Tube - 2026 (Virtual)
                </p>
                <p className="text-[12px] text-gray-500">
                  February 02-03, 2026
                </p>
              </div>
            ))}
          </div>
        </div>
      )} */}

      {/* MOBILE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] bg-[#0B2C36] text-white z-[1000] transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* CLOSE BUTTON */}
        <div className="flex justify-end p-4">
          <button onClick={() => setOpen(false)}>
            <X size={28} />
          </button>
        </div>

        {/* MENU ITEMS */}
        <nav className="flex flex-col px-6">
          <NavLink
            to="/main"
            className={mobileNavClass}
            onClick={() => setOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/main/about"
            className={mobileNavClass}
            onClick={() => setOpen(false)}
          >
            About Us
          </NavLink>
          {/* <NavLink
            to="/conferences"
            className={mobileNavClass}
            onClick={() => setOpen(false)}
          > */}
          <div className="py-3">
            <button
              onClick={() => setMobileConference(!mobileConference)}
              className="flex items-center justify-between w-full text-lg text-white/80"
            >
              Conferences
              <ChevronDown
                size={18}
                className={`transition ${mobileConference ? "rotate-180" : ""}`}
              />
            </button>

            {/* DROPDOWN */}
            {/* DROPDOWN */}
            {mobileConference && (
              <div className="pl-4 mt-3 space-y-3 max-h-[300px] overflow-y-auto">
                {conferences.length === 0 ? (
                  <p className="text-white/60 text-sm">No conferences</p>
                ) : (
                  conferences.map((conf) => (
                    <div
                      key={conf.id}
                      onClick={() => {
                        setOpen(false); // close mobile menu
                        setMobileConference(false); // close dropdown
                        navigate(`/conference/${conf.slug}`);
                      }}
                      className="border-b border-white/10 pb-2 cursor-pointer"
                    >
                      {/* TITLE */}
                      <p className="text-white text-sm font-medium">
                        {conf.name}
                      </p>

                      {/* DATE */}
                      <p className="text-white/60 text-xs">
                        {new Date(conf.start_date).toDateString()}
                      </p>
                    </div>
                  ))
                )}

                {/* VIEW ALL */}
                <div
                  onClick={() => {
                    setOpen(false);
                    navigate("/conference");
                  }}
                  className="text-[#01D4FF] text-sm cursor-pointer pt-2"
                >
                  View All Conferences →
                </div>
              </div>
            )}
          </div>
          {/* </NavLink> */}
          <NavLink
            to="/journals"
            className={mobileNavClass}
            onClick={() => setOpen(false)}
          >
            Journals
          </NavLink>
          <NavLink
            to="/main/blogs"
            className={mobileNavClass}
            onClick={() => setOpen(false)}
          >
            Blogs
          </NavLink>
          <NavLink
            to="/main/gallery"
            className={mobileNavClass}
            onClick={() => setOpen(false)}
          >
            Gallery
          </NavLink>
          <NavLink
            to="/main/contact"
            className={mobileNavClass}
            onClick={() => setOpen(false)}
          >
            Contact Us
          </NavLink>
        </nav>
      </div>

      {/* BACKDROP */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-[999]"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
