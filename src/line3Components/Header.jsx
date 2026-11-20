"use client";

import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/journals" },
    { name: "Journals", path: "/journals/all-journals" },
    { name: "Subjects", path: "/journals/subjects" },
    { name: "For Authors", path: "/journals/authors" },
    { name: "For Reviewers", path: "/journals/reviewers" },
    { name: "Editorial Board", path: "/journals/editorial" },
  ];

  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center mt-4">
      {/* Outer spacing container */}
      <div className="w-[95%] md:w-[90%]">
        {/* Main Navbar */}
        <div
          className="flex items-center justify-between px-6 md:px-[24px] py-[12px] rounded-[16px] 
        bg-[#09182E] shadow-lg "
        >
          {/* Logo */}
          <div
            onClick={() => navigate("/")}
            className="flex items-center gap-2"
          >
            <img
              src="/logo.png"
              alt="logo"
              className="h-10 object-contain bg-white rounded-md px-2 py-1"
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6 text-white text-sm">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                end={item.path === "/journals"} // only for Home
                className={({ isActive }) =>
                  `px-[16px] py-[8px] rounded-[12px] transition ${
                    isActive
                      ? "bg-[#072A41] text-[#01D4FF] text-[14px] font-semibold"
                      : "hover:bg-white/10"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <button
              onClick={() => navigate("/journals/submit-manuscript")}
              className="hidden md:block bg-cyan-400 text-black px-5 py-2 rounded-full font-semibold hover:bg-cyan-300 transition"
            >
              Submit Manuscript
            </button>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden mt-3 rounded-2xl bg-[#0b3c44] text-white px-6 py-4 space-y-4 shadow-lg">
            {navItems.map((item, index) => (
              <NavLink key={index} to={item.path} className="block">
                {item.name}
              </NavLink>
            ))}

            <button
              onClick={() => navigate("/journals/submit-manuscript")}
              className="w-full bg-cyan-400 text-black py-2 rounded-full font-semibold"
            >
              Submit Manuscript
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
