import { Phone, Mail, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Editorial = () => {
  return (
    <div className="bg-[#E7F9FF]">
      <JournalsHero />
      <EditorialBoardPage />
    </div>
  );
};

export default Editorial;

function JournalsHero() {
  return (
    <div className="bg-[#0B2C36] h-[50vh] px-6 md:px-16 pb-10 pt-40 border-b border-[#2C5B63]">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-[36px] md:text-[54px] font-semibold text-white">
          Editorial <span className="text-[#01D4FF]">Board</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-3 text-[#FFFFFF] text-[14px] md:text-[18px] ">
          Our editorial board comprises distinguished scholars and researchers
          from leading institutions worldwide, ensuring the highest standards of
          academic excellence and peer review quality.
        </p>
      </div>
    </div>
  );
}

function EditorialBoardPage() {
  const editors = [
    {
      init: "DP",
      name: "Dr. Priya Sharma",
      uni: "IIT Delhi, India",
      field: "Biomedical Engineering",
    },
    {
      init: "PE",
      name: "Prof. Elena Rodriguez",
      uni: "UC Barcelona, Spain",
      field: "Environmental Engineering",
    },
    {
      init: "DA",
      name: "Dr. Ahmed Hassan",
      uni: "Cairo University, Egypt",
      field: "Aerospace Engineering",
    },
    {
      init: "DP",
      name: "Prof. Yuki Tanaka",
      uni: "University of Tokyo, Japan",
      field: "Robotics",
    },
    {
      init: "PE",
      name: "Dr. Anna Kowalski",
      uni: "Warsaw University, Poland",
      field: "Materials Science",
    },
    {
      init: "DA",
      name: "Prof. Carlos Silva",
      uni: "University of São Paulo, Brazil",
      field: "Energy Systems",
    },
  ];
  const reviewers = [
    { name: "Dr. John Williams", uni: "Stanford University", country: "USA" },
    { name: "Dr. Marie Dupont", uni: "Sorbonne University", country: "France" },
    { name: "Prof. Hans Schmidt", uni: "ETH Zurich", country: "Switzerland" },
    { name: "Dr. Li Wei", uni: "Peking University", country: "China" },
    { name: "Prof. Sarah Johnson", uni: "Oxford University", country: "UK" },
    {
      name: "Dr. Mohammed Al-Rashid",
      uni: "King Saud University",
      country: "Saudi Arabia",
    },
    {
      name: "Prof. Kim Min-Jun",
      uni: "Seoul National University",
      country: "South Korea",
    },
    {
      name: "Dr. Isabella Roman",
      uni: "University of Milan",
      country: "Italy",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto  py-10 space-y-10">
      {/* ================= EDITOR IN CHIEF ================= */}
      <section>
        <h2 className="text-[18px] md:text-[28px] font-semibold text-[#133C49] mb-4 border-l-4 border-[#01D4FF] pl-3">
          Editor-in-Chief
        </h2>

        <div className="bg-[#13404F] border border-[#235262] text-white rounded-[24px] p-[24px]">
          <h3 className="text-[28px] font-semibold">
            Prof. Dr. James Mitchell
          </h3>

          <p className="text-[#01D4FF] font-semibold text-[18px] mt-1">
            Prof. Dr. James Mitchell
          </p>

          <p className="text-[18px] font-medium text-[#FFFFFF] mt-1">
            Department of Mechanical Engineering <br />
            Massachusetts Institute of Technology, USA
          </p>

          <p className="text-[18px] font-medium text-[#FFFFFF] mt-3">
            Professor Mitchell is a distinguished researcher with over 30 years
            of experience in engineering sciences...
          </p>

          {/* TAGS */}
          <div className="flex gap-2 mt-3 flex-wrap">
            {[
              "Mechanical Engineering",
              "Material Science",
              "Manufacturing",
            ].map((tag, i) => (
              <span
                key={i}
                className="text-[12px] px-[12px] py-[8px] bg-[#133C49] border border-[#01D4FF] text-[#01D4FF] rounded-[30px]"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-[18px] flex items-center font-medium mt-3 text-[#01D4FF]">
            <img src="/sms.png" alt="" className="w-[20px] h-[20px] mr-2" />{" "}
            editor@publications.org
          </p>
        </div>
      </section>

      {/* ================= ASSOCIATE EDITORS ================= */}
      <section>
        <h2 className="text-[18px] md:text-[28px] font-semibold text-[#133C49] mb-4 border-l-4 border-[#01D4FF] pl-3">
          Associate Editors
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              init: "DS",
              name: "Dr. Sarah Chen",
              role: "Associate Editor",
              dept: "School of Engineering",
              uni: "Tsinghua University, China",
              tags: ["Civil Engineering", "Structural Analysis"],
            },
            {
              init: "PM",
              name: "Prof. Michael Weber",
              role: "Associate Editor",
              dept: "Department of Informatics",
              uni: "Technical University of Munich, Germany",
              tags: ["Computer Science", "AI/ML"],
            },
            {
              init: "DE",
              name: "Dr. Emily Thompson",
              role: "Associate Editor",
              dept: "Department of Chemistry",
              uni: "University of Cambridge, United Kingdom",
              tags: ["Chemical Engineering", "Biotechnology"],
            },
            {
              init: "DS",
              name: "Prof. Raj Patel",
              role: "Associate Editor",
              dept: "Department of Electrical Engineering",
              uni: "Indian Institute of Technology Delhi, India",
              tags: ["Electronics", "Power Systems"],
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#D5F4FF] border border-[#C6E4EF] rounded-[20px] p-5 flex gap-5 items-start hover:shadow-md transition"
            >
              {/* AVATAR */}
              <div className="w-[80px] h-[80px] bg-gradient-to-b from-[#1499C5] to-[#125369] text-[26px] text-white rounded-full flex items-center justify-center font-semibold shrink-0">
                {item.init}
              </div>

              {/* INFO */}
              <div>
                <h3 className="text-[18px] font-semibold text-[#133C49]">
                  {item.name}
                </h3>

                <p className="text-[18px] text-[#00849F] font-medium mt-[2px]">
                  {item.role}
                </p>

                <p className="text-[14px] text-[#133C49] mt-[4px]">
                  {item.dept}
                </p>

                <p className="text-[14px] text-[#133C49] mt-[4px]">
                  {item.uni}
                </p>

                {/* TAGS */}
                <div className="flex gap-2 mt-2 flex-wrap">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] text-[#00849F] bg-[#E7F9FF] px-3 py-[4px] rounded-[6px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SECTION EDITORS ================= */}
      <section>
        <h2 className="text-[18px] md:text-[28px] font-semibold text-[#133C49] mb-4 border-l-4 border-[#01D4FF] pl-3">
          Section Editors
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {editors.map((item, i) => (
            <div
              key={i}
              className="bg-[#D5F4FF] border border-[#C6E4EF] rounded-[20px] p-5 flex gap-4 items-center hover:shadow-md transition"
            >
              {/* AVATAR */}
              <div className="w-[60px] h-[60px] bg-gradient-to-b from-[#1499C5] to-[#125369] text-[22px] text-white rounded-full flex items-center justify-center font-semibold shrink-0">
                {item.init}
              </div>

              {/* INFO */}
              <div>
                <h3 className="text-[14px] font-semibold text-[#133C49]">
                  {item.name}
                </h3>

                <p className="text-[12px] text-[#4A6B73] mt-[2px]">
                  {item.uni}
                </p>

                {/* SPECIALIZATION */}
                <p className="text-[13px] text-[#00AEEF] mt-2 font-medium">
                  {item.field}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= REVIEW BOARD ================= */}
      <section>
        <h2 className="text-[18px] md:text-[28px] font-semibold text-[#133C49] mb-4 border-l-4 border-[#01D4FF] pl-3">
          Review Board
        </h2>

        <div className="grid md:grid-cols-4 gap-5">
          {reviewers.map((item, i) => (
            <div
              key={i}
              className="bg-[#D5F4FF] border border-[#C6E4EF] rounded-[24px] p-[24px]"
            >
              <h3 className="text-[18px] font-semibold text-[#133C49]">
                {item.name}
              </h3>

              <p className="text-[14px] text-[#133C49] mt-1">{item.uni}</p>

              <p className="text-[14px] text-[#133C49]">{item.country}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#13404F] border border-[#235262] text-white text-center rounded-[24px] p-[24px]">
        <h2 className="text-[18px] md:text-[28px] font-semibold mb-3">
          Join Our Editorial Team
        </h2>

        <p className="text-[18px] text-[#FFFFFF]  mb-5">
          We are always looking for qualified reviewers and editors to join our
          team.
        </p>

        <button className="bg-[#01D4FF] flex items-center  mx-auto text-[#13404F] font-semibold px-[16px] py-[8px] rounded-[12px] text-[14px]">
          <img src="/sms2.png" alt="" className="w-[20px] h-[20px] mr-2" />
          Contact Editorial Office
        </button>
      </section>
    </div>
  );
}
