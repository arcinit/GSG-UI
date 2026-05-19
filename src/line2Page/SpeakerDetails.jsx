import { ArrowLeft, CalendarDays, Clock, MapPin } from "lucide-react";
import http from "../service/http";
import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SpeakerDetails() {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();

  const id = searchParams.get("id");

  const [speaker, setSpeaker] = useState(null);

  useEffect(() => {
    const fetchSpeaker = async () => {
      try {
        const res = await http.get(`/speakers/${slug}/${id}/`);
        setSpeaker(res.data.speaker);
      } catch (err) {
        console.error(err);
      }
    };

    if (slug && id) {
      fetchSpeaker();
    }
  }, [slug, id]);

  if (!speaker) {
    return <div className="text-center mt-40">Loading...</div>;
  }
  return (
    <div className="w-full min-h-screen bg-[#E7F9FF] py-10 pt-40 flex justify-center">
      <div className="w-[90%] ">
        {/* Back */}
        <div className="flex items-center gap-2 text-[#1c3b44] text-sm mb-6 cursor-pointer">
          <ArrowLeft size={16} />
          Back to Speakers
        </div>

        {/* Main Layout */}
        <div className="grid md:grid-cols-[298px_1fr] gap-6">
          {/* LEFT CARD */}
          <div className="bg-[#133C49] h-[418px]  rounded-t-full p-[24px] text-center">
            {/* Image */}
            <div className="w-[244px] h-[244px] flex justify-center mb-4">
              <img
                src={speaker.photo}
                alt={speaker.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name */}
            <h3 className="font-semibold text-white text-[20px] mb-1">
              {speaker.name}
            </h3>

            {/* Role */}
            <p className="text-[14px] text-[#FFFFFF]/70">
              {speaker.designation}
            </p>

            {/* Tag */}
            <p className="text-[14px] text-[#FFFFFF]">
              {" "}
              {speaker.speaker_type || speaker.role}
            </p>

            {/* Socials */}
            <div className="flex justify-center gap-3 mt-4">
              <img src="/instagram.png" alt="" className="w-[24px] h-[24px]" />
              <img src="/twitter.png" alt="" className="w-[24px] h-[24px]" />
              <img src="/linkedin.png" alt="" className="w-[24px] h-[24px]" />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col gap-6">
            {/* Biography */}
            <div className="bg-[#D5F4FF] rounded-[24px] p-[24px] border border-[#C6E4EF]">
              <h3 className="text-[#00849F] text-[24px] font-semibold mb-3">
                Biography
              </h3>

              <p className="text-[#4F5C60] text-[20px] leading-relaxed">
                {speaker.bio || "No biography available"}
              </p>
            </div>

            {/* Sessions */}
            {/* <div className="bg-[#D5F4FF] rounded-[24px] p-[24px] border border-[#C6E4EF]">
              <h3 className="text-[#00849F] text-[20px] font-semibold mb-4">
                Speaking Sessions
              </h3>

             
              <div className="bg-[#D5F4FF] rounded-[16px] p-[24px] mb-4 border border-[#C6E4EF]">
                <h4 className="text-[#133C49] text-[20px] font-semibold mb-2">
                  Keynote: The Future of AI in Cardiovascular Medicine
                </h4>

                <div className="flex flex-wrap gap-4 text-[18px] text-[#4F5C60]">
                  <span className="flex items-center gap-2">
                    <img
                      src="/calendar.png"
                      alt=""
                      className="w-[20px] h-[20px]"
                    />
                    September 15, 2026
                  </span>
                  <span className="flex items-center gap-2">
                    <img
                      src="/clock.png"
                      alt=""
                      className="w-[20px] h-[20px]"
                    />{" "}
                    10:00 AM
                  </span>
                  <span className="flex items-center gap-2">
                    <img
                      src="/location.png"
                      alt=""
                      className="w-[20px] h-[20px]"
                    />{" "}
                    Main Lobby
                  </span>
                </div>
              </div>

              <div className="rounded-[16px] p-[24px] mb-4">
                <h4 className="text-[#133C49] text-[20px] font-semibold mb-2">
                  Panel Discussion: Digital Health Innovations
                </h4>

                <div className="flex flex-wrap gap-4 text-[18px] text-[#4F5C60]">
                  <span className="flex items-center gap-2">
                    <img
                      src="/calendar.png"
                      alt=""
                      className="w-[20px] h-[20px]"
                    />
                    September 15, 2026
                  </span>
                  <span className="flex items-center gap-2">
                    <img
                      src="/clock.png"
                      alt=""
                      className="w-[20px] h-[20px]"
                    />{" "}
                    04:00 PM
                  </span>
                  <span className="flex items-center gap-2">
                    <img
                      src="/location.png"
                      alt=""
                      className="w-[20px] h-[20px]"
                    />{" "}
                    Hall B
                  </span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
