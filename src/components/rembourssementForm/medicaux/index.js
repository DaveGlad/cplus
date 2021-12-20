import React from 'react'
import s from '@/src/components/form/assets/form.module.css'

const Medicaux = () => {
  return (
    <div className={s.content}>
      <h3> 🏥 SOINS Médicaux</h3>

      {/* RADIO */}
      <div className="over-hide z-bigger">
        <input className="checkbox-tools" type="radio" name="tools" id="m-1" checked />
        <label className="for-checkbox-tools" htmlFor="m-1">
          Economique
        </label>
        <input className="checkbox-tools" type="radio" name="tools" id="m-2" checked />
        <label className="for-checkbox-tools" htmlFor="m-2">
          Intermédiaire
        </label>

        <input className="checkbox-tools" type="radio" name="tools" id="m-3" checked />
        <label className="for-checkbox-tools" htmlFor="m-3">
          Optimum
        </label>
      </div>
      {/* RADIO */}
    </div>
  )
}

export default Medicaux
