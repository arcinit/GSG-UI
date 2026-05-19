export default function Footer() {
  return (
    <footer className="bg-[#154351] text-white pt-16 pb-6 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* TOP GRID */}
        <div className="grid md:grid-cols-5 gap-10">
          {/* LEFT */}
          <div>
            <img
              src="/logo.png"
              alt="logo"
              className="h-[50px] mb-4 rounded-[12px]"
            />

            <h4 className="text-[#01D4FF] font-medium text-[18px] mb-2">
              Journals
            </h4>

            <p className="text-[14px] text-[#CFE6EC] leading-relaxed">
              Advancing scientific knowledge through rigorous peer-reviewed
              publishing. Committed to open access, ethical standards, and
              global research dissemination.
            </p>

            {/* Social */}
            <div className="flex gap-3 mt-5">
              {["f", "insta", "l", "p"].map((i, idx) => (
                <img
                  key={idx}
                  src={`/${i}.png`}
                  className="w-[36px] h-[36px] opacity-80 hover:opacity-100"
                />
              ))}
            </div>
          </div>

          {/* COLUMN 2 */}
          <div>
            <h3 className="text-[#01D4FF] text-[20px] font-semibold mb-4">
              About
            </h3>
            <ul className="space-y-2 text-[14px] text-[#CFE6EC]">
              <li>About Journals</li>
              <li>Publishing Model</li>
              <li>Editorial Policies</li>
              <li>Open Access</li>
              <li>Indexing & Abstracting</li>
            </ul>
          </div>

          {/* COLUMN 3 */}
          <div>
            <h3 className="text-[#01D4FF] text-[20px] font-semibold mb-4">
              For Authors
            </h3>
            <ul className="space-y-2 text-[14px] text-[#CFE6EC]">
              <li>Author Guidelines</li>
              <li>Submit Manuscript</li>
              <li>Publication Ethics</li>
              <li>Article Processing</li>
              <li>FAQs for Authors</li>
            </ul>
          </div>

          {/* COLUMN 4 */}
          <div>
            <h3 className="text-[#01D4FF] text-[20px] font-semibold mb-4">
              For Reviewers
            </h3>
            <ul className="space-y-2 text-[14px] text-[#CFE6EC]">
              <li>Reviewer Guidelines</li>
              <li>Review Process</li>
              <li>Become a Reviewer</li>
              <li>Reviewer Resources</li>
            </ul>
          </div>

          {/* COLUMN 5 */}
          <div>
            <h3 className="text-[#01D4FF] text-[20px] font-semibold mb-4">
              Resources
            </h3>
            <ul className="space-y-2 text-[14px] text-[#CFE6EC]">
              <li>All Journals</li>
              <li>Browse by Subject</li>
              <li>Editorial Board</li>
              <li>Latest Articles</li>
              <li>News & Updates</li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-[#2E5C66] mt-10 pt-5 flex flex-col md:flex-row justify-between items-center text-[14px] text-[#FFFFFF]">
          <p className="text-[18px] font-medium">
            © 2026 Global Scientific Journals. All Rights Reserved.
          </p>

          <div className="flex gap-6 mt-3 md:mt-0">
            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer">
              Terms of Use
            </span>
            <span className="hover:text-white cursor-pointer">Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
