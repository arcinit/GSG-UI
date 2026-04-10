import { Download, Share2, Copy } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ArticleDetailPage() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#E7F9FF] px-6 md:px-16 py-10 pt-40">
      <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_320px] gap-8">
        {/* ================= LEFT ================= */}
        <div>
          {/* BACK */}
          <p
            onClick={() => navigate(-1)}
            className="text-[12px] text-[#133C49] mb-4 cursor-pointer"
          >
            ← Back to Articles
          </p>

          {/* TAGS */}
          <div className="flex gap-2 mb-3">
            <span className="px-[12px] py-[8px] text-[12px] border border-[#00849F] text-[#00849F] rounded-[8px]">
              Medical Science
            </span>

            <span className="px-[12px] py-[8px] text-[12px] bg-[#0BD400]/10 border border-[#0BD400] text-[#0BD400] rounded-[8px]">
              Open Access
            </span>
          </div>

          {/* TITLE */}
          <h1 className="text-[28px] font-semibold text-[#133C49] mb-5">
            Machine Learning Approaches for Predictive Maintenance in Industrial
            Systems
          </h1>

          {/* AUTHORS */}
          <div className="grid md:grid-cols-2 gap-4 mb-5">
            {["John Smith", "Maria Johnson", "Kevin Lee"].map((name, i) => (
              <div key={i} className="border-[#C6E4EF] p-[12px] rounded-[12px]">
                <p className="text-[14px] md:text-[18px] font-semibold text-[#133C49]">
                  {name}
                </p>
                <p className="text-[12px] md:text-[14px] text-[#4F5C60]">
                  Department of Engineering, University
                </p>
              </div>
            ))}
          </div>

          {/* JOURNAL INFO */}
          <div className="bg-[#D5F4FF] border border-[#C6E4EF] p-[16px] rounded-[12px] grid md:grid-cols-4 gap-4 text-[14px] mb-4">
            <div>
              <p className="text-[#4F5C60]">Journal</p>
              <p className="font-semibold text-[#133C49]">
                International Journal of Advanced Engineering Research
              </p>
            </div>

            <div>
              <p className="text-[#4F5C60]">Volume/Issue</p>
              <p className="font-semibold text-[#133C49]">Vol. 15, Issue 12</p>
            </div>

            <div>
              <p className="text-[#4F5C60]">Pages</p>
              <p className="font-semibold text-[#133C49]">145-162</p>
            </div>

            <div>
              <p className="text-[#4F5C60]">Published</p>
              <p className="font-semibold text-[#00AEEF]">December 15, 2025</p>
            </div>
          </div>

          {/* DOI */}
          <div className="flex items-center gap-2 text-[14px] mb-6">
            <span className="text-[#4A6B73]">DOI:</span>
            <span className="text-[#00849F] font-medium">
              10.1234/ijaer.2025.12.145
            </span>
            <img
              src="/document-copy.png"
              alt=""
              className="w-[24px] h-[24px]"
            />
          </div>

          {/* ABSTRACT */}
          <div className="bg-[#D5F4FF] border border-[#C6E4EF] p-[16px] rounded-[12px]">
            <h2 className="text-[18px] md:text-[28px] font-semibold text-[#133C49] mb-3">
              Abstract
            </h2>

            <p className="text-[14px] text-[#4F5C60] text-[14px] leading-relaxed">
              This paper presents a comprehensive study on the application of
              machine learning techniques for predictive maintenance...
            </p>
          </div>

          <ArticleContent />
        </div>

        {/* ================= RIGHT SIDEBAR ================= */}
        <div className="">
          <div className="bg-[#133C49] space-y-5 rounded-[12px] p-[8px]">
            {/* DOWNLOAD */}
            <div className="bg-[#13404F] border border-[#235262] p-[16px] rounded-[12px] text-white">
              <button className="w-full flex items-center justify-center gap-2 bg-[#01D4FF] text-[#072A41] px-[16px] py-[8px] rounded-[12px] text-[14px] font-semibold">
                <img src="/down.png" alt="" className="w-[24px] h-[24px]" />
                Download PDF
              </button>

              <button className="w-full mt-3 flex items-center justify-center gap-2 border border-[#01D4FF] px-[16px] py-[8px] rounded-[12px] text-[14px] text-[#01D4FF] font-semibold">
                <img src="/share.png" alt="" className="w-[24px] h-[24px]" />
                Share
              </button>
            </div>

            {/* METRICS */}
            <div className="bg-[#13404F] border border-[#235262] p-[16px] rounded-[12px] text-white">
              <h3 className="text-[18px] text-[#FFFFFF] font-semibold mb-3">
                Article Metrics
              </h3>

              <div className="flex justify-between text-[14px] text-center">
                <div>
                  <p className="text-[#01D4FF] font-semibold">1247</p>
                  <p className="font-normal text-[#FFFFFF]">Views</p>
                </div>
                <div>
                  <p className="font-semibold">456</p>
                  <p className="font-normal text-[#FFFFFF]">Downloads</p>
                </div>
                <div>
                  <p className="font-semibold">12</p>
                  <p className="font-normal text-[#FFFFFF]">Citations</p>
                </div>
              </div>
            </div>

            {/* TIMELINE */}
            <div className="bg-[#13404F] border border-[#235262] p-[16px] rounded-[12px] text-white">
              <h3 className="text-[18px] font-semibold mb-3">
                Publication Timeline
              </h3>

              {[
                ["Received", "October 15, 2025"],
                ["Revised", "November 20, 2025"],
                ["Accepted", "December 1, 2025"],
                ["Published", "December 15, 2025"],
              ].map((item, i) => (
                <div key={i} className="flex justify-between text-[14px] mb-1">
                  <span className="text-[#FFFFFF]/70 font-normal">
                    {item[0]}
                  </span>
                  <span className="font-semibold text-[#FFFFFF]">
                    {item[1]}
                  </span>
                </div>
              ))}
            </div>

            {/* RELATED */}
            <div className="bg-[#13404F] border border-[#235262] p-[16px] rounded-[12px] text-white">
              <h3 className="text-[18px] font-semibold mb-3">
                Related Articles
              </h3>

              <div className="space-y-3 text-[14px]">
                <div>
                  <p className="font-semibold">
                    Deep Learning for Industrial Fault Detection
                  </p>
                  <p className="text-[#FFFFFF]/70">Vol. 14, Issue 8</p>
                </div>

                <div>
                  <p className="font-semibold">
                    IoT-Based Smart Manufacturing Systems
                  </p>
                  <p className="text-[#FFFFFF]/70">Vol. 15, Issue 3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArticleContent() {
  const keywords = [
    "Machine Learning",
    "Predictive Maintenance",
    "Deep Learning",
    "Industrial IoT",
    "Manufacturing Systems",
    "Failure Prediction",
  ];

  return (
    <div className="mt-10">
      <div className="">
        {/* ================= KEYWORDS ================= */}
        <div className="mb-6">
          <h2 className="text-[18px] md:text-[28px] font-semibold text-[#133C49] mb-3">
            Keywords
          </h2>

          <div className="flex flex-wrap gap-2">
            {keywords.map((k, i) => (
              <span
                key={i}
                className="px-[12px] py-[8px] text-[12px] bg-[#D5F4FF] border border-[#C6E4EF] text-[#4F5C60] rounded-[32px]"
              >
                {k}
              </span>
            ))}
          </div>
        </div>

        {/* ================= SECTION ================= */}
        <ArticleSection
          title="1. Introduction"
          content={[
            "Industrial manufacturing systems face significant challenges in maintaining operational efficiency while minimizing unplanned downtime...",
            "Predictive maintenance has emerged as a paradigm shift in industrial maintenance strategies...",
          ]}
        />

        <ArticleSection
          title="2. Literature Review"
          content={[
            "Previous research in predictive maintenance has explored various methodologies ranging from statistical process control to machine learning techniques...",
            "Recent advances in deep learning have shown promising results...",
          ]}
        />

        <ArticleSection
          title="3. Methodology"
          content={[
            "Our proposed framework consists of three main components...",
            "Data preprocessing involves signal normalization, noise reduction...",
          ]}
        />

        {/* RESULTS WITH BULLETS */}
        <div className="mb-6">
          <h2 className="text-[20px] font-semibold text-[#133C49] mb-2">
            4. Results and Discussion
          </h2>

          <p className="text-[13px] text-[#4A6B73] mb-3 leading-relaxed">
            Experimental evaluation was conducted on datasets from three
            manufacturing facilities...
          </p>

          <ul className="text-[13px] text-[#4A6B73] list-disc ml-5 space-y-1">
            <li>Dataset A: 94.7% accuracy, 0.92 F1-score</li>
            <li>Dataset B: 93.2% accuracy, 0.91 F1-score</li>
            <li>Dataset C: 95.1% accuracy, 0.94 F1-score</li>
          </ul>

          <p className="text-[13px] text-[#4A6B73] mt-3 leading-relaxed">
            Comparison with baseline methods showed significant improvements...
          </p>
        </div>

        {/* CONCLUSION */}
        <ArticleSection
          title="5. Conclusion"
          content={[
            "This study presents a novel machine learning framework for predictive maintenance...",
            "Future work will focus on extending the framework...",
          ]}
        />

        {/* ================= REFERENCES ================= */}
        <div>
          <h2 className="text-[20px] font-semibold text-[#133C49] mb-3">
            References
          </h2>

          <ol className="text-[13px] text-[#4A6B73] list-decimal ml-5 space-y-2">
            <li>Smith, J., Brown, A., & Davis, M. (2022)...</li>
            <li>Wang, Y., & Chen, L. (2023)...</li>
            <li>Kumar, R., Singh, P., & Patel, V. (2024)...</li>
            <li>Lee, K., Park, S., & Kim, H. (2023)...</li>
            <li>Johnson, M., & Williams, T. (2024)...</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

function ArticleSection({ title, content }) {
  return (
    <div className="mb-6">
      <h2 className="text-[20px] md:text-[28px] font-semibold text-[#133C49] mb-2">
        {title}
      </h2>

      {content.map((para, i) => (
        <p
          key={i}
          className="text-[14px] text-[#4F5C60] font-normal mb-2 leading-relaxed"
        >
          {para}
        </p>
      ))}
    </div>
  );
}
