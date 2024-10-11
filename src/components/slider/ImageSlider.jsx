import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper/modules";

const ImageSlider = ({ herosliderData, redeemSliderData }) => {
  const slides = herosliderData || redeemSliderData;
  console.log(herosliderData);
  console.log(redeemSliderData);

  return (
    <>
      <Swiper
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        spaceBetween={30}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
        }}
        modules={[Navigation]}
      >
        {slides.length > 0 &&
          slides.map((item) => {
            const { id, imgUrl } = item;
            return (
              <SwiperSlide key={id}>
                <img src={imgUrl} alt="" className="w-100" />
              </SwiperSlide>
            );
          })}

        <div className="swiper-button-prev">
          <img src="src/assets/images/icons/arrows/left-yellow-arrow-2.svg" alt="" />
        </div>
        <div className="swiper-button-next">
          <img src="src/assets/images/icons/arrows/right-yellow-arrow-2.svg" alt="" />
        </div>
      </Swiper>
    </>
  );
};

export default ImageSlider;
