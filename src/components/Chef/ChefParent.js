import React from "react";
import Chef from "./Chef";
import RecipeComponent from "./RecipeComponent";

const ChefParent = ({ chefClicked, setUpdateCounter, updateCounter }) => {
  return (
    <div>
      <Chef chefClicked={chefClicked} />
      <RecipeComponent
        setUpdateCounter={setUpdateCounter}
        updateCounter={updateCounter}
      />
    </div>
  );
};

export default ChefParent;
