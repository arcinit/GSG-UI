export default function SubmissionSuccess() {
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
          Abstract Submitted!
        </h2>

        {/* Subtitle */}
        <p className="text-[12px] md:text-[14px] text-[#FFFFFF] mb-6">
          Thank you for your submission. You will receive a confirmation email
          at <span className="text-white">author@email.com</span>.
        </p>

        {/* Details Box */}
        <div className="bg-[#133C49] rounded-[16px] p-[16px] text-left mb-6 ">
          <h3 className="text-[18px] font-semibold mb-3">
            Submission Details:
          </h3>

          <div className="space-y-2 text-[13px]">
            <div className="flex justify-between">
              <span className="text-white/70 text-[18px]">Submission ID</span>
              <span className="text-[#01D4FF] text-[18px] font-semibold">
                ABS-SQNEGQU8
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-white/70 text-[18px]">Title</span>
              <span className="text-[18px] font-semibold">Abstract Title</span>
            </div>

            <div className="flex justify-between">
              <span className="text-white/70 text-[18px]">Topic</span>
              <span className="text-[18px] font-semibold">
                Interventional Cardiology
              </span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          <button className="border border-[#01D4FF] text-[#01D4FF] px-[16px] py-[8px] rounded-[12px] text-[14px] hover:bg-[#01D4FF] hover:text-[#13404F] transition">
            Back to Abstracts
          </button>

          <button className="bg-[#01D4FF] text-[#072A41] px-[16px] py-[8px] rounded-[12px] text-[14px] font-semibold">
            Return to Homepage
          </button>
        </div>
      </div>
    </div>
  );
}
