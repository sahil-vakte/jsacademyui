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
import UerOne from "../../Assets/doctor-hp-one.png";
import UerTwo from "../../Assets/doctor-hp-two.png";

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

        <div>
          
        </div>

        <div className="details-flex-div-main">
          <div>
            <img src={UerOne} className="details-img-one" />
          </div>
          <div className="details-div">
            <h1>
              Transform your passion for coding into a thriving career with JS
              Academy. Our industry-aligned training programs equip you with the
              in-demand skills of the Software Development, empowering you to
              create innovative web applications and stand out in today's
              competitive job market.
            </h1>
            {/* <h1>Unlock your potential in web development with JS Academy's comprehensive Web Development training. Gain hands-on experience, practical skills, and industry-recognized certifications for a successful career in the dynamic world of web development.</h1> */}
          </div>
        </div>
        <div className="details-flex-div-main">
          <div className="details-div">
            <h1>
              Empower yourself with the latest web development technologies.
              Join JS Academy and learn from expert instructors, build
              real-world projects, and access a supportive community. Take the
              leap towards becoming a skilled Software Developer and shape the
              future of the web.
            </h1>
          </div>
          <div>
            <img src={UerTwo} className="details-img-one" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
