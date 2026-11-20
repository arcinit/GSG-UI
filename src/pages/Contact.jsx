import { Phone, Mail, MessageCircle } from "lucide-react";
import http from "../service/http";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
const Contact = () => {
  const [loading, setLoading] = useState(true);
  const [contact, setContact] = useState(null);
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    website: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const [loading2, setLoading2] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading2(true);
      if (!form.first_name || !form.email || !form.message) {
        toast("Please fill required fields");
        return;
      }
      await http.post("/core/contact/", form);
      toast("Message sent successfully");

      // reset form
      setForm({
        first_name: "",
        last_name: "",
        email: "",
        website: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      const errors = err?.response?.data;

      if (errors) {
        Object.keys(errors).forEach((field) => {
          errors[field].forEach((message) => {
            toast.error(message || "Something went wrong");
          });
        });
      }
    } finally {
      setLoading2(false);
    }
  };

  useEffect(() => {
    const fetchCoreContact = async () => {
      try {
        const res = await http.get("/core/contact");

        setContact(res.data.contact_info); // ✅ store full API response
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCoreContact();
  }, []);
  return (
    <div className="bg-[#E7F9FF]">
      <ContactHero />

      <section className=" py-10 px-4 md:px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_403px] gap-6">
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
                name="first_name"
                value={form.first_name}
                onChange={handleChange}
                placeholder="First Name *"
                className="w-full h-[48px] px-4 rounded-[12px] border border-[#C6E4EF] bg-transparent text-[#133C49] text-[18px] outline-none placeholder:text-[#8aa3ad]"
              />

              <input
                name="last_name"
                value={form.last_name}
                onChange={handleChange}
                placeholder="Last Name *"
                className="w-full h-[48px] px-4 rounded-[12px] border border-[#C6E4EF] bg-transparent text-[#133C49] text-[18px] outline-none placeholder:text-[#8aa3ad]"
              />

              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email *"
                className="w-full h-[48px] px-4 rounded-[12px] border border-[#C6E4EF] bg-transparent text-[#133C49] text-[18px] outline-none placeholder:text-[#8aa3ad]"
              />

              <input
                name="website"
                value={form.website}
                onChange={handleChange}
                placeholder="Website"
                className="w-full h-[48px] px-4 rounded-[12px] border border-[#C6E4EF] bg-transparent text-[#133C49] text-[18px] outline-none placeholder:text-[#8aa3ad]"
              />
            </div>

            {/* TEXTAREA */}
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full h-[140px] px-4 py-3 rounded-[12px] border border-[#C6E4EF] bg-transparent text-[#133C49] text-[18px] outline-none placeholder:text-[#8aa3ad] mb-5 resize-none"
            />

            {/* BUTTON */}
            <button
              onClick={handleSubmit}
              disabled={loading2}
              className="w-full h-[48px] bg-[#00849F] hover:bg-[#0c6b79] text-white text-[14px] font-medium rounded-[12px] transition"
            >
              {loading2 ? "Sending..." : "Send Message"}
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
              {/* PHONE */}
              <div className="flex items-center gap-3 bg-[#133C49] p-[12px] rounded-[12px] ">
                <div className="w-[42px] h-[42px] ">
                  <img src="/d1.png" alt="" className="w-full h-full" />
                </div>

                <div className="space-y-1">
                  <p className="text-[13px] text-[#FFFFFF]">Tollfree Number:</p>
                  <p className="text-[13px] text-[#FFFFFF] font-medium">
                    {contact?.tollfree_number}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-[#133C49] p-[12px] rounded-[12px] ">
                <div className="w-[42px] h-[42px] ">
                  <img src="/d2.png" alt="" className="w-full h-full" />
                </div>

                <div className="space-y-1">
                  <p className="text-[13px] text-[#FFFFFF]">SMS/ WhatsApp</p>
                  <p className="text-[13px] text-[#FFFFFF] font-medium">
                    {contact?.whatsapp_number}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-[#133C49] p-[12px] rounded-[12px] ">
                <div className="w-[42px] h-[42px] ">
                  <img src="/d3.png" alt="" className="w-full h-full" />
                </div>

                <div className="space-y-1">
                  <p className="text-[13px] text-[#FFFFFF]">Email</p>
                  <p className="text-[13px] text-[#FFFFFF] font-medium">
                    {contact?.support_email}
                  </p>
                </div>
              </div>
            </div>

            {/* DIVIDER */}
            <div className="border-t border-[#1E5568]"></div>

            {/* SOCIAL */}
            <div>
              <p className="text-[20px] text-[#FFFFFF] font-semibold mb-3">
                Connect with us:
              </p>

              {/* <div className="flex gap-2">
                <img
                  src="/instagram.png"
                  alt=""
                  className="w-[42px] h-[42px] object-contain"
                />
                <img
                  src="/linkedin.png"
                  alt=""
                  className="w-[42px] h-[42px] object-contain"
                />
                <img
                  src="/twitter.png"
                  alt=""
                  className="w-[42px] h-[42px] object-contain"
                />
              </div> */}
              <div className="flex gap-2">
                <a
                  href={contact?.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/instagram.png"
                    alt=""
                    className="w-[42px] h-[42px] object-contain"
                  />
                </a>

                <a
                  href={contact?.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/linkedin.png"
                    alt=""
                    className="w-[42px] h-[42px] object-contain"
                  />
                </a>

                <a
                  href={contact?.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/twitter.png"
                    alt=""
                    className="w-[42px] h-[42px] object-contain"
                  />
                </a>
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
