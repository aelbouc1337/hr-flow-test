import React from "react";
import { IoIosArrowUp } from "react-icons/io";

// Define the functional component type with no props
const BackToTop: React.FC = () => {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={scrollToTop}
      className="fixed bottom-4 border-primary right-4 w-16 h-16 rounded-full border-2 text-slate-300 cursor-pointer hover:text-slate-400 bg-slate-100 flex justify-center items-center"
    >
      <IoIosArrowUp className="text-primary" size={30} />
    </div>
  );
};

export default BackToTop;
