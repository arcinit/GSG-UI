import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "../line3Page/Home";
import Header from "../line3Components/Header";
import Footer from "../line3Components/Footer";
import Journals from "../line3Page/Journals";
import AboutJournals from "../line3Page/AboutJournals";
import Subject from "../line3Page/Subject";
import Authors from "../line3Page/Authors";
import Reviews from "../line3Page/Reviews";
import Editorial from "../line3Page/Editorial";
import SubmitManuscript from "../line3Page/SubmitMenuscript";
import ArticleDetailPage from "../line3Page/ArticleDetailPage";

const ThirdLine = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-journals" element={<Journals />} />
        <Route path="/about-journals" element={<AboutJournals />} />
        <Route path="/subjects" element={<Subject />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/reviewers" element={<Reviews />} />
        <Route path="/editorial" element={<Editorial />} />
        <Route path="/article-details" element={<ArticleDetailPage />} />

        <Route path="/submit-manuscript" element={<SubmitManuscript />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default ThirdLine;
