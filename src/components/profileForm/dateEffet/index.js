import React from 'react'
import s from '@/src/components/form/assets/form.module.css'

const DateEffet = () => {
  return (
    <div className={s.content}>
      <h3>🗓 LA DATE d’EFFET SOUHAITEE ?</h3>
      <div className="over-hide z-bigger">
        <input className="checkbox-tools" type="radio" name="date-e" id="date-1-e" checked />
        <label className="for-checkbox-tools" htmlFor="date-1-e">
          jour
        </label>
        <input className="checkbox-tools" type="radio" name="date-e" id="date-2-e" checked />
        <label className="for-checkbox-tools" htmlFor="date-2-e">
          mois
        </label>

        <input className="checkbox-tools" type="radio" name="date-e" id="date-3-e" checked />
        <label className="for-checkbox-tools" htmlFor="date-3-e">
          année
        </label>
      </div>
    </div>
  )
}

export default DateEffet
