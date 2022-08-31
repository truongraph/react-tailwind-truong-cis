import { logo, logoload } from "../../../assets";
import { Disclosure, Transition } from "@headlessui/react";
import SeconHeaderMenu from "../Menu/SeconHeaderMenu";
import React, { useState, useEffect } from "react";
const Temp = () => {
  useEffect(() => {
    document.title = "Điều khoản bảo mật";
  }, []);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <React.Fragment>
      {loading ? (
        <div className="loader-container bg-gradient-to-r from-green-500 to-green-600">
          <div>
            <img
              src={logoload}
              alt="Logo"
              className="block m-auto w-[220px] ml-[5px]"
            />
            <div className="spinner"></div>
          </div>
        </div>
      ) : (
        <React.Fragment>
          <SeconHeaderMenu />
          <section className="relative pt-[100px] lg:pt-[150px] bg-white min-h-screen">
            <div className="max-w-screen-xl px-5 xl:px-16 mx-auto font-dasfont">
              <p className="text-2xl lg:text-2xl xl:text-3xl font-extrabold text-green-500 text-black-500 leading-normal">
                Điều khoản bảo mật
              </p>
              <p className="text-[15px] mt-3 text-gray-500">
                Nhằm bảo mật thông tin của khách hàng
              </p>
              <div className="mt-5">
                
              </div>
            </div>
          </section>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Temp;
