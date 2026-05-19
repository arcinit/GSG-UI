"use client";

import { use, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import http from "../service/http";
import { toast } from "react-toastify";

export default function SubmitAbstract() {
  const navigate = useNavigate();

  const { slug } = useParams();
  const [abstract, setAbstract] = useState(null);

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
  }, []);

  const countryOptions = [
    {
      code: "IN",
      name: "India",
      cities: ["Delhi", "Mumbai", "Bangalore", "Chennai"],
    },
    {
      code: "US",
      name: "USA",
      cities: ["New York", "Los Angeles", "Chicago", "Houston"],
    },
  ];

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

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "country" && { city: "" }), // reset city
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    setForm((prev) => ({
      ...prev,
      file,
    }));
  };

  const selectedCountry = countryOptions.find((c) => c.code === form.country);

  const cities = selectedCountry?.cities || [];

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      if (!form.author_name || !form.email || !form.file) {
        alert("Required fields missing");
        return;
      }

      setLoading(true);

      const formData = new FormData();

      Object.keys(form).forEach((key) => {
        formData.append(key, form[key]);
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

      // toast("Abstract submitted successfully!");

      // navigate("/conference/success");
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
    <div className="w-full min-h-screen bg-[#E7F9FF] py-16 flex justify-center pt-40">
      <div className="w-[90%]">
        {/* Heading */}
        <h1 className="text-[28px] md:text-[42px] font-semibold text-[#133C49] mb-2">
          Submit Your <span className="text-[#00849F]">Abstract</span>
        </h1>
        {abstract?.deadline?.label && (
          <p className="text-[#133C49] text-[12px] mb-8">
            {abstract?.deadline?.label} : {abstract?.deadline?.date}
          </p>
        )}

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
                  placeholder="Enter Author Name"
                  star
                />

                <Input
                  label="Phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+1 XXX XX XX XX"
                  star
                />
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

                <div>
                  <label className="text-[14px] text-[#133C49] font-medium">
                    Select Country/Region
                    <span className="text-[#FF3939]">*</span>
                  </label>
                  {/* <select
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    className="w-full mt-1  border border-[#C6E4EF] bg-[#E7F9FF] rounded-[12px] p-[16px] text-sm text-[#00849F] focus:outline-none focus:border-[#01D4FF]"
                  >
                    <option value="">Select</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                  </select> */}
                  <select
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    className="w-full mt-1 border border-[#C6E4EF] bg-[#E7F9FF] rounded-[12px] p-[16px] text-sm text-[#00849F] focus:outline-none focus:border-[#01D4FF]"
                  >
                    <option value="">Select</option>

                    {countryOptions.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-[14px] text-[#133C49] font-medium">
                    City <span className="text-[#FF3939]">*</span>
                  </label>

                  <select
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    disabled={!form.country}
                    className="w-full mt-1 border border-[#C6E4EF] bg-[#E7F9FF] rounded-[12px] p-[16px] text-sm text-[#00849F] focus:outline-none focus:border-[#01D4FF]"
                  >
                    <option value="">
                      {form.country ? "Select City" : "Select country first"}
                    </option>

                    {cities.map((city, i) => (
                      <option key={i} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-[14px] text-[#133C49] font-medium">
                    Interested In <span className="text-[#FF3939]">*</span>
                  </label>

                  <select
                    name="interested_in"
                    value={form.interested_in}
                    onChange={handleChange}
                    className="w-full mt-1 border border-[#C6E4EF] bg-[#E7F9FF] rounded-[12px] p-[16px] text-sm text-[#00849F] focus:outline-none focus:border-[#01D4FF]"
                  >
                    <option value="">Select Interested In</option>
                    <option value="Web Development">Web Development</option>
                    <option value="App Development">App Development</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="SEO">SEO</option>
                    <option value="E-Commerce">E-Commerce</option>
                    <option value="Software Testing">Software Testing</option>
                    <option value="Cloud Computing">Cloud Computing</option>
                    <option value="AI / Machine Learning">
                      AI / Machine Learning
                    </option>
                  </select>
                </div>

                {/* Full width */}
                <div className="md:col-span-2">
                  <div>
                    <label className="text-[14px] text-[#133C49] font-medium">
                      Abstract Title
                      <span className="text-[#FF3939]">*</span>{" "}
                    </label>
                    <select
                      name="abstract_title"
                      value={form.abstract_title}
                      onChange={handleChange}
                      className="w-full mt-1  border border-[#C6E4EF] bg-[#E7F9FF] rounded-[12px] p-[16px] text-sm text-[#00849F] focus:outline-none focus:border-[#01D4FF]"
                    >
                      <option value="">Select</option>
                      {abstract?.topics
                        ?.filter((t) => t.is_enabled)
                        ?.map((topic) => (
                          <option key={topic.id} value={topic.id}>
                            {topic.name}
                          </option>
                        ))}
                    </select>
                  </div>
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
            {/* <div className="bg-[#D5F4FF] border border-[#C6E4EF] rounded-[24px] p-[24px]">
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
            </div> */}
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

                {/* Button (same UI, now functional) */}
                <label
                  htmlFor="fileUpload"
                  className="cursor-pointer inline-block border-2 border-[#01D4FF] text-[#01D4FF] px-[33px] py-[16px] rounded-[16px] text-[14px] hover:bg-[#01D4FF] hover:text-[#133C49] transition"
                >
                  Browse File
                </label>

                {/* Selected file name */}
                {form.file && (
                  <p className="mt-3 text-sm text-green-600">
                    Selected: {form.file.name}
                  </p>
                )}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              {/* <button
                onClick={handleSubmit}
                disabled={loading}
                className={`px-[16px] py-[8px] rounded-[12px] text-[14px] font-semibold transition
                ${
                  loading
                    ? "bg-[#01D4FF]/60 text-[#072A41] cursor-not-allowed"
                    : "bg-[#01D4FF] text-[#072A41] hover:opacity-90"
                }`}
                className="bg-[#01D4FF] text-[#072A41] px-[16px] py-[8px] rounded-[12px] text-[14px] font-semibold"
              > */}
              <button
                onClick={handleSubmit}
                disabled={loading}
                className={`px-[16px] py-[8px] rounded-[12px] text-[14px] font-semibold transition
                ${
                  loading
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
          <div className="hidden md:block">
            <div className="">
              <img
                // src="/person.png"

                src={
                  abstract?.side_image.image
                    ? abstract?.side_image.image
                    : "/person.png"
                }
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
// function Input({ label, placeholder, star }) {
//   return (
//     <div>
//       <label className="text-[14px] text-[#133C49] font-medium">
//         {label} {star && <span className="text-[#FF3939]">*</span>}{" "}
//       </label>
//       <input
//         type="text"
//         placeholder={placeholder}
//         className="w-full mt-1 bg-[#E7F9FF] border border-[#C6E4EF] rounded-[12px] p-[16px] text-sm focus:outline-none focus:border-[#01D4FF]"
//       />
//     </div>
//   );
// }

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

/* Reusable Select */
function Select({ label, name, value, onChange }) {
  return (
    <div>
      <label className="text-[14px] text-[#133C49] font-medium">
        {label} <span className="text-[#FF3939]">*</span>{" "}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full mt-1  border border-[#C6E4EF] bg-[#E7F9FF] rounded-[12px] p-[16px] text-sm text-[#00849F] focus:outline-none focus:border-[#01D4FF]"
      >
        <option value="">Select</option>
        <option value="India">India</option>
        <option value="USA">USA</option>
      </select>
    </div>
  );
}
