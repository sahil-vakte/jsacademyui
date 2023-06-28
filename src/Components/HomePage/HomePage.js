import React from "react";
import "./HomePage.css";
// import HpImg from "../../Assets/hp.svg";
import HpImg from "../../Assets/asd.png";
import Animation from "../Animation/Animation";

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
            {/* <img src={HpImg} className="hp-img-tag" /> */}
            <Animation/>
          </div>
        </div>
        <div className="home-page-main-div-one">
          <h1 class="fade-in">"JS Academy aims to empower individuals with comprehensive Web Development skills, enabling them to thrive in the rapidly evolving web development industry"</h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
