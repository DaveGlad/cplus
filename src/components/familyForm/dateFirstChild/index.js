import React from 'react'
import s from '@/src/components/form/assets/form.module.css'

const DateFirstChild = () => {
  return (
    <div className={s.content}>
      <h3>🗓 DATE DE NAISSANCE DE VOTRE 1ER ENFANT ?</h3>
      <div className="over-hide z-bigger">
        <input className="checkbox-tools" type="radio" name="date-f-c" id="date-1-f-c" checked />
        <label className="for-checkbox-tools" htmlFor="date-1-f-c">
          jour
        </label>
        <input className="checkbox-tools" type="radio" name="date-f-c" id="date-2-f-c" checked />
        <label className="for-checkbox-tools" htmlFor="date-2-f-c">
          mois
        </label>

        <input className="checkbox-tools" type="radio" name="date-f-c" id="date-3-f-c" checked />
        <label className="for-checkbox-tools" htmlFor="date-3-f-c">
          année
        </label>
      </div>
    </div>
  )
}

export default DateFirstChild
