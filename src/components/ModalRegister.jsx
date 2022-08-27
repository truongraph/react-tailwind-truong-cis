import {
  ArrowRightIcon,
  ArrowUpLeftIcon,
  ArrowUturnLeftIcon,
  ExclamationTriangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import { banner } from "../assets";
export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  const [showChooseType, setshowChooseType] = React.useState(true);
  const [showChooseS1, setshowChooseS1] = React.useState(true);
  return (
    <>
      <button
        className="font-semibold rounded-full button-das-width bg-das-color-outline"
        type="button"
        onClick={function (event) {
          setShowModal(true);
          setshowChooseType(true);
        }}
      >
        Đăng ký
      </button>
      {showModal ? (
        <>
          <div className="font-dasfont justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-6xl">
              {/*content*/}
              <div className="border-0 rounded-2xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/* ========================================================== */}
                <div className="relative flex rounded-t-2xl">
                  {/* ========================================================== */}
                  <div className="rounded-t-2xl w-[457px] h-[457px] pb-[5.4rem] flex-col flex-wrap">
                    <img
                      src={banner}
                      className="flex-col flex-wrap w-[457px] min-w-[457px] h-[544px] rounded-tl-2xl rounded-bl-2xl object-cover bg-center bg-cover overflow-hidden absolute bg-no-repeat justify-center flex"
                    />
                    <div className="bg-gradient-to-l from-green-900 to-green-800 opacity-80 w-[457px] absolute top-0 bottom-0 left-0 right-0 rounded-tl-2xl rounded-bl-2xl"></div>
                    <div className="relative block text-center top-1/2 h-full m-auto z-[1] text-white">
                      <h2 className=" text-[27px] tracking-wide font-extrabold">
                        Tiết kiệm chi phí <br /> Quản lý toàn diện
                      </h2>
                      <p
                        className="
                      text-[13px] font-medium mt-4 
                      before:absolute before:left-[25%] before:border-t-[1px] before:border-l-[1px] before:content-[''] before:w-[10px] before:min-w-[10px] before:h-[10px] before:border-white before:border-solid
                      after:absolute after:right-[25%] after:top-[29%] after:border-b-[1px] after:border-r-[1px] after:content-[''] after:w-[10px] after:min-w-[10px] after:h-[10px] after:border-white after:border-solid
                      "
                      >
                        Hỗ trợ đăng ký 0768484671
                      </p>
                    </div>
                  </div>
                  {/* ========================================================== */}
                  <div className="h-[544px] justify-center flex-1">
                    <XMarkIcon
                      className="w-[25px] h-[25px] text-black-500 absolute top-[10px] right-[10px]"
                      onClick={() => setShowModal(false)}
                    />
                    {/* ========================================================== */}
                    {/* MẶC ĐỊNH HIỂN THỊ CHO CHỌN LOẠI TRƯỚC */}
                    {showChooseType ? (
                      <div className="pt-[100px] pb-[100px] px-[90px] h-full text-center">
                        <h3 className="font-semibold mt-1 text-[18px]">
                          Hãy chọn hình thức kinh doanh của bạn
                        </h3>
                        <p className="text-center mt-3 text-gray-500 text-[12px]">
                          Hình thức kinh doanh của bạn đang là ?
                        </p>
                        <div className="mt-3">
                          <button
                            className="bg-white hover:bg-green-500 hover:text-white mt-5 w-full text-center opacity-100 text-green-600 border-solid border border-current active:bg-green-600 font-medium text-sm px-6 py-5 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={function (event) {
                              setshowChooseS1(true);
                              setshowChooseType(false);
                            }}
                          >
                            Doanh nghiệp
                          </button>
                          <button
                            className="bg-white hover:bg-green-500 hover:text-white mt-5 w-full text-center opacity-100 text-green-600 border-solid border border-current active:bg-green-600 font-medium text-sm px-6 py-5 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setshowError(true)}
                          >
                            Tổ chức
                          </button>
                          <button
                            className="bg-white hover:bg-green-500 hover:text-white mt-5 w-full text-center opacity-100 text-green-600 border-solid border border-current active:bg-green-600 font-medium text-sm px-6 py-5 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setshowError(true)}
                          >
                            Cá nhân
                          </button>
                        </div>
                      </div>
                    ) : null}
                    {/* ========================================================== */}
                    {/* ========================================================== */}
                    {/* HIỂN THỊ DOANH NGHIỆP */}
                    {showChooseS1 ? (
                      <div className="pt-[10px] pb-[10px] px-[50px] h-full">
                        <h3 className="font-semibold mt-1 text-[19px] text-center">
                          Doanh nghiệp
                        </h3>
                        <p
                          className="text-center mt-2 font-semibold text-green-600 text-[13px] flex justify-center"
                          onClick={function (event) {
                            setshowChooseS1(false);
                            setshowChooseType(true);
                          }}
                        ><ArrowUturnLeftIcon className="w-[13px] h-[13px] mt-[1.5px] mr-2"/>
                          Chọn hình thức kinh doanh khác
                        </p>
                        <div className="mt-2">
                          <div className="mb-3 pt-0 max-w-[42.4rem] w-full m-auto">
                            {/* ========================================================== */}
                            <div className="mt-3">
                            <p className="text-left text-[12px] font-semibold mb-1">
                              Họ tên
                            </p>
                            <input
                              type="text"
                              placeholder="Nhập họ tên"
                              className="px-3 py-2 placeholder-gray-300 text-black relative bg-white rounded text-sm border border-gray-300  border-solid focus:border-green-600 text-[13px]  outline-none focus:outline-none w-full"
                            />
                            </div>
                            {/* ========================================================== */}
                            {/* ========================================================== */}
                            <div className="grid grid-cols-2 gap-4 mt-3">
                            <div>
                            <p className="text-left text-[12px] font-semibold mb-1">
                              Số điện thoại
                            </p>
                            <input
                              type="text"
                              placeholder="Nhập số điện thoại"
                              className="px-3 py-2 placeholder-gray-300 text-black relative bg-white rounded text-sm border border-gray-300  border-solid focus:border-green-600 text-[13px]  outline-none focus:outline-none w-full"
                            />
                            </div>
                            <div>
                            <p className="text-left text-[12px] font-semibold mb-1">
                              Email
                            </p>
                            <input
                              type="text"
                              placeholder="Nhập email"
                              className="px-3 py-2 placeholder-gray-300 text-black relative bg-white rounded text-sm border border-gray-300  border-solid focus:border-green-600 text-[13px]  outline-none focus:outline-none w-full"
                            />
                            </div>
                            </div>
                            {/* ========================================================== */}
                            {/* ========================================================== */}
                            <div className="mt-3">
                            <p className="text-left text-[12px] font-semibold mb-1">
                              Tên doanh nghiệp
                            </p>
                            <input
                              type="text"
                              placeholder="Nhập tên doanh nghiệp"
                              className="px-3 py-2 placeholder-gray-300 text-black relative bg-white rounded text-sm border border-gray-300  border-solid focus:border-green-600 text-[13px]  outline-none focus:outline-none w-full"
                            />
                            </div>
                            {/* ========================================================== */}
                            {/* ========================================================== */}
                            <div className="mt-3">
                            <div className="relative">
    <input type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
    <label for="floating_outlined" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">Floating outlined</label>
</div>
                            </div>
                            {/* ========================================================== */}
                          </div>
                        </div>
                      </div>
                    ) : null}
                    {/* ========================================================== */}
                  </div>
                  {/* ========================================================== */}
                </div>
                {/* ========================================================== */}
              </div>
            </div>
          </div>
          <div className="opacity-70 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
