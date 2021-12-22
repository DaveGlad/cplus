import React from 'react'
import s from '@/src/components/form/assets/form.module.css'

import { motion } from 'framer-motion'

const Dentaire = () => {
  return (
    <div className={s.content}>
      <h3> 🏥 DENTAIRE</h3>

      {/* RADIO */}
      <div className="over-hide z-bigger">
        <input className="checkbox-tools" type="radio" name="d" id="d-1" />
        <motion.label
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.7 }}
          className="for-checkbox-tools" htmlFor="d-1">
          Economique
        </motion.label>
        <input className="checkbox-tools" type="radio" name="d" id="d-2" />

        <motion.label
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.7 }}
          className="for-checkbox-tools" htmlFor="d-2">
          Intermédiaire
        </motion.label>

        <input className="checkbox-tools" type="radio" name="d" id="d-3" />
        <motion.label
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.7 }}
          className="for-checkbox-tools" htmlFor="d-3">
          Optimum
        </motion.label>

        <input className="checkbox-tools" type="radio" name="d" id="d-4" />
        <motion.label
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.7 }}
          className="for-checkbox-tools" htmlFor="d-4">
          Maximum
        </motion.label>
      </div>
      {/* RADIO */}
    </div>
  )
}

export default Dentaire
