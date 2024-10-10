import React, { useState } from "react";
import Slider from "../../../components/slider/Slider";
import { SwiperSlide } from "swiper/react";

const AboutUs = () => {
  const [aboutData, setAboutData] = useState([
    {
      id: 1,
      imgUrl: "http://206.1.13.152:7443/Images/homepage/rewards-that-cater-to-every-desire/flight-booking.jpg",
    },
    {
      id: 2,
      imgUrl: "http://206.1.13.152:7443/Images/homepage/rewards-that-cater-to-every-desire/hotel-booking.jpg",
    },
    {
      id: 3,
      imgUrl: "http://206.1.13.152:7443/Images/homepage/rewards-that-cater-to-every-desire/airport-lounge-booking.jpg",
    },
  ]);

  const options = {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
    },
    modules: [Navigation],
  };

  return (
    <>
      <Slider
        slides={aboutData.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <img src={item.imgUrl} alt="" />
            </SwiperSlide>
          );
        })}
      />

      <div className="dvBreadcrumbs">
        <div className="container-xl">
          <nav>
            <ul className="breadcrumb px-0 py-3">
              <li className="mr-3">
                <a href="\">
                  <img src="images/icons/arrows/back-arrow.svg" alt="" />
                </a>
              </li>
              <li className="breadcrumb-item">
                <a href="\">Home</a>
              </li>
              <li className="breadcrumb-item active">About Us</li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="dvAboutUs py-3">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <h2 className="heading1 mb-3">About the Infinity Rewards:</h2>
              <p className="mb-3">
                Infinity Rewards is ABC Banking Corporation’s most comprehensive rewards program, tailored to your
                needs. It gives you additional benefits and a rich experience every time you use the bank's products and
                services.
              </p>
              <p className="mb-3">
                In an effort to deliver the best, we designed the Infinity Rewards program to suit your lifestyle. Now,
                you can earn points for using our banking products. You can then replace the Infinity Rewards points
                by*:
              </p>
              <div className="dvCommonAccordion accordion mt-3" id="accordionExample">
                <div className="accordion-item card-header mb-3">
                  <h2 className="accordion-header">
                    <button
                      className="h6 btn btn-block text-left p-3 heading-semibold accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Airlines
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body ">
                      <ul>
                        <li className="mx-3">
                          <strong>No Limitations:</strong> With Infinity Rewards, you won't be restricted to one airline
                          or one departure point. Redeem your tickets online and directly from more than 900 airlines
                          around the world, including low-cost carriers such as flydubai, Air Arabia, Ryanair, and more.
                        </li>
                        <li className="mx-3">
                          <strong>No Blocked Dates:</strong> There are no dates where reservations are not allowed. You
                          can book and travel on any date you choose.
                        </li>
                        <li className="mx-3">
                          <strong>No Restrictions:</strong> Whether you're in any city, you can redeem your bank reward
                          points for a flight ticket, such as from London to Paris, for yourself, your family, or
                          friends. The flexibility allows you to book tickets without limitations, making travel more
                          convenient and rewarding.
                        </li>
                        <li className="mx-3">
                          <strong>Convenience:</strong> Easily register and book from the comfort of your home or
                          office.
                        </li>
                        <li className="mx-3">
                          <strong>Double Benefits:</strong> Earn extra miles through airline programs while using your
                          Infinity Rewards points to book tickets, maximizing your rewards.
                        </li>
                        <li className="mx-3">
                          <strong>Global Hotel Options:</strong> Choose from over 450,000 hotels worldwide for your
                          stay.
                        </li>
                        <li className="mx-3">
                          <strong>Instant Booking:</strong> Secure your travel plans immediately with just the touch of
                          a button.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item card-header mb-3">
                  <h2 className="accordion-header">
                    <button
                      className="h6 btn btn-block text-left p-3 heading-semibold accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Car Rental Companies
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <ul>
                        <li className="mx-3">
                          <strong>Global Car Rental Access:</strong> Choose from over 150,000 car rental partners
                          worldwide for your convenience.
                        </li>
                        <li className="mx-3">
                          <strong>Instant Booking & Confirmation:</strong> Secure your rental car with immediate booking
                          and confirmation for a hassle-free experience.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item card-header mb-3">
                  <h2 className="accordion-header">
                    <button
                      className="h6 btn btn-block text-left p-3 heading-semibold accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Online Store
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <ul>
                        <li className="mx-3">
                          <strong>Wide Product Selection:</strong> Access thousands of products and appliances through
                          the online store, including electronics, books, sports equipment, and household items.
                        </li>
                        <li className="mx-3">
                          <strong>Instant Booking & Confirmation:</strong> Enjoy immediate booking and confirmation for
                          a seamless shopping experience.
                        </li>
                        <li className="mx-3">
                          <strong>24/7 Online Shopping:</strong> Browse and purchase products at any time, from
                          anywhere.
                        </li>
                        <li className="mx-3">
                          <strong>Top International Brands:</strong> Choose from renowned global brands such as Apple,
                          Sony, Samsung, Toshiba, and more.
                        </li>
                        <li className="mx-3">
                          <strong>Home Delivery:</strong> Have your purchases delivered directly to your home, anywhere
                          in Mauritius.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
