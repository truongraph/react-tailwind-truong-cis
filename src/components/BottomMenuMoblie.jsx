import { useState, useEffect } from "react";
import { Link as LinkScroll } from "react-scroll";
const BottomMenuMoblie = () => {
  const [activeLink, setActiveLink] = useState(null);
  return (
    <>
      {/* ============================================================================ */}
      {/* DAS MOBLIE MENU */}
      {/* ============================================================================ */}
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-6 sm:px-8 shadow-t bg-green-500">
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
                "py-2 flex flex-col items-center text-xs border-t-2 transition-all cursor-pointer" +
                (activeLink === "gioithieu"
                  ? "  border-green-500 text-white"
                  : " border-transparent")
              }
            >
              {/* <CubeIcon className="h-6 w-6 text-white" /> */}
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
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
                "py-2 flex flex-col items-center text-xs border-t-2 transition-all cursor-pointer" +
                (activeLink === "tinhnang"
                  ? "  border-green-500 text-white"
                  : " border-transparent ")
              }
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                />
              </svg>
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
                " py-2 flex flex-col items-center text-xs border-t-2 transition-all cursor-pointer" +
                (activeLink === "banggia"
                  ? "  border-green-500 text-white"
                  : " border-transparent ")
              }
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
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
                "py-2 flex flex-col items-center text-xs border-t-2 transition-all cursor-pointer" +
                (activeLink === "lienhe"
                  ? "  border-green-500 text-white"
                  : " border-transparent ")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                />
              </svg>
              <span className="font-normal">Ứng dụng</span>
            </LinkScroll>
          </ul>
        </div>
      </nav>
      {/* ============================================================================ */}
      {/* END DAS MOBLIE MENU  */}
      {/* ============================================================================ */}
    </>
  );
};

export default BottomMenuMoblie;
