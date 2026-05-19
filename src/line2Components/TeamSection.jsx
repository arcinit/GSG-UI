import { useEffect, useState } from "react";
import http from "../service/http";

const team = [
  {
    id: 1,
    name: "Alex Smith",
    role: "Founder, Info Technologies",
    image: "/t3.png",
  },
  {
    id: 2,
    name: "Neha P",
    role: "Founder, Info Technologies",
    image: "/t4.png",
  },
  {
    id: 3,
    name: "Aryan",
    role: "Founder, Info Technologies",
    image: "/t5.png",
  },
  {
    id: 4,
    name: "Joyce",
    role: "Founder, Info Technologies",
    image: "/t6.png",
  },
];

export default function TeamSection() {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const resTeam = await http.get(`/core/team/`);
        setTeam(resTeam?.data?.results || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, []);

  return (
    // <section className="bg-[#133C49] py-16 px-6 md:px-16 text-white">
    //   <div className="max-w-7xl mx-auto text-center">
    //     {/* Heading */}
    //     <h2 className="text-3xl md:text-[42px] font-semibold mb-12">
    //       Our <span className="text-[#01D4FF]">Teammates</span>
    //     </h2>

    //     {/* Cards */}
    //     <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

    //       {team?.map((member) => (
    //         <div
    //           key={member.id}
    //           className="bg-[#154351] rounded-t-full pt-6 pb-6 px-4 text-center
    //            transition-all duration-300 group"
    //         >
    //           {/* Image Wrapper */}
    //           <div className="relative w-full flex justify-center mb-4">
    //             {/* Outer Ring Effect */}

    //             {/* Image */}
    //             <img
    //               src={member.photo}
    //               alt={member.name}
    //               className="w-full h-full object-cover rounded-t-full rounded-r-full"
    //             />
    //           </div>

    //           {/* Name */}
    //           <h3
    //             className="font-semibold text-[20px] mb-1
    //                text-white group-hover:text-cyan-400
    //                transition duration-300"
    //           >
    //             {member.name}
    //           </h3>

    //           {/* Role */}
    //           <p className="text-[14px] text-[#FFFFFF] mb-3">
    //             {member.designation}
    //           </p>

    //           {/* Social Icons (Hidden by default) */}
    //           <div
    //             className="flex justify-center gap-3
    //                 opacity-0 translate-y-3
    //                 group-hover:opacity-100 group-hover:translate-y-0
    //                 transition duration-300"
    //           >
    //             <a className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 px-3 py-2 rounded-full text-white">
    //               <i className="fab fa-instagram"></i>
    //             </a>

    //             <a className="bg-black px-3 py-2 rounded-full text-white">
    //               <i className="fab fa-x-twitter"></i>
    //             </a>

    //             <a className="bg-blue-500 px-3 py-2 rounded-full text-white">
    //               <i className="fab fa-linkedin-in"></i>
    //             </a>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
    <section className="py-16 px-6 md:px-16 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-[42px] font-semibold mb-12">
          Our <span className="text-[#01D4FF]">Speakers</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* {data.map((member) => (
            <div
              key={member.id}
              onClick={() =>
                navigate(`/conference/${slug}/speaker-details?id=${member.id}`)
              }
              className="bg-[#133C49] rounded-t-full pt-6 pb-6 px-4 text-center cursor-pointer"
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
          {team.map((member) => (
            <div
              key={member.id}
              onClick={() =>
                navigate(`/conference/${slug}/speaker-details?id=${member.id}`)
              }
              className="bg-[#154351] rounded-t-full pt-6 pb-6 px-4 text-center cursor-pointer group overflow-hidden"
            >
              {/* Wrapper to move UP */}
              <div className="transition-all duration-500 group-hover:-translate-y-6">
                {/* Image */}
                <div className="w-full flex justify-center mb-4">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-[244px] h-[244px] object-cover rounded-t-full rounded-r-full"
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
