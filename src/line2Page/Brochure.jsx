import { Phone, Mail, MessageCircle, Download } from "lucide-react";
import { useState } from "react";

const Brochure = () => {
  return (
    <div className="bg-[#E7F9FF]">
      <BrochureHero />
      <DocumentsSection />
    </div>
  );
};

export default Brochure;

function BrochureHero() {
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
          Conference <span className="text-[#01D4FF]">Brochure</span>
        </h1>

        {/* Subtitle */}
        <p className="text-[#FFFFFF] font-normal text-[14px] md:text-[18px] mt-3">
          Download official documents and materials
        </p>
      </div>
    </section>
  );
}

function DocumentsSection() {
  const [open, setOpen] = useState(false);
  const docs = [
    {
      title: "Conference Brochure 2026",
      desc: "Complete overview of GCC-2026 including schedule, speaker and venue information",
      size: "4.2",
    },
    {
      title: "Scientific Program PDF",
      desc: "Detailed scientific program with all sessions, workshops, and CME credits information.",
      size: "2.8",
    },
    {
      title: "Sponsorship Prospectus",
      desc: "Partnership opportunities and sponsorship packages for GCC-2026.",
      size: "3.5",
    },
    {
      title: "Workshop Guide",
      desc: "Complete guide to all hands-on workshops and practical sessions.",
      size: "3.8",
    },
    {
      title: "Abstract Book",
      desc: "Collection of all accepted abstracts for oral and poster presentations.",
      size: "8.1 MB",
    },
    {
      title: "Venue & Travel Guide",
      desc: "Information about the venue, accommodation, and travel tips for Barcelona.",
      size: "3.5",
    },
  ];

  return (
    <>
      <div className="w-full py-16 flex justify-center">
        <div className="w-[90%]">
          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {docs.map((item, index) => (
              <div
                key={index}
                className="bg-[#D5F4FF] border border-[#1B5061] rounded-[12px] p-[16px] flex flex-col justify-between"
              >
                {/* Top */}
                <div>
                  {/* Icon */}
                  <img
                    src="/file.png"
                    alt=""
                    className="w-[48px] h-[48px] mb-4"
                  />

                  {/* Title */}
                  <h3 className="text-[#133C49] text-[18px] md:text-[28px] font-semibold mb-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#4F5C60] text-[13px] md:text-[18px] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom */}
                <div className="flex items-center justify-between mt-6">
                  {/* PDF Size */}
                  <span className="text-[#4F5C60] text-[18px]">
                    PDF • {item.size}
                  </span>

                  {/* Button */}
                  <button
                    onClick={() => setOpen(true)}
                    className="flex items-center gap-2 border border-[#00849F] text-[#00849F] text-[14px] px-[16px] py-[8px] rounded-[12px] hover:bg-[#01D4FF] hover:text-[#133C49] transition"
                  >
                    <img
                      src="/download.png"
                      alt=""
                      className="w-[20px] h-[20px] object-contain"
                    />
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto px-4 py-6">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-[#13404F]/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Modal Box */}
          <div className="relative z-10 w-full max-w-3xl bg-[#13404F] border border-[#235262] text-white rounded-[20px] p-4 md:p-[24px] max-h-[90vh] overflow-y-auto">
            {/* Title */}
            <p className="md:text-[18px]  mb-6">
              Please fill the below form and submit to download the broucher.
            </p>

            {/* Form Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              <Input label="Title" />
              <Input label="Name" placeholder="Enter Full Name" />

              <Input label="Phone" placeholder="+1 XXX XX XX XX" />
              <Input label="Email" placeholder="Enter Email" />

              <Select label="Select Country/Region" />
              <Select label="Interested In" />

              {/* Message Full Width */}
              <div className="md:col-span-2">
                <label className="text-[14px] text-[#FFFFFF] font-medium">
                  Your Message <span className="text-[#FF3939]">*</span>
                </label>
                <textarea
                  className="w-full mt-1 bg-[#133C49] border border-[#235262] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#01D4FF]"
                  rows={4}
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={() => setOpen(false)}
                className="border border-[#01D4FF] text-[#01D4FF] px-[16px] py-[8px] rounded-[12px] text-[14px]"
              >
                Cancel
              </button>

              <button className="bg-[#01D4FF] text-[#072A41] px-[16px] py-[8px] rounded-[12px] text-[14px] font-semibold">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Input({ label, placeholder }) {
  return (
    <div>
      <label className="text-[14px] text-[#FFFFFF] font-medium">
        {label}
        <span className="text-[#FF3939]">*</span>
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full mt-1 bg-[#133C49] border border-[#235262] rounded-[12px] p-[16px] text-sm focus:outline-none focus:border-[#01D4FF]"
      />
    </div>
  );
}

function Select({ label }) {
  return (
    <div>
      <label className="text-[14px] text-[#FFFFFF] font-medium">
        {label}
        <span className="text-[#FF3939]">*</span>
      </label>
      <select className="w-full mt-1 bg-transparent border border-white/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#01D4FF]">
        <option>Select</option>
      </select>
    </div>
  );
}
