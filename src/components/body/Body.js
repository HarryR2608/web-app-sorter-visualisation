import React from "react";
import "./Body.css";
import Visualiser from "./visualiser/Visualiser";
import ProgressBar from "./progressBar/ProgressBar";
import ControlBar from "./controlBar/ControlBar";

const Body = () => {
  return (
    <div className="body">
      <div className="body_main">
        <Visualiser />
        <ProgressBar />
        <ControlBar />
      </div>
    </div>
  );
};

export default Body;
