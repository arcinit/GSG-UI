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
  return (
    <section className="bg-[#154351] py-16 px-6 md:px-16 text-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-[42px] font-semibold mb-12">
          Our <span className="text-[#01D4FF]">Teammates</span>
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-[#133C49]  rounded-t-full pt-6 pb-6 px-4 text-center"
            >
              {/* Arch Image Container */}
              <div className="w-full flex justify-center mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="font-semibold text-[20px] mb-1">{member.name}</h3>

              {/* Role */}
              <p className="text-[14px] text-[#FFFFFF]">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
