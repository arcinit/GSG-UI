import { Phone, Mail, MessageCircle } from "lucide-react";
import TeamSectionSpeaker from "../line2Components/TeamSectionSpeaker";
const OurSpeaker = ({ data }) => {
  return (
    <div className="bg-[#E7F9FF]">
      <SpeakerHero />
      <TeamSectionSpeaker data={data} />
    </div>
  );
};

export default OurSpeaker;

function SpeakerHero() {
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
          Our <span className="text-[#01D4FF]">Speakers</span>
        </h1>

        {/* Subtitle */}
        <p className="text-[#FFFFFF] font-normal text-[14px] md:text-[18px] mt-3">
          Global leaders in cardiology and healthcare innovation
        </p>
      </div>
    </section>
  );
}
