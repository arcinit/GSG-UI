import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import FirstLine from "./containers/FirstLine";
import SecondLine from "./containers/SecondLine";
import ThirdLine from "./containers/ThirdLine";
import WhatsAppFloat from "./components/WhatsAppFloat";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogs-details" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallary />} />
        <Route path="/gallery-details" element={<GalleryDetails />} /> */}

        <Route path="/" element={<Navigate to="/main" replace />} />
        <Route path="/main/*" element={<FirstLine />} />
        <Route path="/conference/:slug/*" element={<SecondLine />} />
        <Route path="/journals/*" element={<ThirdLine />} />

        {/*<Route path="/conferences" element={<div>Conferences</div>} />
        <Route path="/journals" element={<div>Journals</div>} />
       
        
         */}
      </Routes>
      {/* <WhatsAppFloat /> */}
    </BrowserRouter>
  );
}
