import { patient, pie, calendar, report, mobliesvg } from "../assets";
const MoblieSection = ({
  listUser = [
    {
      name: "Tra cứu hồ sơ bệnh nhân mọi lúc mọi nơi khi có kết nối internet",
      title: "Quản lý thông tin bệnh nhân",
      icon: patient,
    },
    {
      name: "Trực quan hóa dữ liệu, thông tin bằng các biểu đồ, đồ thị",
      title: "Thống kê số liệu trực quan",
      icon: pie,
    },
    {
      name: "Cập nhật thông tin lịch khám, lịch hẹn khám đơn giản, nhanh chóng",
      title: "Quản lý lịch khám, lịch hẹn",
      icon: calendar,
    },
    {
      name: "Quản lý và kiểm soát doanh thu minh bạch, rõ ràng",
      title: "Báo cáo doanh thu tự động",
      icon: report,
    },
  ],
}) => (
  <section
    className="relative pt-[100px] pb-[30px] mb-0 font-dasfont bg-white"
    id="ungdung"
  >
    <div className="max-w-screen-xl px-5 xl:px-16 mx-auto font-dasfont">
      <p className="text-2xl lg:text-2xl xl:text-3xl font-extrabold text-green-600 text-black-500 leading-normal">
        Ứng dụng DA CLOUD
      </p>
      <p className="text-[15px] mt-3 text-gray-500">
        Tiện ích miễn phí hàng đầu cho phòng khám y khoa
      </p>
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-5 py-8 mt-10 ">
        <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
          <div className="rounded-lg w-full bg-white-500 z-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-7">
            {listUser.map((listUsers, index) => (
              <div
                className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-12/12 px-[30px] bg-white border shadow-sm hover:shadow-xl transition-all rounded-2xl sm:w-auto mx-auto sm:mx-0"
                key={index}
              >
                <div className="block m-auto w-70 sm:w-auto">
                  <div className="items-center justify-center bg-green-200 w-14 h-14 rounded-full mb-3">
                    <img
                      src={listUsers.icon}
                      className="h-12 w-12 items-center justify-center rounded-full"
                    />
                  </div>
                  <div className=" items-center justify-center">
                    <p className="text-[17px] text-black-400 font-bold">
                      {listUsers.title}
                    </p>
                    <p className="text-[14px] text-black-200">
                      {listUsers.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex w-full justify-end">
          <div className="h-full w-full p-4">
            <img
              layout="responsive"
              quality={100}
              height={400}
              width={508}
              src={mobliesvg}
            />
          </div>
        </div>
      </div>
      {/* ======================================================================================================== */}
      
      <div className="relative w-full mt8">
        <div className="absolute rounded-full w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
        <div className="p-12 pt-14 pb-10 w-full text-center bg-green-500 rounded-full font-dasfont">
        <h5 className="mb-2 text-3xl font-extrabold text-white dark:text-white">
          Tải ứng dụng ngay
        </h5>
        <p className="mb-5 text-[14px] text-white dark:text-gray-400">
          Trải nghiệm ứng dụng DA CLOUD trên Google Play &amp; App Store
        </p>
        <div className="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
          <a className="w-full sm:w-auto bg-white border hover:bg-green-100 focus:outline-none text-green-500 border-current rounded-full inline-flex items-center justify-center px-8 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <svg
              className="mr-3 w-7 h-7"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="apple"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                fill="currentColor"
                d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
              ></path>
            </svg>
            <div className="text-left">
              <div className="mb-1 text-xs font-semibold">Tải app trên</div>
              <div className="-mt-1 font-sans text-sm font-bold">App Store</div>
            </div>
          </a>
          <a className="w-full sm:w-auto bg-white border hover:bg-green-100 focus:outline-none text-green-500 border-current rounded-full  inline-flex items-center justify-center px-8 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <svg
              className="mr-3 w-7 h-7"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google-play"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
              ></path>
            </svg>
            <div className="text-left">
              <div className="mb-1 text-xs font-semibold">Tải app trên</div>
              <div className="-mt-1 font-sans text-sm font-bold">
                Google Play
              </div>
            </div>
          </a>
        </div>
      </div>
        </div>
      </div>
    </div>
  </section>
);

export default MoblieSection;
