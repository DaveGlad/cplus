import React from 'react'
import s from './assets/profile.module.css'
import Sexe from '@/src/components/profileForm/sexe'
import Image from 'next/image'
import Regime from '@/src/components/profileForm/regime'
import Profession from '@/src/components/profileForm/profession'
import Cotisation from '@/src/components/profileForm/cotisation'
import DateNaissance from '@/src/components/profileForm/dateNaissance'
import DateEffet from '@/src/components/profileForm/dateEffet'
import Compagnie from '@/src/components/profileForm/compagnie'
import SkillBar from '@/src/components/skillBar'
import { motion } from 'framer-motion'

const Profile = ({ skill }) => {

  return (
    <React.Fragment>
      <h2 className={s.title}>2. VOTRE PROFIL</h2>
      <SkillBar skill={skill} />
      <h2 className={s.title}>Vous êtes ?</h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          y: -20,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 2.8
          }
        }}
        viewport={{ once: true }}
      >
        <Sexe />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          y: -30,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 3.8
          }
        }}
        viewport={{ once: true }}
      >
        <DateNaissance />
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
        <Regime />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          y: -50,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 5.8
          }
        }}
        viewport={{ once: true }}
      >
        <Profession />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          y: -60,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 6.8
          }
        }}
        viewport={{ once: true }}
      >
        <DateEffet />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          y: -70,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 7.8
          }
        }}
        viewport={{ once: true }}
      >
        <Cotisation />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          y: -20,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 8.8
          }
        }}
        viewport={{ once: true }}
      >
        <Compagnie />
      </motion.div>

    </React.Fragment>
  )
}

export default Profile
