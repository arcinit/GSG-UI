import { useNavigate } from "react-router-dom";

export default function RegisterSuccess() {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen bg-[#E7F9FF] flex items-center justify-center px-4 pt-24">
      {/* Card */}
      <div className="w-full max-w-2xl bg-[#13404F] border border-[#235262] text-[#FFFFFF] rounded-[24px] p-[24px] md:p-10 text-center shadow-lg">
        {/* Icon */}
        <div className="w-[75px] h-[75px] mx-auto mb-4">
          <img src="/successcheck.png" alt="" className="w-full h-full" />
        </div>

        {/* Title */}
        <h2 className="text-[20px] md:text-[28px] font-semibold mb-2">
          Registration Successful!
        </h2>

        {/* Subtitle */}
        <p className="text-[12px] md:text-[14px] text-[#FFFFFF] mb-6">
          Thank you for registering for GCC-2026. A confirmation email has been
          sent to 
          <span className="text-white">email@example.com.</span>.
        </p>

        {/* Details Box */}
        <div className="bg-[#133C49] rounded-[16px] p-[16px] text-left mb-6 ">
          <h3 className="text-[18px] font-semibold mb-3">
            Registration Details:
          </h3>

          <div className="space-y-2 text-[13px]">
            <div className="flex justify-between">
              <span className="text-white text-[18px]">Name</span>
              <span className=" text-[#FFFFFF] text-[18px] font-semibold">
                John Wick
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-[#FFFFFF] text-[18px]">Category</span>
              <span className="text-[18px] text-[#FFFFFF] font-semibold">
                Delegate
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-[#FFFFFF] text-[18px]">
                Registration ID
              </span>
              <span className="text-[18px] text-[#01D4FF] font-semibold">
                GCC2026-VXRG6CI3
              </span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => navigate("/conference")}
            className="bg-[#01D4FF] text-[#072A41] px-[16px] py-[8px] rounded-[12px] text-[14px] font-semibold"
          >
            Return to Homepage
          </button>
        </div>
      </div>
    </div>
  );
}
