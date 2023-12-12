import React from "react";
import HomePageSlider from "../HomePageSlider";
import SubAbout from "./SubAbout";
import ChefCards from "./ChefCards";
import Pricing from "./Pricing";

const Index = () => {
  return (
    <div>
      <HomePageSlider />
      <SubAbout />
      <ChefCards />
      <Pricing />
    </div>
  );
};

export default Index;
