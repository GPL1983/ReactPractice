import React from "react";

const Icon = () => {
  return (
    <>
      <div className="col-auto mb-md-3">
        <a
          className="text-center d-flex flex-column align-items-center carrentalredemption redemptionoptions"
          href="CarSearch.aspx"
        >
          <div className="d-flex flex-column align-items-center justify-content-center p-2 p-lg-2 p-xl-4 rounded-circle imageBox">
            <img src="https://shopgatewayuat.giift.com/assets/catalog/7708d/b6d9b/flight.svg" />
          </div>
          <p className="mt-1" data-i18n="ABC-car-rental">
            Flights
          </p>
        </a>
      </div>
    </>
  );
};

export default Icon;
