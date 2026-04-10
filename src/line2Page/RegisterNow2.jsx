import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterNow2 = () => {
  return (
    <div className="bg-[#E7F9FF]">
      <RegisterHero />
      <RegistrationForm />
    </div>
  );
};

export default RegisterNow2;

function RegisterHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <img
        src="/about.png"
        alt="about-bg"
        className="absolute inset-0 w-full h-full object-fill object-center"
      />

      {/* Content */}
      <div className="relative z-10 text-center text-[#FFFFFF] pt-20 md:pt-0">
        {/* Badge */}
        <div className="inline-block bg-[#133C49]/50 text-[#01D4FF] text-[18px] px-[16px] py-[8px] rounded-full mb-4">
          GCC-2026
        </div>

        {/* Heading */}
        <h1 className="text-[32px] md:text-[54px] font-medium leading-tight">
          Register <span className="text-[#01D4FF]">Now</span>
        </h1>

        {/* Subtitle */}
        <p className="text-[#FFFFFF] font-normal text-[14px] md:text-[18px] mt-3">
          Secure your spot at the Global Congress on Cardiology 2026
        </p>

        {/* Countdown Card */}
        <CountdownCard />
      </div>
    </section>
  );
}

function CountdownCard() {
  const data = [
    { value: 119, label: "DAYS" },
    { value: 22, label: "Hours" },
    { value: 18, label: "Minutes" },
    { value: 38, label: "Seconds" },
  ];

  return (
    <div className="w-full flex justify-center mt-10">
      {/* Outer Card */}
      <div className=" bg-[#133C49]/50 backdrop-blur-md border border-[#235868] rounded-[16px] p-[16px]">
        {/* Title */}
        <p className="text-white text-start text-[18px] mb-4">
          Conference starts in:
        </p>

        {/* Boxes */}
        <div className="flex flex-wrap gap-4 justify-between">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex-1 min-w-[80px] bg-white rounded-[8px] py-[12px] px-[24px] text-center"
            >
              <div className="text-[#0B2C36] text-[16px] md:text-[18px] font-semibold">
                {item.value}
              </div>
              <div className="text-[#0B2C36] text-[14px] mt-1">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RegistrationForm() {
  const [selected, setSelected] = useState(0);
  const [room, setRoom] = useState("single");

  return (
    <div className="w-full bg-[#E7F9FF] py-16 flex justify-center">
      <div className="w-[90%] space-y-6">
        {/* PERSONAL INFO */}
        <div className="bg-[#D5F4FF] border border-[#C6E4EF] rounded-[20px] p-6">
          <h2 className="text-[#133C49] text-[18px] md:text-[28px] font-semibold mb-4">
            Personal Information
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <Input label="Title" star />
            <Input label="Name" placeholder="Enter Name" star />

            <Input label="Phone" star />
            <Input label="WhatsApp Number" />

            <Input label="Email" placeholder="Enter Email" star />
            <Input label="Alternative Email" />

            <Input label="Institution" placeholder="Enter Institution" star />
            <Select label="Select Country/Region" />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            onClick={() => navigate("/conference/register-success")}
            className=" mt-5 bg-[#01D4FF] text-[#072A41] py-[12px] px-[16px] rounded-[12px] text-[14px] font-semibold"
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
}

/* INPUT */
function Input({ label, star, placeholder }) {
  return (
    <div>
      <label className="text-[14px] text-[#133C49] font-medium">
        {label} {star && <span className="text-[#FF3939]">*</span>}
      </label>
      <input
        placeholder={placeholder}
        className="w-full mt-1 bg-[#E7F9FF] border border-[#C6E4EF] rounded-[12px] p-[16px] text-[14px] focus:outline-none focus:border-[#01D4FF]"
      />
    </div>
  );
}

/* SELECT */
function Select({ label }) {
  return (
    <div>
      <label className="text-[14px] text-[#133C49] font-medium">
        {label} <span className="text-[#FF3939]">*</span>
      </label>
      <select className="w-full mt-1 bg-[#E7F9FF] border border-[#C6E4EF] rounded-[12px] p-[16px] text-[14px]">
        <option>Select</option>
      </select>
    </div>
  );
}
