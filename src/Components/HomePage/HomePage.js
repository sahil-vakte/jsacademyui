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
import UerThree from "../../Assets/Programmer-Illustration.png";
import CourseOne from "../../Assets/courseone.jpg";
import CourseTwo from "../../Assets/coursetwo.jpeg";
import CourseThree from "../../Assets/coursethree.jpg";
import CourseFour from "../../Assets/coursefour.jpg";
import JsOne from "../../Assets/jsone.png";
import JsTwo from "../../Assets/jstwo.png";
import JsThee from "../../Assets/jsthree.png";
import JsFour from "../../Assets/jsfour.png";
import JsFive from "../../Assets/jsfive.png";
import JsSix from "../../Assets/jssix.png";
import JsSeven from "../../Assets/jsseven.png";
import JsEight from "../../Assets/jseight.png";
import { Link } from "react-router-dom";

import { AiFillClockCircle } from "react-icons/ai";
import { ImBooks } from "react-icons/im";
import FAQ from "../FAQ/FAQ";
import Footer from "../Footer/Footer";

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
            <img src={UerThree} className="hp-img-tag" />
            {/* <Animation /> */}
            {/* <UerThree/> */}
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

        <div className="courses-flex-div">
          <div className="syllabus-card-main-div">
            <img
              src={CourseOne}
              className="sylla-bus-card-img"
            />
            <p className="course-type-p-tag">#TRENDING</p>
            <h1 className="course-type-h-tag">MERN Stack Development</h1>

            <div className="details-of-course-flex-in">
              <div className="details-deuarion-bg">
                <div>
                  <p>Duration</p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <AiFillClockCircle style={{ fill: "#11c8de" }} />
                    <h2> 6 Months</h2>
                  </div>
                </div>
              </div>

              <div className="details-deuarion-bg">
                <div>
                  <p>Case Studies</p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      justifyContent: "center",
                    }}
                  >
                    <ImBooks style={{ fill: "#11c8de" }} />
                    <h2> 10</h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="learn-more-div">
            <Link to="/syllabus">

              <button className="learn-more-div-btn">Learn More</button>
            </Link>
            </div>
          </div>
          <div className="syllabus-card-main-div">
            <img
              src={CourseTwo}
              className="sylla-bus-card-img"
            />
            <p className="course-type-p-tag">#POPULAR</p>
            <h1 className="course-type-h-tag">Python Full Stack Development</h1>

            <div className="details-of-course-flex-in">
              <div className="details-deuarion-bg">
                <div>
                  <p>Duration</p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <AiFillClockCircle style={{ fill: "#11c8de" }} />
                    <h2> 6 Months</h2>
                  </div>
                </div>
              </div>

              <div className="details-deuarion-bg">
                <div>
                  <p>Case Studies</p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      justifyContent: "center",
                    }}
                  >
                    <ImBooks style={{ fill: "#11c8de" }} />
                    <h2> 10</h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="learn-more-div">
              <button className="learn-more-div-btn">Learn More</button>
            </div>
          </div>
          <div className="syllabus-card-main-div">
            <img
              src={CourseThree}
              className="sylla-bus-card-img"
            />
            <p className="course-type-p-tag">#BESTINFUTURE</p>
            <h1 className="course-type-h-tag">Web Design + React JS</h1>

            <div className="details-of-course-flex-in">
              <div className="details-deuarion-bg">
                <div>
                  <p>Duration</p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <AiFillClockCircle style={{ fill: "#11c8de" }} />
                    <h2> 3 Months</h2>
                  </div>
                </div>
              </div>

              <div className="details-deuarion-bg">
                <div>
                  <p>Case Studies</p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      justifyContent: "center",
                    }}
                  >
                    <ImBooks style={{ fill: "#11c8de" }} />
                    <h2> 10</h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="learn-more-div">
              <button className="learn-more-div-btn">Learn More</button>
            </div>
          </div>
          <div className="syllabus-card-main-div">
            <img
              src={CourseFour}
              className="sylla-bus-card-img"
            />
            <p className="course-type-p-tag">#EVERGREEN</p>
            <h1 className="course-type-h-tag">React JS</h1>

            <div className="details-of-course-flex-in">
              <div className="details-deuarion-bg">
                <div>
                  <p>Duration</p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <AiFillClockCircle style={{ fill: "#11c8de" }} />
                    <h2> 2 Months</h2>
                  </div>
                </div>
              </div>

              <div className="details-deuarion-bg">
                <div>
                  <p>Case Studies</p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      justifyContent: "center",
                    }}
                  >
                    <ImBooks style={{ fill: "#11c8de" }} />
                    <h2> 10</h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="learn-more-div">
              <button className="learn-more-div-btn">Learn More</button>
            </div>
          </div>
        </div>

        <div className="home-page-main-div-one">
          <h1 class="fade-in">
            "JS Academy aims to empower individuals with comprehensive Web
            Development skills, enabling them to thrive in the rapidly evolving
            web development industry"
          </h1>
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

        <div className="why-js-div-main">
          <div className="why-js-div-main-flex">
            <div className="why-js-div-main-flex-one">
                <img className="why-js-svg" src={JsOne}/>
                <div className="why-js-svg-text-tags">
                    <h1>Learn From Home</h1>
                    <p>Stay Safe indoors</p>
                </div>
            </div>
            <div className="why-js-div-main-flex-one">
                <img className="why-js-svg" src={JsTwo}/>
                <div className="why-js-svg-text-tags">
                    <h1>Personal Doubt Clearing</h1>
                    <p>One to One Doubt Session</p>
                </div>
            </div>
            <div className="why-js-div-main-flex-one">
                <img className="why-js-svg" src={JsThee}/>
                <div className="why-js-svg-text-tags">
                    <h1>Beginner friendly</h1>
                    <p>No prior knowledge required</p>
                </div>
            </div>
            <div className="why-js-div-main-flex-one">
                <img className="why-js-svg" src={JsFour}/>
                <div className="why-js-svg-text-tags">
                    <h1>100+ Coding Problems</h1>
                    <p>Practice</p>
                </div>
            </div>
            <div className="why-js-div-main-flex-one">
                <img className="why-js-svg" src={JsFive}/>
                <div className="why-js-svg-text-tags">
                    <h1>Syllabus</h1>
                    <p>Syllabus is according to Industry requirement</p>
                </div>
            </div>
            <div className="why-js-div-main-flex-one">
                <img className="why-js-svg" src={JsSix}/>
                <div className="why-js-svg-text-tags">
                    <h1>Experienced Trainers</h1>
                    <p>Industry Working Experienced Trainers</p>
                </div>
            </div>
            <div className="why-js-div-main-flex-one">
                <img className="why-js-svg" src={JsSeven}/>
                <div className="why-js-svg-text-tags">
                    <h1>Test</h1>
                    <p>Weekly Practical & Mock Test</p>
                </div>
            </div>
            <div className="why-js-div-main-flex-one">
                <img className="why-js-svg" src={JsEight}/>
                <div className="why-js-svg-text-tags">
                    <h1>Certificates</h1>
                    <p>Individual Certificate for each Module</p>
                </div>
            </div>
          </div>
        </div>

        <div className="faq-main-div">
            <div className="faq-main-div-one">
              <h1>FAQ's</h1>
            </div>
          <FAQ/>
        </div>

        <div className="js-footer">
          {/* <Footer/> */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
