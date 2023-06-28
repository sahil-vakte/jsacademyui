import React from "react";
import "./HomePage.css";
import HpImg from "../../Assets/hp.svg";

const HomePage = () => {
  return (
    <div className="home-page-flex-div">
      <div className="home-page-width-div">
        <div className="home-page-main-div">
          <div className="main-flex-div-one">
            <h1>
              Discover <br /> the professions <br /> of the future
            </h1>
            <p>
              Unlock the doors to the future job market and explore <br /> the
              most in-demand indeed
            </p>
          </div>
          <div className="main-flex-div-two">
            <img src={HpImg} className="hp-img-tag" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
