import React from "react";
import "../styles/Header.css";

const Header = ({ onSearchChange }) => {
  const onEnterClick = (e) => {
    if (e.key === "Enter") {
      onSearchChange(e.target.value);
    }
  };
  return (
    <header className="header">
      <div className="logo">Food Menu</div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for meals..."
          onKeyDown={onEnterClick}
        />
      </div>
    </header>
  );
};

export default Header;
