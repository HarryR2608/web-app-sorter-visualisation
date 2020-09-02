import React from "react";
import "./ControlBar.css";
import {
  Repeat,
  SkipNext,
  SkipPrevious,
  PlayArrow,
  Pause,
} from "@material-ui/icons";

const ControlBar = () => {
  return (
    <div className="controlBar">
      <button className="button">
        <Repeat className="button_icon" />
      </button>
      <button className="button">
        <SkipPrevious className="button_icon" />
      </button>
      <button className="button_play">
        <PlayArrow />
      </button>
      <button className="button">
        <SkipNext className="button_icon" />
      </button>
      <button className="button">
        <Repeat className="button_icon" />
      </button>
    </div>
  );
};

export default ControlBar;
