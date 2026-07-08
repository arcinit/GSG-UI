"use client";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import http from "../service/http";
import { toast } from "react-toastify";

const phoneCodes = [
  { code: "+1", flag: "🇺🇸" },
  { code: "+91", flag: "🇮🇳" },
];

const countryOptions = [
  { code: "IN", name: "India" },
  { code: "US", name: "USA" },
];

const interestedOptions = [
  "Web Development",
  "App Development",
  "UI/UX Design",
  "Digital Marketing",
  "Graphic Design",
  "SEO",
  "E-Commerce",
  "Software Testing",
  "Cloud Computing",
  "AI / Machine Learning",
];

export default function SubmitAbstract() {
  const navigate = useNavigate();
  const { slug } = useParams();

  const [abstract, setAbstract] = useState(null);
  const [loading, setLoading] = useState(false);
  const [phoneCode, setPhoneCode] = useState("+1");

  const [form, setForm] = useState({
    title: "",
    author_name: "",
    phone: "",
    whatsapp: "",
    email: "",
    alt_email: "",
    organization: "",
    city: "",
    country: "",
    interested_in: "",
    abstract_title: "",
    message: "",
    track: "1",
    file: null,
  });

  useEffect(() => {
    const fetchAbstract = async () => {
      try {
        const res = await http.get(`abstracts/${slug}/abstract/submit/`);
        setAbstract(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchAbstract();
  }, [slug]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setForm((prev) => ({
      ...prev,
      file,
    }));
  };

  const handleSubmit = async () => {
    try {
      if (!form.author_name || !form.email || !form.file) {
        alert("Required fields missing");
        return;
      }

      setLoading(true);

      const formData = new FormData();

      Object.keys(form).forEach((key) => {
        if (key === "phone") {
          formData.append("phone", form.phone ? `${phoneCode} ${form.phone}` : "");
        } else {
          formData.append(key, form[key]);
        }
      });

      const res = await http.post(
        `abstracts/${slug}/abstract/submit/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      toast.success("Abstract submitted successfully!");

      navigate(`/conference/${slug}/success`, {
        state: {
          submission: res.data,
        },
      });
    } catch (err) {
      console.error(err);
      const errors = err?.response?.data;

      if (errors) {
        Object.keys(errors).forEach((field) => {
          errors[field].forEach((message) => {
            toast.error(message);
          });
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#E7F9FF] py-16 flex align-items-start justify-center pt-40">
      <div className="w-[90%]">
        <h1 className="text-[28px] md:text-[42px] font-semibold text-[#133C49] mb-2">
          Submit Your <span className="text-[#00849F]">Abstract</span>
        </h1>
        {abstract?.deadline?.label && (
          <p className="text-[#133C49] text-[12px] mb-8">
            {abstract?.deadline?.label} : {abstract?.deadline?.date}
          </p>
        )}

        {/* Layout */}
        <div className="grid md:grid-cols-[1fr_320px] gap-6 items-start">
          {/* LEFT FORM */}
          <div className="space-y-6">
            {/* Basic Info */}
            <div className="bg-[#D5F4FF] border border-[#C6E4EF] rounded-[24px] p-[24px]">
              <h2 className="text-[20px] md:text-[28px] font-semibold text-[#133C49] mb-4">
                Basic Information
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  label="Title"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="Enter Title"
                  star
                />
                <Input
                  label="Name"
                  name="author_name"
                  value={form.author_name}
                  onChange={handleChange}
                  placeholder="Enter Name"
                  star
                />

                {/* Phone with country code */}
                <div>
                  <label className="text-[14px] text-[#133C49] font-medium">
                    Phone <span className="text-[#FF3939]">*</span>
                  </label>
                  <div className="w-full mt-1 flex items-center border border-[#C6E4EF] bg-[#E7F9FF] rounded-[12px] focus-within:border-[#01D4FF] overflow-hidden">
                    <select
                      value={phoneCode}
                      onChange={(e) => setPhoneCode(e.target.value)}
                      className="bg-transparent text-sm text-[#00849F] focus:outline-none pl-[16px] pr-2 py-[16px] border-r border-[#C6E4EF]"
                    >
                      {phoneCodes.map((p) => (
                        <option key={p.code} value={p.code}>
                          {p.flag} {p.code}
                        </option>
                      ))}
                    </select>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      type="tel"
                      placeholder="X XX XX XX XX"
                      className="w-full py-[16px] pl-3 pr-4 bg-transparent text-sm focus:outline-none"
                    />
                  </div>
                </div>

                <Input
                  label="WhatsApp Number"
                  name="whatsapp"
                  value={form.whatsapp}
                  onChange={handleChange}
                />

                <Input
                  label="Email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter Email"
                  star
                />
                <Input
                  label="Alternative Email"
                  name="alt_email"
                  value={form.alt_email}
                  onChange={handleChange}
                  placeholder="Enter Email"
                />

                <Input
                  label="Organization"
                  name="organization"
                  value={form.organization}
                  onChange={handleChange}
                  placeholder="Enter Organization"
                  star
                />
                <Input
                  label="City"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="Enter City"
                  star
                />

                <SelectField
                  label="Select Country/Region"
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  placeholder="Select"
                  options={countryOptions.map((c) => ({
                    value: c.code,
                    label: c.name,
                  }))}
                />

                <SelectField
                  label="Interested In"
                  name="interested_in"
                  value={form.interested_in}
                  onChange={handleChange}
                  placeholder="Select One"
                  options={interestedOptions.map((i) => ({
                    value: i,
                    label: i,
                  }))}
                />

                {/* Full width */}
                <div className="md:col-span-2">
                  <SelectField
                    label="Abstract Title"
                    name="abstract_title"
                    value={form.abstract_title}
                    onChange={handleChange}
                    placeholder="Abstract Title"
                    options={
                      abstract?.topics
                        ?.filter((t) => t.is_enabled)
                        ?.map((topic) => ({
                          value: topic.id,
                          label: topic.name,
                        })) || []
                    }
                  />
                </div>

                {/* Message */}
                <div className="md:col-span-2">
                  <label className="text-[14px] text-[#133C49] font-medium">
                    Your Message <span className="text-[#FF3939]">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
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

              {/* Hidden Input */}
              <input
                type="file"
                accept=".pdf,.doc,.docx,.rtf"
                onChange={handleFileChange}
                className="hidden"
                id="fileUpload"
              />

              {/* Drop Area */}
              <div
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  const file = e.dataTransfer.files[0];
                  if (file) {
                    setForm((prev) => ({ ...prev, file }));
                  }
                }}
                className="border-2 border-dashed border-[#01D4FF] rounded-[26px] p-[24px] text-center bg-[#EAFBFF]"
              >
                <div className="w-[46px] h-[46px] mx-auto mb-3">
                  <img src="/cloud-add.png" alt="" className="w-full h-full" />
                </div>

                <p className="text-[#133C49] text-[14px] font-semibold md:text-[18px] mb-1">
                  Choose a file or drag & drop it here
                </p>

                <p className="text-[#4F5C60] text-[12px] md:text-[18px] mb-4">
                  PDF, DOC, DOCX or RTF formats
                </p>

                <label
                  htmlFor="fileUpload"
                  className="cursor-pointer inline-block border-2 border-[#01D4FF] text-[#01D4FF] px-[33px] py-[16px] rounded-[16px] text-[14px] hover:bg-[#01D4FF] hover:text-[#133C49] transition"
                >
                  Browse File
                </label>

                {form.file && (
                  <p className="mt-3 text-sm text-green-600">
                    Selected: {form.file.name}
                  </p>
                )}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={handleSubmit}
                disabled={loading}
                className={`px-[16px] py-[8px] rounded-[12px] text-[14px] font-semibold transition
                ${loading
                    ? "bg-[#01D4FF]/60 text-[#072A41] cursor-not-allowed"
                    : "bg-[#01D4FF] text-[#072A41] hover:opacity-90"
                  }`}
              >
                {loading ? "Submitting..." : "Submit Abstract"}
              </button>

              <button
                onClick={() => {
                  const fileUrl = abstract?.sample_file?.file;

                  if (!fileUrl) {
                    alert("File not available");
                    return;
                  }

                  window.open(fileUrl, "_blank");
                }}
                className="border border-[#00849F] text-[#00849F] px-[16px] py-[8px] rounded-[12px] text-[14px] font-semibold"
              >
                Download Sample Abstract File
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hidden md:block self-start">
            <img
              src={
                abstract?.side_image?.image
                  ? abstract.side_image.image
                  : "/person.png"
              }
              alt="person"
              className="w-full h-auto object-fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* Reusable Input */
function Input({ label, name, value, onChange, placeholder, star }) {
  return (
    <div>
      <label className="text-[14px] text-[#133C49] font-medium">
        {label} {star && <span className="text-[#FF3939]">*</span>}
      </label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        type="text"
        placeholder={placeholder}
        className="w-full mt-1 bg-[#E7F9FF] border border-[#C6E4EF] rounded-[12px] p-[16px] text-sm focus:outline-none focus:border-[#01D4FF]"
      />
    </div>
  );
}

/* Reusable Select with custom chevron, matches Figma dropdown style */
function SelectField({
  label,
  name,
  value,
  onChange,
  options = [],
  placeholder = "Select",
  disabled,
  star = true,
}) {
  return (
    <div>
      <label className="text-[14px] text-[#133C49] font-medium">
        {label} {star && <span className="text-[#FF3939]">*</span>}
      </label>
      <div className="relative mt-1">
        <select
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className="w-full appearance-none border border-[#C6E4EF] bg-[#E7F9FF] rounded-[12px] p-[16px] pr-10 text-sm text-[#00849F] focus:outline-none focus:border-[#01D4FF] disabled:opacity-60"
        >
          <option value="">{placeholder}</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <svg
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#133C49]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </div>
  );
}