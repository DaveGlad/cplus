import React from 'react'
import s from './assets/infoUser.module.css'

const InfoUser = () => {
  return (
    <div className={s.content}>
      <h3>🆔 NOM ET PRENOM</h3>
      <div className={s.row}>
        <div className={s.input}>
          <input type="text" placeholder='Prénom' />
        </div>
        <div className={s.input}>
          <input type="text" placeholder='Nom' />
        </div>
      </div>

      <h3>📍ADRESSE</h3>
      <div className={s.adress}>
        <input type="text" placeholder='Adresse' />
      </div>
      <div className={s.row}>
        <div className={s.input}>
          <input type="text" placeholder='Code postal' />
        </div>
        <div className={s.input}>
          <input type="text" placeholder='Ville' />
        </div>
      </div>

      <h3>📧 EMAIL</h3>
      <div className={s.adress}>
        <input type="text" placeholder='....@....' />
      </div>
    </div>
  )
}

export default InfoUser
