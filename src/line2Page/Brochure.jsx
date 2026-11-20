import { Phone, Mail, MessageCircle, Download } from "lucide-react";
import { useState } from "react";
import http from "../service/http";
import { useParams } from "react-router-dom";

const Brochure = ({ data }) => {
  return (
    <div className="bg-[#E7F9FF]">
      <BrochureHero />
      <DocumentsSection data={data} />
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

function DocumentsSection({ data }) {
  if (!data) return null;
  const { slug } = useParams();
  const [open, setOpen] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState(null);
  // const docs = [
  //   {
  //     title: "Conference Brochure 2026",
  //     desc: "Complete overview of GCC-2026 including schedule, speaker and venue information",
  //     size: "4.2",
  //   },
  //   {
  //     title: "Scientific Program PDF",
  //     desc: "Detailed scientific program with all sessions, workshops, and CME credits information.",
  //     size: "2.8",
  //   },
  //   {
  //     title: "Sponsorship Prospectus",
  //     desc: "Partnership opportunities and sponsorship packages for GCC-2026.",
  //     size: "3.5",
  //   },
  //   {
  //     title: "Workshop Guide",
  //     desc: "Complete guide to all hands-on workshops and practical sessions.",
  //     size: "3.8",
  //   },
  //   {
  //     title: "Abstract Book",
  //     desc: "Collection of all accepted abstracts for oral and poster presentations.",
  //     size: "8.1 MB",
  //   },
  //   {
  //     title: "Venue & Travel Guide",
  //     desc: "Information about the venue, accommodation, and travel tips for Barcelona.",
  //     size: "3.5",
  //   },
  // ];

  const docs = data?.brochures?.filter((b) => b.is_enabled) || [];
  console.log("docs:-", docs);

  const [form, setForm] = useState({
    title: "",
    name: "",
    phone: "",
    email: "",
    country: "",
    interested_in: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      setSubmitting(true);

      // basic validation
      if (!form.name || !form.email) {
        alert("Name and Email are required");
        return;
      }

      await http.post(`/conferences/${slug}/brochure/`, form);

      // success
      alert("Brochure request submitted!");

      if (selectedDoc?.file) {
        try {
          const res = await fetch(selectedDoc.file, { method: "HEAD" });

          if (!res.ok) {
            throw new Error("File not found");
          }

          // ✅ Open file (better than forcing download)
          window.open(selectedDoc.file, "_blank");
        } catch (err) {
          console.error("File error:", err);
          alert("File not available. Please try again later.");
        }
      } else {
        alert("No file available for download");
      }

      setForm({
        title: "",
        name: "",
        phone: "",
        email: "",
        country: "",
        interested_in: "",
        message: "",
      });

      setOpen(false);
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="w-full py-16 flex justify-center">
        <div className="w-[90%]">
          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* {docs.map((item, index) => (
              <div
                key={index}
                className="bg-[#D5F4FF] border border-[#1B5061] rounded-[12px] p-[16px] flex flex-col justify-between"
              >
               
                <div>
                  
                  <img
                    src="/file.png"
                    alt=""
                    className="w-[48px] h-[48px] mb-4"
                  />

                 
                  <h3 className="text-[#133C49] text-[18px] md:text-[28px] font-semibold mb-2">
                    {item.title}
                  </h3>

                  
                  <p className="text-[#4F5C60] text-[13px] md:text-[18px] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                
                <div className="flex items-center justify-between mt-6">
                  
                  <span className="text-[#4F5C60] text-[18px]">
                  
                    PDF • {item.file_size} MB
                  </span>

                
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
            ))} */}
            {docs.map((item, index) => (
              <div
                key={index}
                className="group bg-[#D5F4FF] border border-[#1B5061] rounded-[16px] p-[20px] 
                flex flex-col justify-between cursor-pointer
                transition-all duration-300
                hover:-translate-y-1
                hover:border-[#01D4FF]
                hover:shadow-[0_0_25px_rgba(1,212,255,0.25)]
                hover:bg-[#CFF2FF] text-[#133C49] hover:text-[#01D4FF]"
              >
                {/* Top */}
                <div>
                  <div className="w-[56px] h-[56px] bg-[#154351] rounded-[12px] flex items-center justify-center mb-4">
                    <img src="/file.png" className="w-[28px] h-[28px]" />
                  </div>

                  <h3 className="text-[18px] md:text-[28px] font-semibold mb-2">
                    {item.title}
                  </h3>

                  <p className="text-[#4F5C60] text-[13px] md:text-[18px] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom */}
                <div className="flex items-center justify-between mt-6">
                  <span className="text-[#4F5C60] text-[16px]">
                    PDF • {item.file_size} MB
                  </span>

                  {/* Button */}
                  <button
                    onClick={() => {
                      setSelectedDoc(item); // 👈 store clicked item
                      setOpen(true);
                    }}
                    className="flex items-center gap-2 
                      border border-[#00849F] text-[#00849F] 
                      text-[14px] px-[18px] py-[10px] rounded-[14px]
                      transition-all duration-300

                      /* 👇 THIS IS THE MAGIC */
                      group-hover:bg-gradient-to-r group-hover:from-[#01D4FF] group-hover:to-[#00B8D9]
                      group-hover:text-white group-hover:border-transparent
                    "
                  >
                    <DownloadIcon className="w-5 h-5 transition group-hover:translate-y-[2px]" />
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
              <Input
                label="Title"
                name="title"
                value={form.title}
                onChange={handleChange}
              />
              <Input
                label="Name"
                placeholder="Enter Full Name"
                name="name"
                value={form.name}
                onChange={handleChange}
              />

              <Input
                label="Phone"
                placeholder="+1 XXX XX XX XX"
                name="phone"
                value={form.phone}
                onChange={handleChange}
              />
              <Input
                label="Email"
                placeholder="Enter Email"
                name="email"
                value={form.email}
                onChange={handleChange}
              />

              <Select
                label="Select Country/Region"
                name="country"
                value={form.country}
                onChange={handleChange}
              />
              <Input
                label="Interested In"
                placeholder="Enter Interested In"
                name="interested_in"
                value={form.interested_in}
                onChange={handleChange}
              />

              {/* Message Full Width */}
              <div className="md:col-span-2">
                <label className="text-[14px] text-[#FFFFFF] font-medium">
                  Your Message <span className="text-[#FF3939]">*</span>
                </label>
                {/* <textarea
                  className="w-full mt-1 bg-[#133C49] border border-[#235262] rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#01D4FF]"
                  rows={4}
                /> */}
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
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

              <button
                onClick={handleSubmit}
                disabled={submitting}
                className="bg-[#01D4FF] text-[#072A41] px-[16px] py-[8px] rounded-[12px] text-[14px] font-semibold"
              >
                {submitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const DownloadIcon = ({ className = "w-5 h-5" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 4v10" />
      <path d="M8 10l4 4 4-4" />
      <path d="M6 20h12" />
    </svg>
  );
};

function Input({ label, name, value, onChange, placeholder }) {
  return (
    <div>
      <label className="text-[14px] text-[#FFFFFF] font-medium">
        {label} <span className="text-[#FF3939]">*</span>
      </label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full mt-1 bg-[#133C49] border border-[#235262] rounded-[12px] p-[16px] text-sm focus:outline-none focus:border-[#01D4FF]"
      />
    </div>
  );
}

function Select({ label, name, value, onChange }) {
  return (
    <div>
      <label className="text-[14px] text-[#FFFFFF] font-medium">
        {label} <span className="text-[#FF3939]">*</span>
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full mt-1 bg-transparent border border-white/20 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#01D4FF]"
      >
        <option value="" className="text-black">
          Select
        </option>
        <option value="India" className="text-black">
          India
        </option>
        <option value="USA" className="text-black">
          USA
        </option>
      </select>
    </div>
  );
}
