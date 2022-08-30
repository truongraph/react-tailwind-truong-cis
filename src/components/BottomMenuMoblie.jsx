import { useState, useEffect } from "react";
import { Link as LinkScroll } from "react-scroll";
import React from "react";
const BottomMenuMoblie = () => {
  const [activeLink, setActiveLink] = useState(null);
  return (
    <React.Fragment>
      {/* ============================================================================ */}
      {/* DAS MOBLIE MENU */}
      {/* ============================================================================ */}
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-6 sm:px-8 shadow-t bg-white">
        <div className="bg-white-500 sm:px-3">
          <ul className="flex w-full justify-between items-center font-semibold font-dasfont text-green-500">
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
                "py-2 flex flex-col items-center text-xs border-t-2  transition-all cursor-pointer" +
                (activeLink === "gioithieu"
                  ? "  border-green-500 text-green-500"
                  : " border-transparent")
              }
            >
              {/* <CubeIcon className="h-6 w-6 text-green-500" /> */}
              <svg
                className="w-6 h-6 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
              </svg>
              <span className="font-bold">Giới thiệu</span>
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
                  ? "  border-green-500 text-green-500"
                  : " border-transparent ")
              }
            >
             <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" /></svg>
              <span className="font-bold ">Tính năng</span>
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
                  ? "  border-green-500 text-green-500"
                  : " border-transparent ")
              }
            >
            <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" /><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" /></svg>
              <span className="font-bold">Bảng giá</span>
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
              className={
                "py-2 flex flex-col items-center text-xs border-t-2 transition-all cursor-pointer" +
                (activeLink === "ungdung"
                  ? "  border-green-500 text-green-500"
                  : " border-transparent ")
              }
            >
             <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" /></svg>
              <span className="font-bold">Ứng dụng</span>
            </LinkScroll>
          </ul>
        </div>
      </nav>
      {/* ============================================================================ */}
      {/* END DAS MOBLIE MENU  */}
      {/* ============================================================================ */}
    </React.Fragment>
  );
};

export default BottomMenuMoblie;
