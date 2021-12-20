import React from 'react'
import s from '@/src/components/form/assets/form.module.css'

const DateSecondChild = () => {
  return (
    <div className={s.content}>
      <h3>🗓 DATE DE NAISSANCE DE VOTRE 2EME ENFANT ?</h3>
      <div className="over-hide z-bigger">
        <input className="checkbox-tools" type="radio" name="date-s-c" id="date-1-s-c" checked />
        <label className="for-checkbox-tools" htmlFor="date-1-s-c">
          jour
        </label>
        <input className="checkbox-tools" type="radio" name="date-s-c" id="date-2-s-c" checked />
        <label className="for-checkbox-tools" htmlFor="date-2-s-c">
          mois
        </label>

        <input className="checkbox-tools" type="radio" name="date-s-c" id="date-3-s-c" checked />
        <label className="for-checkbox-tools" htmlFor="date-3-s-c">
          année
        </label>
      </div>
    </div>
  )
}

export default DateSecondChild
