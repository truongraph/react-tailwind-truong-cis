import React from "react";
import { banner } from "../assets";
import Select from 'react-select';
import { useTranslation } from "react-i18next";
export default function Modal() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  //Modal chính
  const [showModal, setShowModal] = React.useState(false);
  //Chọn loại kinh doanh
  const [showChooseType, setshowChooseType] = React.useState(true);
  //Doanh nghiệp
  const [showChooseS1, setshowChooseS1] = React.useState(false);
  //Cá nhân
  const [showChooseS3, setshowChooseS3] = React.useState(false);
  return (
    <React.Fragment>
      <button
        className="font-semibold rounded-full button-das-width bg-white text-green-500 hover:bg-green-100 text-[14px] px-8 border-2 py-1 border-current"
        type="button"
        onClick={function (event) {
          setShowModal(true);
          setshowChooseType(true);
          setshowChooseS1(false);
          setshowChooseS3(false);
        }}
      >
        {t('register')}
      </button>
      {showModal ? (
        <React.Fragment>
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
                    <div className="bg-gradient-to-l from-green-900 to-green-600 opacity-80 w-[457px] absolute top-0 bottom-0 left-0 right-0 rounded-tl-2xl rounded-bl-2xl"></div>
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
                    <svg
                      className="w-[25px] h-[25px] text-black-500 absolute top-[10px] right-[10px]"
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
                    {/* ========================================================== */}
                    {/* MẶC ĐỊNH HIỂN THỊ CHO CHỌN LOẠI TRƯỚC */}
                    {/* ========================================================== */}
                    {showChooseType ? (
                      <div className="pt-[150px] pb-[150px] px-[90px] h-full text-center">
                        <h3 className="font-semibold text-[18px]">
                          Hãy chọn hình thức kinh doanh của bạn
                        </h3>
                        <p className="text-center mt-3 text-gray-500 text-[12px]">
                          Hình thức kinh doanh của bạn đang là ?
                        </p>
                        <div className="mt-1">
                          <button
                            className="bg-white hover:bg-green-500 hover:text-white mt-5 w-full text-center opacity-100 text-green-500 border-solid border-2 border-current active:bg-green-600 font-medium text-sm px-6 py-5 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={function (event) {
                              setshowChooseS1(true);
                              setshowChooseS3(false);
                              setshowChooseType(false);
                            }}
                          >
                            Doanh nghiệp
                          </button>
                          <button
                            className="bg-white hover:bg-green-500 hover:text-white mt-5 w-full text-center opacity-100 text-green-500 border-solid border-2 border-current active:bg-green-600 font-medium text-sm px-6 py-5 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={function (event) {
                              setshowChooseS1(false);
                              setshowChooseS3(true);
                              setshowChooseType(false);
                            }}
                          >
                            Cá nhân
                          </button>
                        </div>
                      </div>
                    ) : null}
                    {/* ========================================================== */}
                    {/* KẾT THÚC MẶC ĐỊNH HIỂN THỊ CHO CHỌN LOẠI TRƯỚC */}
                    {/* ========================================================== */}
                    {/* ========================================================== */}
                    {/* HIỂN THỊ DOANH NGHIỆP */}
                    {/* ========================================================== */}
                    {showChooseS1 ? (
                      <div className="pt-[10px] pb-[10px] px-[80px] h-full">
                        <h3 className="font-semibold mt-1 text-[19px] text-center">
                          Doanh nghiệp
                        </h3>
                        <p
                          className="text-center mt-2 font-semibold text-green-600 text-[13px] flex justify-center"
                          onClick={function (event) {
                            setshowChooseS1(false);
                            setshowChooseType(true);
                          }}
                        >
                          <svg
                            className="w-[13px] h-[13px] mt-[1.5px] mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                            />
                          </svg>
                          Chọn hình thức kinh doanh khác
                        </p>
                        <div className="mt-5">
                          <div className="mb-3 pt-0 max-w-[42.4rem] w-full m-auto">
                            {/* ========================================================== */}
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
                                  Họ tên chủ doanh nghiệp
                                </label>
                              </div>
                              <div className="relative z-0 mb-5 w-full group col-span-2">
                                <input
                                  type="text"
                                  name="floating_email"
                                  id="floating_email"
                                  autoComplete="off"
                                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-500 peer"
                                  placeholder=" "
                                />
                                <label
                                  for="floating_email"
                                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-500 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-500 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                  Số điện thoại
                                </label>
                              </div>
                            </div>
                            {/* ========================================================== */}
                            {/* ========================================================== */}
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
                                  Tên công ty
                                </label>
                              </div>
                              <div className="relative z-0 mb-5 w-full group col-span-2">
                                <input
                                  type="text"
                                  name="floating_email"
                                  id="floating_email"
                                  autoComplete="off"
                                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500x` focus:outline-none focus:ring-0 focus:border-green-500 peer"
                                  placeholder=" "
                                />
                                <label
                                  for="floating_email"
                                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-500 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-500 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                  Mã số thuế
                                </label>
                              </div>
                            </div>
                            {/* ========================================================== */}
                            {/* ========================================================== */}
                            <div className="grid grid-cols-6 gap-4">
                              <div className="relative z-0 mb-5 w-full group col-span-2">
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
                                  Email
                                </label>
                              </div>
                              
                              <div className="relative z-0 mb-5 w-full group col-span-4">
                                <Select options={options} closeMenuOnSelect={true} placeholder={'chọn địa chỉ'} className="z-10" />
                              </div>
                            </div>
                            {/* ========================================================== */}
                            {/* ========================================================== */}
                            <div className="grid grid-cols-6 gap-4">
                              <div className="relative z-0 mb-5 w-full group col-span-5">
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
                                  Đặt tên cho phòng khám của bạn
                                </label>
                              </div>
                              <div className="relative z-0 mb-5 w-full group col-span-1">
                                <button
                                  type="button"
                                  className="block  text-[8px] h-full w-full font-semibold text-center text-green-600 bg-white  border-b border-gray-300 focus:outline-none "
                                >
                                  .dacloud.vn
                                </button>
                              </div>
                            </div>
                            {/* ========================================================== */}
                            {/* ========================================================== */}
                            <div className="grid grid-cols-6 gap-4">
                              <div className="relative z-0 mb-5 w-full group col-span-3">
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
                                  Tên tài khoản
                                </label>
                              </div>
                              <div className="relative z-0 mb-5 w-full group col-span-3">
                                <input
                                  type="password"
                                  name="floating_email"
                                  id="floating_email"
                                  autoComplete="off"
                                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500x` focus:outline-none focus:ring-0 focus:border-green-500 peer"
                                  placeholder=" "
                                />
                                <label
                                  for="floating_email"
                                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-500 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-500 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                  Mật khẩu
                                </label>
                              </div>
                            </div>
                            {/* ========================================================== */}
                            {/* ========================================================== */}
                            <div className="grid grid-cols-6 gap-4">
                              <div className="relative z-0 mb-5 w-full group col-span-3">
                                <button
                                  type="button"
                                  className="block  text-[8px] h-full w-full font-semibold text-center text-green-600 bg-green-100 hover:bg-green-200 rounded-full  focus:outline-none "
                                >
                                  Nhận mã xác thực qua SMS
                                </button>
                              </div>
                              <div className="relative z-0 mb-5 w-full group col-span-3">
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
                                  Nhập mã xác thực
                                </label>
                              </div>
                            </div>
                            {/* ========================================================== */}
                           
                            <div className="flex justify-end gap-5 pt-4">
                              <button
                              onClick={function (event) {
                                setshowChooseS1(false);
                                setshowChooseType(true);
                              }}
                                type="button"
                                className="text-green-500 border-2 border-solid border-current bg-white hover:bg-green-100 focus:outline-none  font-medium rounded-full text-sm px-6 py-2.5 text-center flex leading-[23px] gap-2"
                              >
                               
                                Quay lại
                              </button>
                              <button
                                type="button"
                                className="text-white bg-green-500 hover:bg-green-600 border-2 border-current focus:outline-none  font-medium rounded-full text-sm px-6 py-2.5 text-center flex leading-[23px] gap-2"
                              >
                                Đăng ký tài khoản
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}
                    {/* ========================================================== */}
                    {/* KẾT THÚC HIỂN THỊ DOANH NGHIỆP */}
                    {/* ========================================================== */}
                    
                    {/* ========================================================== */}
                    {/* HIỂN THỊ CÁ NHÂN */}
                    {/* ========================================================== */}
                    {showChooseS3 ? (
                      <div className="pt-[10px] pb-[10px] px-[80px] h-full">
                        <h3 className="font-semibold mt-1 text-[19px] text-center">
                          Cá nhân
                        </h3>
                        <p
                          className="text-center mt-2 font-semibold text-green-600 text-[13px] flex justify-center"
                          onClick={function (event) {
                            setshowChooseS3(false);
                            setshowChooseType(true);
                          }}
                        >
                          <svg
                            className="w-[13px] h-[13px] mt-[1.5px] mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                            />
                          </svg>
                          Chọn hình thức kinh doanh khác
                        </p>
                        <div className="mt-5">
                          <div className="mb-3 pt-0 max-w-[42.4rem] w-full m-auto">
                            {/* ========================================================== */}
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
                                  Họ tên 
                                </label>
                              </div>
                              <div className="relative z-0 mb-5 w-full group col-span-2">
                                <input
                                  type="text"
                                  name="floating_email"
                                  id="floating_email"
                                  autoComplete="off"
                                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-500 peer"
                                  placeholder=" "
                                />
                                <label
                                  for="floating_email"
                                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-500 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-500 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                  Số điện thoại
                                </label>
                              </div>
                            </div>
                            {/* ========================================================== */}
                            
                            {/* ========================================================== */}
                            <div className="grid grid-cols-6 gap-4">
                              <div className="relative z-0 mb-5 w-full group col-span-2">
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
                                  Email
                                </label>
                              </div>
                              <div className="relative z-0 mb-5 w-full group col-span-4">
                                <input
                                  type="text"
                                  name="floating_email"
                                  id="floating_email"
                                  autoComplete="off"
                                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500x` focus:outline-none focus:ring-0 focus:border-green-500 peer"
                                  placeholder=" "
                                />
                                <label
                                  for="floating_email"
                                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-500 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-500 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                  Địa chỉ
                                </label>
                              </div>
                            </div>
                            {/* ========================================================== */}
                            {/* ========================================================== */}
                            <div className="grid grid-cols-6 gap-4">
                              <div className="relative z-0 mb-5 w-full group col-span-5">
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
                                  Đặt tên cho phòng khám của bạn
                                </label>
                              </div>
                              <div className="relative z-0 mb-5 w-full group col-span-1">
                                <button
                                  type="button"
                                  className="block  text-[8px] h-full w-full font-semibold text-center text-green-600 bg-white  border-b border-gray-300 focus:outline-none "
                                >
                                  .dacloud.vn
                                </button>
                              </div>
                            </div>
                            {/* ========================================================== */}
                            {/* ========================================================== */}
                            <div className="grid grid-cols-6 gap-4">
                              <div className="relative z-0 mb-5 w-full group col-span-3">
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
                                  Tên tài khoản
                                </label>
                              </div>
                              <div className="relative z-0 mb-5 w-full group col-span-3">
                                <input
                                  type="password"
                                  name="floating_email"
                                  id="floating_email"
                                  autoComplete="off"
                                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500x` focus:outline-none focus:ring-0 focus:border-green-500 peer"
                                  placeholder=" "
                                />
                                <label
                                  for="floating_email"
                                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-500 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-500 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                >
                                  Mật khẩu
                                </label>
                              </div>
                            </div>
                            {/* ========================================================== */}
                            {/* ========================================================== */}
                            <div className="grid grid-cols-6 gap-4">
                              <div className="relative z-0 mb-5 w-full group col-span-3">
                                <button
                                  type="button"
                                  className="block  text-[8px] h-full w-full font-semibold text-center text-green-600 bg-green-100 hover:bg-green-200 rounded-full  focus:outline-none "
                                >
                                  Nhận mã xác thực qua SMS
                                </button>
                              </div>
                              <div className="relative z-0 mb-5 w-full group col-span-3">
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
                                  Nhập mã xác thực
                                </label>
                              </div>
                            </div>
                            {/* ========================================================== */}
                           
                            <div className="flex justify-end gap-5 pt-4">
                              <button
                              onClick={function (event) {
                                setshowChooseS3(false);
                                setshowChooseType(true);
                              }}
                                type="button"
                                className="text-green-500 border-2 border-solid border-current bg-white hover:bg-green-100 focus:outline-none  font-medium rounded-full text-sm px-6 py-2.5 text-center flex leading-[23px] gap-2"
                              >
                               
                                Quay lại
                              </button>
                              <button
                                type="button"
                                className="text-white bg-green-500 hover:bg-green-600 border-2 border-current focus:outline-none  font-medium rounded-full text-sm px-6 py-2.5 text-center flex leading-[23px] gap-2"
                              >
                                Đăng ký tài khoản
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}
                    {/* ========================================================== */}
                    {/* KẾT THÚC HIỂN THỊ CÁ NHÂN */}
                    {/* ========================================================== */}
                  </div>
                  {/* ========================================================== */}
                </div>
                {/* ========================================================== */}
              </div>
            </div>
          </div>
          <div className="opacity-70 fixed inset-0 z-40 bg-black"></div>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
}
