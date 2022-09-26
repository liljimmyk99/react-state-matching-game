import React from 'react'

import './Tile.css'

const Tile = (props) => {

  let style = (props.selected  || props.matched ? {backgroundColor: props.color} : null)

  return (
    <div style={style} className='Tile'>
    {props.selected  || props.matched ? <svg /> : null}
    </div>
  )
}

export default Tile
