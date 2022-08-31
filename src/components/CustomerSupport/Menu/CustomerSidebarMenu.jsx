import React from "react";
import { useTranslation } from "react-i18next";
import { logo, englang, vielang } from "../../../assets";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function CustomerSidebarMenu() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };
  const [showModal, setShowModal] = React.useState(false);
  const [activeLink, setActiveLink] = useState(null);
  return (
    <>
      {!showModal ? (
      
          <svg
          onClick={() => setShowModal(true)}
          className="w-[30px] h-[30px] block relative top-[13px] text-white ml-auto cursor-pointer"
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
       
      ) : (
        
          <svg
          onClick={() => setShowModal(true)}
          className="w-[30px] h-[30px] block relative top-[13px] text-white ml-auto cursor-pointer"
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
       
      )}
      <>
        <div
           className={`fixed inset-0 bg-gray-900/20 dark:bg-gray-900/100 z-[999999]
           ${
             showModal ? "translate-x-0" : "translate-x-full"
           }`}
        ></div>
        <div
          className={`top-0 right-0 fixed w-[40vh] bg-white h-full z-[999999] font-dasfont text-black
        ${
          showModal ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-300`}
        >
          <button
            className="bg-green-100 fixed top-[13px] right-[17px] z-[9999999] p-[10px] text-green-600 rounded-lg"
            onClick={() => setShowModal(false)}
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
          <h2 className="text-[18px] font-semibold fixed top-[13px] w-full left-[18px] right-4 p-[10px]">
            Menu
          </h2>
          <div className="fixed top-[65px] w-[330px] border-gray-200 left-5 right-5"></div>
          <div className="pt-20 px-6 min-h-screen">
            <ul className="font-semibold inline-grid text-black-500 w-full  items-center text-gray-700">
            <Link
                to="/"
                className={
                  "py-2  text-left font-dasfont font-semibold cursor-pointer text-[16px] animation-hover w-full mb-3" +
                  (activeLink === "trangchu"
                    ? " text-active-click  rounded-full animation-active "
                    : " text-black-500 hover:text-green-500")
                }
              >
                <span>
                  <svg className="w-[25px] h-[25px] mb-1 inline-block mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                </span>
                Trang chủ
              </Link>
              <Link
                to="/faq"
                className={
                  "py-2  text-left font-dasfont font-semibold cursor-pointer text-[16px] animation-hover w-full mb-3" +
                  (activeLink === "trangchu"
                    ? " text-active-click  rounded-full animation-active "
                    : " text-black-500 hover:text-green-500")
                }
              >
                <span>
                  <svg
                    className="w-[25px] h-[25px] mb-1 inline-block mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                Câu hỏi thường gặp
              </Link>
              <Link
                to="/temp"
                className={
                  "py-2  text-left font-dasfont font-semibold cursor-pointer text-[16px] animation-hover w-full mb-3" +
                  (activeLink === "trangchu"
                    ? " text-active-click  rounded-full animation-active "
                    : " text-black-500 hover:text-green-500")
                }
              >
                <span>
                  <svg
                    className="w-[25px] h-[25px] mb-1 inline-block mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </span>
                Điều khoản bảo mật
              </Link>
              <Link
                to="/"
                className={
                  "py-2  text-left font-dasfont font-semibold cursor-pointer text-[16px] animation-hover w-full mb-3" +
                  (activeLink === "trangchu"
                    ? " text-active-click  rounded-full animation-active "
                    : " text-black-500 hover:text-green-500")
                }
              >
                <span>
                  <svg
                    className="w-[25px] h-[25px] mb-1 inline-block mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </span>
                Hình thức thanh toán
              </Link>
              <Link
                to="/"
                className={
                  "py-2  text-left font-dasfont font-semibold cursor-pointer text-[16px] animation-hover w-full mb-3" +
                  (activeLink === "trangchu"
                    ? " text-active-click  rounded-full animation-active "
                    : " text-black-500 hover:text-green-500")
                }
              >
                <span>
                  <svg
                    className="w-[25px] h-[25px] mb-1 inline-block mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </span>
                Tài liệu hướng dẫn
              </Link>
              <Link
                to="/"
                className={
                  "py-2  text-left font-dasfont font-semibold cursor-pointer text-[16px] animation-hover w-full mb-3" +
                  (activeLink === "trangchu"
                    ? " text-active-click  rounded-full animation-active "
                    : " text-black-500 hover:text-green-500")
                }
              >
                <span>
                  <svg
                    className="w-[25px] h-[25px] mb-1 inline-block mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                    />
                  </svg>
                </span>
                Liên hệ chúng tôi
              </Link>
              <li className="flex mt-3">
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
            </li>
            </ul>
          </div>
          <div className="bottom-0 block mb-[5px] m-4 fixed">
          <button
            className="font-bold mb-2 rounded-lg w-full bg-white border-green-500 border-2 text-green-500 hover:bg-green-100 text-[15px] px-8 py-3 border-current"
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
          {/* <div className="bg-green-500 fixed w-full bottom-0 text-white p-2 text-center text-[12px] font-medium font-dasfont">Copyright © 2022 <span className="font-bold">DASolution</span> . All rights reserved.</div> */}
        </div>
      </>
    </>
  );
}
