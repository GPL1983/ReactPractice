import React from "react";

const BtnOne = ({ btnText }) => {
  console.log(btnText);

  return (
    <>
      <button className="btn btn-one">{btnText}</button>
    </>
  );
};

export default BtnOne;
