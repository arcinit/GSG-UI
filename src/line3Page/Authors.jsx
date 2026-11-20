import { Phone, Mail, MessageCircle, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Authors = () => {
  return (
    <div className="bg-[#E7F9FF]">
      <JournalsHero />
      <AuthorGuidelinesPage />
    </div>
  );
};

export default Authors;

function JournalsHero() {
  return (
    <div className="bg-[#0B2C36] h-[50vh] px-6 md:px-16 pb-10 pt-40 border-b border-[#2C5B63]">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-[36px] md:text-[54px] font-semibold text-white">
          Author <span className="text-[#01D4FF]">Guidelines</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-3 text-[#FFFFFF] text-[14px] md:text-[18px] ">
          Complete instructions for preparing and submitting your manuscript to
          our journals.
        </p>
      </div>
    </div>
  );
}

function AuthorGuidelinesPage() {
  const steps = [
    {
      title: "Create Account",
      desc: "Register or log in to our submission portal.",
    },
    {
      title: "Prepare Manuscript",
      desc: "Format according to these guidelines and templates.",
    },
    {
      title: "Submit Online",
      desc: "Complete the submission form and upload files.",
    },
    {
      title: "Track Progress",
      desc: "Monitor your submission status through the portal.",
    },
  ];
  return (
    <div className="  p-[16px] rounded-[12px]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* ================= LEFT SIDEBAR ================= */}
        <div className="bg-[#133C49] text-[#FFFFFF] rounded-[24px] p-[16px] w-full md:w-[240px] h-fit sticky top-20">
          <h3 className="text-[14px] md:text-[20px] font-semibold mb-4">
            Contents
          </h3>

          <ul className="space-y-2 text-[14px] ">
            {[
              "Manuscript Types",
              "Manuscript Preparation",
              "Article Structure",
              "References",
              "Figures & Tables",
              "Ethical Guidelines",
              "Submission Process",
              "Templates",
            ].map((item, i) => (
              <li key={i} className="hover:text-[#00D4FF] cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="flex-1 space-y-10">
          {/* ================= Manuscript Types ================= */}
          <section>
            <h2 className="text-[20px] font-semibold text-[#133C49] mb-4">
              Manuscript Types
            </h2>

            {[
              "Original Research Articles",
              "Review Articles",
              "Short Communications",
              "Case Studies",
            ].map((title, i) => (
              <div
                key={i}
                className="bg-[#D5F4FF] border border-[#C6E4EF] rounded-[16px] p-[24px] mb-4"
              >
                <h3 className="text-[14px] md:text-[20px] font-semibold text-[#133C49]">
                  {title}
                </h3>
                <p className="text-[12px] text-[#4A6B73] mt-1">
                  Lorem ipsum description of the manuscript type goes here.
                </p>
              </div>
            ))}
          </section>

          {/* ================= Manuscript Preparation ================= */}
          <section>
            <h2 className="text-[20px] font-semibold text-[#133C49] mb-4">
              Manuscript Preparation
            </h2>

            <div className="bg-[#D5F4FF] border border-[#C6E4EF] rounded-[16px] p-[24px] space-y-6">
              {/* File Format */}
              <div>
                <h3 className="text-[14px] md:text-[20px] font-semibold text-[#133C49] mb-2">
                  File Format
                </h3>
                <ul className="space-y-2 text-[14px] text-[#4F5C60]">
                  {[
                    "Submit manuscripts in Microsoft Word (.doc/.docx)",
                    "A4 page size with 2.5 cm margins",
                    "12pt Times New Roman",
                    "1.5 line spacing",
                    "Continuous line numbering",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <img
                        src="/greencheck.png"
                        alt=""
                        className="w-[20px] h-[20px]"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Title Page */}
              <div>
                <h3 className="text-[14px] font-semibold text-[#133C49] mb-2">
                  Title Page
                </h3>
                <ul className="text-[14px] text-[#4F5C60] space-y-1 list-disc pl-4">
                  <li>Full title of manuscript</li>
                  <li>Running title</li>
                  <li>Author details</li>
                  <li>Email of corresponding author</li>
                </ul>
              </div>

              {/* Abstract */}
              <div>
                <h3 className="text-[14px] font-semibold text-[#133C49] mb-2">
                  Abstract
                </h3>
                <ul className="text-[14px] text-[#4F5C60] space-y-1 list-disc pl-4">
                  <li>250–300 words structured abstract</li>
                  <li>Include Background, Methods, Results, Conclusion</li>
                  <li>No citations</li>
                </ul>
              </div>
            </div>
          </section>

          {/* ================= Article Structure ================= */}
          <section>
            <h2 className="text-[20px] font-semibold text-[#133C49] mb-4">
              Article Structure
            </h2>

            <div className="bg-[#D5F4FF] border border-[#C6E4EF] rounded-[16px] p-[24px] space-y-4">
              <p className="text-[18px] text-[#133C49] mb-2">
                Research articles should follow the IMRaD structure:
              </p>
              {["Introduction", "Methods", "Results", "Discussion"].map(
                (item, i) => (
                  <div key={i} className="border-l-2 border-[#01D4FF] pl-3">
                    <h4 className="text-[14px] md:tedxt-[18px] font-semibold text-[#133C49]">
                      {item}
                    </h4>
                    <p className="text-[14px] text-[#4F5C60]">
                      Description for {item}.
                    </p>
                  </div>
                ),
              )}
            </div>
          </section>

          {/* ================= References ================= */}
          <section>
            <h2 className="text-[20px] font-semibold text-[#133C49] mb-4">
              References
            </h2>

            <div className="bg-[#D5F4FF] border border-[#C6E4EF] rounded-[16px] p-[24px] ">
              <p className="text-[18px] text-[#133C49] mb-4">
                Use APA 7th edition citation style.
              </p>

              <div className="bg-[#E7F9FF] p-[16px] rounded-[16px] text-[18px]  space-y-2 mb-3">
                <p className="text-[#133C49] font-semibold">
                  Journal Article: <br />
                  <span className="text-[#4F5C60] font-normal text-[14px]">
                    Smith, J., & Brown, A. (2024). Title of article. Journal
                    Name, 15(3), 145-162. https://doi.org/xxxxx
                  </span>
                </p>
                <p className="text-[#133C49] font-semibold">
                  Book: <br />
                  <span className="text-[#4F5C60] font-normal text-[14px]">
                    Author, A. A. (Year). Title of work. Publisher.
                  </span>
                </p>
                <p className="text-[#133C49] font-semibold">
                  Conference Paper: <br />
                  <span className="text-[#4F5C60] font-normal text-[14px]">
                    Author, A. A. (Year). Title of paper. In Proceedings of
                    Conference Name (pp. xx-xx). Publisher.
                  </span>
                </p>
              </div>

              <p className="flex gap-2 text-[#4F5C60] text-[14px] font-normal">
                <img
                  src="/exclamation-circle.png"
                  alt=""
                  className="w-[20px] h-[20px]"
                />
                Include DOI for all references where available. Avoid citing
                retracted publications.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-[20px] font-semibold text-[#133C49] mb-4">
              Figures & Tables
            </h2>

            <div className="bg-[#D5F4FF] border border-[#C6E4EF] rounded-[16px] p-[24px] ">
              <div className="mb-6">
                <h3 className="text-[14px] md:text-[20px] font-semibold text-[#133C49] mb-2">
                  Figures
                </h3>

                <ul className="space-y-2 text-[14px] text-[#4F5C60]">
                  <li>
                    • Submit as separate files (TIFF, EPS, or high-resolution
                    JPEG)
                  </li>
                  <li>• Minimum resolution: 300 DPI</li>
                  <li>• Maximum file size: 10 MB per figure</li>
                  <li>• Include descriptive captions below each figure</li>
                  <li>• Use consistent formatting across all figures</li>
                </ul>
              </div>
              <div>
                <h3 className="text-[14px] md:text-[20px] font-semibold text-[#133C49] mb-2">
                  Tables
                </h3>

                <ul className="space-y-2 text-[14px] text-[#4F5C60]">
                  <li>• Create tables in Word using the table function</li>
                  <li>• Number consecutively with Arabic numerals</li>
                  <li>• Include a concise title above each table</li>
                  <li>• Explain abbreviations in footnotes</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-[20px] font-semibold text-[#133C49] mb-4">
              Ethical Guidelines
            </h2>

            <div className="bg-[#D5F4FF] border border-[#C6E4EF] rounded-[16px] p-[24px] ">
              <div className="grid md:grid-cols-2 gap-4">
                <EthicsCard
                  title="Originality"
                  desc="All submissions must be original work not previously published or under consideration elsewhere."
                />

                <EthicsCard
                  title="Plagiarism"
                  desc="All manuscripts are screened for plagiarism. Similarity index must be below 15%."
                />

                <EthicsCard
                  title="Research Ethics"
                  desc="Studies involving humans or animals must have appropriate ethical approval."
                />

                <EthicsCard
                  title="Conflicts of Interest"
                  desc="Authors must disclose any financial or personal relationships that could influence the work."
                />
              </div>
            </div>
          </section>

          {/* ================= Submission Process ================= */}
          <section>
            <h2 className="text-[20px] font-semibold text-[#133C49] mb-4">
              Submission Process
            </h2>

            <div className="bg-[#D5F4FF] border border-[#C6E4EF] rounded-[16px] p-[24px] space-y-4">
              <div className="space-y-6">
                {steps.map((step, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    {/* NUMBER */}
                    <div className="w-8 h-8 bg-[#00657A] text-[#01D4FF] rounded-full flex items-center justify-center text-[14px] font-semibold">
                      {i + 1}
                    </div>

                    {/* CONTENT */}
                    <div>
                      <h3 className="text-[14px] font-semibold text-[#133C49]">
                        {step.title}
                      </h3>

                      <p className="text-[13px] text-[#4F5C60] mt-2">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <button className="flex items-center gap-2 bg-[#01D4FF] text-[#133C49] px-[16px] py-[8px] rounded-[12px] text-[14px] font-medium">
                  <img
                    src="/document-text.png"
                    alt=""
                    className="w-[20px] h-[20px]"
                  />
                  Submit Manuscript Now
                </button>
              </div>
            </div>
          </section>

          {/* ================= Templates ================= */}
          <section>
            <h2 className="text-[20px] font-semibold text-[#133C49] mb-4">
              Downloadable Templates
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Manuscript Template",
                "Cover Letter",
                "Figure Guidelines",
                "Ethics Form",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-[#D5F4FF] border border-[#C6E4EF] rounded-[16px] p-[16px] flex justify-between items-center"
                >
                  <div>
                    <p className="text-[14px] font-medium text-[#133C49]">
                      {item}
                    </p>
                    <p className="text-[14px] text-[#4F5C60]">Document</p>
                  </div>

                  <button className="flex items-center text-[#133C49] gap-1 bg-[#01D4FF] px-[16px] py-[8px] rounded-[12px] text-[14px]">
                    <img src="/down.png" alt="" className="w-[20px] h-[20px]" />
                    Download
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function EthicsCard({ title, desc }) {
  return (
    <div className="bg-[#E7F9FF] rounded-[16px] p-[16px]">
      <h3 className="text-[18px] font-semibold text-[#133C49] mb-1">{title}</h3>
      <p className="text-[14px] text-[#4F5C60]">{desc}</p>
    </div>
  );
}
