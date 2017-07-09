import React from 'react'
import './Overlay.css'

const NavRegion = (props) => {
  return (
    <div id="overlay">
      <div id="close"
        className="pinky-text"
        onClick={(e) => props.onClick()}
      >&times;
      </div>
      <div>{ props.overlay_item }</div>
    </div>
  )

}

export default NavRegion
