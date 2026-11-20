"use client";

import { use } from "react";
import { useNavigate } from "react-router-dom";

export default function SubmitAbstract() {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen bg-[#E7F9FF] py-16 flex justify-center pt-40">
      <div className="w-[90%]">
        {/* Heading */}
        <h1 className="text-[28px] md:text-[42px] font-semibold text-[#133C49] mb-2">
          Submit Your <span className="text-[#00849F]">Abstract</span>
        </h1>
        <p className="text-[#133C49] text-[12px] mb-8">
          Deadline: June 30, 2026
        </p>

        {/* Layout */}
        <div className="grid md:grid-cols-[1fr_320px] gap-6">
          {/* LEFT FORM */}
          <div className="space-y-6">
            {/* Basic Info */}
            <div className="bg-[#D5F4FF] border border-[#C6E4EF] rounded-[24px] p-[24px]">
              <h2 className=" text-[20px] md:text-[28px] font-semibold text-[#133C49] mb-4">
                Basic Information
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                <Input label="Title" placeholder="Enter Title" star />
                <Input label="Name" placeholder="Enter Name" star />

                <Input label="Phone" placeholder="+1 XXX XX XX XX" star />
                <Input label="WhatsApp Number" />

                <Input label="Email" placeholder="Enter Email" star />
                <Input label="Alternative Email" placeholder="Enter Email" />

                <Input
                  label="Organization"
                  placeholder="Enter Organization"
                  star
                />
                <Input label="City" placeholder="Enter City" star />

                <Select label="Select Country/Region" />
                <Select label="Interested In" />

                {/* Full width */}
                <div className="md:col-span-2">
                  <Select label="Abstract Title*" />
                </div>

                {/* Message */}
                <div className="md:col-span-2">
                  <label className="text-[14px] text-[#133C49] font-medium">
                    Your Message <span className="text-[#FF3939]">*</span>
                  </label>
                  <textarea
                    className="w-full mt-1 bg-[#E7F9FF] border border-[#C6E4EF] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#01D4FF]"
                    rows={4}
                  />
                </div>
              </div>
            </div>

            {/* Upload Section */}
            <div className="bg-[#D5F4FF] border border-[#C6E4EF] rounded-[24px] p-[24px]">
              <h2 className="text-[18px] md:text-[28px] font-semibold text-[#133C49] mb-4">
                Upload Your Abstract File{" "}
                <span className="text-[#FF3939]">*</span>
              </h2>

              <div className="border-2 border-dashed border-[#01D4FF] rounded-[26px] p-[24px] text-center bg-[#EAFBFF]">
                <div className="w-[46px] h-[46px] mx-auto mb-3">
                  <img src="/cloud-add.png" alt="" className="w-full h-full" />
                </div>

                <p className="text-[#133C49] text-[14px] font-semibold md:text-[18px] mb-1">
                  Choose a file or drag & drop it here
                </p>

                <p className="text-[#4F5C60] text-[12px] md:text-[18px] mb-4">
                  PDF, DOC, DOCX or RTF formats
                </p>

                <button className="border-2 border-[#01D4FF] text-[#01D4FF] px-[33px] py-[16px] rounded-[16px] text-[14px] hover:bg-[#01D4FF] hover:text-[#133C49] transition">
                  Browse File
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => navigate("/conference/success")}
                className="bg-[#01D4FF] text-[#072A41] px-[16px] py-[8px] rounded-[12px] text-[14px] font-semibold"
              >
                Submit Abstract
              </button>

              <button className="border border-[#00849F] text-[#00849F] px-[16px] py-[8px] rounded-[12px] text-[14px] font-semibold">
                Download Sample Abstract File
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hidden md:block">
            <div className="">
              <img
                src="/person.png"
                alt="person"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Reusable Input */
function Input({ label, placeholder, star }) {
  return (
    <div>
      <label className="text-[14px] text-[#133C49] font-medium">
        {label} {star && <span className="text-[#FF3939]">*</span>}{" "}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full mt-1 bg-[#E7F9FF] border border-[#C6E4EF] rounded-[12px] p-[16px] text-sm focus:outline-none focus:border-[#01D4FF]"
      />
    </div>
  );
}

/* Reusable Select */
function Select({ label }) {
  return (
    <div>
      <label className="text-[14px] text-[#133C49] font-medium">
        {label} <span className="text-[#FF3939]">*</span>{" "}
      </label>
      <select className="w-full mt-1  border border-[#C6E4EF] bg-[#E7F9FF] rounded-[12px] p-[16px] text-sm focus:outline-none focus:border-[#01D4FF]">
        <option>Select</option>
      </select>
    </div>
  );
}
