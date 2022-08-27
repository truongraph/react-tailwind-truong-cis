import { stats } from "../constants";
import styles from "../style";
import { easy, business, database } from "../assets";
import {
  ArrowDownCircleIcon,
  ArrowLongDownIcon,
} from "@Heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
const Stats = ({
  listUser = [
    {
      name: "Thoát khỏi sự khô cứng của một công cụ thông thường, DA Cloud mong muốn mang tới sự thân thiện và yêu thích của nhân sự với công cụ quản trị.",
      title: "Đơn giản & Dễ sử dụng",
      icon: easy,
    },
    {
      name: "Mỗi Doanh nghiệp sẽ có một thực trạng và cách làm việc khác nhau, vì thế Fastdo sinh ra để mang tới sự linh động & phù hợp cho từng doanh nghiệp Việt Nam",
      title: "Phù hợp từng doanh nghiệp",
      icon: business,
    },
    {
      name: "Dữ liệu sẽ được chuyển giao cho doanh nghiệp 100%, điều này khiến cho doanh nghiệp dễ dàng làm chủ được dữ liệu và các thông tin kinh doanh bảo mật.",
      title: "Làm chủ dữ liệu",
      icon: database,
    },
  ],
}) => {
  return (
    <section className="relative mt-10 mb-0 font-dasfont"  id="gioithieu">
      <div className="max-w-screen-xl px-5 xl:px-16 mx-auto font-dasfont">
        <p className="text-2xl lg:text-2xl xl:text-3xl font-extrabold text-black-500 leading-normal">
          Giới thiệu
        </p>
        <div className="relative w-full flex">
          <div className="rounded-lg w-full bg-white-500 z-10 grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12">
            {listUser.map((listUsers, index) => (
              <div
                className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-12/12 px-[30px] bg-green-50 rounded-2xl sm:w-auto mx-auto sm:mx-0"
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
                    <p className="text-[15px] text-black-200">
                      {listUsers.name}
                    </p>
                  </div>
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
      {/* ======================================================================================================= */}
      <div className="max-w-screen-xl mt-5 mb-6 sm:mt-5 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto">
        <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 py-8 mt-10">
          <div className="flex w-full justify-end">
            <div className="h-full w-full p-4">
              
              <img layout="responsive"
                quality={100}
                height={414}
                width={508} src="src/assets/info.svg" />
            </div>
          </div>
          <div className="flex flex-col justify-center ml-auto w-full lg:w-12/12">
            <h3 className="text-2xl lg:text-2xl xl:text-3xl font-extrabold text-black-500 leading-normal">
            Da Cloud là gì ?
            </h3>
            <p className="mt-4 text-black-100 text-[15px]">
             Giải pháp công nghệ 4.0 giúp quản lý hoạt động phòng khám toàn diện, hiệu quả, tiết kiệm chi phí, góp phần nâng cao chất lượng khám chữa bệnh và hỗ trợ nhiều tiện ích chăm sóc sức khỏe cho người dân.
            </p>
            <ul className="text-black-500 self-start list-inside text-[15px]">
              <li className="relative circle-check custom-list mt-5 flex">
               <CheckCircleIcon className="h-6 w-6 text-green-500 inline-block mr-3 min-w-[25px]"/> Tiết kiệm chi phí triển khai và vận hành hệ thống
              </li>
              <li className="relative circle-check custom-list my-5 flex">
               <CheckCircleIcon className="h-6 w-6 text-green-500 inline-block mr-3 min-w-[25px]"/> Cắt giảm chi phí nhân sự và quản lý
              </li>
              <li className="relative circle-check custom-list my-5 flex">
               <CheckCircleIcon className="h-6 w-6 text-green-500 inline-block mr-3 min-w-[25px]"/> Đơn giản hóa thủ tục hành chính, giảm thiểu chi phí hồ sơ giấy tờ
              </li>
              <li className="relative circle-check custom-list my-5 flex">
               <CheckCircleIcon className="h-6 w-6 text-green-500 inline-block mr-3 min-w-[25px]"/> Quản lý hệ thống phòng khám trên các thiết bị kết nối Internet mọi lúc mọi nơi
              </li>
              <li className="relative circle-check custom-list my-5 flex">
               <CheckCircleIcon className="h-6 w-6 text-green-500 inline-block mr-3 min-w-[25px]"/> Hạn chế tối đa sai sót trong kiểm kê và quản lý kho thuốc
              </li>
              <li className="relative circle-check custom-list my-5 flex">
               <CheckCircleIcon className="h-6 w-6 text-green-500 inline-block mr-3 min-w-[25px]"/> Hỗ trợ hoạch địch chiến lược phòng khám thông qua hệ thống báo cáo chính xác, khoa học
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
