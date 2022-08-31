import React from "react";
import { useTranslation } from "react-i18next";
export default function Modal() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };
  const [showModal, setShowModal] = React.useState(false);
  const [showError, setshowError] = React.useState(false);
  return (
    <>
      <button
        className="font-semibold rounded-full bg-green-500 text-white hover:bg-green-600 text-[14px] px-8 border-2 py-1 border-current"
        type="button"
        onClick={function (event) {
          setShowModal(true);
          setshowError(false);
        }}
      >
        {t('login')}
      </button>
      {showModal ? (
        <>
          <div className="font-dasfont justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-3  max-w-[600px]">
              {/*content*/}
              <div className="border-0 rounded-2xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/* ========================================================== */}
                {/*header*/}
                {/* ========================================================== */}
                <div className="flex items-start bg-zinc-100 justify-between pt-[15px] pb-[10px] px-5 border-b border-solid border-slate-200 rounded-t-2xl font-dasfont">
                  <h3 className="text-[20px] font-semibold items-center">
                    Đăng nhập tài khoản DA CLOUD
                  </h3>
                  <svg
                    className="w-[30px] h-[30px] text-black-500"
                    onClick={() => setShowModal(false)}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                {/* ========================================================== */}
                {/*body*/}
                {/* ========================================================== */}
                <div className="relative p-6 flex-auto">
                  <div className="grid grid-cols-6 gap-4">
                    <div className="relative z-0 mb-5 w-full group col-span-4">
                      <input
                        type="text"
                        name="floating_sdt"
                        id="floating_sdt"
                        autoComplete="off"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-500 peer"
                        placeholder=" "
                      />
                      <label
                        for="floating_sdt"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-500 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-500 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Địa chỉ truy cập phòng khám
                      </label>
                    </div>
                    <div className="relative z-0 mb-5 w-full group col-span-2">
                      <button
                        type="button"
                        className="block text-[8px] h-full w-full font-semibold text-center text-green-600 bg-green-100 rounded-full  focus:outline-none "
                      >
                        .dacloud.vn
                      </button>
                    </div>
                  </div>
                  {/* ========================================================== */}
                  {showError ? (
                    <div className="text-white px-3 py-2 border-0 rounded relative mb-4 bg-red-100">
                      <span className="text-[13px] inline-block mr-5 align-middle text-red-500">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                          />
                        </svg>
                      </span>
                      <span className="inline-block align-middle mr-8 text-[13px] text-black font-medium">
                        Vui lòng nhập địa chỉ truy cập
                      </span>
                    </div>
                  ) : null}
                  {/* ========================================================== */}
                  <span className="text-[14px]">
                    Bạn chưa có thông tin tài khoản trên DaCloud.?
                    <span className="text-green-600 mx-1 font-medium">
                      Dùng thử miễn phí
                    </span>
                  </span>
                  {/* ========================================================== */}
                </div>
                {/* ========================================================== */}
                {/*footer*/}
                <div className="flex items-center justify-end p-3 rounded-b">
                  <button
                    className="bg-green-500 flex opacity-100 text-white active:bg-green-600 font-semibold text-sm px-6 py-3 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setshowError(true)}
                  >
                    Đăng nhập quản trị
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
