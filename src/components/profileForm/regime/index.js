import React from 'react'
import s from '@/src/components/form/assets/form.module.css'

const Regime = () => {
  return (
    <div className={s.content}>
      <h3>🏢 VOTRE RégIME</h3>

      {/* RADIO */}
      <div className="over-hide z-bigger">
        <input className="checkbox-tools" type="radio" name="regime" id="o-1" />
        <label className="for-checkbox-tools" htmlFor="o-1">
          Générale
        </label>
        <input className="checkbox-tools" type="radio" name="regime" id="o-2" />
        <label className="for-checkbox-tools" htmlFor="o-2">
          Régime TNS
        </label>

        <input className="checkbox-tools" type="radio" name="regime" id="o-3" />
        <label className="for-checkbox-tools" htmlFor="o-3">
          Agricole
        </label>
        <input className="checkbox-tools" type="radio" name="regime" id="o-4" />
        <label className="for-checkbox-tools" htmlFor="o-4">
          Alsace moselle
        </label>
      </div>
      {/* RADIO */}
    </div>
  )
}

export default Regime
