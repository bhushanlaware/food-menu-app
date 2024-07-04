import React from "react";
import "../styles/FoodItem.css";

const FoodItem = ({ meal, openModal }) => {
  return (
    <div className="food-item" onClick={() => openModal(meal)}>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <h3>{meal.strMeal}</h3>
      <p>Rating: {Math.floor(Math.random() * 5) + 1}/5</p>
    </div>
  );
};

export default FoodItem;
