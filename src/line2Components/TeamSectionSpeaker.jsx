const team = [
  {
    id: 1,
    name: "Alex Smith",
    role: "Founder, Info Technologies",
    designation: "Keynote Speaker",

    image: "/t3.png",
  },
  {
    id: 2,
    name: "Neha P",
    role: "Founder, Info Technologies",
    designation: "Invited Speaker",

    image: "/t3.png",
  },
  {
    id: 3,
    name: "Aryan",
    role: "Founder, Info Technologies",
    designation: "Session Chair",

    image: "/t3.png",
  },
  {
    id: 4,
    name: "Joyce",
    role: "Founder, Info Technologies",
    designation: "Keynote Speaker",
    image: "/t3.png",
  },
];

import React from "react";
import { useNavigate } from "react-router-dom";

const TeamSectionSpeaker = ({ data }) => {
  return (
    <div>
      <TeamSectionSpeaker1
        data={data?.keynote_speakers}
        slug={data?.conference.slug}
      />
      <TeamSectionSpeaker2 data={data?.speakers} />
    </div>
  );
};

export default TeamSectionSpeaker;

// function TeamSectionSpeaker1({ data = [] }) {
//   const navigate = useNavigate();
//   return (
//     <section className=" py-16 px-6 md:px-16 text-white">
//       <div className="max-w-7xl mx-auto ">
//         {/* Heading */}
//         <h2 className="text-3xl md:text-[42px] text-[#133C49] font-semibold mb-12">
//           Keynote Speakers
//         </h2>

//         {/* Cards */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           {team.map((member) => (
//             <div
//               key={member.id}
//               onClick={() =>
//                 navigate(`/conference/speaker-details?id=${member.id}`)
//               }
//               className="bg-[#133C49]  rounded-t-full pt-6 pb-6 px-4 text-center"
//             >
//               {/* Arch Image Container */}
//               <div className="w-full flex justify-center mb-4">
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* Name */}
//               <h3 className="font-semibold text-[20px] mb-1">{member.name}</h3>

//               {/* Role */}
//               <p className="text-[14px] text-[#FFFFFF]/70">{member.role}</p>
//               <p className="text-[14px] text-[#FFFFFF]">{member.designation}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

function TeamSectionSpeaker1({ data = [], slug }) {
  const navigate = useNavigate();

  return (
    <section className="py-16 px-6 md:px-16 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-[42px] text-[#133C49] font-semibold mb-12">
          Keynote Speakers
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {data.map((member) => (
            <div
              key={member.id}
              onClick={() =>
                navigate(`/conference/${slug}/speaker-details?id=${member.id}`)
              }
              className="bg-[#133C49] rounded-t-full pt-6 pb-6 px-4 text-center cursor-pointer group overflow-hidden"
            >
              {/* Wrapper to move UP */}
              <div className="transition-all duration-500 group-hover:-translate-y-6">
                {/* Image */}
                <div className="w-full flex justify-center mb-4">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-t-full rounded-r-full"
                  />
                </div>

                {/* Name */}
                <h3 className="font-semibold text-[20px] mb-1 group-hover:text-cyan-400 transition">
                  {member.name}
                </h3>

                {/* Designation */}
                <p className="text-[14px] text-white/70">
                  {member.designation}
                </p>

                {/* Role */}
                <p className="text-[14px] text-white">{member.role}</p>
              </div>

              {/* Icons (hidden → appear) */}
              <div className="flex justify-center gap-3 mt-4 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
                  <i className="fa-brands fa-instagram text-white"></i>
                </div>

                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black">
                  <i className="fa-brands fa-x-twitter text-white"></i>
                </div>

                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0A66C2]">
                  <i className="fa-brands fa-linkedin-in text-white"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
// function TeamSectionSpeaker2({ data = [] }) {
//   return (
//     <section className=" py-16 px-6 md:px-16 text-white">
//       <div className="max-w-7xl mx-auto ">
//         {/* Heading */}
//         <h2 className="text-3xl md:text-[42px] text-[#133C49] font-semibold mb-12">
//           Speakers
//         </h2>

//         {/* Cards */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           {team.map((member) => (
//             <div
//               key={member.id}
//               className="bg-[#133C49]  rounded-t-full pt-6 pb-6 px-4 text-center"
//             >
//               {/* Arch Image Container */}
//               <div className="w-full flex justify-center mb-4">
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* Name */}
//               <h3 className="font-semibold text-[20px] mb-1">{member.name}</h3>

//               {/* Role */}
//               <p className="text-[14px] text-[#FFFFFF]/70">{member.role}</p>
//               <p className="text-[14px] text-[#FFFFFF]">{member.designation}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

function TeamSectionSpeaker2({ data = [] }) {
  return (
    <section className="py-16 px-6 md:px-16 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-[42px] text-[#133C49] font-semibold mb-12">
          Speakers
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* {data.map((member) => (
            <div
              key={member.id}
              className="bg-[#133C49] rounded-t-full pt-6 pb-6 px-4 text-center"
            >
              <div className="w-full flex justify-center mb-4">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-t-full rounded-r-full"
                />
              </div>

              <h3 className="font-semibold text-[20px] mb-1">{member.name}</h3>

              <p className="text-[14px] text-white/70">{member.designation}</p>

              <p className="text-[14px] text-white">{member.role}</p>
            </div>
          ))} */}
          {data.map((member) => (
            <div
              key={member.id}
              className="bg-[#133C49] rounded-t-full pt-6 pb-6 px-4 text-center group overflow-hidden transition-all duration-500"
            >
              {/* Content Wrapper (moves up) */}
              <div className="transition-all duration-500 group-hover:-translate-y-6">
                {/* Image */}
                <div className="w-full flex justify-center mb-4">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-t-full rounded-r-full"
                  />
                </div>

                {/* Name */}
                <h3 className="font-semibold text-[20px] mb-1 group-hover:text-cyan-400 transition">
                  {member.name}
                </h3>

                {/* Designation */}
                <p className="text-[14px] text-white/70">
                  {member.designation}
                </p>

                {/* Role */}
                <p className="text-[14px] text-white">{member.role}</p>
              </div>

              {/* Icons (hidden → appear on hover) */}
              <div className="flex justify-center gap-3 mt-4 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
                  <i className="fa-brands fa-instagram text-white"></i>
                </div>

                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black">
                  <i className="fa-brands fa-x-twitter text-white"></i>
                </div>

                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0A66C2]">
                  <i className="fa-brands fa-linkedin-in text-white"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
