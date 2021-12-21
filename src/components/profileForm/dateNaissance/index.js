import React from 'react'
import s from '@/src/components/familyForm/dateFirstChild/assets/childe.module.css'

const DateNaissance = () => {
  return (
    <div className={s.content}>
      <h3> 🗓 VOTRE DATE DE NAISSANCE</h3>
      <div className={s.row}>
        <div className={s.input}>
          <input type="number" name="" id="" placeholder='jour' />
        </div>
        <div className={s.input}>
          <input type="number" name="" id="" placeholder='mois' />
        </div>
        <div className={s.input}>
          <input type="number" name="" id="" placeholder='année' />
        </div>
      </div>
    </div>
  )
}

export default DateNaissance
