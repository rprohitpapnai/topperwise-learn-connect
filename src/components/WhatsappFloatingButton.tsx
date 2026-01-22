import React from "react";

const WhatsappFloatingButton = () => {
  return (
    <a
      href="https://wa.me/917455971428"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="flex items-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
          alt="WhatsApp"
          className="w-14 h-14 drop-shadow-lg transition-all duration-300 group-hover:rounded-l-lg group-hover:w-16 group-hover:h-14"
        />
        <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-300 bg-green-500 text-white px-4 py-2 rounded-r-lg text-lg font-semibold ml-0 group-hover:ml-2 shadow-lg">
          WhatsApp
        </span>
      </div>
    </a>
  );
};

export default WhatsappFloatingButton;
