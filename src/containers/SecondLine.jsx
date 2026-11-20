import React from "react";
import Header from "../line2Components/Header";
import Home from "../line2Page/Home";
import Footer from "../components/Footer";
import { Route, Routes } from "react-router-dom";
import ScientificCommittee from "../line2Page/ScientificCommittee";
import OurSpeaker from "../line2Page/OurSpeaker";
import SpeakerDetails from "../line2Page/SpeakerDetails";
import ScientificProgramme from "../line2Page/ScientificProgramme";
import SessionDetails from "../line2Page/SessionDetails";
import Brochure from "../line2Page/Brochure";
import AbstractSubmission from "../line2Page/AbstractSubmission";
import SubmitAbstract from "../line2Page/SubmitAbstract";
import SubmissionSuccess from "../line2Page/SubmissionSuccess";
import RegisterNow from "../line2Page/RegisterNow";
import RegisterSuccess from "../line2Page/RegisterSuccess";
import Venue from "../line2Page/Venue";
import Contact from "../line2Page/Contact";
import RegisterNow2 from "../line2Page/RegisterNow2";

const SecondLine = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scientific-committee" element={<ScientificCommittee />} />
        <Route path="/speakers" element={<OurSpeaker />} />
        <Route path="/speaker-details" element={<SpeakerDetails />} />
        <Route path="/program" element={<ScientificProgramme />} />
        <Route path="/program-details" element={<SessionDetails />} />
        <Route path="/brochure" element={<Brochure />} />
        <Route path="/abstract" element={<AbstractSubmission />} />
        <Route path="/submitabstract" element={<SubmitAbstract />} />
        <Route path="/success" element={<SubmissionSuccess />} />

        <Route path="/registration" element={<RegisterNow />} />
        <Route path="/register-success" element={<RegisterSuccess />} />

        <Route path="/venue" element={<Venue />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/registration-form" element={<RegisterNow2 />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default SecondLine;
