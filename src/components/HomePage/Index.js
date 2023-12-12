import React from "react";
import HomePageSlider from "../HomePageSlider";
import SubAbout from "./SubAbout";
import ChefCards from "./ChefCards";
import Pricing from "./Pricing";
import ContactForm from "./ContactForm";
import ContactUs from "./ContactUs";
import "./index.css";
const Index = () => {
  return (
    <div>
      <HomePageSlider />
      <SubAbout />
      <ChefCards />
      <Pricing />
      <ContactUs />
    </div>
  );
};

export default Index;
