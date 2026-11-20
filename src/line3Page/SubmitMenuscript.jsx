"use client";

import { useState } from "react";
import {
  User,
  FileText,
  Upload,
  AlertCircle,
  Check,
  CheckCircle,
  Send,
  UploadCloud,
} from "lucide-react";
import http from "../service/http";
import { toast } from "react-toastify";

export default function SubmitManuscript({ journals }) {
  const [step, setStep] = useState(0);

  const steps = [
    { label: "Author Details", icon: User },
    { label: "Manuscript Info", icon: FileText },
    { label: "Upload Files", icon: Upload },
    { label: "Declarations", icon: AlertCircle },
    { label: "Review & Submit", icon: Send },
  ];

  const [form, setForm] = useState({
    // STEP 1
    author_name: "",
    email: "",
    institution: "",
    orcid: "",
    co_authors: "",

    // STEP 2
    journal: "",
    article_type: "",
    title: "",
    abstract: "",
    keywords: "",

    // STEP 3
    manuscript_file: null,
    cover_letter: null,
    supplementary_files: null,

    // STEP 4
    declarations: [],
  });

  const handleChange = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="bg-[#E7F9FF] min-h-screen">
      {/* ================= HERO + STEPPER ================= */}
      <div className="bg-[#0B2C36] px-6 md:px-16 py-16 text-center pt-40">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-[28px] md:text-[42px] font-semibold text-white">
            Submit Your <span className="text-[#01D4FF]">Manuscript</span>
          </h1>

          <p className="mt-2 text-[#FFFFFF] text-[14px] md:text-[18px]">
            Complete all steps to submit your research for peer review.
          </p>

          {/* STEPPER */}
          {/* <div className="relative mt-10">
            <div className="absolute top-5 left-0 right-0 h-[2px] bg-[#2C5B63]"></div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 relative">
              {steps.map((stepItem, i) => {
                const Icon = stepItem.icon;
                const isActive = i === step;
                const isCompleted = i < step;

                return (
                  <div key={i} className="flex flex-col items-center">
                    <div
                      className={`w-[48px] h-[48px] rounded-full bg-[#13404F] border  border-[#235262] flex items-center justify-center z-10 ${
                        isCompleted || isActive
                          ? " text-[#01D4FF]"
                          : "text-[#FFFFFF]/70"
                      }`}
                    >
                      {isCompleted ? (
                        <img
                          src="/tick-circle2.png"
                          alt=""
                          className="w-[24px] h-[24px]"
                        />
                      ) : (
                        <Icon size={16} />
                      )}
                    </div>

                    <p
                      className={`mt-2 text-[12px] md:text-[18px] ${
                        isCompleted || isActive
                          ? "text-[#01D4FF]"
                          : "text-[#D5F4FF]"
                      }`}
                    >
                      {stepItem.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div> */}
          {/* STEPPER */}
          <div className="relative mt-10">
            {/* LINE → only visible on md+ */}
            <div className="hidden md:block absolute top-5 left-[10%] right-[10%] h-[2px] bg-[#2C5B63]"></div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 relative">
              {steps.map((stepItem, i) => {
                const Icon = stepItem.icon;
                const isActive = i === step;
                const isCompleted = i < step;

                return (
                  <div key={i} className="flex flex-col items-center">
                    {/* CIRCLE */}
                    <div
                      className={`w-[42px] h-[42px] md:w-[48px] md:h-[48px] rounded-full bg-[#13404F] border border-[#235262] flex items-center justify-center z-10 ${
                        isCompleted || isActive
                          ? "text-[#01D4FF]"
                          : "text-[#FFFFFF]/70"
                      }`}
                    >
                      {isCompleted ? (
                        <img
                          src="/tick-circle2.png"
                          alt=""
                          className="w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
                        />
                      ) : (
                        <Icon size={14} className="md:size-[16px]" />
                      )}
                    </div>

                    {/* LABEL */}
                    <p
                      className={`mt-2 text-[11px] md:text-[16px] text-center leading-tight ${
                        isCompleted || isActive
                          ? "text-[#01D4FF]"
                          : "text-[#D5F4FF]"
                      }`}
                    >
                      {stepItem.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ================= STEP CONTENT ================= */}
      {step === 0 && (
        <AuthorDetailsForm
          form={form}
          setForm={setForm}
          onNext={() => setStep(1)}
        />
      )}
      {step === 1 && (
        <ManuscriptInfoForm
          form={form}
          setForm={setForm}
          journals={journals}
          onNext={() => setStep(2)}
          onPrev={() => setStep(0)}
        />
      )}
      {step === 2 && (
        <UploadFiles
          form={form}
          setForm={setForm}
          onNext={() => setStep(3)}
          onPrev={() => setStep(1)}
        />
      )}
      {step === 3 && (
        <Declarations
          form={form}
          setForm={setForm}
          onNext={() => setStep(4)}
          onPrev={() => setStep(2)}
        />
      )}
      {step === 4 && <ReviewSubmit form={form} onPrev={() => setStep(3)} />}
    </div>
  );
}

{
  /* ================= STEP 1 ================= */
}
function AuthorDetailsForm({ onNext, onPrev, form, setForm }) {
  return (
    <div className="px-6 py-10">
      <div className="max-w-7xl mx-auto bg-[#D5F4FF] rounded-[16px] p-[16px] shadow-sm">
        {/* TITLE */}
        <h2 className="text-[16px] md:text-[20px] font-semibold text-[#133C49] mb-6">
          Author Details
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* NAME */}
          <div>
            <label className="text-[12px] md:text-[14px] font-medium text-[#000000] mb-1 block">
              Corresponding Author Name{" "}
              <span className="text-[#FF3939]">*</span>
            </label>
            <input
              value={form.author_name}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, author_name: e.target.value }))
              }
              className="w-full p-[12px] rounded-[12px] bg-[#E7F9FF] border border-[#C6E4EF] text-[14px] outline-none"
              placeholder="John Smith"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="text-[12px] md:text-[14px] font-medium text-[#000000] mb-1 block">
              Email Address <span className="text-[#FF3939]">*</span>
            </label>
            <input
              value={form.email}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, email: e.target.value }))
              }
              className="w-full p-[12px] rounded-[12px] bg-[#E7F9FF] border border-[#C6E4EF] text-[14px] outline-none"
              placeholder="johnsmith@example.com"
            />
          </div>

          {/* INSTITUTION */}
          <div>
            <label className="text-[12px] md:text-[14px] font-medium text-[#000000] mb-1 block">
              Institution/Affiliation <span className="text-[#FF3939]">*</span>
            </label>
            <input
              value={form.institution}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, institution: e.target.value }))
              }
              className="w-full p-[12px] rounded-[12px] bg-[#E7F9FF] border border-[#C6E4EF] text-[14px] outline-none"
              placeholder="Dept. of Engineering, MIT, USA"
            />
          </div>

          {/* ORCID */}
          <div>
            <label className="text-[12px] md:text-[14px] font-medium text-[#000000] mb-1 block">
              ORCID ID (Optional)
            </label>
            <input
              value={form.orcid}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, orcid: e.target.value }))
              }
              className="w-full p-[12px] rounded-[12px] bg-[#E7F9FF] border border-[#C6E4EF] text-[14px] outline-none"
              placeholder="0000-0002-4853-8029"
            />
          </div>

          {/* CO AUTHORS */}
          <div className="md:col-span-2">
            <label className="text-[12px] md:text-[14px] font-medium text-[#000000] mb-1 block">
              Co-Authors (if any)
            </label>
            <textarea
              value={form.co_authors}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, co_authors: e.target.value }))
              }
              className="w-full p-[12px] rounded-[12px] bg-[#E7F9FF] border border-[#C6E4EF] text-[14px] outline-none h-[140px]"
              placeholder="List of co-authors with their affiliations, one per line."
            ></textarea>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex justify-between mt-6">
          <button
            className="px-[16px] py-[12px] bg-[#E7F9FF] border border-[#C6E4EF] text-[#133C49] rounded-[12px] text-[14px]"
            onClick={onPrev}
          >
            Previous
          </button>

          <button
            className="px-[16px] py-[12px] bg-[#01D4FF] text-[#133C49] rounded-[12px] text-[14px] font-medium"
            onClick={onNext}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

{
  /* ================= STEP 2 ================= */
}
function ManuscriptInfoForm({ onNext, onPrev, form, setForm, journals }) {
  return (
    <div className="px-6 py-10">
      <div className="max-w-7xl mx-auto bg-[#D5F4FF] rounded-[16px] p-[16px] shadow-sm">
        {/* TITLE */}
        <h2 className="text-[16px] md:text-[20px] font-semibold text-[#133C49] mb-6">
          Manuscript Information
        </h2>

        {/* SELECTS */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* JOURNAL */}
          <div>
            <label className="text-[12px] md:text-[14px] font-medium text-[#000000] mb-1 block">
              Select Journal <span className="text-[#FF3939]">*</span>
            </label>
            <select
              value={form.journal}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  journal: e.target.value,
                }))
              }
              className="w-full p-[12px] rounded-[12px] bg-[#E7F9FF] border border-[#C6E4EF] text-[14px] outline-none"
            >
              <option value="">Choose Journal</option>
              {journals.map((j) => (
                <option key={j.id} value={j.journal_slug}>
                  {j.title}
                </option>
              ))}
            </select>
          </div>

          {/* TYPE */}
          <div>
            <label className="text-[12px] md:text-[14px] font-medium text-[#000000] mb-1 block">
              Article Type <span className="text-[#FF3939]">*</span>
            </label>
            <select
              value={form.article_type}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  article_type: e.target.value,
                }))
              }
              className="w-full p-[12px] rounded-[12px] bg-[#E7F9FF] border border-[#C6E4EF] text-[14px] outline-none"
            >
              <option value="">Select Type</option>
              <option value="Research Article">Research Article</option>
              <option value="Review">Review</option>
              <option value="Case Study">Case Study</option>
            </select>
          </div>
        </div>

        {/* TITLE */}
        <div className="mt-4">
          <label className="text-[12px] md:text-[14px] font-medium text-[#000000] mb-1 block">
            Manuscript Title <span className="text-[#FF3939]">*</span>
          </label>
          <input
            value={form.title}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, title: e.target.value }))
            }
            className="w-full p-[12px] rounded-[12px] bg-[#E7F9FF] border border-[#C6E4EF] text-[14px] outline-none"
            placeholder="Enter the full title of your Manuscript"
          />
        </div>

        {/* ABSTRACT */}
        <div className="mt-4">
          <label className="text-[12px] md:text-[14px] font-medium text-[#000000] mb-1 block">
            Abstract <span className="text-[#FF3939]">*</span>
          </label>
          <textarea
            value={form.abstract}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, abstract: e.target.value }))
            }
            className="w-full p-[12px] rounded-[12px] bg-[#E7F9FF] border border-[#C6E4EF] text-[14px] outline-none h-[140px]"
            placeholder="Provide a structural abstract of your research"
          ></textarea>

          {/* WORD COUNT */}
          <p className="text-[11px] text-[#4A6B73] mt-1">
            0 Words (250–300 words)
          </p>
        </div>

        {/* KEYWORDS */}
        <div className="mt-4">
          <label className="text-[12px] md:text-[14px] font-medium text-[#000000] mb-1 block">
            Keywords (5–7, comma-separated)
          </label>
          <input
            value={form.keywords}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, keywords: e.target.value }))
            }
            className="w-full p-[12px] rounded-[12px] bg-[#E7F9FF] border border-[#C6E4EF] text-[14px] outline-none"
            placeholder="Machine Learning, Predictive Maintenance, Industrial Maintenance, IoT"
          />
        </div>

        {/* BUTTONS */}
        <div className="flex justify-between mt-6">
          <button
            className="px-[16px] py-[12px] bg-[#E7F9FF] border border-[#C6E4EF] text-[#133C49] rounded-[12px] text-[14px]"
            onClick={onPrev}
          >
            Previous
          </button>

          <button
            className="px-[16px] py-[12px] bg-[#01D4FF] text-[#133C49] rounded-[12px] text-[14px] font-medium"
            onClick={onNext}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

{
  /* ================= STEP 3 ================= */
}

function UploadFiles({ onNext, onPrev, form, setForm }) {
  return (
    <div className="bg-[#D6E3E7] px-6 md:px-16 py-10">
      <div className="max-w-7xl mx-auto bg-[#D5F4FF] rounded-[16px] p-[16px] shadow-sm">
        {/* TITLE */}
        <h2 className="text-[16px] md:text-[20px] font-semibold text-[#133C49] mb-6">
          Upload Files
        </h2>

        {/* ================= CARD 1 ================= */}
        <UploadCard
          title="Manuscript File"
          required
          field="manuscript_file"
          setForm={setForm}
          form={form}
          desc="Upload your manuscript in Word format (.doc, .docx)"
        />

        {/* ================= CARD 2 ================= */}
        <UploadCard
          title="Cover Letter (Optional)"
          field="cover_letter"
          setForm={setForm}
          form={form}
          desc="A letter addressed to the Editor-in-Chief"
        />

        {/* ================= CARD 3 ================= */}
        <UploadCard
          title="Supplementary Materials (Optional)"
          field="supplementary_materials"
          setForm={setForm}
          form={form}
          desc="Figures, data files, or additional materials"
        />

        {/* BUTTONS */}
        <div className="flex justify-between mt-6">
          <button
            className="px-[16px] py-[12px] bg-[#E7F9FF] border border-[#C6E4EF] text-[#133C49] rounded-[12px] text-[14px]"
            onClick={onPrev}
          >
            Previous
          </button>

          <button
            className="px-[16px] py-[12px] bg-[#01D4FF] text-[#133C49] rounded-[12px] text-[14px] font-medium"
            onClick={onNext}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

function UploadCard({ title, desc, required, field, setForm, form }) {
  const file = form?.[field];
  return (
    <div className="border-2 border-dashed border-[#C6E4EF] rounded-xl pt-[40px] pb-[40px] text-center mb-5 bg-[#E7F9FF]">
      {/* ICON */}
      <div className="flex justify-center mb-3">
        {/* <UploadCloud className="w-6 h-6 text-[#133C49]" /> */}
        <img src="/blackcloud.png" alt="" className="w-[46px] h-[46px]" />
      </div>

      {/* TITLE */}
      <h3 className="text-[14px] md:text-[28px] font-semibold text-[#133C49]">
        {title} {required && <span className="text-[#FF3939]">*</span>}
      </h3>

      {/* DESC */}
      <p className="text-[12px] md:text-[24px] text-[#A9ACB4] mt-1 mb-3">
        {desc}
      </p>
      {/* FILE NAME (NEW) */}
      {file && (
        <p className="text-[13px] text-green-600 mb-2">📄 {file.name}</p>
      )}

      {/* BUTTON */}
      <label className="inline-block cursor-pointer mt-4">
        <input
          type="file"
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              [field]: e.target.files[0],
            }))
          }
          className="hidden"
        />
        <span className="px-[16px] py-[12px] text-[14px] border bg-[#D5F4FF] border-[#00849F] text-[#133C49] rounded-[12px] hover:bg-[#00D4FF] hover:text-black transition">
          Choose file
        </span>
      </label>
    </div>
  );
}

{
  /* ================= STEP 4 ================= */
}
function Declarations({ onNext, onPrev, form, setForm }) {
  const items = [
    {
      title: "Original Work Declaration",
      required: true,
      desc: "I confirm that this manuscript is original, has not been published previously, and is not under consideration elsewhere.",
    },
    {
      title: "Conflict of Interest Statement",
      required: true,
      desc: "I declare that there are no conflicts of interest that could influence the research or its reporting.",
    },
    {
      title: "Ethics Compliance",
      required: true,
      desc: "I confirm that appropriate ethical approval was obtained where required, and all participants provided informed consent.",
    },
    {
      title: "Data Availability Statement",
      required: false,
      desc: "I confirm that research data will be made available upon reasonable request.",
    },
    {
      title: "Authorship Agreement",
      required: true,
      desc: "All authors have agreed to the submission and have approved the final version of the manuscript.",
    },
  ];

  return (
    <div className=" px-6  py-10">
      <div className="max-w-7xl mx-auto bg-[#D5F4FF] rounded-[16px] p-[16px] shadow-sm">
        {/* TITLE */}
        <h2 className="text-[16px] md:text-[20px] font-semibold text-[#133C49] mb-4">
          Declarations & Ethics
        </h2>

        {/* INFO BOX */}
        <div className="flex items-center gap-2 bg-[#FFFFFF]  text-[#4F5C60] text-[14px] p-[16px] rounded-[12px] mb-5">
          <span className="w-5 h-5 flex items-center justify-center bg-[#00849F] text-white rounded-full text-[10px]">
            i
          </span>
          Please carefully read and confirm each declaration. All statements are
          required for submission.
        </div>

        {/* LIST */}
        <div className="space-y-4">
          {items.map((item, i) => (
            <label
              key={i}
              className="flex gap-3 items-start bg-[#FFFFFF] p-[16px] rounded-[12px] cursor-pointer"
            >
              {/* CHECKBOX */}
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked) {
                    setForm((prev) => ({
                      ...prev,
                      declarations: [...prev.declarations, item.title],
                    }));
                  } else {
                    setForm((prev) => ({
                      ...prev,
                      declarations: prev.declarations.filter(
                        (d) => d !== item.title,
                      ),
                    }));
                  }
                }}
                className="mt-1 w-[20px] h-[20px] rounded-[4px] accent-[#E2E8F0]"
              />

              {/* TEXT */}
              <div>
                <h3 className="text-[13px] md:text-[18px] font-semibold text-[#4F5C60]">
                  {item.title}{" "}
                  {item.required && <span className="text-[#FF3939]">*</span>}
                </h3>

                <p className="text-[12px] md:text-[14px] font-normal text-[#4F5C60] mt-1">
                  {item.desc}
                </p>
              </div>
            </label>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="flex justify-between mt-6">
          <button
            className="px-[16px] py-[12px] bg-[#E7F9FF] border border-[#C6E4EF] text-[#133C49] rounded-[12px] text-[14px]"
            onClick={onPrev}
          >
            Previous
          </button>

          <button
            className="px-[16px] py-[12px] bg-[#01D4FF] text-[#133C49] rounded-[12px] text-[14px] font-medium"
            onClick={onNext}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

{
  /* ================= STEP 5 ================= */
}

function ReviewSubmit({ onPrev, form }) {
  const [loading, setLoading] = useState(false);
  const handleSubmit = async () => {
    try {
      setLoading(true);
      const formData = new FormData();

      // append all fields
      Object.keys(form).forEach((key) => {
        if (key === "declarations") {
          formData.append(key, JSON.stringify(form[key]));
        } else {
          formData.append(key, form[key]);
        }
      });
      formData.append("file", form.manuscript_file); // file
      // formData.append("title", form.title);
      // formData.append("author_name", form.author_name);
      // formData.append("email", form.email);
      // formData.append("message", form.abstract || ""); // using abstract as message
      // formData.append("journal_slug", form.journal);

      // 🔍 Debug (VERY IMPORTANT)
      for (let pair of formData.entries()) {
        console.log(pair[0], pair[1]);
      }

      //console data
      console.log("Form Data:", form);

      const res = await http.post("/journals/submit-manuscript/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // console.log(res.data);

      // success
      toast("Submitted Successfully!");
      window.location.reload();
    } catch (err) {
      console.error(err);
      const errors = err?.response?.data;

      if (errors) {
        Object.keys(errors).forEach((field) => {
          errors[field].forEach((message) => {
            toast.error(message);
          });
        });
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="px-6 py-10">
      <div className="max-w-7xl mx-auto bg-[#D5F4FF] rounded-[16px] p-[16px] shadow-sm">
        {/* TITLE */}
        <h2 className="text-[16px] md:text-[20px] font-semibold text-[#133C49] mb-6">
          Review Your Submission
        </h2>

        {/* ================= AUTHOR DETAILS ================= */}
        <Section title="Author Details">
          <p>
            <b>Corresponding Author:</b> {form.author_name || "—"}
          </p>
          <p>
            <b>Email:</b> {form.email || "—"}
          </p>
          <p>
            <b>Institution:</b> {form.institution || "—"}
          </p>
        </Section>

        {/* ================= MANUSCRIPT ================= */}
        <Section title="Manuscript Information">
          <p>
            <b>Journal:</b> {form.journal || "—"}
          </p>
          <p>
            <b>Article Type:</b> {form.article_type || "—"}
          </p>
          <p>
            <b>Title:</b> {form.title || "—"}
          </p>
        </Section>

        {/* ================= FILES ================= */}
        <Section title="Uploaded Files">
          <div className="space-y-2 text-[14px] text-[#4F5C60]">
            {form.manuscript_file && (
              <FileItem name={`Manuscript: ${form.manuscript_file.name}`} />
            )}

            {form.cover_letter && (
              <FileItem name={`Cover Letter: ${form.cover_letter.name}`} />
            )}

            {form.supplementary_files && (
              <FileItem
                name={`Supplementary: ${form.supplementary_files.name}`}
              />
            )}

            {!form.manuscript_file &&
              !form.cover_letter &&
              !form.supplementary_files && (
                <p className="text-[#999]">No files uploaded</p>
              )}
          </div>
        </Section>

        {/* ================= DECLARATIONS ================= */}
        <Section title="Declarations">
          {/* <div className="flex items-center gap-2 text-[14px] text-[#4F5C60]">
            <img src="/tick-circle3.png" alt="" className="w-[24px] h-[24px]" />
            All required declarations confirmed
          </div> */}
          {form.declarations?.length > 0 ? (
            <div className="space-y-2">
              {form.declarations.map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-[14px]">
                  <img src="/tick-circle3.png" className="w-[20px]" />
                  {item}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-[#999]">No declarations selected</p>
          )}
        </Section>

        {/* ================= NOTE ================= */}
        <div className="bg-[#FFFFFF] border border-[#C6E4EF] text-[14px] text-[#4F5C60] p-[16px] rounded-[12px] mt-4">
          By clicking "Submit Manuscript", you agree to the journal’s terms and
          conditions and confirm that all information provided is accurate.
        </div>

        {/* BUTTONS */}
        <div className="flex justify-between mt-6">
          <button
            className="px-[16px] py-[12px] bg-[#E7F9FF] border border-[#C6E4EF] text-[#133C49] rounded-[12px] text-[14px]"
            onClick={onPrev}
          >
            Previous
          </button>

          <button
            onClick={handleSubmit}
            className="flex items-center gap-2 px-[16px] py-[12px] bg-[#01D4FF] text-[#133C49] rounded-lg text-[14px] font-normal"
          >
            <Send size={20} />
            {loading ? "Submitting..." : "Submit Manuscript"}
          </button>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="bg-[#FFFFFF] border border-[#C6E4EF] rounded-[12px] p-[16px] mb-4">
      <h3 className="text-[13px] md:text-[18px] font-semibold text-[#4F5C60] mb-2">
        {title}
      </h3>
      <div className="text-[14px] text-[#4F5C60] space-y-1">{children}</div>
    </div>
  );
}

function FileItem({ name }) {
  return (
    <div className="flex  items-center gap-2">
      <img src="/tick-circle3.png" alt="" className="w-[24px] h-[24px]" />
      {name}
    </div>
  );
}

{
  /* ================= COMMON STYLES ================= */
}
const styles = `
.input {
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #bfd6de;
  font-size: 13px;
}

.btn {
  background: #00d4ff;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 13px;
}

.btn-gray {
  background: #e5e7eb;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 13px;
}
`;
