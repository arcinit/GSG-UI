export default function Footer() {
  return (
    <footer className="bg-[#154351] text-white pt-14 pb-6 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Top Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* LEFT */}
          <div>
            {/* Logo */}
            <img
              src="/logo.png" // replace with your logo
              alt="logo"
              className="h-[50px] mb-4 w-[103px] rounded-[12px]"
            />

            {/* Text */}
            <p className="text-[#FFFFFF] text-[18px] font-medium leading-relaxed max-w-sm">
              We are committed to creating a platform where business leaders,
              innovators, and professionals can come together to exchange ideas
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              <img src="/f.png" alt="" className="w-[40px] h-[40px]" />
              <img src="/insta.png" alt="" className="w-[40px] h-[40px]" />

              <img src="/l.png" alt="" className="w-[40px] h-[40px]" />

              <img src="/p.png" alt="" className="w-[40px] h-[40px]" />
            </div>
          </div>

          {/* MIDDLE */}
          <div>
            <h3 className="text-[#01D4FF] text-[24px] font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-[18px] font-medium text-[#FFFFFF]">
              <li className="hover:text-[#01D4FF] cursor-pointer">About Us</li>
              <li className="hover:text-[#01D4FF] cursor-pointer">Our Blogs</li>
              <li className="hover:text-[#01D4FF] cursor-pointer">
                Event Listing
              </li>
              <li className="hover:text-[#01D4FF] cursor-pointer">
                Pricing Plan
              </li>
              <li className="hover:text-[#01D4FF] cursor-pointer">
                Contact Us
              </li>
            </ul>
          </div>

          {/* RIGHT */}
          <div>
            <h3 className="text-[#01D4FF] text-[24px] font-semibold mb-4">
              Contact Us
            </h3>

            <ul className="space-y-4 text-[18px] font-medium text-[#FFFFFF]">
              <li className="flex items-center gap-3 hover:text-[#01D4FF]">
                <img src="/f1.png" alt="" className="w-[20px] h-[20px]" />
                +1 123 456 7890
              </li>

              <li className="flex items-center gap-3 hover:text-[#01D4FF]">
                <img src="/f3.png" alt="" className="w-[20px] h-[20px]" />
                Secret Location In The UK
              </li>

              <li className="flex items-center gap-3 hover:text-[#01D4FF]">
                <img src="/f4.png" alt="" className="w-[20px] h-[20px]" />
                eventifyevent@gmail.com
              </li>

              <li className="flex items-center gap-3 hover:text-[#01D4FF]">
                <img src="/f2.png" alt="" className="w-[20px] h-[20px]" />
                eventifyevent.com
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#324D56] mt-10 pt-6 text-center text-[18px] text-[#FFFFFF]">
          © Copyright 2024 -Global Scientific Group. All Right Reserved
        </div>
      </div>
    </footer>
  );
}
