import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import ButtonOutline from "./ButtonOutline";
import ButtonPrimary from "./ButtonPrimary";
const Hero = () => {
  return (
    <section className="relative" id="trangchu">
      <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto font-dasfont">
        <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16 ">
          <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
              Phần mềm quản lý phòng khám <br />
              <strong>chuyên nghiệp nhất</strong>.
            </h1>
            <p className="text-black-500 mt-4 mb-6">
              Giúp các chủ phòng khám quản lý dễ dàng & hiệu quả hơn
            </p>
            <button
              className={
                "py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-full bg-green-500 hover:shadow-orange-md transition-all outline-none text-white"
              }
            >
              Đăng ký dùng thử
            </button>
          </div>
          <div className="flex w-full">
            <div className="h-full w-full">
              <img src="src/assets/Illustration1.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
