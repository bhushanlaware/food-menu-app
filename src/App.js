import React, { useState } from "react";
import Header from "./components/Header";
import FilterSection from "./components/FilterSection";
import FoodItemsGrid from "./components/FoodItemsGrid";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
  const [selectedArea, setSelectedArea] = useState("");
  const [sortAlphabetically, setSortAlphabetically] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <Header onSearchChange={setSearchTerm} />
      <FilterSection onAreaChange={setSelectedArea} onSortChange={setSortAlphabetically} />
      <FoodItemsGrid area={selectedArea} sortAlphabetically={sortAlphabetically} searchTerm={searchTerm} />
      <Footer />
    </div>
  );
}

export default App;
