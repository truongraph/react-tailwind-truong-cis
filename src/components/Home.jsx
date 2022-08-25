
import {
  ArrowLongDownIcon,
} from "@Heroicons/react/24/outline";
const Home = () => {
  return (
    <section className="relative mt-[65px]" id="trangchu">
      <div className="max-w-screen-xl px-5 xl:px-16 mx-auto font-dasfont">
        <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16 ">
          <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <p className="text-2xl lg:text-3xl xl:text-4xl font-medium text-black-600 leading-normal">
              Phần mềm quản lý phòng khám <br />
              <strong>chuyên nghiệp nhất</strong>.
            </p>
            <p className="text-black-500 mt-4 mb-6">
              Giải pháp quản lý phòng khám 4.0 .Giúp các chủ phòng khám dễ dàng
              cập nhật thông tin đơn giản, nhanh chóng & hiệu quả
            </p>
            <button
              className={
                "py-3  lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-full bg-green-500 hover:shadow-orange-md transition-all outline-none text-white"
              }
            >
              Dùng thử miễn phí
            </button>
          </div>
          <div className="flex w-full">
            <div className="h-full w-full">
              <img src="src/assets/Illustration1.png" />
            </div>
          </div>
        </div>
        <ArrowLongDownIcon class="transition-all duration-1000 delay-1000 animate-bounce w-10 h-10 mt-3 text-green-500 mt-3 mb-10" />
      </div>
    </section>
  );
};

export default Home;
