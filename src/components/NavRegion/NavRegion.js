import React from 'react'
import './NavRegion.css'

const NavRegion = (props) => {


  const linkItems =  props.links.map( (link) =>
    <div className="nav-item righted"
      key={ link.url } 
      onClick={(e) => props.onClick(link.name)}
      >
      { link.name }
    </div>
  )
  return (
    <div id="nav-area" className="row">
      <a href="/" id="logo">Salm</a>
      <div id="nav-content">
        { linkItems }
      </div>
    </div>
  )

}

export default NavRegion
