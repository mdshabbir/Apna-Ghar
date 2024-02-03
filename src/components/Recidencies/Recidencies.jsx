import React from "react";
import "./Recidencies.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../../utils/slider.json";
import { sliderSetting } from "../../utils/Common";
const Recidencies = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="flexColStart r-head">
          <span className="orangeText">Best Choice</span>
          <span className="primaryText">Popular Recidencies</span>
        </div>
        <Swiper {...sliderSetting}>
          <SliderButton />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={card.image} alt="home" />
                <span className="flexColStart secondaryText r-price">
                  <span style={{ color: "orange" }}>
                    $<span style={{ color: "black" }}>{card.price}</span>
                  </span>
                  <span className="primaryText">{card.name}</span>
                  <span>{card.detail}</span>
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Recidencies;
const SliderButton = () => {
  const swiper = useSwiper();
  return (
    <div className=" flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
