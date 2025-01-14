import React from 'react'

import './Tile.css'

const Tile = (props) => {

  let style = (props.selected  || props.matched ? {backgroundColor: props.color} : null)

  return (
    <div style={style} className='Tile' onClick={() => {props.handleTileClicked(props.id, props.color)}}>
    {props.selected  || props.matched ? <props.svg /> : null}
    </div>
  )
}

export default Tile
