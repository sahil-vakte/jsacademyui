import React from "react";
import "./HomePage.css";
// import HpImg from "../../Assets/hp.svg";
import HpImg from "../../Assets/asd.png";
import Animation from "../Animation/Animation";
import ReactLogo from "../../Assets/react-seeklogo.com.svg";
import HtmlLogo from "../../Assets/html-5-svgrepo-com.svg";
import CssLogo from "../../Assets/css-3-logo-svgrepo-com.svg";
import JsLogo from "../../Assets/javascript-seeklogo.com.svg";
import NodeLogo from "../../Assets/nodejs-seeklogo.com.svg";
import MdLogo from "../../Assets/mongodb-logo-svgrepo-com.svg";
import pythonLogo from "../../Assets/python-seeklogo.com.svg";
import djangoLogo from "../../Assets/django-seeklogo.com.svg";

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
            <Animation />
          </div>
        </div>
        <div className="logo-s-flex-div">
          <img src={HtmlLogo} className="logo-svg-img" />
          <img src={CssLogo} className="logo-svg-img" />
          <img src={JsLogo} className="logo-svg-img" />
          <img src={ReactLogo} className="logo-svg-img" />
          <img src={NodeLogo} className="logo-svg-img" />
          <img src={MdLogo} className="logo-svg-img" />
          <img src={pythonLogo} className="logo-svg-img" />
          <img src={djangoLogo} className="logo-svg-img" />
        </div>
        <div className="home-page-main-div-one">
          <h1 class="fade-in">
            "JS Academy aims to empower individuals with comprehensive Web
            Development skills, enabling them to thrive in the rapidly evolving
            web development industry"
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
