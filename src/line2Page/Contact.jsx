import { Phone, Mail, MessageCircle } from "lucide-react";
const Contact = () => {
  return (
    <div className="bg-[#E7F9FF]">
      <ContactHero />

      <section className=" py-10 ">
        <div className="w-[90%] mx-auto grid md:grid-cols-[1fr_403px] gap-6">
          {/* LEFT FORM */}
          <div className="bg-[#D5F4FF] border border-[#cfe3ea] rounded-[16px] p-6">
            {/* TITLE */}
            <h3 className="text-[#133C49] text-[20px] font-semibold mb-2">
              Send Us a Message
            </h3>

            {/* DESC */}
            <p className="text-[#4F5C60] text-[18px] mb-6">
              Do you have a question? A complaint? Or need any help from GSG.
              Feel free to contact us
            </p>

            {/* FORM GRID */}
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input
                placeholder="First Name *"
                className="w-full h-[48px] px-4 rounded-[12px] border border-[#C6E4EF] bg-transparent text-[#133C49] text-[18px] outline-none placeholder:text-[#8aa3ad]"
              />

              <input
                placeholder="Last Name *"
                className="w-full h-[48px] px-4 rounded-[12px] border border-[#C6E4EF] bg-transparent text-[#133C49] text-[18px] outline-none placeholder:text-[#8aa3ad]"
              />

              <input
                placeholder="Email *"
                className="w-full h-[48px] px-4 rounded-[12px] border border-[#C6E4EF] bg-transparent text-[#133C49] text-[18px] outline-none placeholder:text-[#8aa3ad]"
              />

              <input
                placeholder="Website"
                className="w-full h-[48px] px-4 rounded-[12px] border border-[#C6E4EF] bg-transparent text-[#133C49] text-[18px] outline-none placeholder:text-[#8aa3ad]"
              />
            </div>

            {/* TEXTAREA */}
            <textarea
              placeholder="Message"
              className="w-full h-[140px] px-4 py-3 rounded-[12px] border border-[#C6E4EF] bg-transparent text-[#133C49] text-[18px] outline-none placeholder:text-[#8aa3ad] mb-5 resize-none"
            />

            {/* BUTTON */}
            <button className="w-full h-[48px] bg-[#00849F] hover:bg-[#0c6b79] text-white text-[14px] font-medium rounded-[12px] transition">
              Submit
            </button>
          </div>

          {/* RIGHT PANEL */}
          <div className="bg-[#13404F] border border-[#235262] text-white rounded-[12px] p-[16px] space-y-5">
            {/* TITLE */}
            <h3 className="text-[20px] font-semibold">
              Hi! We are always here to help you.
            </h3>

            {/* ITEMS */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 bg-[#133C49] p-[12px] rounded-[12px] ">
                <div className="w-[42px] h-[42px] ">
                  <img src="/d3.png" alt="" className="w-full h-full" />
                </div>

                <div className="space-y-1">
                  <p className="text-[13px] text-[#FFFFFF]">Email</p>
                  <p className="text-[13px] text-[#FFFFFF] font-medium">
                    support@website.com
                  </p>
                </div>
              </div>
              {/* PHONE */}
              <div className="flex items-center gap-3 bg-[#133C49] p-[12px] rounded-[12px] ">
                <div className="w-[42px] h-[42px] ">
                  <img src="/d1.png" alt="" className="w-full h-full" />
                </div>

                <div className="space-y-1">
                  <p className="text-[13px] text-[#FFFFFF]">Phone:</p>
                  <p className="text-[13px] text-[#FFFFFF] font-medium">
                    +34 93 123 4567
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-[#133C49] p-[12px] rounded-[12px] ">
                <div className="w-[42px] h-[42px] ">
                  <img src="/d4.png" alt="" className="w-full h-full" />
                </div>

                <div className="space-y-1">
                  <p className="text-[13px] text-[#FFFFFF]">Address</p>
                  <p className="text-[13px] text-[#FFFFFF] font-medium">
                    Barcelona, Spain
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-[#133C49] p-[12px] rounded-[12px] ">
                <div className="w-[42px] h-[42px] ">
                  <img src="/d5.png" alt="" className="w-full h-full" />
                </div>

                <div className="space-y-1">
                  <p className="text-[13px] text-[#FFFFFF]">Working Hours</p>
                  <p className="text-[13px] text-[#FFFFFF] font-medium">
                    Mon-Fri 9:00-18:00 CET
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

function ContactHero() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <img
        src="/about.png"
        alt="about-bg"
        className="absolute inset-0 w-full h-full object-fill object-center"
      />

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-3xl md:text-[54px] font-medium">
          Contact <span className="text-[#01D4FF]">Us</span>
        </h1>
      </div>
    </section>
  );
}
