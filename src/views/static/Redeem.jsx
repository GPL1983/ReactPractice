import React, { useState } from "react";
import ImageSlider from "../../components/slider/ImageSlider";

const Redeem = () => {
  const [redeemData, setRedeemData] = useState([
    {
      id: 1,
      imgUrl: "https://shopgatewayuat.giift.com/assets/stores/ABC/shopbanner/shop-banner.jpg",
    },
    {
      id: 2,
      imgUrl: "https://shopgatewayuat.giift.com/assets/stores/ABC/milesexchangebanner/milesexchange-banner.jpg",
    },
    {
      id: 3,
      imgUrl: "https://shopgatewayuat.giift.com/assets/stores/ABC/flightsbanner/flight-banner.jpg",
    },
  ]);
  return (
    <>
      This is redeem page
      <ImageSlider redeemSliderData={redeemData} />
    </>
  );
};

export default Redeem;
