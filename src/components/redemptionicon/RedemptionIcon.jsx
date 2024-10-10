import React from "react";
import { Link } from "react-router-dom";
const RedemptionIcon = (props) => {
  const { id, imgUrl, title } = props.list;
  //console.log(props);
  return (
    <>
      <div className="col-auto mb-md-3">
        <Link
          className="text-center d-flex flex-column align-items-center carrentalredemption redemptionoptions"
          to={`/${title}`}
        >
          <div className="d-flex flex-column align-items-center justify-content-center p-2 p-lg-2 p-xl-4 rounded-circle imageBox">
            <img src={imgUrl} />
          </div>
          <p className="mt-1" data-i18n="ABC-car-rental">
            {title}
          </p>
        </Link>
      </div>
    </>
  );
};

export default RedemptionIcon;
