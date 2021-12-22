import React from 'react'
import { motion } from 'framer-motion'
import s from '@/src/components/form/assets/form.module.css'

const Tabs = ({ handleClickPrev, handleClick, current }) => {
  return (
    <div className={s.row}>
      <div className={s.left}>
        {current !== 1 && <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleClickPrev}>
          RETOUR
        </motion.button>}
      </div>
      <div
        className={s.right}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleClick}>
          CONTINUER
        </motion.button>
      </div>
    </div>
  )
}

export default Tabs
