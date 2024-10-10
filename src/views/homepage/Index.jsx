import React from "react";
import HeroSlider from "./heroslider/HeroSlider";
import RedemptionMenu from "./redemptionmenu/RedemptionMenu";
import TurnTransaction from "./turntransaction/TurnTransaction";
import RedemptionBlock from "./redemptionsblock/RedemptionBlock";
import Voucher from "./voucher/Voucher";
import Rewards from "./rewards/Rewards";
import Slider from "../../components/slider/Slider";

const Index = () => {
  return (
    <>
      <HeroSlider />
      <RedemptionMenu />
      <TurnTransaction />
      <RedemptionBlock />
      <Voucher />
      <Rewards />
    </>
  );
};

export default Index;
