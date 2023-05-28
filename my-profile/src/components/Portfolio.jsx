// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay, Pagination } from "swiper";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import Slide from "./slide";

const Portfolio = () => {
  return (
    <div className="">
      <div className="mx-auto max-w-screen-2xl pb-4 px-4 md:px-8">
        <h1 className="text-black-800 text-4xl font-bold sm:text-5xl md:text-6xl text-center mr-auto pt-4 pb-4">
          Portfolio
        </h1>
        <hr />
        <Slide />
      </div>
    </div>
  );
};
export default Portfolio;
