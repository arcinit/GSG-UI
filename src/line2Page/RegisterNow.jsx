import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import http from "../service/http";

const RegisterNow = () => {
  return (
    <div className="bg-[#E7F9FF]">
      <RegisterHero />
      <RegistrationForm />

      {/* <RegistrationSummary /> */}
    </div>
  );
};

export default RegisterNow;

function RegisterHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <img
        src="/about.png"
        alt="about-bg"
        className="absolute inset-0 w-full h-full object-fill object-center"
      />

      {/* Content */}
      <div className="relative z-10 text-center text-[#FFFFFF] pt-20 md:pt-0">
        {/* Badge */}
        <div className="inline-block bg-[#133C49]/50 text-[#01D4FF] text-[18px] px-[16px] py-[8px] rounded-full mb-4">
          GCC-2026
        </div>

        {/* Heading */}
        <h1 className="text-[32px] md:text-[54px] font-medium leading-tight">
          Register <span className="text-[#01D4FF]">Now</span>
        </h1>

        {/* Subtitle */}
        <p className="text-[#FFFFFF] font-normal text-[14px] md:text-[18px] mt-3">
          Secure your spot at the Global Congress on Cardiology 2026
        </p>

        {/* Countdown Card */}
        <CountdownCard />
      </div>
    </section>
  );
}

function CountdownCard() {
  const data = [
    { value: 119, label: "DAYS" },
    { value: 22, label: "Hours" },
    { value: 18, label: "Minutes" },
    { value: 38, label: "Seconds" },
  ];

  return (
    <div className="w-full flex justify-center mt-10">
      {/* Outer Card */}
      <div className=" bg-[#133C49]/50 backdrop-blur-md border border-[#235868] rounded-[16px] p-[16px]">
        {/* Title */}
        <p className="text-white text-start text-[18px] mb-4">
          Conference starts in:
        </p>

        {/* Boxes */}
        <div className="flex flex-wrap gap-4 justify-between">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex-1 min-w-[80px] bg-white rounded-[8px] py-[12px] px-[24px] text-center"
            >
              <div className="text-[#0B2C36] text-[16px] md:text-[18px] font-semibold">
                {item.value}
              </div>
              <div className="text-[#0B2C36] text-[14px] mt-1">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RegistrationForm() {
  const [selected, setSelected] = useState(0);
  const [room, setRoom] = useState("single");

  // const categories = [
  //   { name: "Presenter (In-Person)", prices: ["$599", "$699", "$799"] },
  //   { name: "Presenter (Virtual)", prices: ["$299", "$399", "$499"] },
  //   { name: "Listener (In-Person)", prices: ["$499", "$599", "$699"] },
  //   { name: "Listener (Virtual)", prices: ["$199", "$299", "$399"] },
  //   { name: "Student (In-Person)", prices: ["$299", "$399", "$499"] },
  //   { name: "Student (Virtual)", prices: ["$149", "$199", "$249"] },
  // ];

  const { slug } = useParams();

  const [priceData, setPriceData] = useState(null);
  useEffect(() => {
    const fetchCommon = async () => {
      try {
        const res = await http.get(`/registrations/${slug}/register/`);

        setPriceData(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCommon();
  }, []);

  const categoryHeaders = useMemo(() => {
    if (!priceData?.all_categories) return [];

    return priceData.all_categories.map((cat) => ({
      name: cat.name,
      start: cat.start_date,
      end: cat.end_date,
    }));
  }, [priceData]);
  const categories = useMemo(() => {
    if (!priceData?.pricing_data) return [];

    return priceData.pricing_data.map((item) => {
      const prices = item.prices;

      return {
        id: item.type.id,
        name: item.type.name,
        mode: item.type.mode,

        // IMPORTANT → order must match header order
        prices: priceData.all_categories.map((cat) => {
          return `$${prices[cat.name] || 0}`;
        }),

        raw_prices: prices,
      };
    });
  }, [priceData]);

  const rooms = useMemo(() => {
    if (!priceData?.accommodations) return [];

    return priceData.accommodations
      .filter((r) => r.is_enabled)
      .map((r) => ({
        id: r.id,
        key: r.occupancy_type,
        label: `${r.occupancy_type.charAt(0).toUpperCase() + r.occupancy_type.slice(1)} Occupancy`,
        price: `$${r.price_per_night}`,
        raw_price: r.price_per_night,
      }));
  }, [priceData]);
  const activePriceCategory = useMemo(() => {
    if (!priceData?.all_categories) return null;

    const today = new Date();

    return priceData.all_categories.find((cat) => {
      const start = new Date(cat.start_date);
      const end = new Date(cat.end_date);
      return today >= start && today <= end;
    });
  }, [priceData]);
  const selectedCategory = categories[selected];
  const selectedRoom = rooms.find((r) => r.key === room);
  const selectedPrice = activePriceCategory
    ? selectedCategory?.raw_prices?.[activePriceCategory.name]
    : null;
  console.log(selectedCategory);

  useEffect(() => {
    if (priceData?.accommodations?.length) {
      setRoom(priceData.accommodations[0].occupancy_type);
    }
  }, [priceData]);

  const [form, setForm] = useState({
    title: "",
    name: "",
    phone: "",
    whatsapp: "",
    email: "",
    altEmail: "",
    institution: "",
    country: "",
    registration_type: "",
    accommodation: "",
    nights: "",
    accompanying_count: "",
    check_in: "",
    check_out: "",
  });

  const handleChange = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  useEffect(() => {
    if (form.check_in && form.check_out) {
      const start = new Date(form.check_in);
      const end = new Date(form.check_out);

      const diff = (end - start) / (1000 * 60 * 60 * 24);

      if (diff >= 0) {
        handleChange("nights", diff);
      }
    }
  }, [form.check_in, form.check_out]);

  const institutions = [
    "Harvard University",
    "Stanford University",
    "IIT Delhi",
    "IIT Bombay",
    "Delhi University",
  ];

  const countries = [
    "India",
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
  ];

  const participantCount = 1; // always 1 (main user)

  const registrationPrice = Number(selectedPrice || 0);

  const accommodationPricePerNight = Number(selectedRoom?.raw_price || 0);
  const nights = Number(form.nights || 0);

  const accommodationTotal = accommodationPricePerNight * nights;

  const accompanyingCount = Number(form.accompanying_count || 0);
  const accompanyingTotal = accompanyingCount * 200;

  const totalPrice = registrationPrice + accommodationTotal + accompanyingTotal;

  const registrationTypes = ["Student", "Delegate", "Speaker"];
  const accommodationOptions = ["Yes", "No"];
  const nightsOptions = ["1", "2", "3", "4", "5"];

  const handleSubmit = async () => {
    try {
      const payload = {
        title: form.title,
        full_name: form.name,
        phone: form.phone,
        whatsapp: form.whatsapp,
        email: form.email,
        alternate_email: form.altEmail,
        institution: form.institution,
        country: form.country,

        registration_type: form.registration_type,

        // ✅ PARTICIPATION
        participation_type_id: selectedCategory?.id,
        participation_type: selectedCategory?.name,
        participation_mode: selectedCategory?.mode,

        price_category: activePriceCategory?.name, // current / Mid term / On spot
        price: selectedPrice,

        // ✅ ACCOMMODATION
        accommodation: form.accommodation,
        accommodation_id: selectedRoom?.id,
        accommodation_type: selectedRoom?.key,
        accommodation_price: selectedRoom?.raw_price,

        nights: form.nights,
        accompanying_count: form.accompanying_count,
        // ✅ NEW
        check_in: "",
        check_out: "",
      };

      console.log("Sending:", payload);

      const res = await http.post(`/registrations/${slug}/register`, payload);

      // console.log("Response:", res.data);

      // ✅ Navigate after success
      // navigate("/conference/register-success");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="w-full bg-[#E7F9FF] py-16 flex justify-center">
        <div className="w-[90%] space-y-6">
          {/* PERSONAL INFO */}
          <div className="bg-[#D5F4FF] border border-[#C6E4EF] rounded-[20px] p-6">
            <h2 className="text-[#133C49] text-[18px] md:text-[28px] font-semibold mb-4">
              Personal Information
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <Input
                label="Title"
                star
                value={form.title}
                onChange={(v) => handleChange("title", v)}
              />
              <Input
                label="Name"
                star
                value={form.name}
                onChange={(v) => handleChange("name", v)}
              />

              <Input
                label="Phone"
                star
                value={form.phone}
                onChange={(v) => handleChange("phone", v)}
              />
              <Input
                label="WhatsApp Number"
                value={form.whatsapp}
                onChange={(v) => handleChange("whatsapp", v)}
              />

              <Input
                label="Email"
                star
                value={form.email}
                onChange={(v) => handleChange("email", v)}
              />
              <Input
                label="Alternative Email"
                value={form.altEmail}
                onChange={(v) => handleChange("altEmail", v)}
              />

              {/* Institution Select */}
              <Select
                label="Institution"
                options={institutions}
                value={form.institution}
                onChange={(v) => handleChange("institution", v)}
              />

              {/* Country Select */}
              <Select
                label="Select Country/Region"
                options={countries}
                value={form.country}
                onChange={(v) => handleChange("country", v)}
              />

              {/* <Select
                label="Registration Type"
                options={registrationTypes}
                value={form.registration_type}
                onChange={(v) => handleChange("registration_type", v)}
              /> */}

              {/* <Select
                label="Accommodation"
                options={accommodationOptions}
                value={form.accommodation}
                onChange={(v) => handleChange("accommodation", v)}
              />

              <Select
                label="Number of Nights"
                options={nightsOptions}
                value={form.nights}
                onChange={(v) => handleChange("nights", v)}
              />

              <Input
                label="Accompanying Count"
                value={form.accompanying_count}
                onChange={(v) => handleChange("accompanying_count", v)}
              /> */}
            </div>
            {/* <div className="text-right">
              <button
                onClick={handleSubmit}
                className="mt-5 bg-[#01D4FF] text-[#072A41] py-[12px] px-[16px] rounded-[12px] text-[14px] font-semibold"
              >
                Submit
              </button>
            </div> */}
          </div>

          <div className="bg-[#D5F4FF] border border-[#C6E4EF] rounded-[20px] p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-[#133C49] text-[18px] md:text-[28px] font-semibold mb-4">
                Types of Participation
              </h2>
              <span className="text-[#133C49] text-[10px] md:text-[14px]">
                *All prices are in USD only
              </span>
            </div>

            {/* <div className="grid grid-cols-4 text-[10px] text-[#4F5C60] font-semibold mb-3">
            <span className="text-[#133C49] md:text-[18px]">Category</span>
            <span className="text-[#00849F] md:text-[18px] text-center">
              Early Bird Price <br />{" "}
              <span className="text-[#133C49]">Before June 30, 2026</span>
            </span>
            <span className="text-[#00849F] md:text-[18px] text-center">
              Mid Term <br />{" "}
              <span className="text-[#133C49]">Before Aug 15, 2026</span>
            </span>
            <span className="text-[#00849F] md:text-[18px] text-center">
              On Spot <br />{" "}
              <span className="text-[#133C49]">On/Before Sep 15, 2026</span>
            </span>
          </div> */}
            <div className="grid grid-cols-4 text-[10px] text-[#4F5C60] font-semibold mb-3">
              <span className="text-[#133C49] md:text-[18px]">Category</span>

              {categoryHeaders.map((cat, i) => (
                <span
                  key={i}
                  className="text-[#00849F] md:text-[18px] text-center"
                >
                  {cat.name} <br />
                  <span className="text-[#133C49]">
                    {cat.start} - {cat.end}
                  </span>
                </span>
              ))}
            </div>

            {/* <div className="space-y-2">
            {categories.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelected(index)}
                className={`grid grid-cols-4 items-center px-[16px] py-[12px] rounded-[16px] cursor-pointer transition ${
                  selected === index
                    ? "bg-[#08677B] text-[#D5F4FF]"
                    : "bg-[#EAFBFF] text-[#133C49]"
                }`}
              >
                <div className="flex items-center text-[10px] md:tetx-[18px] font-semibold  gap-2">
                  <input type="radio" checked={selected === index} readOnly />
                  {item.name}
                </div>

                {item.prices.map((p, i) => (
                  <div
                    key={i}
                    className="flex justify-center text-[10px] md:text-[18px]"
                  >
                    {selected === index && i === 0 ? (
                      <span className="bg-[#00849F] text-[#E7F9FF] p-[12px] rounded-[12px] font-semibold">
                        {p}
                      </span>
                    ) : (
                      <span
                        className={` ${
                          selected === index
                            ? "text-[#D5F4FF]"
                            : "text-[#133C49]"
                        }`}
                      >
                        {p}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div> */}
            <div className="space-y-2">
              {categories.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setSelected(index)}
                  className={`grid grid-cols-4 items-center px-[16px] py-[12px] rounded-[16px] cursor-pointer transition ${
                    selected === index
                      ? "bg-[#08677B] text-[#D5F4FF]"
                      : "bg-[#EAFBFF] text-[#133C49]"
                  }`}
                >
                  <div className="flex items-center text-[10px] md:tetx-[18px] font-semibold gap-2">
                    <input type="radio" checked={selected === index} readOnly />
                    {item.name}
                  </div>

                  {item.prices.map((p, i) => (
                    <div
                      key={i}
                      className="flex justify-center text-[10px] md:text-[18px]"
                    >
                      {selected === index && i === 0 ? (
                        <span className="bg-[#00849F] text-[#E7F9FF] p-[12px] rounded-[12px] font-semibold">
                          {p}
                        </span>
                      ) : (
                        <span
                          className={`${
                            selected === index
                              ? "text-[#D5F4FF]"
                              : "text-[#133C49]"
                          }`}
                        >
                          {p}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#D5F4FF] border border-[#C6E4EF] rounded-[24px] p-[24px]">
            <h4 className="text-[#133C49] text-[14px] font-medium mb-4">
              No. of Accompanying Persons ($200 each)
            </h4>
            {/* <select className="w-full bg-white border border-[#C6E4EF] bg-[#E7F9FF] rounded-[12px] p-[16px] text-sm">
            <option></option>
          </select> */}
            <select
              value={form.accompanying_count}
              onChange={(e) =>
                handleChange("accompanying_count", e.target.value)
              }
              className="w-full bg-white border border-[#C6E4EF] bg-[#E7F9FF] rounded-[12px] p-[16px] text-sm"
            >
              <option value="">Select</option>
              {[0, 1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          {/* ACCOMMODATION */}
          <div className="bg-[#D5F4FF] border border-[#C6E4EF] rounded-[24px] p-[24px]">
            <h2 className="text-[#133C49] text-[18px] md:text-[28px] font-semibold mb-4">
              Accommodation (Per Night)
            </h2>

            {/* <div className="flex gap-3 mb-4 flex-wrap">
            {[
              { key: "single", label: "Single Occupancy", price: "$220" },
              { key: "double", label: "Double Occupancy", price: "$250" },
              { key: "triple", label: "Triple Occupancy", price: "$280" },
            ].map((r) => (
              <div
                key={r.key}
                onClick={() => setRoom(r.key)}
                className={`p-[24px] rounded-[12px]  font-semibold text-[18px] cursor-pointer border ${
                  room === r.key
                    ? "bg-[#045667] text-[#D5F4FF]  border-[#01D4FF]"
                    : " border-[#C6E4EF] text-[#133C49]"
                }`}
              >
                <p className="">{r.label}</p>
                <p className=" text-[#01D4FF]">{r.price}</p>
              </div>
            ))}
          </div> */}
            <div className="flex gap-3 mb-4 flex-wrap">
              {rooms.map((r) => (
                <div
                  key={r.key}
                  onClick={() => setRoom(r.key)}
                  className={`p-[24px] rounded-[12px] font-semibold text-[18px] cursor-pointer border ${
                    room === r.key
                      ? "bg-[#045667] text-[#D5F4FF] border-[#01D4FF]"
                      : "border-[#C6E4EF] text-[#133C49]"
                  }`}
                >
                  <p>{r.label}</p>
                  <p className="text-[#01D4FF]">{r.price}</p>
                </div>
              ))}
            </div>

            {/* <div className="grid md:grid-cols-3 gap-4">
            <Select label="Check-in" />
            <Select label="Check-Out" />
            <Input label="No of Nights" />
          </div> */}
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="text-[#133C49] text-sm font-medium mb-1 block">
                  Check-in
                </label>
                <input
                  type="date"
                  value={form.check_in}
                  onChange={(e) => handleChange("check_in", e.target.value)}
                  className="w-full border border-[#C6E4EF] bg-[#E7F9FF] rounded-[12px] p-[12px] text-sm"
                />
              </div>

              <div>
                <label className="text-[#133C49] text-sm font-medium mb-1 block">
                  Check-Out
                </label>
                <input
                  type="date"
                  value={form.check_out}
                  onChange={(e) => handleChange("check_out", e.target.value)}
                  className="w-full border border-[#C6E4EF] bg-[#E7F9FF] rounded-[12px] p-[12px] text-sm"
                />
              </div>

              <div>
                <label className="text-[#133C49] text-sm font-medium mb-1 block">
                  No of Nights
                </label>
                <input
                  type="number"
                  value={form.nights}
                  onChange={(e) => handleChange("nights", e.target.value)}
                  className="w-full border border-[#C6E4EF] bg-[#E7F9FF] rounded-[12px] p-[12px] text-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#E7F9FF] py-16 flex flex-col items-center justify-center">
        <div className="w-[90%] grid md:grid-cols-[1fr_612px] gap-6">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            {/* In-Person */}
            <div className="bg-[#D5F4FF] border border-[#C6E4EF] rounded-[16px] p-[16px]">
              <h3 className="text-[#133C49] text-[18px] font-semibold mb-4">
                For In-Person Participants
              </h3>

              <ul className="space-y-2 text-[#4F5C60] text-[14px]">
                {[
                  "Full access to all conference sessions",
                  "Conference kit (badge, lanyard, brochure)",
                  "Access to Abstract Book",
                  "Daily lunch and coffee breaks",
                  "Certificate of participation",
                  "CME credits",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <img src="/tick.png" alt="" className="w-[20px] h-[20px]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Virtual */}
            <div className="bg-[#D5F4FF] border border-[#C6E4EF] rounded-[16px] p-5">
              <h3 className="text-[#133C49] text-[18px] font-semibold mb-4">
                For Virtual Participants
              </h3>

              <ul className="space-y-2 text-[#4F5C60] text-[14px]">
                {[
                  "Present remotely from home or work",
                  "Access to all presentations",
                  "E-Abstract Book and Program",
                  "E-Certificate for participation",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <img src="/tick.png" alt="" className="w-[20px] h-[20px]" />

                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Accommodation */}
            <div className="bg-[#D5F4FF] border border-[#C6E4EF] rounded-[16px] p-5">
              <h3 className="text-[#133C49] text-[18px] font-semibold mb-4">
                Accommodation Inclusions
              </h3>

              <div className="flex flex-wrap gap-4 text-[#4F5C60] text-[14px]">
                <span className="flex items-center gap-2">
                  <img src="/coffee.png" alt="" className="w-[20px] h-[20px]" />{" "}
                  Complimentary breakfast
                </span>
                <span className="flex items-center gap-2">
                  <img
                    src="/wifi-square.png"
                    alt=""
                    className="w-[20px] h-[20px]"
                  />{" "}
                  Free Wi-Fi
                </span>
              </div>

              <p className="text-[14px] text-[#4F5C60] mt-3">
                Check-in: 2:00 PM | Check-out: 12:00 PM
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">
            {/* Summary Card */}
            {/* <div className="bg-[#015262] border border-[#235262] text-white rounded-[24px] p-[24px]">
              <h3 className="text-[18px] md:text-[28px] font-semibold mb-4">
                Registration Summary
              </h3>

              <div className="space-y-3  text-[18px] text-[#FFFFFF]">
                <div className="flex justify-between">
                  <span className="text-[#FFFFFF]">Registration Price</span>
                  <span className="font-semibold">$149</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-[#FFFFFF]">Participants</span>
                  <span className="font-semibold">1</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-[#FFFFFF]">Accommodation</span>
                  <span className="font-semibold">$220</span>
                </div>

                <div className="flex justify-between font-semibold mt-2">
                  <span className="text-[#FFFFFF] font-semibold">
                    Total Price:
                  </span>
                  <span className="text-[#01D4FF] font-semibold">$369</span>
                </div>
              </div>

              
              <div className="flex items-center justify-center">
                <button
                  onClick={() => navigate("/conference/register-success")}
                  className=" mt-5 bg-[#01D4FF] text-[#072A41] py-[12px] px-[16px] rounded-[12px] text-[14px] font-semibold"
                >
                  Proceed to Payment
                </button>
              </div>
            </div> */}
            <div className="bg-[#015262] border border-[#235262] text-white rounded-[24px] p-[24px]">
              <h3 className="text-[18px] md:text-[28px] font-semibold mb-4">
                Registration Summary
              </h3>

              <div className="space-y-3 text-[18px] text-[#FFFFFF]">
                <div className="flex justify-between">
                  <span>Registration Price</span>
                  <span className="font-semibold">${registrationPrice}</span>
                </div>

                <div className="flex justify-between">
                  <span>Participants</span>
                  <span className="font-semibold">{participantCount}</span>
                </div>

                <div className="flex justify-between">
                  <span>Accommodation</span>
                  <span className="font-semibold">
                    ${accommodationPricePerNight} × {nights} = $
                    {accommodationTotal}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Accompanying</span>
                  <span className="font-semibold">
                    {accompanyingCount} × 200 = ${accompanyingTotal}
                  </span>
                </div>

                <div className="flex justify-between font-semibold mt-2">
                  <span>Total Price:</span>
                  <span className="text-[#01D4FF] font-semibold">
                    ${totalPrice}
                  </span>
                </div>
              </div>

              {/* Button */}
              <div className="flex items-center justify-center">
                <button
                  onClick={handleSubmit}
                  className="mt-5 bg-[#01D4FF] text-[#072A41] py-[12px] px-[16px] rounded-[12px] text-[14px] font-semibold"
                >
                  Proceed to Payment
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* POLICY */}
        <div className="w-[90%] mt-8">
          <div className="bg-[#D5F4FF] border border-[#C6E4EF] rounded-[16px] p-[16px]">
            <h3 className="text-[#133C49] text-[18px] font-semibold mb-3">
              Refund and Cancellation Policy
            </h3>

            <ul className="space-y-2 text-[#4F5C60] text-[14px] md:text-[18px]">
              <li>
                • All cancellation requests must be submitted in writing via
                email.
              </li>
              <li>
                • Cancellations made before 90 days of the conference start date
                will be eligible for a full refund, minus a $100 administrative
                fee.
              </li>
              <li>
                • Cancellations made within 90 days of the conference start date
                are non-refundable. However, the registration may be transferred
                to a future edition.
              </li>
              <li>
                • Registration transfers are allowed until September 15, 2026.
              </li>
              <li>
                • All approved refunds will be processed during the second week
                following the conclusion of the conference.
              </li>
              <li>
                • No refunds apply in case of postponement due to circumstances
                beyond the organizer’s control.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

/* INPUT */
// function Input({ label, star, placeholder }) {
//   return (
//     <div>
//       <label className="text-[14px] text-[#133C49] font-medium">
//         {label} {star && <span className="text-[#FF3939]">*</span>}
//       </label>
//       <input
//         placeholder={placeholder}
//         className="w-full mt-1 bg-[#E7F9FF] border border-[#C6E4EF] rounded-[12px] p-[16px] text-[14px] focus:outline-none focus:border-[#01D4FF]"
//       />
//     </div>
//   );
// }
function Input({ label, star, placeholder, value, onChange }) {
  return (
    <div>
      <label className="text-[14px] text-[#133C49] font-medium">
        {label} {star && <span className="text-[#FF3939]">*</span>}
      </label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full mt-1 bg-[#E7F9FF] border border-[#C6E4EF] rounded-[12px] p-[16px] text-[14px] focus:outline-none focus:border-[#01D4FF]"
      />
    </div>
  );
}

/* SELECT */
// function Select({ label }) {
//   return (
//     <div>
//       <label className="text-[14px] text-[#133C49] font-medium">
//         {label} <span className="text-[#FF3939]">*</span>
//       </label>
//       <select className="w-full mt-1 bg-[#E7F9FF] border border-[#C6E4EF] rounded-[12px] p-[16px] text-[14px]">
//         <option>Select</option>
//       </select>
//     </div>
//   );
// }
function Select({ label, options = [], value, onChange }) {
  return (
    <div>
      <label className="text-[14px] text-[#133C49] font-medium">
        {label} <span className="text-[#FF3939]">*</span>
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full mt-1 bg-[#E7F9FF] border border-[#C6E4EF] rounded-[12px] p-[16px] text-[14px]"
      >
        <option value="">Select</option>
        {options.map((item, i) => (
          <option key={i} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

function RegistrationSummary() {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-[#E7F9FF] py-16 flex flex-col items-center justify-center">
      <div className="w-[90%] grid md:grid-cols-[1fr_612px] gap-6">
        {/* LEFT SIDE */}
        <div className="space-y-6">
          {/* In-Person */}
          <div className="bg-[#D5F4FF] border border-[#C6E4EF] rounded-[16px] p-[16px]">
            <h3 className="text-[#133C49] text-[18px] font-semibold mb-4">
              For In-Person Participants
            </h3>

            <ul className="space-y-2 text-[#4F5C60] text-[14px]">
              {[
                "Full access to all conference sessions",
                "Conference kit (badge, lanyard, brochure)",
                "Access to Abstract Book",
                "Daily lunch and coffee breaks",
                "Certificate of participation",
                "CME credits",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <img src="/tick.png" alt="" className="w-[20px] h-[20px]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Virtual */}
          <div className="bg-[#D5F4FF] border border-[#C6E4EF] rounded-[16px] p-5">
            <h3 className="text-[#133C49] text-[18px] font-semibold mb-4">
              For Virtual Participants
            </h3>

            <ul className="space-y-2 text-[#4F5C60] text-[14px]">
              {[
                "Present remotely from home or work",
                "Access to all presentations",
                "E-Abstract Book and Program",
                "E-Certificate for participation",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <img src="/tick.png" alt="" className="w-[20px] h-[20px]" />

                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Accommodation */}
          <div className="bg-[#D5F4FF] border border-[#C6E4EF] rounded-[16px] p-5">
            <h3 className="text-[#133C49] text-[18px] font-semibold mb-4">
              Accommodation Inclusions
            </h3>

            <div className="flex flex-wrap gap-4 text-[#4F5C60] text-[14px]">
              <span className="flex items-center gap-2">
                <img src="/coffee.png" alt="" className="w-[20px] h-[20px]" />{" "}
                Complimentary breakfast
              </span>
              <span className="flex items-center gap-2">
                <img
                  src="/wifi-square.png"
                  alt=""
                  className="w-[20px] h-[20px]"
                />{" "}
                Free Wi-Fi
              </span>
            </div>

            <p className="text-[14px] text-[#4F5C60] mt-3">
              Check-in: 2:00 PM | Check-out: 12:00 PM
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">
          {/* Summary Card */}
          <div className="bg-[#015262] border border-[#235262] text-white rounded-[24px] p-[24px]">
            <h3 className="text-[18px] md:text-[28px] font-semibold mb-4">
              Registration Summary
            </h3>

            <div className="space-y-3  text-[18px] text-[#FFFFFF]">
              <div className="flex justify-between">
                <span className="text-[#FFFFFF]">Registration Price</span>
                <span className="font-semibold">$149</span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#FFFFFF]">Participants</span>
                <span className="font-semibold">1</span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#FFFFFF]">Accommodation</span>
                <span className="font-semibold">$220</span>
              </div>

              <div className="flex justify-between font-semibold mt-2">
                <span className="text-[#FFFFFF] font-semibold">
                  Total Price:
                </span>
                <span className="text-[#01D4FF] font-semibold">$369</span>
              </div>
            </div>

            {/* Button */}
            <div className="flex items-center justify-center">
              <button
                onClick={() => navigate("/conference/register-success")}
                className=" mt-5 bg-[#01D4FF] text-[#072A41] py-[12px] px-[16px] rounded-[12px] text-[14px] font-semibold"
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* POLICY */}
      <div className="w-[90%] mt-8">
        <div className="bg-[#D5F4FF] border border-[#C6E4EF] rounded-[16px] p-[16px]">
          <h3 className="text-[#133C49] text-[18px] font-semibold mb-3">
            Refund and Cancellation Policy
          </h3>

          <ul className="space-y-2 text-[#4F5C60] text-[14px] md:text-[18px]">
            <li>
              • All cancellation requests must be submitted in writing via
              email.
            </li>
            <li>
              • Cancellations made before 90 days of the conference start date
              will be eligible for a full refund, minus a $100 administrative
              fee.
            </li>
            <li>
              • Cancellations made within 90 days of the conference start date
              are non-refundable. However, the registration may be transferred
              to a future edition.
            </li>
            <li>
              • Registration transfers are allowed until September 15, 2026.
            </li>
            <li>
              • All approved refunds will be processed during the second week
              following the conclusion of the conference.
            </li>
            <li>
              • No refunds apply in case of postponement due to circumstances
              beyond the organizer’s control.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
