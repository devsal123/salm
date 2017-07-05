import React from 'react'
import './Skills.css'
import Skill from '../Skill/Skill'

const Skills = (props) => {

  const myskills =  props.skills.map( (skill) =>
    <Skill key={ skill.title }
        image= { skill.image }
        alt={ skill.name }
        title= {skill.title }
        description= {skill.description }
      />
  )
  return (
    <div className="" id="skills-area">
      { myskills }
    </div>
  )

}

export default Skills
