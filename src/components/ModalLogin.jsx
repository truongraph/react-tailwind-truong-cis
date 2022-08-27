import { ArrowRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="font-semibold rounded-full button-das-width bg-das-color"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Đăng nhập
      </button>
      {showModal ? (
        <>
          <div className="font-dasfont justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-[600px]">
              {/*content*/}
              <div className="border-0 rounded-2xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start bg-zinc-100 justify-between pt-[15px] pb-[10px] px-5 border-b border-solid border-slate-200 rounded-t-2xl font-dasfont">
                  <h3 className="text-[20px] font-semibold items-center">
                    Đăng nhập tài khoản DA CLOUD
                  </h3>
                  <XMarkIcon
                    className="w-[30px] h-[30px] text-black-500"
                    onClick={() => setShowModal(false)}
                  />
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div class="relative flex w-full flex-wrap items-stretch mb-3">
                    <input
                      type="text"
                      placeholder="Nhập địa chỉ truy cập"
                      class="px-3 py-3 placeholder-slate-500 text-black-600 relative text-sm border-solid border focus:shadow-none outline-none focus:outline-none w-full pr-10"
                    />
                    <span class="z-10 h-full leading-snug font-semibold absolute bg-slate-100 text-center text-black-300  bg-transparent text-sm items-center justify-center right-0 px-3 py-3">
                      .dacloud.vn
                    </span>
                  </div>
                  <span className="text-[14px]">Bạn chưa có tài khoản đăng nhập.? <span className="text-green-600 mx-1 font-medium"> Dùng thử miễn phí</span> ngay</span>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-3 rounded-b">
                  {/* <button
                    className="text-red-500 background-transparent font-semibold px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Đóng
                  </button> */}
                  <button
                    className="bg-green-500 flex opacity-100 text-white active:bg-green-600 font-semibold text-sm px-6 py-3 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Đăng nhập quản trị{" "}
                    <ArrowRightIcon className="w-[20px] h-[20px] ml-2"></ArrowRightIcon>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-70 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
