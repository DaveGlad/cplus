import React from 'react'
import s from './assets/skill.module.css'
import { motion } from 'framer-motion'

const SkillBar = ({ skill }) => {
  const widthSkill = {
    width: `${skill}%`
  }
  return (
    <div className={s.skillBar}>
      <motion.ul
        whileTap={{ scale: 1 }}

        transition={{ duration: 0.5 }}
        className={s.skill}>
        <li className={s.bar} style={widthSkill}>

        </li>
      </motion.ul>
    </div>
  )
}

export default SkillBar
