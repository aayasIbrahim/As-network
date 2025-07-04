import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 2000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!showButton) return null;

  return (
    <a
      href="https://wa.me/+8801861519405" // Replace with your number
      target="_blank"
      rel="noopener noreferrer"
     className={`
        fixed z-10 bottom-6 right-6
        bg-green-500 text-white p-3 rounded-full shadow-lg
        hover:bg-green-600 transition
        transform duration-500 ease-in-out
        
        ${showButton ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}
      `}
    >
      <FaWhatsapp size={28} />
         
    </a>
  );
};

export default WhatsAppButton;

