
// import {
//   ArrowLongDownIcon,
// } from "@Heroicons/react/24/outline";
import { bannersvg } from "../assets";
import React from "react";
import { useTranslation } from "react-i18next";
const Home = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };
  const scrollDown = () => {
    window.scrollTo({
      top: 700,
      behavior: "smooth", 
      duration: 10000,
      s: 1
    });
  };
  return (
    <section className="relative pt-[75px] lg:pt-[100px]" id="trangchu">
      <div className="max-w-screen-xl px-5 xl:px-16 mx-auto font-dasfont">
        <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 pt-6 pb-3 sm:py-16 ">
          <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <p className="text-2xl lg:text-3xl xl:text-4xl font-medium text-black-600 leading-normal">
            {t('titlehome')} <br />
              <strong>{t('titlehome_1')}</strong>.
            </p>
            <p className="text-black-500 mt-4 mb-6">
              {t('secontitlehome')}
            </p>
            <button
              className={
                "py-3  lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-full bg-green-500 hover:shadow-orange-md transition-all outline-none text-white"
              }
            >
              {t('freetrial')}
            </button>
          </div>
          <div className="flex w-full">
            <div className="h-full w-full">
              <img src={bannersvg} />
            </div>
          </div>
        </div>
        <div onClick={scrollDown} className="scrolldown"></div>
        
      </div>
      
    </section>
  );
};

export default Home;
