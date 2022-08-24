import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const HeaderMenu = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="HeaderMenu">
      <nav className="w-full flex py-3 justify-between items-center  ">
        <img src={logo} alt="Logo" className="w-56" />

        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`py-1.5 px-5 font-dasfont font-semibold cursor-pointer text-[14.5px] hover:rounded-full hover:bg-green-100 ${
                active === nav.title
                  ? "text-active-click bg-green-100 rounded-full"
                  : "text-black"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-1.5"}`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li
            className={`font-dasfont font-semibold cursor-pointer text-[14.5px]`}
          >
            <button
              type="button"
              className="ml-5 font-semibold rounded-full button-das-width bg-das-color-outline p-2 px-6"
            >
              Đăng ký
            </button>
            <button
              type="button"
              className="ml-5 font-semibold rounded-full button-das-width bg-das-color p-2 px-6"
            >
              Đăng nhập
            </button>
          </li>
        </ul>
        {/* 
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-dasfont font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-dimWhite"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div> */}
        
      </nav>
      <>
  {showSidebar ? (
    <button
      className="flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50"
      onClick={() => setShowSidebar(!showSidebar)}
    >
      x
    </button>
  ) : (
    <svg
      onClick={() => setShowSidebar(!showSidebar)}
      className="fixed  z-30 flex items-center cursor-pointer right-10 top-6"
      fill="#2563EB"
      viewBox="0 0 100 80"
      width="40"
      height="40"
    >
      <rect width="100" height="10"></rect>
      <rect y="30" width="100" height="10"></rect>
      <rect y="60" width="100" height="10"></rect>
    </svg>
  )}

  <div  className={`top-0 right-0 w-[35vw] bg-blue-600  p-10 pl-20 text-white fixed h-full z-40 ${
    showSidebar ? "translate-x-0 " : "translate-x-full"
  }`}>
    <h3 className="mt-20 text-4xl font-semibold text-white">I am a sidebar</h3>
  </div>
</>
    </div>
  );
};

export default HeaderMenu;
