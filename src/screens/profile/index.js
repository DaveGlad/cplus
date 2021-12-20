import React from 'react'
import s from './assets/profile.module.css'
import Sexe from '@/src/components/profileForm/sexe'
import Image from 'next/image'
import Regime from '@/src/components/profileForm/regime'
import Profession from '@/src/components/profileForm/profession'
import Cotisation from '@/src/components/profileForm/cotisation'

const Profile = () => {
  return (
    <React.Fragment>
      <h2 className={s.title}>2. VOTRE PROFIL</h2>
      <Image src="/images/widthStepProfile.svg" width={250} height={20} />
      <h2 className={s.title}>Vous êtes ?</h2>
      <Sexe />
      <Regime />
      <Profession />
      <Cotisation />
    </React.Fragment>
  )
}

export default Profile
