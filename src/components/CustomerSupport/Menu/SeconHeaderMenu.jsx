import { useState, useEffect } from "react";
import { logowhite, englang, vielang } from "../../../assets";

import ProgressBar from "../../OtherComponents/ProgressBar";
import CustomerSidebarMenu from "./CustomerSidebarMenu";
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const SeconHeaderMenu = () => {
  const completion = ProgressBar();

  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const [scrollActive, setScrollActive] = useState(false);

  const [activeLink, setActiveLink] = useState(null);
  //====================================================
  //Tự động add shadow khi scroll down
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  //=================================================================================
  return (
    <header
      className={
        "fixed top-0 w-full  z-30 bg-white-500 transition-all bg-green-500" +
        (scrollActive ? " shadow-md pt-0" : " pt-0  ")
      }
    >
      <span
        style={{ transform: `translateX(${completion - 100}%)` }}
        className="absolute bg-gradient-to-r from-green-400 to-green-500 h-1 w-full bottom-0"
      />
      {/* ============================================================================ */}
      {/* DAS DESKTOP MENU */}
      {/* ============================================================================ */}
      <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-2 sm:py-4 bg-green-500">
        <div className="block">
          <Link to="/">
            <img src={logowhite} alt="Logo" className="w-56 lg:flex" />
          </Link>
        </div>
        <CustomerSidebarMenu />
      </nav>
      {/* ============================================================================ */}
      {/* END DAS DESKTOP MENU */}
      {/* ============================================================================ */}

    </header>
  );
};

export default SeconHeaderMenu;
