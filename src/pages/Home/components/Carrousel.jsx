import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../components/swiper.css";

export default function Carrousel() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            alt="img1"
            className="imgSwiper"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-2.jpg"
            alt=""
            className="imgSwiper"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-3.jpg"
            alt=""
            className="imgSwiper"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-4.jpg"
            alt=""
            className="imgSwiper"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-5.jpg"
            alt=""
            className="imgSwiper"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
