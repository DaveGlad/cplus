import React from 'react'
import s from '@/src/components/form/assets/form.module.css'

const Profession = () => {
  return (
    <div className={s.content}>
      <h3>📑 VOTRE PROFESSION</h3>

      {/* RADIO */}
      <div className="over-hide z-bigger">
        <input className="checkbox-tools" type="radio" name="profession" id="profession-1" defaultChecked />
        <label className="for-checkbox-tools" htmlFor="profession-1">
          Salarié
        </label>
        <input className="checkbox-tools" type="radio" name="profession" id="profession-2" checked />
        <label className="for-checkbox-tools" htmlFor="profession-2">
          Retraité
        </label>

        <input className="checkbox-tools" type="radio" name="profession" id="profession-3" checked />
        <label className="for-checkbox-tools" htmlFor="profession-3">
          Etudiant
        </label>
        <input className="checkbox-tools" type="radio" name="profession" id="profession-4" checked />
        <label className="for-checkbox-tools" htmlFor="profession-4">
          Auto-entrepreneur
        </label>
        <input className="checkbox-tools" type="radio" name="profession" id="profession-5" checked />
        <label className="for-checkbox-tools" htmlFor="profession-5">
          Autre
        </label>
      </div>
      {/* RADIO */}
    </div>
  )
}

export default Profession
