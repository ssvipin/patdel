import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import img1 from "../media/woman-cooking-kitchen.jpg";
import img2 from "../media/woman-chef-cooking-vegetables-pan.jpg";
import img3 from "../media/woman-cooking-kitchen (1).jpg";
const HomePageSlider = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={6000}
      animation="foldOutAnimation"
      style={{
        height: "83%",
      }}
    >
      <div data-src={img1} style={{}} />
      <div data-src={img2} style={{}} />
      <div data-src={img3} style={{}} />
    </AutoplaySlider>
  );
};

export default HomePageSlider;
