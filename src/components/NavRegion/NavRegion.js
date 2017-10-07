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
    <div id="nav-area">
      <div id="logo" onClick={ (e) => props.onClick('Home') }>salm<b id="creates">creates</b></div>
      <div id="nav-content">
        { linkItems }
      </div>
    </div>
  )

}

export default NavRegion
