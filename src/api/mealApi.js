import axios from "axios";

const API_URL = "https://www.themealdb.com/api/json/v1/1/";

export const getAllIndianMeals = async () => {
  return await axios.get(`${API_URL}filter.php?a=Indian`);
};

export const getMealDetails = async (mealId) => {
  return await axios.get(`${API_URL}lookup.php?i=${mealId}`);
};

export const getMealAreas = async () => {
  return await axios.get(`${API_URL}list.php?a=list`);
};

export const getMealsByArea = async (area) => {
  return await axios.get(`${API_URL}filter.php?a=${area}`);
};

export const searchMealsByName = async (name) => {
  return await axios.get(`${API_URL}search.php?s=${name}`);
};
