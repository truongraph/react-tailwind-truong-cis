import { useState, useEffect } from "react";
import {  logo } from "../assets";
import ButtonOutline from "./ButtonOutline";
import ButtonPrimary from "./ButtonPrimary";
import { navLinks,navLinksMobile } from "../constants";
import { Link as LinkScroll } from "react-scroll";
const HeaderMenu = () => {
  const [scrollActive, setScrollActive] = useState(false);
  const [active, setActive] = useState("Home");
  //Tự động add shadow khi scroll down
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);});}, []);
  return (
      <header
        className={
          "fixed top-0 w-full  z-30 bg-white-500 transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-4")}>
        {/* DAS DESKTOP MENU */}
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
              <img src={logo} alt="Logo" className="w-56" />
          </div>
          <ul className="hidden lg:flex justify-end text-black-500 col-start-8 col-end-10  items-center">
              {navLinks.map((nav, index) => (
              <LinkScroll
                key={nav.id}
                className={`py-1.5 px-5 font-dasfont font-semibold cursor-pointer text-[14.5px] hover:rounded-full hover:bg-green-100 ${
                  active === nav.title ? "text-active-click bg-green-100 rounded-full" : "text-black" } ${index === navLinks.length - 1 ? "mr-0" : "mr-1.5"}`}
                onClick={() => setActive(nav.title)}>
                <a href={`#${nav.id}`}>{nav.title}</a>
              </LinkScroll>
            ))}
          </ul>
          <ul className="lg:flex text-black-500  items-center col-start-10 col-end-12 font-medium">
          <LinkScroll className="py-1.5 px-5">
               <ButtonOutline >Đăng ký</ButtonOutline>
            </LinkScroll>
            <LinkScroll className="py-1.5 px-5">
               <ButtonPrimary>Đăng nhập</ButtonPrimary>
            </LinkScroll>
          </ul>
        </nav>
        {/* DAS MOBLIE MENU */}
        <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t shadow-md">
          <div className="bg-white-500 sm:px-3">
          <ul className="flex w-full justify-between items-center text-black-500">
              {navLinksMobile.map((nav, index) => (
              <LinkScroll key={nav.id} className={`mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs text-center font-medium transition-all ${
                  active === nav.title ? "text-active-click" : "text-black"
                } ${index === navLinksMobile.length - 1 ? "mr-0" : "mr-1.5"}`} onClick={() => setActive(nav.title)}>
                <a href={`#${nav.id}`}>{nav.title}</a>
              </LinkScroll>))}
        
          </ul>
          </div>
        </nav>
      </header>
    
  );
};

export default HeaderMenu;
