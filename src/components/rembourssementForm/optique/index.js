import React from 'react'
import s from '@/src/components/form/assets/form.module.css'
import { motion } from 'framer-motion'

const Optique = () => {
  return (
    <div className={s.content}>
      <h3>👓 OPTIQUE</h3>

      {/* RADIO */}
      <div className="over-hide z-bigger">
        <input className="checkbox-tools" type="radio" name="o" id="o-1" />
        <motion.label
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.7 }}
          className="for-checkbox-tools" htmlFor="o-1">
          Economique
        </motion.label>
        <input className="checkbox-tools" type="radio" name="o" id="o-2" />

        <motion.label
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.7 }}
          className="for-checkbox-tools" htmlFor="o-2">
          Intermédiaire
        </motion.label>

        <input className="checkbox-tools" type="radio" name="o" id="o-3" />

        <motion.label
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.7 }}
          className="for-checkbox-tools" htmlFor="o-3">
          Optimum
        </motion.label>
        <input className="checkbox-tools" type="radio" name="o" id="o-4" />

        <motion.label
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.7 }}
          className="for-checkbox-tools" htmlFor="o-4">
          Maximum
        </motion.label>
      </div>
      {/* RADIO */}
    </div>
  )
}

export default Optique
