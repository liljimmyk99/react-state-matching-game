import React from "react";
import "./TileSelector.css";
import GameContext from "../../GameContext";
import useHover from "../../hooks";

const TileSelector = (props) => {
  const [ref, hovered] = useHover();

  <GameContext.Consumer>
      {({numTiles, handleNumTileChange}) => {
  const dropdown = hovered ? (
    <div className="tileSelectorContent">
      <div onClick={handleNumTileChange(4)} className="number">
        4
      </div>
      <div onClick={handleNumTileChange(16)} className="number">
        16
      </div>
      <div onClick={handleNumTileChange(36)} className="number">
        36
      </div>
    </div>
  ) : null;

  return (
    <div className="tileSelector">
      <div>Number of Tiles</div>
      <div ref={ref} className="tileSelectorDropdown">
        {numTiles}
        {dropdown}
      </div>
    </div>
  );
}}
  </GameContext.Consumer>

};
export default TileSelector;
