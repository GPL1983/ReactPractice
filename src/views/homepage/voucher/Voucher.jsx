import React, { useEffect, useState } from "react";
import "./voucher.css";
import Loading from "../../../components/loading/Loading";
import Error from "../../../components/error/Error";
import Slider from "../../../components/slider/Slider";
import { SwiperSlide } from "swiper/react";

const voucher_API =
  "https://api.json-generator.com/templates/BNTd-qobcWSb/data?access_token=d856z9qo34fypzuxthew972od7yzyaii27aa1ujt";
function Voucher() {
  const [voucherData, setVoucherData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchVoucherApi();
  }, []); //dependency array

  const fetchVoucherApi = async () => {
    setIsLoading(true);
    setIsError(false);
    const response = await fetch(voucher_API);
    if (response.ok) {
      const data = await response.json();
      setIsLoading(false);
      setIsError(false);
      setVoucherData(data);
      // console.log(response);
      // console.log(data);
      return data;
    } else {
      setIsError(true);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error />;
  }
  console.log(voucherData);

  const options = {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
    },
    modules: [Navigation],
  };

  return (
    <>
      <div className="dvVouchers py-5">
        <div className="container-xl">
          <div className="row">
            <div className="col-12 text-center mb-4">
              <h2 className="heading1 text-colour6 mb-3">Most Featured Vouchers</h2>
              <p className="text-colour6">
                Choose from over 5,000+ gift vouchers in our expansive Loyalty Program selection.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="dvVoucherSlider dvVcData">
              {/* <Slider voucherData={voucherData} /> */}

              <Slider
                slides={voucherData.map((item) => {
                  return (
                    <SwiperSlide key={item.id}>
                      <img src={item.image} alt="" />
                      <h2>{item.title}</h2>
                      <p>{item.points}</p>
                      <p>{item.productType}</p>
                    </SwiperSlide>
                  );
                })}
              />
            </div>
          </div>

          <div className="d-flex justify-content-start align-items-center mt-4">
            <a href="" className="btn btn-two">
              View All
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Voucher;
