import React from 'react'
import InfoUser from '@/src/components/AcrocheForm/infoUser'
import Moment from '@/src/components/AcrocheForm/moment'
import s from '@/src/screens/remboursement/assets/remboursement.module.css'

const Accroche = () => {
  return (
    <React.Fragment>
      <h2 className={s.title}>1. VOS BESOINS</h2>
      <Moment />
      <InfoUser />
    </React.Fragment>
  )
}

export default Accroche
