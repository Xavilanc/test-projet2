import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Cook from './components/Cook';

const project = [
  {
      id: 633547,
      title: "Baked Cinnamon Apple Slices",
      image: "https://spoonacular.com/recipeImages/633547-312x231.jpg",
      imageType: "jpg",
      usedIngredientCount: 1,
      missedIngredientCount: 2,
      missedIngredients: [
          {
              id: 2010,
              amount: 1.5,
              unit: "tablespoons",
              unitLong: "tablespoons",
              unitShort: "Tbsp",
              aisle: "Spices and Seasonings",
              name: "cinnamon",
              original: "1 1/2 tablespoons of Cinnamon",
              originalName: "Cinnamon",
              meta: [],
              image: "https://spoonacular.com/cdn/ingredients_100x100/cinnamon.jpg"
          },
          {
              id: 9299,
              amount: 0.5,
              unit: "cup",
              unitLong: "cups",
              unitShort: "cup",
              aisle: "Dried Fruits;Produce;Baking",
              name: "raisins",
              original: "1/2 cup of Raisins",
              originalName: "Raisins",
              meta: [],
              image: "https://spoonacular.com/cdn/ingredients_100x100/raisins.jpg"
          }
      ],
      "usedIngredients": [
          {
              id: 9003,
              amount: 4.0,
              unit: "",
              unitLong: "",
              unitShort: "",
              aisle: "Produce",
              name: "apples",
              original: "4 Apples Sliced and Peeled – whatever type of apples I have in my refrigerator",
              originalName: "Apples Sliced and Peeled – whatever type of apples I have in my refrigerator",
              meta: [
                  "peeled",
                  "sliced"
              ],
              image: "https://spoonacular.com/cdn/ingredients_100x100/apple.jpg"
          }
      ],
      unusedIngredients: [],
      likes: 1
  },
]


function App() {
  
  return (
    <div className="App">
      <Cook aliment={project[0]} />
    </div>
  );
}

export default App;
