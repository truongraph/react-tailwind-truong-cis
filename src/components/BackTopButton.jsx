import { ChevronUpIcon } from "@heroicons/react/24/outline";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useEffect, useState } from "react";
const Button = ({ styles }) => {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };
  return (
    <>
      {showButton && (
        <ChevronUpIcon onClick={scrollToTop} className="back-to-top"/>
      )}
    </>
  );
};

export default Button;
