import React from 'react'
import s from '@/src/components/form/assets/form.module.css'

const Hospitalisation = () => {
  return (
    <div className={s.content}>
      <h3>🤒 HOSPITALISATION</h3>

      {/* RADIO */}
      <div className="over-hide z-bigger">
        <input className="checkbox-tools" type="radio" name="h" id="h-1" />
        <label className="for-checkbox-tools" htmlFor="h-1">
          Economique
        </label>
        <input className="checkbox-tools" type="radio" name="h" id="h-2" />
        <label className="for-checkbox-tools" htmlFor="h-2">
          Intermédiaire
        </label>

        <input className="checkbox-tools" type="radio" name="h" id="h-3" />
        <label className="for-checkbox-tools" htmlFor="h-3">
          Optimum
        </label>
      </div>
      {/* RADIO */}
    </div>
  )
}

export default Hospitalisation
