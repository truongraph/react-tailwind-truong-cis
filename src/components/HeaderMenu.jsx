import { useState, useEffect } from "react";
import { logo } from "../assets";
import ButtonOutline from "./ButtonOutline";
import ModalLogin from "./ModalLogin";
import { navLinks } from "../constants";
import { Link as LinkScroll } from "react-scroll";
import {
  BanknotesIcon,
  CubeIcon,
  EnvelopeIcon,
  HomeIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/24/solid";

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
            <ButtonOutline>Đăng ký</ButtonOutline>
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
              <CubeIcon className="h-6 w-6 text-white" />
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
              <PuzzlePieceIcon className="h-6 w-6 text-white" />
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
              <BanknotesIcon className="h-6 w-6 text-white" />
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
              <EnvelopeIcon className="h-6 w-6 text-white" />
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
