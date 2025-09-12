// App.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function swiping() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blacl">
      <div className="w-full max-w-4xl">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          className="rounded-xl overflow-hidden shadow-lg"
        >
          <SwiperSlide>
            <div className="w-full h-[400px] object-cover">
                <img src="" alt="" />
                <div></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[400px] object-cover">

            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[400px] object-cover">

            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
