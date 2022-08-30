import { useState } from "react";
import { logo, englang, vielang } from "../assets";
import ModalRegister from "./ModalRegister";
import ModalLogin from "./ModalLogin";
import { Link as LinkScroll } from "react-scroll";
import React from "react";
import { useTranslation } from "react-i18next";
const SidebarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const [scrollActive, setScrollActive] = useState(false);

  const [activeLink, setActiveLink] = useState(null);

  return (
    <>
      {!isOpen ? (
        <button
          className="bg-green-100 fixed top-[13px] right-[15px] z-50 p-[10px] text-green-600 rounded-lg items-center block lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      ) : (
        <button
          className="bg-green-100 fixed top-[13px] right-[15px] z-[9999999] p-[10px] text-green-600 rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
      <div
        className={`fixed inset-0 bg-gray-900/90 dark:bg-gray-900/100 z-[999999] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-[400ms]`}
      ></div>
      <div
        className={`top-0 right-0 p-1 fixed w-[35vh] bg-white h-full z-[999999] font-dasfont
        ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-300`}
      >
        <h2 className="text-[18px] font-semibold fixed top-[13px] w-full left-[15px] right-4 p-[10px]">
          Menu
        </h2>
        <div className="fixed top-[65px] w-[330px] border-gray-200 left-5 right-5"></div>
        <div className="pt-20 px-6">
          <ul className="font-semibold inline-grid text-black-500 w-full  items-center ">
            <LinkScroll
              activeClass="active"
              to="trangchu"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("trangchu");
              }}
              onClick={() => setIsOpen(!isOpen)}
              className={
                "py-2  text-left font-dasfont font-semibold cursor-pointer text-[17px] animation-hover w-full mb-3" +
                (activeLink === "trangchu"
                  ? " text-active-click  rounded-full animation-active "
                  : " text-black-500 hover:text-green-500 a")
              }
            >
              {t("home")}
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
              onClick={() => setIsOpen(!isOpen)}
              className={
                "py-2    text-left font-dasfont font-semibold cursor-pointer text-[17px] animation-hover  w-full mb-3 focus:outline-none focus:bg-transparent focus:shadow-none" +
                (activeLink === "gioithieu"
                  ? " text-active-click  rounded-full animation-active "
                  : " text-black-500 hover:text-green-500 a ")
              }
            >
              {t("introduce")}
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
              onClick={() => setIsOpen(!isOpen)}
              className={
                "py-2   text-left font-dasfont font-semibold cursor-pointer text-[17px] animation-hover  w-full mb-3" +
                (activeLink === "tinhnang"
                  ? " text-active-click  rounded-full animation-active "
                  : " text-black-500 hover:text-green-500 a ")
              }
            >
              {t("feature")}
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
              onClick={() => setIsOpen(!isOpen)}
              className={
                "py-2   text-left font-dasfont font-semibold cursor-pointer text-[17px] animation-hover  w-full mb-3" +
                (activeLink === "banggia"
                  ? " text-active-click  rounded-full animation-active "
                  : " text-black-500 hover:text-green-500 a ")
              }
            >
              {t("feetable")}
            </LinkScroll>
            {/* ============================================================================ */}
            <LinkScroll
              activeClass="active"
              to="ungdung"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("ungdung");
              }}
              onClick={() => setIsOpen(!isOpen)}
              className={
                "py-2   text-left font-dasfont font-semibold cursor-pointer text-[17px] animation-hover  w-full mb-3" +
                (activeLink === "ungdung"
                  ? " text-active-click  rounded-full animation-active "
                  : " text-black-500 hover:text-green-500 a ")
              }
            >
              {t("application")}
            </LinkScroll>
            <LinkScroll className="flex mt-3">
              <button onClick={() => i18n.changeLanguage("en")}>
                <img
                  src={englang}
                  alt="Logo"
                  className="w-[40px] h-[40px] rounded-xl mr-5"
                />
              </button>
              <button onClick={() => i18n.changeLanguage("vi")}>
                <img
                  src={vielang}
                  alt="Logo"
                  className="w-[40px] h-[40px] rounded-xl"
                />
              </button>
            </LinkScroll>
          </ul>
        </div>
        <div className="bottom-0 mb-[5px] fixed mr-[5px] ml-[2px]">
          <button
            className="font-bold mb-1 rounded-lg w-full bg-white border-green-500 border-2 text-green-500 hover:bg-green-100 text-[15px] px-8 py-3 border-current"
            type="button"
          >
            Đăng ký dùng thử
          </button>
          <button
            className="font-bold w-full rounded-lg bg-green-500 text-white hover:bg-green-600 text-[15px] px-8 py-3 border-current"
            type="button"
          >
            Đăng nhập
          </button>
        </div>
      </div>
    </>
  );
};
export default SidebarMenu;
