import React from "react";
import { Link } from "react-router-dom";
const Card = ({ id, image, points, productType, title }) => {
  //console.log(props);

  return (
    <>
      <div className="col-sm-6 col-md-3 mb-3">
        <div className="dvProductCard bg-colour6">
          <div className="dvItem">
            {/* <Link className="anchor" to="">
              <div className="img-container">
                <img src={image} alt="" />
              </div>
              <h2 className="px-3 pt-3 pb-2">{title}</h2>
              <div className="d-flex flex-wrap justify-content-between px-3 pb-3">
                <p className="points">{points}</p>
                <p className="points">{productType}</p>
              </div>
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
