import React, { useState, useEffect } from "react";
import { getMealAreas } from "../api/mealApi";
import "../styles/FilterSection.css";

const FilterSection = ({ onAreaChange, onSortChange }) => {
  const [areas, setAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState("");
  const [sortAlphabetically, setSortAlphabetically] = useState(false);

  useEffect(() => {
    const fetchAreas = async () => {
      const response = await getMealAreas();
      setAreas(response.data.meals);
    };
    fetchAreas();
  }, []);

  const handleAreaChange = (e) => {
    setSelectedArea(e.target.value);
    onAreaChange(e.target.value);
  };

  const handleSortChange = () => {
    setSortAlphabetically(!sortAlphabetically);
    onSortChange(!sortAlphabetically);
  };

  return (
    <div className="filter-section">
      <div className="filter">
        <label>Filter by Area:</label>
        <select onChange={handleAreaChange}>
          <option value="">Select Area</option>
          {areas.map((area) => (
            <option key={area.strArea} value={area.strArea}>
              {area.strArea}
            </option>
          ))}
        </select>
      </div>
      <div className="sort">
        <label>Sort Alphabetically:</label>
        <button onClick={handleSortChange}>
          {sortAlphabetically ? "Ascending" : "Descending"}
        </button>
      </div>
    </div>
  );
};

export default FilterSection;
