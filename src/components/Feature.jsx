import { stats } from "../constants";
import styles from "../style";
import { wellcomesvg ,medicalsvg,stocksvg,filesvg,charsvg,dashboardsvg} from "../assets";
// import {
//   ArrowDownCircleIcon,
//   ArrowLongDownIcon,
// } from "@Heroicons/react/24/outline";
// import { CheckCircleIcon } from "@heroicons/react/24/solid";
const Stats = ({
  listUser = [
    {
      text1: "Quản lý tiếp đón khách hàng nhanh chóng, ghi nhận đầy đủ thông tin.",
      text2: "Phân luồng khám, chữa bệnh ngay",
      text3: "Quản lý thông tin đặt lịch khám",
      title: "Quản lý tiếp đón",
      icon: wellcomesvg,
    },
    {
      text1: "Theo dõi quá trình bệnh nhân đến khám với các trạng thái cụ thể: Chờ khám, chỉ định cận lâm sàng...",
      text2: "Hỗ trợ bác sỹ lựa chọn bệnh theo bộ mã ICD10",
      text3: "Bác sỹ chỉ định dịch vụ trực tiếp trên hệ thống",
      title: "Quản lý khám bệnh",
      icon: medicalsvg,
    },
    {
      text1: "Quản lý nhập/xuất/tồn kho",
      text2: "Quản lý điều chuyển",
      text3: "Truy xuất hàng hóa",
      title: "Quản lý kho",
      icon: stocksvg,
    },
    {
      text1: "Cung cấp số liệu tổng quan nhanh chóng, chính xác",
      text2: "Quản lý từ một cơ sở đến chuỗi phòng khám",
      text3: "Hỗ trợ dự báo, điều chuyển được nguồn thuốc, thiết bị giữa các cơ sở, chi nhánh",
      title: "Dashboard",
      icon: dashboardsvg,
    },
    {
      text1: "Thống kê viện phí theo cơ sở phòng khám",
      text2: "Thống kê số lượng khách hàng theo tiêu chí: Cơ sở phòng khám, thời gian, bác sỹ",
      text3: "Thống kê báo cáo theo yêu cầu quản lý",
      title: "Báo cáo thống kê",
      icon: charsvg,
    },
    {
      text1: "Quản lý danh mục: Thuốc, mã bệnh ICD10, hành chính",
      text2: "Quản lý cơ sở phòng khám",
      text3: "Quản lý nhiều danh mục khác",
      title: "Quản lý danh mục hệ thống",
      icon: filesvg,
    },
  ],
}) => {
  return (
    <section className="relative mt-10 pt-10 mb-0 font-dasfont bg-gray-50" id="tinhnang">
      <div className="max-w-screen-xl px-5 xl:px-16 mx-auto font-dasfont">
        <p className="text-2xl lg:text-2xl xl:text-3xl font-extrabold text-green-600 text-black-500 leading-normal">
          Tính năng
        </p>
        <p className="text-[15px] mt-3 text-gray-500">Giải pháp chuyên biệt cho phòng khám</p>
        <div className="relative w-full flex font-dasfont">
          <div className="rounded-lg w-full bg-white-500 z-10 grid grid-flow-row lg:grid-flow-row grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 font-dasfont">
            {listUser.map((listUsers, index) => (
              <div className="max-w-sm bg-white rounded-xl border border-gray-200">
              <a href="#">
                  <img className="rounded-t-xl p-3 bg-green-50 h-60 w-full block m-auto" src={listUsers.icon}  alt="" />
              </a>
              <div className="p-5">
                  <a href="#">
                      <h5 className="mb-2 text-[18px] font-bold tracking-tight text-gray-800 dark:text-white">{listUsers.title}</h5>
                  </a>
                  <ul className="mt-3 max-w-md list-disc list-inside text-green-600 font-medium leading-5 text-[14.5px] dark:text-gray-400">
                    <li className="mb-4">
                      {listUsers.text1}
                    </li>
                    <li className="mb-4">
                      {listUsers.text2}
                    </li>
                    <li className="mb-4">{listUsers.text3}</li>
                  </ul>
              </div>
          </div>
            ))}
          </div>
          <div
            className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
            style={{ filter: "blur(114px)" }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Stats;