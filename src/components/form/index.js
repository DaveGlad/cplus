import React from 'react'
import s from './assets/form.module.css'
import Remboursement from '@/src/screens/remboursement'
import Profile from '@/src/screens/profile'
import Family from '@/src/screens/family'
import Accroche from '@/src/screens/acroche'

const Form = ({ handleClick, current, setCurrent }) => {

  const handleClickPrev = () => {
    setCurrent(current - 1)
  }

  return (
    <form action="" className={s.form}
      onSubmit={(e) => e.preventDefault()}>

      {current === 1 && <Remboursement />}
      {current === 2 && <Profile />}
      {current === 3 && <Family />}
      {current === 4 && <Accroche />}


      <div className={s.row}>
        <div className={s.left}>
          {current !== 1 && <button onClick={handleClickPrev}>RETOUR</button>}
        </div>
        <div className={s.right}>
          <button onClick={handleClick}>CONTINUER</button>
        </div>
      </div>

    </form>
  )
}

export default Form
