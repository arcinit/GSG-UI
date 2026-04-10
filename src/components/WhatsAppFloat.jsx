import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/447950234842?text=Hello%20I%20want%20to%20enquire"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 shadow-lg hover:bg-green-600 transition-all duration-300"
    >
      <FaWhatsapp className="text-white text-2xl" />
    </a>
  );
};

export default WhatsAppFloat;
