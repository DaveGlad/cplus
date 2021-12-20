import React from 'react'
import s from '@/src/components/form/assets/form.module.css'

const Compagnie = () => {
  return (
    <div className={s.content}>
      <h3> 🏢 COMPAGNIE ACTUELLE </h3>
      <div className={s.input__text}>
        <input type="text" placeholder='...' />
      </div>
    </div>
  )
}

export default Compagnie