import React, { useEffect, useState } from "react";
import { getAllIndianMeals, getMealsByArea, searchMealsByName } from "../api/mealApi";
import FoodItem from "./FoodItem";
import Modal from "./Modal";
import "../styles/FoodItemsGrid.css";

const FoodItemsGrid = ({ area, sortAlphabetically, searchTerm }) => {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [mealsPerPage] = useState(12);

  useEffect(() => {
    const fetchMeals = async () => {
      let response;
      if (searchTerm) {
        response = await searchMealsByName(searchTerm);
      } else if (area) {
        response = await getMealsByArea(area);
      } else {
        response = await getAllIndianMeals();
      }
      let fetchedMeals = response.data.meals || [];
        fetchedMeals = fetchedMeals.sort((a, b) => 
          sortAlphabetically ? a.strMeal.localeCompare(b.strMeal) : b.strMeal.localeCompare(a.strMeal)
        );
      setMeals(fetchedMeals);
    };
    fetchMeals();
  }, [area, sortAlphabetically, searchTerm]);

  const indexOfLastMeal = currentPage * mealsPerPage;
  const indexOfFirstMeal = indexOfLastMeal - mealsPerPage;
  const currentMeals = meals.slice(indexOfFirstMeal, indexOfLastMeal);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const openModal = (meal) => {
    setSelectedMeal(meal);
  };
  const closeModal = () => {
    setSelectedMeal(null);
  };

  return (
    <div>
      <div className="food-items-grid">
        {currentMeals.map((meal) => (
          <FoodItem key={meal.idMeal} meal={meal} openModal={openModal} />
        ))}
        {selectedMeal && <Modal meal={selectedMeal} closeModal={closeModal} />}
      </div>
      <div className="pagination">
        {[...Array(Math.ceil(meals.length / mealsPerPage)).keys()].map(number => (
          <button
            key={number + 1}
            onClick={() => paginate(number + 1)}
            className={currentPage === number + 1 ? "active" : ""}
          >
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FoodItemsGrid;
