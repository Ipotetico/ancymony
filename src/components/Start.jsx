import React from "react";
import Spline from "@splinetool/react-spline";

const Start = ({ setPage }) => {
  return (
    <>
      <div className="background">
        <img
          className="paper"
          src={process.env.PUBLIC_URL + `/images/paper.jpg`}
          alt=""
        />
      </div>

      <div className="chest" onClick={() => setPage(2)}>
        <Spline scene="https://prod.spline.design/3qamKRo4xMoz-Cb8/scene.splinecode" />
      </div>
    </>
  );
};

export default Start;
