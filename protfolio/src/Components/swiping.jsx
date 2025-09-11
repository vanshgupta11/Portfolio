// App.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function swiping() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
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
            <img
              src="https://picsum.photos/id/1015/800/400"
              alt="Slide 1"
              className="w-full h-[400px] object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://picsum.photos/id/1016/800/400"
              alt="Slide 2"
              className="w-full h-[400px] object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://picsum.photos/id/1018/800/400"
              alt="Slide 3"
              className="w-full h-[400px] object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
