"use client";

import { CalendarDays, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { Link2, Search, Activity, Cpu, Award, Users } from "lucide-react";
import TeamSection from "../line2Components/TeamSection";
const Home = () => {
  return (
    <div className="bg-[#133C49]">
      <ConferenceHero />
      <CountdownBar />
      <AboutSection />
      <WhoShouldAttend />
      <WhyAttend />
      <ScientificSessions />
      <TeamSection />
      <Gallery />
    </div>
  );
};

export default Home;

function ConferenceHero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <img
        src="/conference.png" // replace with your image path
        alt="conference"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-[#0b3c44]/80"></div> */}

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-20 max-w-5xl">
        {/* Tag */}
        <span className="bg-[#184655] text-[#01D4FF] px-[12px] py-[6px] rounded-[12px] w-fit text-[18px] mb-4">
          GCC-2026
        </span>

        {/* Title */}
        <h1 className="text-white text-4xl md:text-[54px] font-medium leading-tight">
          Global Congress on
        </h1>

        {/* Highlight */}
        <div className="mt-3 mb-4">
          <span className="border border-[#01D4FF] text-[#01D4FF] px-6 py-2 rounded-lg text-3xl md:text-[54px] font-semibold inline-block">
            CARDIOLOGY
          </span>
        </div>

        {/* Subtitle */}
        <p className="text-[#FFFFFF] text-[18px] font-medium mb-2">
          Advancing Heart Health Through Innovation
        </p>

        {/* Description */}
        <p className="text-[#FFFFFF] text-sm md:text-[18px] font-normal mb-6 max-w-4xl">
          Join world-leading cardiologists, researchers, and healthcare
          professionals at the Global Cardiology Congress (GCC-2026), where
          science, clinical practice, and technology converge.
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="bg-[#01D4FF] text-[#072A41] text-[14px] px-[16px] py-[8px] rounded-[12px] font-semibold">
            Register Now
          </button>

          <button className="border border-[#01D4FF] text-[14px] text-[#01D4FF] px-[16px] py-[8px] rounded-[12px] font-semibold">
            Submit Abstract
          </button>
        </div>
      </div>
    </div>
  );
}

function CountdownBar() {
  const targetDate = new Date("2026-09-14T00:00:00").getTime();

  const [time, setTime] = useState({
    days: 119,
    hours: 22,
    minutes: 18,
    seconds: 38,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTime({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex justify-center mt-10">
      <div className="w-[95%] md:w-[90%] border border-[#235868] rounded-2xl bg-[#133C49] px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* LEFT - Countdown */}
        <div className="grid md:grid-cols-4 gap-4 w-full">
          <TimeBox value={time.days} label="DAYS" />
          <TimeBox value={time.hours} label="Hours" />
          <TimeBox value={time.minutes} label="Minutes" />
          <TimeBox value={time.seconds} label="Seconds" />
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          {/* Info */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 bg-[#1e4b52] px-4 py-2 rounded-md text-[12px] text-white min-w-[230px]">
              <span className="w-5 h-5 flex items-center justify-center rounded-full bg-white/20">
                <CalendarDays size={12} strokeWidth={2.5} />
              </span>
              <span className="font-medium">14,15 September 2026</span>
            </div>

            <div className="flex items-center gap-2 bg-[#1e4b52] px-4 py-2 rounded-md text-[12px] text-white min-w-[230px]">
              <span className="w-5 h-5 flex items-center justify-center rounded-full bg-white/20">
                <MapPin size={12} strokeWidth={2.5} />
              </span>
              <span className="font-medium">Barcelona, Spain</span>
            </div>
          </div>

          {/* Button */}
          <button className="flex items-center gap-2 bg-[#01D4FF] hover:bg-cyan-300 text-[#0B2C36] text-[13px] px-5 py-2.5 rounded-full font-semibold whitespace-nowrap">
            Book Tickets Now
            <span className="bg-white rounded-full w-5 h-5 flex items-center justify-center text-black text-xs">
              →
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

/* Reusable Time Box */
function TimeBox({ value, label }) {
  return (
    <div className="bg-white text-center rounded-md w-full h-[85px] flex flex-col items-center justify-center">
      <div className="text-[34px] font-bold text-[#0B2C36] leading-none">
        {value}
      </div>
      <div className="text-[18px] font-medium text-[#0B2C36] mt-1">{label}</div>
    </div>
  );
}

function AboutSection() {
  return (
    <div className="w-full flex justify-center py-16">
      <div className="w-[90%] max-w-6xl text-center">
        {/* Label */}
        <div className="inline-block bg-[#FFFFFF]/10 text-white text-[18px] font-medium px-[12px] py-[6px] rounded-[6px] mb-6">
          About the Conference.
        </div>

        {/* Paragraph */}
        <p className="text-[#FFFFFF]/90 text-[18px] font-normal leading-relaxed">
          The <span className="text-[#01D4FF] font-medium">GCC 2026</span> is a
          premier global event dedicated to the latest advancements in
          cardiovascular medicine. This annual meeting brings together renowned
          experts to share ground-breaking research, innovative technologies,
          and best practices that shape the future of heart care.
        </p>

        {/* Second Paragraph */}
        <p className="text-[#FFFFFF]/90 text-[18px] font-normal leading-relaxed mt-4">
          Participants will engage in interactive sessions, hands-on workshops,
          live demonstrations, and evidence-based discussions focused on
          improving patient outcomes across all cardiovascular specialties.
        </p>
      </div>
    </div>
  );
}

function WhoShouldAttend() {
  const data = [
    [
      "Cardiologists & Cardiac Surgeons",
      "Cardiovascular Researchers",
      "Medical Device & Pharma Professionals",
    ],
    [
      "Internal Medicine Physicians",
      "Nurses & Allied Health Professionals",
      "Digital Health Innovator",
    ],
    ["Interventional Cardiologists", "Medical Students & Residents"],
  ];

  return (
    <div className="w-full flex justify-center py-16 bg-[#144251] relative overflow-hidden">
      {/* Optional subtle pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,white_1px,transparent_1px)] [background-size:30px_30px]" />

      <div className="w-[90%] relative z-10 text-center">
        {/* Heading */}
        <h2 className="text-white text-[28px] md:text-[42px] font-semibold mb-10">
          Who Should <span className="text-[#01D4FF]">Attend</span>
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {data.map((col, i) => (
            <ul key={i} className="space-y-4">
              {col.map((item, index) => (
                <li
                  key={index}
                  className="text-[#FFFFFF]/90 text-[20px] font-medium flex items-start gap-2"
                >
                  <span className="text-[#FFFFFF]/90">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

function WhyAttend() {
  const features = [
    {
      icon: "/1.png",
      text: "Connect with global experts and peers",
    },
    {
      icon: "/2.png",
      text: "Explore ground breaking research",
    },
    {
      icon: "/3.png",
      text: "Gain actionable clinical insights",
    },
    {
      icon: "/4.png",
      text: "Experience emerging cardiology technologies",
    },
    {
      icon: "/5.png",
      text: "Earn CME credits",
    },
    {
      icon: "/6.png",
      text: "Expand your professional network",
    },
  ];

  return (
    <div className="w-full flex justify-center py-16 ">
      <div className="w-[90%] ">
        {/* Heading */}
        <h2 className="text-white text-center text-[28px] md:text-[42px] font-semibold mb-10">
          Why <span className="text-[#00D1FF]">Attend</span>
        </h2>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* LEFT TEXT */}
          <div className="text-[#FFFFFF]/90 text-[18px] font-normal leading-relaxed space-y-4">
            <p>
              We warmly invite you to be part of this unique gathering of minds,
              traditions, and innovations. Whether you are a seasoned
              practitioner, researcher, student, or policy advocate, your voice
              and expertise are essential to shaping the future of complementary
              and integrative medicine.
            </p>

            <p>
              Join us as we advance whole-person care and build meaningful
              bridges between ancient wisdom and modern science.
            </p>

            <p>
              We look forward to welcoming you to the conference.
              <br />
              For further information, please contact the Conference Organizer
            </p>
          </div>

          {/* RIGHT CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-[#154351] p-[12px] rounded-[12px] border border-white/5"
              >
                <div className="w-[48px] h-[48px]">
                  <img
                    src={item.icon}
                    alt=""
                    className="w-full h-full object-fill"
                  />
                </div>

                <p className="text-[#FFFFFF]/90 font-medium text-[18px] leading-snug">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ScientificSessions() {
  const sessions = [
    {
      id: "01",
      title: "Artificial Intelligence & Digital Cardiology",
      points: [
        "AI-driven risk prediction models for heart failure readmissions",
        "Machine-learning algorithms for early detection of arrhythmias in wearable data",
        "Digital twin simulations in personalized cardiovascular therapy",
        "Automated echo interpretation vs. expert readers: accuracy and outcomes",
        "Remote monitoring platforms and their impact on mortality in chronic cardiac patient",
      ],
    },
    {
      id: "02",
      title: "Heart Failure & Cardiomyopathies",
      points: [
        "Effects of SGLT2 inhibitors in HFpEF: real-world evidence",
        "Biomarker-guided therapy (NT-proBNP, troponins, galectin-3)",
        "Cardiac amyloidosis: novel imaging modalities (strain, PET tracers)",
        "Gene therapy approaches for dilated cardiomyopathy",
        "Telemedicine-based HF management: cost and clinical impact",
      ],
    },
    {
      id: "03",
      title: "Interventional & Structural Cardiology",
      points: [
        "Long-term outcomes of TAVI in low-risk younger populations",
        "Cerebral protection devices during TAVI—do they reduce stroke?",
        "Innovations in left atrial appendage occlusion",
        "Comparative data: drug-coated balloons vs. DES in de novo small-vessel disease",
        "Intravascular lithotripsy for heavily calcified coronary lesions",
      ],
    },
    {
      id: "04",
      title: "Electrophysiology & Arrhythmias",
      points: [
        "Pulsed-field ablation: efficacy and safety profiles in persistent AF",
        "Genetic drivers of inherited arrhythmia syndromes",
        "Wearable-detected AF: impact on stroke prevention strategies",
        "Conduction system pacing (His/LBB pacing) compared with conventional CRT",
        "AI-assisted mapping for complex VT ablation",
      ],
    },
    {
      id: "05",
      title: "Preventive Cardiology & Lipidology",
      points: [
        "PCSK9 inhibitors and RNA therapies (inclisiran) in statin-intolerant patients",
        "Impact of ultra-processed foods on cardiovascular risk markers",
        "Novel therapies for lipoprotein(a) reduction",
        "Lifestyle interventions measured via digital coaching platforms",
        "Coronary calcium scoring and lifetime risk assessment",
      ],
    },
    {
      id: "06",
      title: "Coronary Artery Disease & Imaging",
      points: [
        "CT-based FFR vs. invasive FFR: diagnostic performance",
        "Plaque characterization using photon-counting CT",
        "Prognostic value of stress CMR with myocardial blood flow quantification",
        "Role of PET imaging in microvascular angina",
        "Multimodality imaging in MINOCA (MRI, OCT, PET)",
      ],
    },
    {
      id: "07",
      title: "Cardio-Oncology",
      points: [
        "Early detection of chemotherapy-induced cardiotoxicity via strain imaging",
        "Immune checkpoint inhibitors: patterns of myocarditis",
        "Biomarker-guided cardioprotection protocols",
        "Survivorship models for long-term CV monitoring in cancer patients",
      ],
    },
    {
      id: "08",
      title: "Global Cardiology & Public Health",
      points: [
        "Impact of climate change on cardiovascular morbidity (heat waves, pollution)",
        "Access to cardiovascular care in low-resource settings",
        "Mobile health interventions for hypertension control in rural areas",
        "Multicentric cohort comparisons of CVD risk prediction tools",
      ],
    },
  ];

  return (
    <div className="w-full flex justify-center py-16 bg-[#154351]">
      <div className="w-[90%] max-w-5xl">
        {/* Heading */}
        <h2 className="text-white text-center text-[28px] md:text-[42px] font-semibold mb-10">
          <span className="text-[#00D1FF]">Scientific</span> Sessions
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          {sessions.length > 1 && (
            <div className="absolute left-5 top-6 bottom-6 border-l-2 border-dashed border-[#2FA4B3]"></div>
          )}
          <div className="space-y-8">
            {sessions.map((item, index) => (
              <div key={index} className="flex items-start gap-6 ">
                {/* Number */}
                <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[#133C49] text-[#00D1FF] font-semibold">
                  {item.id}
                </div>

                {/* Card */}
                <div className="flex-1 bg-[#133C49] rounded-[24px] p-[24px]">
                  {/* Title */}
                  <h3 className="text-[#01D4FF] text-[24px] font-semibold mb-3">
                    {item.title}
                  </h3>

                  {/* Points */}
                  <ul className="space-y-2">
                    {item.points.map((point, i) => (
                      <li
                        key={i}
                        className="text-white/90 text-[20px] font-medium flex gap-2"
                      >
                        <span className="text-white/50">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const galleryData = [
  {
    id: 1,
    image: "/b12.png",
    title: "Business World Event Introduction",
    date: "24 Nov 2025",
  },
  {
    id: 2,
    image: "/g1.jpg",
    title: "Business World Event Introduction",
    date: "24 Nov 2025",
  },
  {
    id: 3,
    image: "/g2.jpg",
    title: "Business World Event Introduction",
    date: "24 Nov 2025",
  },
  {
    id: 4,
    image: "/g3.jpg",
    title: "Business World Event Introduction",
    date: "24 Nov 2025",
  },
];

function Gallery() {
  return (
    <section className="bg-[#133C49] py-16 px-6 md:px-16 text-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">Gallery</h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
          {galleryData.map((item) => (
            <div
              key={item.id}
              className="bg-[#13404F] rounded-2xl overflow-hidden hover:-translate-y-1 transition"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[180px] object-cover"
              />

              {/* Content */}
              <div className="p-4">
                <h3 className="text-[14px] text-[#FFFFFF] font-medium mb-2">
                  {item.title}
                </h3>

                <div className="flex items-center gap-2 text-[12px] text-[#FFFFFF]/70">
                  <span>
                    <CalendarDays size={16} strokeWidth={2.5} />
                  </span>
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12 flex justify-center">
          <button className="flex items-center gap-4 bg-[#01D4FF] text-[#00343a] text-[14px] font-semibold px-8 py-4 rounded-full shadow-sm hover:bg-[#00c2ea] transition">
            View More
            <span className="w-7 h-7 flex items-center justify-center bg-white text-black rounded-full text-sm">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
