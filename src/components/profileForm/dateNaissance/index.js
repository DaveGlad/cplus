import React from 'react'
import style from './assets/data.module.css'
import s from '@/src/components/form/assets/form.module.css'

const DateNaissance = () => {
  return (
    <div className={s.content}>
      <h3> 🗓 VOTRE DATE DE NAISSANCE</h3>
      <div className="over-hide z-bigger">
        <input className="checkbox-tools" type="radio" name="date" id="date-1" checked />
        <label className="for-checkbox-tools" htmlFor="date-1">
          jour
        </label>
        <input className="checkbox-tools" type="radio" name="date" id="date-2" checked />
        <label className="for-checkbox-tools" htmlFor="date-2">
          mois
        </label>

        <input className="checkbox-tools" type="radio" name="date" id="date-3" checked />
        <label className="for-checkbox-tools" htmlFor="date-3">
          année
        </label>
      </div>
    </div>
  )
}

export default DateNaissance
