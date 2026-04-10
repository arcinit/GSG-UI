import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import Contact from "../pages/Contact";
import Gallary from "../pages/Gallary";
import GalleryDetails from "../pages/GalleryDetails";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Route, Routes } from "react-router-dom";

const FirstLine = () => {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blogs" element={<Blog />} />
        <Route path="blogs-details" element={<BlogDetails />} />
        <Route path="contact" element={<Contact />} />
        <Route path="gallery" element={<Gallary />} />
        <Route path="gallery-details" element={<GalleryDetails />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default FirstLine;
