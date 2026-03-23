import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/+919912340396?text=Hello!%20I%27m%20interested%20in%20AcadHub%20services.%20Can%20we%20get%20on%20a%20call%3F",
      "_blank"
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full p-4 shadow-2xl transform transition-all duration-300 hover:scale-110 animate-bounce hover:animate-none"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={32} className="transition-transform duration-300 group-hover:rotate-12" />
        
        {/* Pulse Effect */}
        <span className="absolute inset-0 rounded-full bg-green-400 opacity-75 animate-ping"></span>
        
        {/* Tooltip */}
        {isHovered && (
          <div className="absolute bottom-full right-0 mb-2 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap shadow-lg transform transition-all duration-200">
            Chat with us on WhatsApp
            <div className="absolute top-full right-6 w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-gray-900"></div>
          </div>
        )}
      </button>
    </div>
  );
};

export default WhatsAppButton;
