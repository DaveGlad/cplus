import Image from 'next/image'
import React from 'react'
import s from './assets/moment.module.css'
const Moment = () => {
  return (
    <div className={s.content}>
      <h3>📱 JE souhaite eTRE rappelé le </h3>
      <div className={s.row}>
        <div className={s.input}>
          <input type="number" placeholder='jour' />
        </div>
        <div className={s.input}>
          <input type="number" placeholder='mois' />
        </div>
        <div>
          <span>à</span>
        </div>
        <div className={s.input}>
          <input type="number" placeholder='h' />
        </div>
        <div className={s.input}>
          <input type="number" placeholder='min' />
        </div>
        <div className={s.input}>
          <Image src="/images/icons/moment.svg" width={25} height={25} />
        </div>

      </div>
      <button className={s.now}>Maintenant</button>
    </div>
  )
}

export default Moment
