import { stats } from "../constants";
import styles from "../style";
import { easy ,business,database} from "../assets";
import {
  ArrowDownCircleIcon,
  ArrowLongDownIcon,
} from "@Heroicons/react/24/outline";
const Stats = (
  {
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
  }
) => {
  return(
  <section className="relative mb-20" id="gioithieu">
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
                  <img src={listUsers.icon} className="h-12 w-12 items-center justify-center rounded-full" />
                </div>
                <div className=" items-center justify-center">
                  <p className="text-[17px] text-black-400 font-bold">
                    {listUsers.title}
                  </p>
                  <p className="text-[14px] text-black-200">{listUsers.name}</p>
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
</section>
  );
};

export default Stats;
