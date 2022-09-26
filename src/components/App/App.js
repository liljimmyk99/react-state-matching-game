import React, { Component } from 'react';
import OptionsPanel from '../OptionsPanel'
import Board from '../Board'
import {createTiles, indexOfSelected} from '../../misc/utils'

import './App.css';

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      numTiles: 36,
      playing: false,
      previousTileIndex: null,
      tiles: [],
      toBeCleared: null
    }
  }

  handleTileClicked(id, color){
    this.setState((state) => {
      const tiles = state.tiles;
      const toBeCleared = state.toBeCleared;
      const selectedTileIndex = indexOfSelected(id, color);
      const previousTileIndex = state.previousTileIndex;
      if(previousTileIndex === null){
        const previousTile = state.tiles[previousTileIndex];
        const selectedTile = state.tiles[selectedTileIndex];
        
        if ((previousTile.id !== selectedTile.id) && previousTile.color === color) {
          selectedTile.matched = true;
          previousTile.matched = true;
          previousTileIndex = null;

        } else{
          toBeCleared = [previousTileIndex, selectedTileIndex]
          previousTileIndex = null;
        }

        tiles[selectedTileIndex].selected = true;
      } else{
        previousTileIndex = selectedTileIndex
      }

     
      return {tiles: tiles, toBeCleared: toBeCleared, previousTileIndex: previousTileIndex}
    })
  }

  startGame(numTiles){
    this.setState((state) => {
      return {
        playing: true,
        previousTileIndex: null,
        toBeCleared: null,
        tiles: createTiles(state.numTiles, this.handleTileClicked())
      }
    })
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        Turbo-Matcher
      </header>
        <OptionsPanel playing={this.state.playing} numTiles={this.state.numTiles} startGame={this.startGame.bind(this)}/>
        <Board numTiles={this.state.numTiles} tiles={this.state.tiles}/>
    </div>
  );

  }
}

export default App;
