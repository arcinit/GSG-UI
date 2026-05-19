import { Phone, Mail, MessageCircle, Link } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Reviews = () => {
  return (
    <div className="bg-[#E7F9FF]">
      <JournalsHero />
      <ReviewerSection />
    </div>
  );
};

export default Reviews;

function JournalsHero() {
  return (
    <div className="bg-[#0B2C36] h-[50vh] px-6 md:px-16 pb-10 pt-40 border-b border-[#2C5B63]">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-[36px] md:text-[54px] font-semibold text-white">
          For <span className="text-[#01D4FF]">Reviewers</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-3 text-[#FFFFFF] text-[14px] md:text-[18px] ">
          Join our global community of peer reviewers and contribute to
          advancing scientific knowledge.
        </p>
      </div>
    </div>
  );
}

function ReviewerSection() {
  const steps = [
    {
      title: "Invitation",
      desc: "Receive review invitation with manuscript abstract. Accept or decline within 3 days.",
    },
    {
      title: "Review",
      desc: "Evaluate the manuscript thoroughly within 14-21 days using our structured form.",
    },
    {
      title: "Submit Report",
      desc: "Provide detailed feedback and recommendation for the editorial decision.",
    },
    {
      title: "Decision",
      desc: "The editor makes the final decision based on all reviewer recommendations.",
    },
  ];

  const navigate = useNavigate();
  return (
    <div className="max-w-7xl mx-auto py-12 space-y-12">
      {/* ================= WHY REVIEW ================= */}
      <section className="text-center">
        <h2 className="text-[22px] md:text-[28px] font-semibold text-[#133C49] mb-6">
          Why Review for Us?
        </h2>

        <div className="grid md:grid-cols-4 gap-5">
          {["Recognition", "Networking", "Stay Current", "Impact"].map(
            (title, i) => (
              <div
                key={i}
                className="bg-[#E7F9FF] border border-[#C6E4EF] rounded-[16px] px-[16px] pt-[24px] pb-[16px] text-center"
              >
                <div className="w-[49px] h-[49px] mx-auto mb-3">
                  <img src="/lock3.png" alt="" className="w-full h-full" />
                </div>

                <h3 className="text-[14px] font-semibold text-[#133C49]">
                  {title}
                </h3>

                <p className="text-[12px] text-[#4F5C60] mt-2">
                  Short description about {title.toLowerCase()} benefits.
                </p>
              </div>
            ),
          )}
        </div>
      </section>

      {/* ================= REVIEW PROCESS ================= */}
      <section className="bg-[#13404F] border border-[#235262] text-white rounded-2xl p-6 md:p-10">
        <h2 className="text-[20px] md:text-[28px] font-semibold mb-8">
          The Review Process
        </h2>

        <div className="grid md:grid-cols-4 gap-6 text-center">
          {steps.map((step, i) => (
            <div key={i}>
              {/* NUMBER */}
              <div className="w-12 h-12 bg-[#00AEEF]/20 text-[#00D4FF] rounded-full flex items-center justify-center mx-auto mb-3 text-[16px] font-semibold">
                {i + 1}
              </div>

              {/* TITLE */}
              <h4 className="text-[14px] font-semibold text-white">
                {step.title}
              </h4>

              {/* DESC */}
              <p className="text-[13px] text-[#A9C7CE] mt-2 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= REVIEWER GUIDELINES ================= */}
      <section>
        <h2 className="text-[22px] md:text-[28px] font-semibold text-[#133C49] mb-6 text-center">
          Reviewer Guidelines
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* LEFT */}
          <div className="bg-[#E7F9FF] border border-[#C6E4EF] rounded-[16px] px-[16px] pt-[24px] pb-[16px]">
            <h3 className="text-[14px] font-semibold text-[#133C49] mb-3 flex gap-2">
              <img src="/bluecheck.png" alt="" className="w-[20px] h-[20px]" />
              What to Evaluate
            </h3>

            <ul className="text-[14px] text-[#4F5C60] space-y-2">
              {[
                "Originality and significance",
                "Scientific rigor",
                "Clarity of writing",
                "Data adequacy",
                "Relevance to scope",
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-[#01D4FF]">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          <div className="bg-[#E7F9FF] border border-[#C6E4EF] rounded-[16px] px-[16px] pt-[24px] pb-[16px]">
            <h3 className="text-[14px] font-semibold text-[#133C49] mb-3 flex gap-2">
              <img src="/bluecheck.png" alt="" className="w-[20px] h-[20px]" />
              Providing Feedback
            </h3>

            <ul className="text-[14px] text-[#4F5C60] space-y-2">
              {[
                "Be constructive and objective",
                "Support with evidence",
                "Differentiate issues",
                "Suggest improvements",
                "Maintain confidentiality",
              ].map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-[#01D4FF]">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ================= TIMELINE ================= */}
      <section className="bg-[#13404F] border border-[#235262] text-white rounded-[24px] p-[24px] text-center">
        <h3 className="text-[16px] md:text-[20px] font-semibold mb-3">
          Review Timeline
        </h3>

        <div className="flex flex-col md:flex-row justify-center gap-6 text-[14px] text-[#FFFFFF]">
          <span className="font-semibold flex">
            <img
              src="/blueclock.png"
              alt=""
              className="w-[20px] h-[20px] mr-2"
            />
            Accept invitation:{" "}
            <span className="text-[#FFFFFF]/70 font-normal ml-2">3 days</span>
          </span>
          <div className="w-[3px] h-6 bg-[#235769] mx-4"></div>
          <span className="font-semibold flex">
            <img
              src="/blueclock.png"
              alt=""
              className="w-[20px] h-[20px] mr-2"
            />
            Complete review:{" "}
            <span className="text-[#FFFFFF]/70 font-normal ml-2">
              14-21 days
            </span>
          </span>
          <div className="w-[3px] h-6 bg-[#235769] mx-4"></div>
          <span className="font-semibold flex">
            <img
              src="/blueclock.png"
              alt=""
              className="w-[20px] h-[20px] mr-2"
            />
            Revision review:{" "}
            <span className="text-[#FFFFFF]/70 font-normal ml-2">
              7-14 days
            </span>
          </span>
        </div>
      </section>

      {/* ================= ETHICAL ================= */}
      <section>
        <h2 className="text-[22px] md:text-[28px] font-semibold text-[#133C49] mb-6 text-center">
          Ethical Standards
        </h2>

        <div className="grid md:grid-cols-3 gap-5">
          {["Confidentiality", "Objectivity", "Conflict of Interest"].map(
            (title, i) => (
              <div
                key={i}
                className="bg-[#E7F9FF] border border-[#C6E4EF] rounded-[16px] px-[16px] pt-[24px] pb-[16px]"
              >
                <h3 className="text-[14px] font-semibold text-[#133C49]">
                  {title}
                </h3>

                <p className="text-[14px] text-[#4F5C60] mt-2">
                  Description for {title.toLowerCase()}.
                </p>
              </div>
            ),
          )}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#13404F] border border-[#235262]  rounded-[24px] p-[24px] text-center text-white ">
        <h2 className="text-[20px] md:text-[28px] font-semibold mb-3">
          Become a Reviewer
        </h2>

        <p className="text-[18px] text-[#FFFFFF] mb-5">
          If you are an experienced researcher, apply to become a reviewer.
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate("/journals/submit-manuscript")}
            className="bg-[#01D4FF] text-[#13404F] px-[16px] py-[8px] rounded-[12px] text-[14px]"
          >
            Register as Reviewer
          </button>

          <button
            onClick={() => navigate("/journals/editorial")}
            className="bg-[#133C49] border border-[#235262] px-[16px] py-[8px] rounded-[12px] text-[14px] hover:bg-[#2E5C66]"
          >
            View Editorial Board
          </button>
        </div>
      </section>
    </div>
  );
}
