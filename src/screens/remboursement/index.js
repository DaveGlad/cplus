import React from 'react'
import Dentaire from '@/src/components/rembourssementForm/dentaire'
import Hospitalisation from '@/src/components/rembourssementForm/hospitalisation'
import Medicaux from '@/src/components/rembourssementForm/medicaux'
import Optique from '@/src/components/rembourssementForm/optique'

import s from './assets/remboursement.module.css'
import Image from 'next/image'
const Remboursement = () => {
  return (
    <React.Fragment>
      <h2 className={s.title}>1. VOS BESOINS</h2>
      <Image src="/images/Frame 620.svg" width={250} height={20} />
      <h2 className={s.title}>Quel est le niveau de remboursement souhaité ?</h2>
      <Medicaux />
      <Hospitalisation />
      <Optique />
      <Dentaire />
    </React.Fragment>
  )
}

export default Remboursement
