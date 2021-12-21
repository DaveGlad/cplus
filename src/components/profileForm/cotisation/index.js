import React from 'react'
import s from '@/src/components/form/assets/form.module.css'

const Cotisation = () => {
  return (
    <div className={s.content}>
      <h3> 💶 COTISATION ACTUELLE</h3>

      {/* RADIO */}
      <div className="over-hide z-bigger">
        <input className="checkbox-tools" type="radio" name="cotisation" id="cotisation-1" />
        <label className="for-checkbox-tools" htmlFor="cotisation-1">
          Moins de 60
        </label>
        <input className="checkbox-tools" type="radio" name="cotisation" id="cotisation-2" />
        <label className="for-checkbox-tools" htmlFor="cotisation-2">
          60 - 100
        </label>

        <input className="checkbox-tools" type="radio" name="cotisation" id="cotisation-3" />
        <label className="for-checkbox-tools" htmlFor="cotisation-3">
          100 - 150
        </label>
      </div>
      {/* RADIO */}
    </div>
  )
}

export default Cotisation
