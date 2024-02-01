import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings flexCenter innerWidth hero-container ">
        {/* Hero Left */}
        <div className=" flexColStart hero-lef">
          <div className="hero-title">
            <div className="orange-circle" />

            <h1>
              Discover <br /> Most Suitable <br /> Property
            </h1>
          </div>
          <div className="flexColStart hero-des">
            <span className="SecondryText">
              Find a variety of properties that suit you very easilty
            </span>
            <span className="SecondryText">
              Forget all difficulties in finding a residence for you
            </span>
          </div>
          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>

              <span className="SecondryText">Premium Product</span>
            </div>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>

              <span className="SecondryText">Happy Customer</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} duration={4} />
                <span>+</span>
              </span>

              <span className="SecondryText">Award Win</span>
            </div>
          </div>
        </div>
        {/* Hero right */}
        <div className="hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
