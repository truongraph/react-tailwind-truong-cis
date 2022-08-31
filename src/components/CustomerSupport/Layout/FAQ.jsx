import { logo, logoload } from "../../../assets";
import { Disclosure, Transition } from "@headlessui/react";
import SeconHeaderMenu from "../Menu/SeconHeaderMenu";
import React, { useState, useEffect } from "react";
const FAQ = ({
  listFaq1 = [
    {
      desc: "Bởi vì nó là con mèo chứ con mèo mà kêu con chó thì sao được",
      title: "Tại sao con mèo tên là con mèo ?",
    },
    {
      desc: "Mướn cổ máy doraemon về thời tiền thử coi sao",
      title: "Con gà có trước hay trứng có trước",
    },
    {
      desc: "Đi mà hỏi long trọc",
      title: "Khi nào bán được 1 tỷ gói mè",
    },
  ],
}) => {
  useEffect(() => {
    document.title = "Câu hỏi thường gặp";
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
                Câu hỏi thường gặp
              </p>
              <p className="text-[15px] mt-3 text-gray-500">
                Hỗ trợ giải đáp thắc mắc yêu cầu của khách hàng
              </p>
              <div className="mt-5">
                <div class="grid grid-cols-1 gap-6 lg:gap-20 sm:grid-cols-2">
                  <div class="mb-3">
                    {listFaq1.map((listFaq1s, index) => (
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="flex w-full justify-between rounded-full mb-5 mt-5 bg-white border-gray-100 border shadow-lg px-8 py-4 text-left text-[14px] font-semibold text-black hover:bg-green-100 focus:outline-none">
                              <span>{listFaq1s.title}</span>
                              <svg
                                className={`${
                                  open ? "rotate-90 transform" : ""
                                }  h-5 w-5 text-black`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 py-2 text-[14px] font-medium text-black">
                            {listFaq1s.desc}
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </div>
                 
                </div>
              </div>
            </div>
          </section>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default FAQ;
