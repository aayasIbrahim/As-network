import { useState, useEffect } from "react";
import { MdAddCall } from "react-icons/md";

const CallButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 3000); // Show after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href="tel:+8801857792946"
      target="_blank"
      rel="noopener noreferrer"
      className={`
        fixed z-10 bottom-[90px] right-6
        bg-teal-500 text-white p-3 rounded-full shadow-lg
        hover:bg-teal-600 transition
        transform duration-500 ease-in-out
        ${showButton ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}
      `}
    >
      <MdAddCall size={28} />
    </a>
  );
};

export default CallButton;
