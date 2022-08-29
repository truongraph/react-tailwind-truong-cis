import styles from "../style";
// import { arrowUp } from "../assets";
import React from "react";
const GetStarted = () => (
  <section className="relative py-10 bg-gradient-to-r from-green-500 to-green-700">
    <div className="max-w-screen-xl px-5 py-10 xl:px-16 mx-auto font-dasfont">
      <div className="text-center font-dasfont">
          <h5 className="text-white text-xl sm:text-2xl lg:text-3xl leading-relaxed font-bold uppercase font-dasfont">
            Bắt đầu dùng thử miễn phí 15 ngày
          </h5>
          <p className="text-white pt-5 pb-8">Để trải nghiệm phần mềm quản lý phòng khám tốt nhất được các chủ doanh nghiệp tin dùng</p>
       <button
          type="button"
          className="focus:outline-none text-green-600 bg-green-100 hover:bg-green-200 px-14 py-5 rounded-full font-semibold free-trial text-[17px]"
        >
          Đăng ký dùng thử
        </button>
      </div>
    </div>
  </section>
);

export default GetStarted;
