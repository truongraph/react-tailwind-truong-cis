import { useState, useEffect } from "react";
import { logo } from "../assets";
import ModalRegister from "./ModalRegister";
import ModalLogin from "./ModalLogin";
import { Link as LinkScroll } from "react-scroll";
import styles from "../style";
// import {
//   BanknotesIcon,
//   CubeIcon,
//   EnvelopeIcon,
//   HomeIcon,
//   PuzzlePieceIcon,
// } from "@heroicons/react/24/solid";

const HeaderMenu = () => {
  const [scrollActive, setScrollActive] = useState(false);
  //const [active, setActive] = useState("Home");
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
      <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-2 sm:py-4 bg-white">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-56 block m-auto" />
        </div>
        <ul className="font-dasfont hidden lg:flex justify-end text-black-500 col-start-8 col-end-10  items-center">
          {/* {navLinks.map((nav, index) => (
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
          ))} */}
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
              "py-1.5 px-5 font-dasfont font-semibold cursor-pointer text-[14px] animation-hover hover:rounded-full hover:bg-green-100 mr-1.5" +
              (activeLink === "trangchu"
                ? " text-active-click bg-green-100 rounded-full animation-active "
                : " text-black-500 hover:text-green-500 a")
            }
          >
            Trang chủ
          </LinkScroll>
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
              "py-1.5 px-5 font-dasfont font-semibold cursor-pointer text-[14px] animation-hover hover:rounded-full hover:bg-green-100 mr-1.5" +
              (activeLink === "gioithieu"
                ? " text-active-click bg-green-100 rounded-full animation-active "
                : " text-black-500 hover:text-green-500 a ")
            }
          >
            Giới thiệu
          </LinkScroll>
          <LinkScroll
            activeClass="active"
            to="tinhnang"
            spy={true}
            smooth={true}
            duration={1000}
            onSetActive={() => {
              setActiveLink("tinhnang");
            }}
            className={
              "py-1.5 px-5 font-dasfont font-semibold cursor-pointer text-[14px] animation-hover hover:rounded-full hover:bg-green-100 mr-1.5" +
              (activeLink === "tinhnang"
                ? " text-active-click bg-green-100 rounded-full animation-active "
                : " text-black-500 hover:text-green-500 a ")
            }
          >
            Tính năng
          </LinkScroll>
          <LinkScroll
            activeClass="active"
            to="ungdung"
            spy={true}
            smooth={true}
            duration={1000}
            onSetActive={() => {
              setActiveLink("ungdung");
            }}
            className={
              "py-1.5 px-5 font-dasfont font-semibold cursor-pointer text-[14px] animation-hover hover:rounded-full hover:bg-green-100 mr-1.5" +
              (activeLink === "ungdung"
                ? " text-active-click bg-green-100 rounded-full animation-active "
                : " text-black-500 hover:text-green-500 a ")
            }
          >
            Ứng dụng
          </LinkScroll>
          <LinkScroll
            activeClass="active"
            to="khachhang"
            spy={true}
            smooth={true}
            duration={1000}
            onSetActive={() => {
              setActiveLink("khachhang");
            }}
            className={
              "py-1.5 px-5 font-dasfont font-semibold cursor-pointer text-[14px] animation-hover hover:rounded-full hover:bg-green-100 mr-1.5" +
              (activeLink === "khachhang"
                ? " text-active-click bg-green-100 rounded-full animation-active "
                : " text-black-500 hover:text-green-500 a ")
            }
          >
            Khách hàng
          </LinkScroll>
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
              "py-1.5 px-5 font-dasfont font-semibold cursor-pointer text-[14px] animation-hover hover:rounded-full hover:bg-green-100 mr-1.5" +
              (activeLink === "lienhe"
                ? " text-active-click bg-green-100 rounded-full animation-active "
                : " text-black-500 hover:text-green-500 a ")
            }
          >
            Liên hệ
          </LinkScroll>
          <LinkScroll className="py-1.5 pl-7 pr-2">
            <ModalRegister>Đăng ký</ModalRegister>
          </LinkScroll>
          <LinkScroll className="py-1.5 px-0">
            <ModalLogin />
          </LinkScroll>
        </ul>
      </nav>
      {/* ============================================================================ */}
      {/* END DAS DESKTOP MENU */}
      {/* ============================================================================ */}
      {/* ============================================================================ */}
      {/* DAS MOBLIE MENU */}
      {/* ============================================================================ */}
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-3 sm:px-8 shadow-t bg-green-500">
        <div className="bg-white-500 sm:px-3">
          <ul className="flex w-full justify-between items-center text-black-500 font-dasfont text-white">
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
                "mx-1 sm:mx-2 px-1 sm:px-1 py-2 flex flex-col items-center text-xs border-t-2 transition-all cursor-pointer" +
                (activeLink === "gioithieu"
                  ? "  border-green-500 text-white"
                  : " border-transparent")
              }
            >
              {/* <CubeIcon className="h-6 w-6 text-white" /> */}
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
              <span className="font-normal">Giới thiệu</span>
            </LinkScroll>
            {/* ============================================================================ */}
            <LinkScroll
              activeClass="active"
              to="tinhnang"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("tinhnang");
              }}
              className={
                "mx-1 sm:mx-2 px-1 sm:px-1 py-2 flex flex-col items-center text-xs border-t-2 transition-all cursor-pointer" +
                (activeLink === "tinhnang"
                  ? "  border-green-500 text-white"
                  : " border-transparent ")
              }
            >
              {/* <PuzzlePieceIcon className="h-6 w-6 text-white" /> */}
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>
              <span className="font-normal ">Tính năng</span>
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
                "mx-1 sm:mx-2 px-1 sm:px-1 py-2 flex flex-col items-center text-xs border-t-2 transition-all cursor-pointer" +
                (activeLink === "banggia"
                  ? "  border-green-500 text-white"
                  : " border-transparent ")
              }
            >
              {/* <BanknotesIcon className="h-6 w-6 text-white" /> */}
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span className="font-normal">Bảng giá</span>
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
                "mx-1 sm:mx-2 px-1 sm:px-1 py-2 flex flex-col items-center text-xs border-t-2 transition-all cursor-pointer" +
                (activeLink === "lienhe"
                  ? "  border-green-500 text-white"
                  : " border-transparent ")
              }
            >
              {/* <EnvelopeIcon className="h-6 w-6 text-white" /> */}
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <span className="font-normal">Liên hệ</span>
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
