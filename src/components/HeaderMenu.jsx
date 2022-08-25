import { useState, useEffect } from "react";
import { logo } from "../assets";
import ButtonOutline from "./ButtonOutline";
import ButtonPrimary from "./ButtonPrimary";
import { navLinks } from "../constants";
import { Link as LinkScroll } from "react-scroll";
import { BanknotesIcon, CubeIcon, EnvelopeIcon, HomeIcon } from "@heroicons/react/24/solid";
const HeaderMenu = () => {
  const [scrollActive, setScrollActive] = useState(false);
  const [active, setActive] = useState("Home");
  const [activeLink, setActiveLink] = useState(null);
  //Tự động add shadow khi scroll down
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  return (
    <header
      className={
        "fixed top-0 w-full  z-30 bg-white-500 transition-all bg-white" +
        (scrollActive ? " shadow-md pt-0" : " pt-0  ")
      }
    >
      {/* ============================================================================ */}
      {/* DAS DESKTOP MENU */}
      {/* ============================================================================ */}
      <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-4 sm:py-6 bg-white">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-56 block m-auto" />
        </div>
        <ul className="font-dasfont hidden lg:flex justify-end text-black-500 col-start-8 col-end-10  items-center">
          {navLinks.map((nav, index) => (
            <LinkScroll
              key={nav.id}
              className={`py-1.5 px-5 font-dasfont font-semibold cursor-pointer text-[14px] hover:rounded-full hover:bg-green-100 ${
                active === nav.title
                  ? "text-active-click bg-green-100 rounded-full"
                  : "text-black"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-1.5"}`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </LinkScroll>
          ))}
          <LinkScroll className="py-1.5 pl-7 pr-2">
            <ButtonOutline>Đăng ký</ButtonOutline>
          </LinkScroll>
          <LinkScroll className="py-1.5 px-0">
            <ButtonPrimary>Đăng nhập</ButtonPrimary>
          </LinkScroll>
        </ul>
      </nav>
      {/* ============================================================================ */}
      {/* END DAS DESKTOP MENU */}
      {/* ============================================================================ */}
      {/* ============================================================================ */}
      {/* DAS MOBLIE MENU */}
      {/* ============================================================================ */}
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t bg-white">
        <div className="bg-white-500 sm:px-3">
          <ul className="flex w-full justify-between items-center text-black-500 font-dasfont ">
            <LinkScroll
              activeClass="active"
              to="trangchu"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("trangchu");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "trangchu"
                  ? "  border-green-500 text-red-500"
                  : " border-transparent")
              }
            >
              <HomeIcon className="h-6 w-6 text-red-500" />
              <span className="font-semibold">Trang chủ</span>
            </LinkScroll>
            {/* ============================================================================ */}
            <LinkScroll
              activeClass="active"
              to="gioithieu"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("gioithieu");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "gioithieu"
                  ? "  border-green-500 text-red-500"
                  : " border-transparent ")
              }
            >
              <CubeIcon className="h-6 w-6 text-red-500" />
              <span className="font-semibold ">Giới thiệu</span>
            </LinkScroll>
            {/* ============================================================================ */}
            <LinkScroll
              activeClass="active"
              to="banggia"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("banggia");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "banggia"
                  ? "  border-green-500 text-red-500"
                  : " border-transparent ")
              }
            >
              <BanknotesIcon className="h-6 w-6 text-red-500" />
              <span className="font-semibold">Bảng giá</span>
            </LinkScroll>
            {/* ============================================================================ */}
            <LinkScroll
              activeClass="active"
              to="lienhe"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("lienhe");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "lienhe"
                  ? "  border-green-500 text-red-500"
                  : " border-transparent ")
              }
            >
              <EnvelopeIcon className="h-6 w-6 text-red-500" />
              <span className="font-semibold">Liên hệ</span>
            </LinkScroll>
          </ul>
        </div>
      </nav>
      {/* ============================================================================ */}
      {/* END DAS MOBLIE MENU  */}
      {/* ============================================================================ */}
    </header>
  );
};

export default HeaderMenu;
