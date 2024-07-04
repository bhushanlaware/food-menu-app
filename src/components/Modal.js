import React, { useEffect, useState } from "react";
import { getMealDetails } from "../api/mealApi";
import "../styles/Modal.css";

const Modal = ({ meal, closeModal }) => {
  const [mealDetails, setMealDetails] = useState(null);

  useEffect(() => {
    const fetchMealDetails = async () => {
      const response = await getMealDetails(meal.idMeal);
      setMealDetails(response.data.meals[0]);
    };
    fetchMealDetails();
  }, [meal.idMeal]);

  if (!mealDetails) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={closeModal}>
          &times;
        </span>
        <h2>{mealDetails.strMeal}</h2>
        <img src={mealDetails.strMealThumb} alt={mealDetails.strMeal} />
        <p>{mealDetails.strInstructions}</p>
      </div>
    </div>
  );
};

export default Modal;
