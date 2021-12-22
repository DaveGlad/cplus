import React from 'react'
import s from '@/src/components/form/assets/form.module.css'

const Dentaire = () => {
  return (
    <div className={s.content}>
      <h3> 🏥 DENTAIRE</h3>

      {/* RADIO */}
      <div className="over-hide z-bigger">
        <input className="checkbox-tools" type="radio" name="d" id="d-1" />
        <label className="for-checkbox-tools" htmlFor="d-1">
          Economique
        </label>
        <input className="checkbox-tools" type="radio" name="d" id="d-2" />
        <label className="for-checkbox-tools" htmlFor="d-2">
          Intermédiaire
        </label>

        <input className="checkbox-tools" type="radio" name="d" id="d-3" />
        <label className="for-checkbox-tools" htmlFor="d-3">
          Optimum
        </label>

        <input className="checkbox-tools" type="radio" name="d" id="d-4" />
        <label className="for-checkbox-tools" htmlFor="d-4">
          Maximum
        </label>
      </div>
      {/* RADIO */}
    </div>
  )
}

export default Dentaire
