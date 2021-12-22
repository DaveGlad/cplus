import React from 'react'
import s from './assets/skill.module.css'

const SkillBar = ({ skill }) => {
  const widthSkill = {
    width: `${skill}%`
  }
  return (
    <div className={s.skillBar}>
      <ul className={s.skill}>
        <li className={s.bar} style={widthSkill}>

        </li>
      </ul>
    </div>
  )
}

export default SkillBar
