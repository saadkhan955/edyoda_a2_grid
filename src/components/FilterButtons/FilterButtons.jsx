import React, { useState } from "react";
import Data from "../../Data";
import "./FilterButtons.css";
import { FunnelFill } from "react-bootstrap-icons";

const FilterButtons = ({ filterItem, setItem, menuItems }) => {
  const [activeItem, setActiveItem] = useState("All");

  const handleItemClick = (item) => {
    setActiveItem(item);
    if (item === "All") {
      setItem(Data);
    } else {
      filterItem(item);
    }
  };

  return (
    <>
      <div className="filterButton_wrapper">
        <div className="d-flex justify-content-start align-items-center gap-3 mb-2">
          <FunnelFill className="filterButton_wrapper_icon fs-4" />
          <p className="p-0 m-0">Filter by Category</p>
        </div>
        <div className="d-flex flex-row flex-wrap">
          <div
            className={`filter-button ${
              activeItem === "All" ? "active" : ""
            }`}
            onClick={() => handleItemClick("All")}
          >
            All
          </div>
          {menuItems.map((Val, id) => (
            <div
              className={`filter-button ${
                activeItem === Val ? "active" : ""
              }`}
              onClick={() => handleItemClick(Val)}
              key={id}
            >
              {Val}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FilterButtons;
