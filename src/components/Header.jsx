"use client";

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Header() {
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
            <NavLink to="/conference" className={navClass}>
              <div
                onMouseEnter={() => setShowConference(true)}
                onMouseLeave={() => setShowConference(false)}
              >
                <div className="flex items-center gap-1 cursor-pointer">
                  Conferences <ChevronDown size={18} />
                </div>
              </div>
            </NavLink>
            <NavLink to="/journals" className={navClass}>
              <div className="flex items-center gap-1">
                Journals <ChevronDown size={20} />
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

      {showConference && (
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
      )}

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
            {mobileConference && (
              <div className="pl-4 mt-2 space-y-2">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="border-b border-white/10 pb-2 text-sm"
                  >
                    <p className="text-white">Myco Tube - 2026 (Virtual)</p>
                    <p className="text-white/60 text-xs">
                      February 02-03, 2026
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* </NavLink> */}
          <NavLink
            to="/main/journals"
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
