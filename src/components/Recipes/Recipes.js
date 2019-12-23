import React from "react";
import uuid from "uuid/v1";
const Recipes = ({ title, image, ingredients }) => {
  return (
    <div>
      <h1>{title}</h1>
      <img src={image} alt="" />
      <ol>
        {ingredients.map(ingredientLine => (
          <li key={uuid()}>{ingredientLine.text}</li>
        ))}
      </ol>
    </div>
  );
};
export default Recipes;
