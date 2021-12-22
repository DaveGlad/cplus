import React from 'react'
import s from '@/src/components/form/assets/form.module.css'
import { motion } from 'framer-motion'

const Hospitalisation = () => {
  return (
    <div className={s.content}>
      <h3>🤒 HOSPITALISATION</h3>

      {/* RADIO */}
      <div className="over-hide z-bigger">
        <input className="checkbox-tools" type="radio" name="h" id="h-1" />
        <motion.label
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.7 }}
          className="for-checkbox-tools" htmlFor="h-1">
          Economique
        </motion.label>
        <input className="checkbox-tools" type="radio" name="h" id="h-2" />
        <motion.label
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.7 }}
          className="for-checkbox-tools" htmlFor="h-2">
          Intermédiaire
        </motion.label>

        <input className="checkbox-tools" type="radio" name="h" id="h-3" />
        <motion.label
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.7 }}
          className="for-checkbox-tools" htmlFor="h-3">
          Optimum
        </motion.label>
        <input className="checkbox-tools" type="radio" name="h" id="h-4" />
        <motion.label
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.7 }}
          className="for-checkbox-tools" htmlFor="h-4">
          Maximum
        </motion.label>
      </div>
      {/* RADIO */}
    </div>
  )
}

export default Hospitalisation
