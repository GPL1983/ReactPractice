import React, { useEffect, useState } from "react";
import RedemptionIcon from "../../../components/redemptionicon/RedemptionIcon";
import Loading from "../../../components/loading/Loading";
import Error from "../../../components/error/Error";

const API_URL =
  "https://api.json-generator.com/templates/RNqjZjdIC2Ww/data?access_token=d856z9qo34fypzuxthew972od7yzyaii27aa1ujt";
const RedemptionMenu = () => {
  // const redemptionmenu = [
  //   {
  //     id: 1,
  //     imgUrl:
  //       "https://shopgatewayuat.giift.com/assets/catalog/7708d/ca533/icon-car-red.svg",
  //     title: "Car",
  //   },
  //   {
  //     id: 2,
  //     imgUrl:
  //       "https://shopgatewayuat.giift.com/assets/catalog/7708d/8c413/experiences.svg",
  //     title: "Experiences",
  //   },
  //   {
  //     id: 3,
  //     imgUrl:
  //       "https://shopgatewayuat.giift.com/assets/catalog/7708d/b6d9b/flight.svg",
  //     title: "Flights",
  //   },
  //   {
  //     id: 4,
  //     imgUrl:
  //       "https://shopgatewayuat.giift.com/assets/catalog/7708d/4820b/voucher-global.svg",
  //     title: "Global Gift Voucher",
  //   },
  //   {
  //     id: 5,
  //     imgUrl:
  //       "https://shopgatewayuat.giift.com/assets/catalog/7708d/cb268/hotels.svg",
  //     title: "Hotels",
  //   },
  //   {
  //     id: 6,
  //     imgUrl:
  //       "https://shopgatewayuat.giift.com/assets/catalog/7708d/92bc7/airport-lounge.svg",
  //     title: "Lounges",
  //   },
  //   {
  //     id: 7,
  //     imgUrl:
  //       "https://shopgatewayuat.giift.com/assets/catalog/7708d/f8a7f/miles-exchange.svg",
  //     title: "Miles Exchange",
  //   },
  //   {
  //     id: 8,
  //     imgUrl:
  //       "https://shopgatewayuat.giift.com/assets/catalog/7708d/9531e/shop.svg",
  //     title: "Shop",
  //   },
  // ];

  // const [redemptionmenu, setRedemptionmenu] = useState([
  //   {
  //     id: 1,
  //     imgUrl:
  //       "https://shopgatewayuat.giift.com/assets/catalog/7708d/ca533/icon-car-red.svg",
  //     title: "Car",
  //   },
  //   {
  //     id: 2,
  //     imgUrl:
  //       "https://shopgatewayuat.giift.com/assets/catalog/7708d/8c413/experiences.svg",
  //     title: "Experiences",
  //   },
  //   {
  //     id: 3,
  //     imgUrl:
  //       "https://shopgatewayuat.giift.com/assets/catalog/7708d/b6d9b/flight.svg",
  //     title: "Flights",
  //   },
  //   {
  //     id: 4,
  //     imgUrl:
  //       "https://shopgatewayuat.giift.com/assets/catalog/7708d/4820b/voucher-global.svg",
  //     title: "Global Gift Voucher",
  //   },
  //   {
  //     id: 5,
  //     imgUrl:
  //       "https://shopgatewayuat.giift.com/assets/catalog/7708d/cb268/hotels.svg",
  //     title: "Hotels",
  //   },
  //   {
  //     id: 6,
  //     imgUrl:
  //       "https://shopgatewayuat.giift.com/assets/catalog/7708d/92bc7/airport-lounge.svg",
  //     title: "Lounges",
  //   },
  //   {
  //     id: 7,
  //     imgUrl:
  //       "https://shopgatewayuat.giift.com/assets/catalog/7708d/f8a7f/miles-exchange.svg",
  //     title: "Miles Exchange",
  //   },
  //   {
  //     id: 8,
  //     imgUrl:
  //       "https://shopgatewayuat.giift.com/assets/catalog/7708d/9531e/shop.svg",
  //     title: "Shop",
  //   },
  // ]);

  const [apiData, setApiData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchMyApi();
  }, []);

  const fetchMyApi = async () => {
    setIsLoading(true);
    setIsError(false);
    const response = await fetch(API_URL);
    if (response.ok) {
      const json = await response.json();
      setIsLoading(false);
      setIsError(false);
      setApiData(json);
      return json;
    } else {
      console.log("Response Not Found");
      setIsLoading(false);
      setIsError(true);
    }

    // console.log(json);
  };
  //console.log(apiData);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }
  return (
    <>
      <div className="dvRedemptionMenu dvVcData">
        <div className="container-fluid">
          <div className="row justify-content-md-center flex-nowrap flex-md-wrap scroll-hoz py-4 pt-md-5 pb-md-3">
            {apiData.length > 0 &&
              apiData.map((item) => {
                return <RedemptionIcon key={item.id} list={item} />;
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default RedemptionMenu;
