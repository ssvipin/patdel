import React, { useState } from "react";
import HomePageSlider from "../HomePageSlider";
import SubAbout from "./SubAbout";
import ChefCards from "./ChefCards";
import Pricing from "./Pricing";
import ContactForm from "./ContactForm";
import ContactUs from "./ContactUs";
import "./index.css";
import Chef from "../Chef/Chef";
import ChefParent from "../Chef/ChefParent";
const Index = ({ setUpdateCounter, updateCounter }) => {
  const [chefClicked, setChefClicked] = useState([]);
  console.log("vipin", chefClicked);
  return (
    <div>
      {chefClicked?.length > 0 ? (
        <div>
          <ChefParent
            chefClicked={chefClicked}
            setUpdateCounter={setUpdateCounter}
            updateCounter={updateCounter}
          />
          {/* <Chef chefClicked={chefClicked} /> */}
        </div>
      ) : (
        <div>
          <HomePageSlider />
          <SubAbout />
          <ChefCards setChefClicked={setChefClicked} />
          <Pricing />
          <ContactUs />
        </div>
      )}
    </div>
  );
};

export default Index;
