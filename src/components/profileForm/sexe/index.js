import React from 'react'
import s from '@/src/components/form/assets/form.module.css'

const Sexe = () => {
  return (
    <div className={s.content}>
      <h3>Votre Sexe</h3>

      <div className="over-hide z-bigger">
        <span style={UserSexe}>👨‍</span>
        <input className="checkbox-tools" type="radio" name="sexe" id="homme-1" checked />
        <label className="for-checkbox-tools" htmlFor="homme-1">
          Homme
        </label>

        <input className="checkbox-tools" type="radio" name="sexe" id="femme-2" />
        <label className="for-checkbox-tools" htmlFor="femme-2">
          Femme
        </label>
        <span style={UserSexe}>👩‍</span>
      </div>

    </div>
  )
}

export default Sexe

const UserSexe = {
  position: 'relative',
  top: '-1em',
  fontSize: 'var(--h2-font-size)'
}