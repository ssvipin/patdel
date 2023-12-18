import React, { useState } from "react";
import { IoToggleSharp } from "react-icons/io5";
import { MdOutlineToggleOff } from "react-icons/md";
import { CiSaveDown2 } from "react-icons/ci";
import { AiOutlineLike } from "react-icons/ai";
import img2 from "../../media/baked-meatballs-chicken-fillet-tomato-sauce.jpg";
import img from "../../media/Chef-character-design-premium-vector-PNG.png";
const RecipeComponent = ({ setUpdateCounter, updateCounter }) => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isVideo, setIsVideo] = useState(false);
  const saveToLocaleStorage = () => {
    console.log("vips");
    let allData = [];
    let allRecipe = localStorage.getItem("recipe")
      ? JSON.parse(localStorage.getItem("recipe"))
      : null;
    let data = recipes?.filter((data) => {
      if (data.id === selectedRecipe) {
        return data;
      }
    });
    let isPresent = allRecipe?.filter((recipe) => {
      if (recipe.id === selectedRecipe) {
        return data;
      }
    });
    console.log(isPresent);
    if (isPresent?.length > 0) {
      allData = [...allRecipe];
    } else if (allRecipe) {
      allData = [...allRecipe, ...data];
    } else {
      allData = [...data];
    }
    console.log("vipin", data, allData, allRecipe, typeof 1);
    localStorage?.setItem("recipe", JSON.stringify(allData));
    // setUpdateCounter(updateCounter + 1);
  };
  const recipes = [
    {
      id: 1,
      title: "Dum Aloo",
      description:
        "Dum Aloo is a delicious Indian curry made with baby potatoes.",
      ingredients: [
        "Baby Potatoes (500g)",
        "Oil (3-4 tablespoons)",
        "Cumin Seeds (1 teaspoon)",
        "Asafoetida (a pinch)",
        "Bay Leaf (1)",
        "Cloves (2-3)",
        "Cinnamon Stick (1 inch)",
        "Black Cardamom (1)",
        "Green Cardamom (2-3)",
        "Turmeric Powder (1/2 teaspoon)",
        "Red Chili Powder (1 teaspoon)",
        "Coriander Powder (1 teaspoon)",
        "Garam Masala (1/2 teaspoon)",
        "Salt (to taste)",
        "Yogurt/Curd (1/2 cup)",
        "Tomato Puree (1/2 cup)",
        "Ginger-Garlic Paste (1 tablespoon)",
        "Cashew Paste (optional, for creaminess)",
        "Fresh Cream (optional, for garnish)",
        "Chopped Coriander Leaves (for garnish)",
      ],
      instructions: {
        "Boil the Potatoes":
          "Wash the baby potatoes thoroughly. Prick them with a fork and boil them until they are parboiled. Drain, peel, and set aside.",

        "Prepare the Gravy":
          "Heat oil in a pan. Add cumin seeds, asafoetida, bay leaf, cloves, cinnamon stick, black cardamom, and green cardamom. Sauté until fragrant\
Add ginger-garlic paste and sauté for a minute.\
Add tomato puree, turmeric powder, red chili powder, coriander powder, garam masala, and salt. Cook the spices until the oil starts separating from the masala.\
Add yogurt/curd and mix well. Cook for a few minutes on low heat.",
        "Add Potatoes":
          "Add the boiled baby potatoes to the gravy. Stir gently to coat the potatoes with the masala.\
Cover the pan with a lid and cook on low heat for about 15-20 minutes, allowing the flavors to infuse.",
        "Optional Creamy Touch":
          "To make the gravy creamier, you can add a paste of cashews or a bit of fresh cream towards the end of cooking.",
        "Garnish and Serve":
          "Once the potatoes are cooked through and the gravy reaches the desired consistency, garnish with chopped coriander leaves.\
Serve Dum Aloo hot with roti, naan, or rice.",
      },
    },
    {
      id: 2,
      title: "Dum Aloo",
      description:
        "Dum Aloo is a delicious Indian curry made with baby potatoes.",
      ingredients: [
        "Baby Potatoes (500g)",
        "Oil (3-4 tablespoons)",
        "Cumin Seeds (1 teaspoon)",
        "Asafoetida (a pinch)",
        "Bay Leaf (1)",
        "Cloves (2-3)",
        "Cinnamon Stick (1 inch)",
        "Black Cardamom (1)",
        "Green Cardamom (2-3)",
        "Turmeric Powder (1/2 teaspoon)",
        "Red Chili Powder (1 teaspoon)",
        "Coriander Powder (1 teaspoon)",
        "Garam Masala (1/2 teaspoon)",
        "Salt (to taste)",
        "Yogurt/Curd (1/2 cup)",
        "Tomato Puree (1/2 cup)",
        "Ginger-Garlic Paste (1 tablespoon)",
        "Cashew Paste (optional, for creaminess)",
        "Fresh Cream (optional, for garnish)",
        "Chopped Coriander Leaves (for garnish)",
      ],
      instructions: {
        "Boil the Potatoes":
          "Wash the baby potatoes thoroughly. Prick them with a fork and boil them until they are parboiled. Drain, peel, and set aside.",

        "Prepare the Gravy":
          "Heat oil in a pan. Add cumin seeds, asafoetida, bay leaf, cloves, cinnamon stick, black cardamom, and green cardamom. Sauté until fragrant\
Add ginger-garlic paste and sauté for a minute.\
Add tomato puree, turmeric powder, red chili powder, coriander powder, garam masala, and salt. Cook the spices until the oil starts separating from the masala.\
Add yogurt/curd and mix well. Cook for a few minutes on low heat.",
        "Add Potatoes":
          "Add the boiled baby potatoes to the gravy. Stir gently to coat the potatoes with the masala.\
Cover the pan with a lid and cook on low heat for about 15-20 minutes, allowing the flavors to infuse.",
        "Optional Creamy Touch":
          "To make the gravy creamier, you can add a paste of cashews or a bit of fresh cream towards the end of cooking.",
        "Garnish and Serve":
          "Once the potatoes are cooked through and the gravy reaches the desired consistency, garnish with chopped coriander leaves.\
Serve Dum Aloo hot with roti, naan, or rice.",
      },
    },
    {
      id: 3,
      title: "Dum Aloo",
      description:
        "Dum Aloo is a delicious Indian curry made with baby potatoes.",
      ingredients: [
        "Baby Potatoes (500g)",
        "Oil (3-4 tablespoons)",
        "Cumin Seeds (1 teaspoon)",
        "Asafoetida (a pinch)",
        "Bay Leaf (1)",
        "Cloves (2-3)",
        "Cinnamon Stick (1 inch)",
        "Black Cardamom (1)",
        "Green Cardamom (2-3)",
        "Turmeric Powder (1/2 teaspoon)",
        "Red Chili Powder (1 teaspoon)",
        "Coriander Powder (1 teaspoon)",
        "Garam Masala (1/2 teaspoon)",
        "Salt (to taste)",
        "Yogurt/Curd (1/2 cup)",
        "Tomato Puree (1/2 cup)",
        "Ginger-Garlic Paste (1 tablespoon)",
        "Cashew Paste (optional, for creaminess)",
        "Fresh Cream (optional, for garnish)",
        "Chopped Coriander Leaves (for garnish)",
      ],
      instructions: {
        "Boil the Potatoes":
          "Wash the baby potatoes thoroughly. Prick them with a fork and boil them until they are parboiled. Drain, peel, and set aside.",

        "Prepare the Gravy":
          "Heat oil in a pan. Add cumin seeds, asafoetida, bay leaf, cloves, cinnamon stick, black cardamom, and green cardamom. Sauté until fragrant\
Add ginger-garlic paste and sauté for a minute.\
Add tomato puree, turmeric powder, red chili powder, coriander powder, garam masala, and salt. Cook the spices until the oil starts separating from the masala.\
Add yogurt/curd and mix well. Cook for a few minutes on low heat.",
        "Add Potatoes":
          "Add the boiled baby potatoes to the gravy. Stir gently to coat the potatoes with the masala.\
Cover the pan with a lid and cook on low heat for about 15-20 minutes, allowing the flavors to infuse.",
        "Optional Creamy Touch":
          "To make the gravy creamier, you can add a paste of cashews or a bit of fresh cream towards the end of cooking.",
        "Garnish and Serve":
          "Once the potatoes are cooked through and the gravy reaches the desired consistency, garnish with chopped coriander leaves.\
Serve Dum Aloo hot with roti, naan, or rice.",
      },
    },
  ];

  const handleRecipeClick = (recipeId) => {
    setSelectedRecipe(recipeId === null ? null : recipeId);
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        // border: "1px solid red",
        padding: "12px 16px",
        background: "#333333",
      }}
    >
      <div
        style={{
          //  border: "1px solid red",
          padding: "12px 16px",
        }}
      >
        <h2
          style={{
            // border: "1px solid red",
            textAlign: "center",
            color: "#fff",
          }}
        >
          Recipes
        </h2>
        <p
          style={{
            marginTop: "20px",
            // border: "1px solid red",
            textAlign: "center",
            color: "#fff",
          }}
        >
          Welcome to the world of culinary excellence curated by Chef Vipin
          Kumar. Indulge in the exquisite blend of flavors and aromas, a
          signature welcome crafted by Vipin Kumar himself. Elevate your dining
          experience with this gastronomic delight, promising a symphony of
          taste in every welcome.
        </p>
      </div>
      <div
        style={{
          // border: "1px solid red",
          padding: "20px",
          display: "flex",
          gap: "20px",
          background: "#fff",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            // justifyContent: "space-around",
            border: "1px solid red",
            width: "30%",
            flexDirection: "column",
            height: "400px",
            // flex: "1",
            background: "#f2f2f2",

            // backgroundColor: "#f5f5f5",
            padding: "20px",
            // borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)",
            margin: "10px",
            overflowY: "scroll",
          }}
        >
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              style={{
                border: "1px solid red",
                padding: "10px",
                margin: "10px",
                cursor: "pointer",
                backgroundColor:
                  selectedRecipe === recipe.id ? "#f0f0f0" : "transparent",
              }}
              onClick={() => handleRecipeClick(recipe.id)}
            >
              <h3 style={{ margin: "0" }}>{recipe.title}</h3>
            </div>
          ))}
        </div>
        {selectedRecipe ? (
          isVideo ? (
            <div
              style={{
                border: "1px solid red",
                marginTop: "10px",
                // padding: "70px 0 0 0",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)",
                background: "#f2f2f2",
                width: "70%",
              }}
            >
              <div
                style={{
                  // border: "1px solid red",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  width: "100%",
                  gap: "10px",
                  padding: "0px 24px",
                  height: "10%",
                  margin: "10px 0",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "white",
                    borderRadius: "50%",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onClick={() => {
                    setIsVideo((prevState) => !prevState);
                  }}
                >
                  {isVideo ? <IoToggleSharp /> : <MdOutlineToggleOff />}
                </div>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "white",
                    borderRadius: "50%",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onClick={() => {
                    saveToLocaleStorage();
                  }}
                >
                  <CiSaveDown2 />
                </div>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "white",
                    borderRadius: "50%",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <AiOutlineLike />
                </div>
                <img
                  src={img}
                  style={{
                    width: "40px",
                    background: "white",
                    borderRadius: "50%",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)",
                    border: "2px solid green",
                  }}
                />
              </div>
              <iframe
                width="100%"
                height="85%"
                src="https://www.youtube.com/embed/D15omq3LysY"
                title="कुकर वाले आसान दम आलू | Easy Cooker Dum Aloo | 5 mins recipe | Chef Ranveer Brar"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          ) : (
            <div
              style={{
                // border: "1px solid red",
                padding: "20px",
                height: "400px",
                overflowY: "scroll",
                background: "#f2f2f2",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)",
                marginTop: "10px",
                width: "70%",
              }}
            >
              {recipes.map((recipe) => {
                if (selectedRecipe === recipe.id) {
                  return (
                    <div
                      key={recipe.id}
                      style={{
                        // border: "1px solid #ccc",
                        // padding: "10px",
                        // margin: "10px",
                        cursor: "pointer",
                      }}
                      onClick={() => handleRecipeClick(recipe.id)}
                    >
                      <div
                        style={{
                          // border: "1px solid red",
                          display: "flex",
                          gap: "10%",
                          // alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            // border: "1px solid red",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "40%",
                          }}
                        >
                          <h1
                            style={{
                              // border: "1px solid red",
                              width: "100%",
                              margin: "0",
                              textAlign: "center",
                            }}
                          >
                            {recipe.title}
                          </h1>
                        </div>
                        <div
                          style={{
                            // border: "1px solid red",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            width: "50%",
                            gap: "10px",
                            padding: "0 24px",
                          }}
                        >
                          <div
                            style={{
                              width: "40px",
                              height: "40px",
                              background: "white",
                              borderRadius: "50%",
                              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                            onClick={() => {
                              setIsVideo((prevState) => !prevState);
                            }}
                          >
                            {isVideo ? (
                              <IoToggleSharp />
                            ) : (
                              <MdOutlineToggleOff />
                            )}
                          </div>
                          <div
                            style={{
                              width: "40px",
                              height: "40px",
                              background: "white",
                              borderRadius: "50%",
                              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                            onClick={() => {
                              saveToLocaleStorage();
                            }}
                          >
                            <CiSaveDown2 />
                          </div>
                          <div
                            style={{
                              width: "40px",
                              height: "40px",
                              background: "white",
                              borderRadius: "50%",
                              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <AiOutlineLike />
                          </div>
                          <img
                            src={img}
                            style={{
                              width: "40px",
                              background: "white",
                              borderRadius: "50%",
                              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)",
                              border: "2px solid green",
                            }}
                          />
                        </div>
                      </div>
                      <p>{recipe.description}</p>
                      <div className="ingredients-container">
                        <h2>Recipe Ingredients</h2>
                        <ul className="ingredients-list">
                          {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="recipe-details-container">
                        <div className="instructions-container">
                          <h2>Instructions</h2>
                          <ol className="instructions-list">
                            {Object.keys(recipe.instructions).map(
                              (instruction, index) => (
                                <div
                                  style={{
                                    marginTop: "20px",
                                  }}
                                >
                                  <h3
                                    style={{
                                      // border: "1px solid red",
                                      color: " #ff6600",
                                    }}
                                  >
                                    {instruction}:
                                  </h3>
                                  <li
                                    key={index}
                                    style={{
                                      // border: "1px solid red",
                                      margin: "0",
                                    }}
                                  >
                                    {recipe.instructions[instruction]}
                                  </li>
                                </div>
                              )
                            )}
                          </ol>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          )
        ) : (
          <div
            style={{
              // border: "1px solid red",
              padding: "20px",
              height: "400px",
              overflowY: "scroll",
              background: "#f2f2f2",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)",
              marginTop: "10px",
              width: "70%",
              display: "flex",
              gap: "20px",
              // justifyContent: "space-between",
            }}
          >
            <div
              style={{
                width: "50%",
                height: "100%",
                // border: "1px solid red",
                backgroundImage: `url(${img2})`,
                backgroundPosition: "center",
                // backgroundAttachment: "fixed",
                backgroundSize: "cover",
              }}
            >
              <h1
                style={{
                  color: "#fff",
                  textAlign: "center",
                  backdropFilter: "blur(4px)",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Hi Foodie !
              </h1>
            </div>
            <img
              src={img}
              style={{
                width: "50%",
                height: "100%",
                // border: "1px solid red",
              }}
            />
          </div>
        )}
      </div>
      {/* {selectedRecipe === recipe.id && (
          <p style={{ marginTop: "5px", border: "1px solid red" }}>
            {recipe.description}
          </p>
        )} */}
    </div>
  );
};

export default RecipeComponent;
