import React, { useState } from "react";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

import "./Dropdown.css";

const DropDown = ({ selected, onSelect, placeholder, options, noArrow }) => {
  const [expanded, setExpanded] = useState(false);

  function onClose(e) {
    e.preventDefault();
    setExpanded(false);
  }

  function onToggle(e) {
    e.preventDefault();
    setExpanded((prevState) => !prevState);
  }

  return (
    <div className="dropdown">
      {noArrow ? (
        <button
          className={
            selected
              ? "dropdown_selected dropdown_button"
              : "dropdown_placeholder dropdown_button"
          }
        >
          {selected ? selected : placeholder}
        </button>
      ) : (
        <>
          <div
            className={selected ? "dropdown_selected" : "dropdown_placeholder"}
          >
            {selected ? selected : placeholder}
          </div>
          <button className="dropdown_button" onClick={onToggle}>
            {expanded ? <ExpandLess /> : <ExpandMore />}
          </button>
        </>
      )}
      {expanded ? optionsList(options, onClose, onSelect) : null}
    </div>
  );
};

const optionsList = (options, closeMenu, onSelect) => {
  return (
    <div className="optionsList_backDrop" onClick={closeMenu}>
      <div className="optionsList">
        {options.map((option) => (
          <button
            className="optionsList_option"
            onClick={() => onSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DropDown;
