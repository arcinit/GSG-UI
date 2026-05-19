import React, { useEffect, useState } from "react";
import Header from "../line2Components/Header";
import Home from "../line2Page/Home";
import Footer from "../components/Footer";
import { Route, Routes, useParams } from "react-router-dom";
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
import http from "../service/http";

const SecondLine = () => {
  const { slug } = useParams();

  const [conferenceData, setConferenceData] = useState(null);
  const [venueData, setVenueData] = useState(null);
  const [brochure, setBrochure] = useState(null);
  const [contact, setContact] = useState(null);
  const [program, setProgram] = useState(null);
  const [speaker, setSpeaker] = useState(null);
  const [committee, setCommittee] = useState(null);
  const [abstract, setAbstract] = useState(null);

  const [loading, setLoading] = useState(true);

  const [team, setTeam] = useState(null);
  useEffect(() => {
    const fetchCommon = async () => {
      try {
        const resConf = await http.get(`/conferences/${slug}/`);
        const resVen = await http.get(`/conferences/${slug}/venue/`);
        const resBrochure = await http.get(`/conferences/${slug}/brochure/`);
        const resContact = await http.get(`/conferences/${slug}/contact/`);
        const resProgram = await http.get(`/programs/${slug}`);
        const resSpeakers = await http.get(`/speakers/${slug}`);
        const resCommittee = await http.get(`/speakers/${slug}/committee/`);
        const resAbstract = await http.get(`/abstracts/${slug}/abstract/`);

        console.log(resSpeakers?.data);

        setConferenceData(resConf?.data);

        setVenueData(resVen.data);

        setBrochure(resBrochure.data);

        setContact(resContact.data);

        setProgram(resProgram.data);

        setSpeaker(resSpeakers?.data);

        setCommittee(resCommittee?.data);

        setAbstract(resAbstract?.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchCommon();
  }, [slug]);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-[#133C49]">
        <div className="w-12 h-12 border-4 border-[#01D4FF] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div>
      <Header data={conferenceData} />
      <Routes>
        <Route path="/" element={<Home data={conferenceData} team={team} />} />
        <Route
          path="/committee"
          element={<ScientificCommittee data={committee} />}
        />
        <Route path="/speakers" element={<OurSpeaker data={speaker} />} />
        <Route path="/speaker-details" element={<SpeakerDetails />} />
        <Route
          path="/program"
          element={<ScientificProgramme data={program} />}
        />
        <Route path="/program-details" element={<SessionDetails />} />
        <Route path="/brochure" element={<Brochure data={brochure} />} />
        <Route
          path="/abstract"
          element={<AbstractSubmission data={abstract} />}
        />
        <Route path="/submitabstract" element={<SubmitAbstract />} />
        <Route path="/success" element={<SubmissionSuccess />} />

        <Route path="/register" element={<RegisterNow />} />
        <Route path="/register-success" element={<RegisterSuccess />} />

        <Route path="/venue" element={<Venue data={venueData} />} />
        <Route path="/contact" element={<Contact data={contact} />} />

        <Route path="/registration-form" element={<RegisterNow2 />} />
      </Routes>
      <Footer data={conferenceData} />
    </div>
  );
};

export default SecondLine;
