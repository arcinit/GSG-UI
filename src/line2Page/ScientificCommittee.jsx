import { Phone, Mail, MessageCircle } from "lucide-react";
const ScientificCommittee = ({ data }) => {
  return (
    <div className="bg-[#E7F9FF]">
      <CommitteeHero />
      <OrganizingCommittee data={data?.committee} />
    </div>
  );
};

export default ScientificCommittee;

function CommitteeHero() {
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
          Scientific <span className="text-[#01D4FF]">Committee</span>
        </h1>

        {/* Subtitle */}
        <p className="text-[#FFFFFF] font-normal text-[14px] md:text-[18px] mt-3">
          Experts shaping the scientific direction of GCC-2026
        </p>
      </div>
    </section>
  );
}

// function OrganizingCommittee({ data = [] }) {
//   const members = [
//     {
//       name: "Prof. David Anderson",
//       role: "Conference Chair",
//       org: "Harvard Medical School USA",
//       img: "/t1.jpg",
//     },
//     {
//       name: "Prof. Elena Martinez",
//       role: "Co-Chair",
//       org: "Harvard Medical School USA",
//       img: "/team1.jpg",
//     },
//     {
//       name: "Dr. Sarah Johnson",
//       role: "Scientific Director",
//       org: "Harvard Medical School USA",
//       img: "/team2.jpg",
//     },
//     {
//       name: "Dr. Michael Thompson",
//       role: "Programmer Director",
//       org: "Harvard Medical School USA",
//       img: "/team3.jpg",
//     },
//   ];

//   return (
//     <div className="w-full py-16 bg-[#c7d6db] flex justify-center">
//       <div className="w-[90%] max-w-6xl">
//         {/* Heading */}
//         <h2 className="text-[28px] md:text-[42px] font-semibold text-[#1c3b44] mb-10">
//           Organizing <span className="text-[#00849F]">Committee</span>
//         </h2>

//         {/* Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//           {members.map((item, index) => (
//             <div
//               key={index}
//               className="bg-[#154351] rounded-[16px] p-6 text-center text-white shadow-md"
//             >
//               {/* Image */}
//               <div className="w-[244px] h-[244px] mx-auto rounded-full overflow-hidden mb-4">
//                 <img
//                   src={item.img}
//                   alt={item.name}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* Name */}
//               <h3 className="text-[20px] text-[#FFFFFF] font-semibold">
//                 {item.name}
//               </h3>

//               {/* Role */}
//               <p className="text-[14px] text-[#FFFFFF] mt-1">{item.role}</p>

//               {/* Org */}
//               <p className="text-[14px] text-white/70 mt-1">{item.org}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

function OrganizingCommittee({ data = [] }) {
  // ✅ filter only enabled members
  const members = data.filter((item) => item.is_enabled);

  console.log("members:-", members);

  return (
    <div className="w-full py-16 bg-[#c7d6db] flex justify-center">
      <div className="w-[90%] max-w-6xl">
        {/* Heading */}
        <h2 className="text-[28px] md:text-[42px] font-semibold text-[#1c3b44] mb-10">
          Organizing <span className="text-[#00849F]">Committee</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* {members.map((item) => (
            <div
              key={item.id}
              className="bg-[#154351] rounded-[16px] p-6 text-center text-white shadow-md cursor-pointer"
            >
              <div className="w-[244px] h-[244px] mx-auto rounded-full overflow-hidden mb-4">
                <img
                  src={"/t1.jpg"}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-[20px] text-[#FFFFFF] font-semibold">
                {item.name}
              </h3>

              <p className="text-[14px] text-[#FFFFFF] mt-1">{item.role}</p>

              <p className="text-[14px] text-white/70 mt-1">
                {item.organization}
              </p>
            </div>
          ))} */}

          {members.map((item) => (
            <div
              key={item.id}
              className="bg-[#154351] rounded-[16px] p-6 text-center text-white shadow-md group cursor-pointer"
            >
              {/* Image Wrapper */}
              <div className="relative w-[244px] h-[244px] mx-auto rounded-full overflow-hidden mb-4">
                {/* Image */}
                <img
                  src={"/t1.jpg"}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />

                {/* Curved Bottom Panel */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[170px] h-[80px]
                  rounded-t-full flex items-center justify-center gap-3
                  translate-y-[55%] group-hover:translate-y-[0%]
                  transition-all duration-500 ease-in-out
                  backdrop-blur-xl
                  bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.35),rgba(21,67,81,0.9))]"
                >
                  {/* Instagram */}
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
                    <i className="fa-brands fa-instagram text-white text-lg"></i>
                  </div>

                  {/* X */}
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-black">
                    <i className="fa-brands fa-x-twitter text-white text-lg"></i>
                  </div>

                  {/* LinkedIn */}
                  <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#0A66C2]">
                    <i className="fa-brands fa-linkedin-in text-white text-lg"></i>
                  </div>
                </div>
              </div>

              {/* Name */}
              <h3 className="text-[20px] font-semibold group-hover:text-cyan-400 transition">
                {item.name}
              </h3>

              {/* Role */}
              <p className="text-[14px] mt-1 group-hover:text-cyan-300 transition">
                {item.role}
              </p>

              {/* Organization */}
              <p className="text-[14px] text-white/70 mt-1">
                {item.organization}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
