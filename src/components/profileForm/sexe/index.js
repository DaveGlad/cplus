import React from 'react'
import s from '@/src/components/form/assets/form.module.css'
import { motion } from 'framer-motion'

const Sexe = () => {
  return (
    <div className={s.content}>
      <h3>Votre Sexe</h3>

      <div className="over-hide z-bigger">
        <span style={UserSexe}>👨‍</span>
        <input className="checkbox-tools" type="radio" name="sexe" id="homme-1" />
        <motion.label
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.7 }}
          className="for-checkbox-tools" htmlFor="homme-1">
          Homme
        </motion.label>

        <input className="checkbox-tools" type="radio" name="sexe" id="femme-2" />
        <motion.label
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.7 }}
          className="for-checkbox-tools" htmlFor="femme-2">
          Femme
        </motion.label>
        <span style={UserSexe}>👩‍</span>
      </div>

    </div>
  )
}

export default Sexe

const UserSexe = {
  position: 'relative',
  top: '-1em',
  fontSize: 'var(--h2-font-size)'
}