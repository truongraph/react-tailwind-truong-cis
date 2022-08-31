import { notfound, logoload } from "../assets";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Notfound = () => {
    useEffect(() => {
        document.title = "Không tìm thấy trang"
    }, [])
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <React.Fragment>
    <section className="block m-auto text-center pt-[100px]">
      <div className="max-w-screen-xl px-5 xl:px-16 mx-auto font-dasfont">
        <img
          src={notfound}
          alt="Logo"
          className="block m-auto w-[400px]"
        />
        <h1 className="font-normal mt-10 text-[25px] text-red-600">
          Không tìm thấy trang
        </h1>
        <p className="text-[15px] pt-5 mb-16">
          Trang bạn đang yêu cầu không được hiển thị hoặc nội dung không
          tồn tại
        </p>
        <Link to="/" className="bg-white text-green-500 hover:bg-green-100 border-2 border-current px-16 py-4 rounded-full">
          Về trang chủ
        </Link>
      </div>
    </section>
  </React.Fragment>
  );
};

export default Notfound;
