import React from 'react'
import s from '@/src/components/form/assets/form.module.css'
import { motion } from 'framer-motion'

const Medicaux = () => {
  return (
    <div className={s.content}>
      <h3> 🏥 SOINS Médicaux</h3>

      {/* RADIO */}
      <div className="over-hide z-bigger">
        <input className="checkbox-tools" type="radio" name="tools" id="m-1" />
        <motion.label
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.7 }}
          className="for-checkbox-tools" htmlFor="m-1">
          Economique
        </motion.label>
        <input className="checkbox-tools" type="radio" name="tools" id="m-2" />
        <motion.label
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.7 }}
          className="for-checkbox-tools" htmlFor="m-2">
          Intermédiaire
        </motion.label>

        <input className="checkbox-tools" type="radio" name="tools" id="m-3" />
        <motion.label
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.7 }}
          className="for-checkbox-tools" htmlFor="m-3">
          Optimum
        </motion.label>

        <input className="checkbox-tools" type="radio" name="tools" id="m-4" />
        <motion.label
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.7 }}
          className="for-checkbox-tools" htmlFor="m-4">
          Maximum
        </motion.label>
      </div>
      {/* RADIO */}
    </div>
  )
}

export default Medicaux
