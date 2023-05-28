import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./slide-style.css";

const Slide = () => {
  return (
    <div className="h-auto relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 shadow-lg md:py-10 xl:py-28">
      <div className="h-max w-full text-center">
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            601: { slidesPerView: 2 },
            1025: { slidesPerView: 3 },
          }}
          loop={true}
          modules={[Navigation, Pagination, Autoplay]}
          className="h-max"
        >
          <SwiperSlide>
            <div className="text-center">
              <img src="" alt="シフト管理アプリ" />
              <p>
                aaaaaaaaaaaaaaaaaaaaaaaaaaa
                <br />
                aaaaaaaaaaaaaaaaaaaaaaaaaaa
                <br />
                aaaaaaaaaaaaaaaaaaaaaaaaaaa
                <br />
                aaaaaaaaaaaaaaaaaaaaaaaaaaa
                <br />
                aaaaaaaaaaaaaaaaaaaaaaaaaaa
                <br />
                aaaaaaaaaaaaaaaaaaaaaaaaaaa
                <br />
                aaaaaaaaaaaaaaaaaaaaaaaaaaa
                <br />
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <img src="" alt="DEMO ECサイト" />
              <p>
                aaaaaaaaaaaaaaaaaaaaaaaaaaa
                <br />
                aaaaaaaaaaaaaaaaaaaaaaaaaaa
                <br />
                aaaaaaaaaaaaaaaaaaaaaaaaaaa
                <br />
                aaaaaaaaaaaaaaaaaaaaaaaaaaa
                <br />
                aaaaaaaaaaaaaaaaaaaaaaaaaaa
                <br />
                aaaaaaaaaaaaaaaaaaaaaaaaaaa
                <br />
                aaaaaaaaaaaaaaaaaaaaaaaaaaa
                <br />
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <img src="" alt="ToDoApp" />
              <p>
                aaaaaaaaaaaaaaaaaaaaaaaaaaa
                <br />
                aaaaaaaaaaaaaaaaaaaaaaaaaaa
                <br />
                aaaaaaaaaaaaaaaaaaaaaaaaaaa
                <br />
                aaaaaaaaaaaaaaaaaaaaaaaaaaa
                <br />
                aaaaaaaaaaaaaaaaaaaaaaaaaaa
                <br />
                aaaaaaaaaaaaaaaaaaaaaaaaaaa
                <br />
                aaaaaaaaaaaaaaaaaaaaaaaaaaa
                <br />
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <img src="" alt="etc" />
              <p>
                aaaaaaaaaaaaaaaaaaaaaaaaaaa
                <br />
                aaaaaaaaaaaaaaaaaaaaaaaaaaa
                <br />
                aaaaaaaaaaaaaaaaaaaaaaaaaaa
                <br />
                aaaaaaaaaaaaaaaaaaaaaaaaaaa
                <br />
                aaaaaaaaaaaaaaaaaaaaaaaaaaa
                <br />
                aaaaaaaaaaaaaaaaaaaaaaaaaaa
                <br />
                aaaaaaaaaaaaaaaaaaaaaaaaaaa
                <br />
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-center">
              <img src="" alt="etc" />
              <p>
                aaaaaaaaaaaaaaaaaaaaaaaaaaa
                <br />
                aaaaaaaaaaaaaaaaaaaaaaaaaaa
                <br />
                aaaaaaaaaaaaaaaaaaaaaaaaaaa
                <br />
                aaaaaaaaaaaaaaaaaaaaaaaaaaa
                <br />
                aaaaaaaaaaaaaaaaaaaaaaaaaaa
                <br />
                aaaaaaaaaaaaaaaaaaaaaaaaaaa
                <br />
                aaaaaaaaaaaaaaaaaaaaaaaaaaa
                <br />
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default Slide;
