import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper/modules";

function Slider({ slides, options }) {
  console.log(options);
  return (
    <>
      <Swiper {...options}>{...slides}</Swiper>
      {/* <Swiper
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        spaceBetween={30}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
        modules={[Navigation]}
      >
        {voucherData.length > 0 &&
          voucherData.map((item) => {
            const { id, image, points, productType, title } = item;
            return (
              <SwiperSlide key={id}>
                <div className="dvProductCard bg-colour6">
                  <div className="dvItem">
                    <Link className="anchor" to="">
                      <div className="img-container">
                        <img src={image} alt={image} />
                      </div>
                      <h2 className="px-3 pt-3 pb-2">{title}</h2>
                      <div className="d-flex flex-wrap justify-content-between px-3 pb-3">
                        <p className="points">{points}</p>
                        <p className="points">{productType}</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}

        <div className="swiper-button-prev">
          <img src="src/assets/images/icons/arrows/left-yellow-arrow-2.svg" alt="" />
        </div>
        <div className="swiper-button-next">
          <img src="src/assets/images/icons/arrows/right-yellow-arrow-2.svg" alt="" />
        </div>
      </Swiper> */}
    </>
  );
}

export default Slider;
