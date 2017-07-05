import React from 'react'
import './Skill.css'

const Skill = (props) => {

  return (
    <div className="quarter lefted animated slideInUp" id="skill-area">
      <div className="page-item_container fade">
        <div className="page-item">
          <img className="image" src={ props.image } alt={ props.alt } />
          <div className="skill-info">
            <div className="skill-title pinky-text">
              { props.title }
            </div>
            <div className="description">
              { props.description }
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Skill
