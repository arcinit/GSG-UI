import React, { useEffect, useState } from "react";
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
import http from "../service/http";

const FirstLine = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCore = async () => {
      try {
        const res = await http.get("/core/");
        setData(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCore();
  }, []);
  return (
    <div>
      <Header />

      <Routes>
        <Route
          path="/"
          element={<Home data={data} events={data?.gallery_events} />}
        />
        <Route
          path="about"
          element={
            <About
              data={data}
              about={data?.about}
              events={data?.gallery_events}
            />
          }
        />
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
