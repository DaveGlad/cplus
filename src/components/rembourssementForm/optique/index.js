import React from 'react'
import s from '@/src/components/form/assets/form.module.css'

const Optique = () => {
  return (
    <div className={s.content}>
      <h3>👓 OPTIQUE</h3>

      {/* RADIO */}
      <div className="over-hide z-bigger">
        <input className="checkbox-tools" type="radio" name="o" id="o-1" />
        <label className="for-checkbox-tools" htmlFor="o-1">
          Economique
        </label>
        <input className="checkbox-tools" type="radio" name="o" id="o-2" />
        <label className="for-checkbox-tools" htmlFor="o-2">
          Intermédiaire
        </label>

        <input className="checkbox-tools" type="radio" name="o" id="o-3" />
        <label className="for-checkbox-tools" htmlFor="o-3">
          Optimum
        </label>
        <input className="checkbox-tools" type="radio" name="o" id="o-4" />
        <label className="for-checkbox-tools" htmlFor="o-4">
          Maximum
        </label>
      </div>
      {/* RADIO */}
    </div>
  )
}

export default Optique
