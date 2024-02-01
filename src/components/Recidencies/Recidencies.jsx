import React from "react";
import "./Recidencies.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../../utils/slider.json";
const Recidencies = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="flexColStart r-head">
          <span className="orangeText">Best Choice</span>
          <span className="primaryText">Popular Recidencies</span>
        </div>
      </div>
    </section>
  );
};

export default Recidencies;
