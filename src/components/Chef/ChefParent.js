import React from "react";
import Chef from "./Chef";
import RecipeComponent from "./RecipeComponent";

const ChefParent = ({ chefClicked }) => {
  return (
    <div>
      <Chef chefClicked={chefClicked} />
      <RecipeComponent />
    </div>
  );
};

export default ChefParent;
