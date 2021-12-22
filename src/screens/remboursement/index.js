import React from 'react'
import Dentaire from '@/src/components/rembourssementForm/dentaire'
import Hospitalisation from '@/src/components/rembourssementForm/hospitalisation'
import Medicaux from '@/src/components/rembourssementForm/medicaux'
import Optique from '@/src/components/rembourssementForm/optique'

import s from './assets/remboursement.module.css'
import SkillBar from '@/src/components/skillBar'

import { motion } from 'framer-motion'

const Remboursement = ({ skill }) => {
  return (
    <React.Fragment>
      <h2 className={s.title}>1. VOS BESOINS</h2>
      <SkillBar skill={skill} />
      <h2 className={s.sub__title}>Quel est le niveau de remboursement souhaité ?</h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          y: -20,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1.8
          }
        }}
        viewport={{ once: true }}
      >
        <Medicaux />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          y: -30,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 2.8
          }
        }}
        viewport={{ once: true }}

      >
        <Hospitalisation />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          y: -40,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 3.8
          }
        }}
        viewport={{ once: true }}
      >
        <Optique />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          y: -40,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 4.8
          }
        }}
        viewport={{ once: true }}
      >
        <Dentaire />
      </motion.div>

    </React.Fragment>
  )
}

export default Remboursement
