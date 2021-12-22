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

const Profile = ({ skill }) => {

  return (
    <React.Fragment>
      <h2 className={s.title}>2. VOTRE PROFIL</h2>
      <SkillBar skill={skill} />
      <h2 className={s.title}>Vous êtes ?</h2>
      <Sexe />
      <DateNaissance />
      <Regime />
      <Profession />
      <DateEffet />
      <Cotisation />
      <Compagnie />
    </React.Fragment>
  )
}

export default Profile
