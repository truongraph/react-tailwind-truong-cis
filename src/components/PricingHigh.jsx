const PricingHigh = () => {
  return (
    <>
      {/* ================================================================================ */}
      {/* GÓI CAO CẤP */}
      {/* ================================================================================ */}
      <div className="p-12 w-full  bg-white rounded-xl shadow-md">
        <h5 className="mb-4 text-[17px] uppercase font-semibold text-red-500 dark:text-gray-400">
          Gói cao cấp
        </h5>
        <p className="mt-2 mb-2 text-[14px]">Dành cho những mô hình kinh doanh có nhiều nhân viên & dịch vụ.</p>
        <div className="flex items-baseline ">
          <span className="text-[30px] font-bold tracking-tight text-red-500">
            10.500.000
          </span>
          <span className="ml-1 text-[15px] font-medium text-red-500">/tháng</span>
        </div>

        <ul role="list" className="my-7 text-[15px] space-y-5">
        <li className="flex space-x-3">
            <svg className="flex-shrink-0 w-5 h-5 text-green-600 dark:text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            <span className="font-normal leading-tight text-gray-700 ">
            Không giới hạn tính năng
            </span>
          </li>
          <li className="flex space-x-3">
          <svg className="flex-shrink-0 w-5 h-5 text-green-600 dark:text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            <span className="font-normal leading-tight text-gray-700 ">
            Không phí khởi tạo
            </span>
          </li>
          <li className="flex space-x-3">
          <svg className="flex-shrink-0 w-5 h-5 text-green-600 dark:text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            <span className="font-normal leading-tight text-gray-700 ">
            Quản lý chấm công, tính lương
            </span>
          </li>
          <li className="flex space-x-3  ">
          <svg className="flex-shrink-0 w-5 h-5 text-green-600 dark:text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            <span className="font-normal leading-tight text-gray-700 ">
            Bán hàng online trên các sàn thương mại điện tử, TikTok, Facebook
            </span>
          </li>
          <li className="flex space-x-3  ">
          <svg className="flex-shrink-0 w-5 h-5 text-green-600 dark:text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            <span className="font-normal leading-tight text-gray-700 ">
            Quản lý đặt hàng, đổi trả hàng
            </span>
          </li>
          <li className="flex space-x-3  ">
          <svg className="flex-shrink-0 w-5 h-5 text-green-600 dark:text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            <span className="font-normal leading-tight text-gray-700 ">
            Hỗ trợ kết nối API
            </span>
          </li>
          <li className="flex space-x-3  ">
          <svg className="flex-shrink-0 w-5 h-5 text-green-600 dark:text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            <span className="font-normal leading-tight text-gray-700 ">
            Lập hóa đơn bán hàng
            </span>
          </li>
        </ul>
        <button
          type="button"
          className="text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-semibold rounded-full text-[15px] px-5 py-4 inline-flex justify-center w-full text-center"
        >
          Chọn gói này
        </button>
      </div>
    </>
  );
};

export default PricingHigh;
