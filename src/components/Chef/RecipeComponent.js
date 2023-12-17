import React, { useState } from "react";

const RecipeComponent = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

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
      title: "Matar Paneer",
      description:
        "Matar Paneer is a classic North Indian curry with peas and paneer in a tomato-based sauce.",
    },
    {
      id: 3,
      title: "Shahi Paneer",
      description:
        "Shahi Paneer is a rich and creamy curry made with paneer (Indian cottage cheese) in a cashew and tomato-based gravy.",
    },
  ];

  const handleRecipeClick = (recipeId) => {
    setSelectedRecipe(recipeId === selectedRecipe ? null : recipeId);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", border: "1px solid red" }}>
      <h2 style={{ border: "1px solid red" }}>Recipes</h2>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              margin: "10px",
              cursor: "pointer",
              backgroundColor:
                selectedRecipe === recipe.id ? "#f0f0f0" : "transparent",
            }}
            onClick={() => handleRecipeClick(recipe.id)}
          >
            <h3 style={{ margin: "0" }}>{recipe.title}</h3>
            {selectedRecipe === recipe.id && (
              <p style={{ marginTop: "5px" }}>{recipe.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeComponent;
