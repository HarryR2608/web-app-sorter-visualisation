import React from "react";
import "./Header.css";
import DropDown from "../atoms/dropdown/Dropdown";

const algorithms = [
  "Bubble sort",
  "Quick sort",
  "Merge and more more more and sort",
];

const Header = ({ handleAlgorithmChange, handleRandomise, algorithm }) => {
  return (
    <div className="header">
      <div className="header_left">
        <h1>Sort Visualiser</h1>
      </div>
      <div className="header_right">
        <ul className="header_set">
          <li className="header_item">
            <DropDown
              placeholder={"Hello this is long"}
              options={algorithms}
              onSelect={handleAlgorithmChange}
              selected={algorithm}
            />
          </li>
          <li className="header_item">
            <h2>Size</h2>
          </li>
          <li className="header_item">
            <button className="header_randomise" onClick={handleRandomise}>
              Randomise
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
