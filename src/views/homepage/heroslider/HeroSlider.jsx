import React, { useEffect, useState } from "react";
import Loading from "../../../components/loading/Loading";
import Error from "../../../components/error/Error";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules

const API =
  "https://api.json-generator.com/templates/EOozBYd9hqoI/data?access_token=z9d20el9k5dh128qyqynaxrjznw9p1ynagsjlyow";

import { Navigation } from "swiper/modules";
import ImageSlider from "../../../components/slider/ImageSlider";

const HeroSlider = () => {
  const options = {
    loop: false,
    speed: 500,
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
    },
    modules: [Navigation],
  };

  const [heroSliderData, setHeroSliderData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fethHeroSlider();
  }, []);

  const fethHeroSlider = async () => {
    setIsLoading(true);
    setIsError(false);
    const response = await fetch(API);
    if (response.ok) {
      setIsLoading(false);
      setIsError(false);
      const data = await response.json();
      setHeroSliderData(data.heroSliderApi);
      return data;
    } else {
      setIsError(true);
      setIsLoading(false);
    }
  };
  // console.log(heroSliderData);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <>
      {/* {heroSliderData.length > 0 &&
        heroSliderData.map((slider) => {
          return <ImageSlider key={slider.id} {...slider} />;
        })} */}
      <ImageSlider herosliderData={heroSliderData} />
      {/* <Swiper {...options}>
        <SwiperSlide>
          <img src="src/assets/images/homepage/homepage-banner1.jpg" alt="" className="w-100" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/assets/images/homepage/homepage-banner2.jpg" alt="" className="w-100" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="src/assets/images/homepage/homepage-banner3.jpg" alt="" className="w-100" />
        </SwiperSlide>
        <div className="swiper-button-prev">
          <img src="src/assets/images/icons/arrows/left-yellow-arrow-2.svg" alt="" />
        </div>
        <div className="swiper-button-next">
          <img src="src/assets/images/icons/arrows/right-yellow-arrow-2.svg" alt="" />
        </div>
      </Swiper> */}
    </>
  );
};

export default HeroSlider;
