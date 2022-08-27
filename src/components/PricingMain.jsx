import PricingBasic from "./PricingBasic";
import PricingProfessional from "./PricingProfessional";
import PricingHigh from "./PricingHigh";
const PricingMain = () => {
  return (
    <section className="relative pt-[100px] pb-[100px] mb-0 font-dasfont bg-[#f3f5f6]" id="banggia">
      <div className="max-w-screen-xl px-5 xl:px-16 mx-auto font-dasfont">
        <p className="text-2xl lg:text-2xl xl:text-3xl font-extrabold text-green-600 text-black-500 leading-normal">
          Bảng phí dịch vụ
        </p>
        <p className="text-[15px] mt-3 text-gray-500">
          Lựa chọn giải pháp phù hợp với nhu cầu của bạn và trải nghiệm dùng thử
          miễn phí 15 ngày miễn phí
        </p>
        <div className="relative w-full flex font-dasfont">
          <div className="rounded-xl w-full bg-white-500 z-10 grid grid-flow-row lg:grid-flow-row grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-10 py-8 lg:py-12 font-dasfont">
              <PricingBasic/>
              <PricingProfessional/>
              <PricingHigh/>
          </div>
          <div
            className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
            style={{ filter: "blur(114px)" }}
          ></div>
        </div>
        <p className="text-[14px] text-center mt-3">Tổng đài <span className="text-green-500 font-semibold">1800 1111</span> hỗ trợ miễn cước từ 7:00 - 22:00, suốt 365 ngày/năm</p>
      </div>
    </section>
  );
};

export default PricingMain;
