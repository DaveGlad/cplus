import React from 'react'
import s from './assets/form.module.css'
import Remboursement from '@/src/screens/remboursement'
import Profile from '@/src/screens/profile'
import Family from '@/src/screens/family'
import Accroche from '@/src/screens/acroche'
import Tabs from '../tabs'
import axios from 'axios'

const Form = ({ handleClick, skill, current, setCurrent }) => {

  const handleClickPrev = () => {
    setCurrent(current - 1)
    window.scrollTo(0, 0)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // axios.post('https://prod.domtomassur.com//api/public/fiche/insert?cle=qwb63rCyJiEFDV1', {

    // })
  }

  return (
    <form action="" className={s.form}
      onSubmit={handleSubmit}>

      {current === 1 && <Remboursement skill={skill} />}
      {current === 2 && <Profile skill={skill} />}
      {current === 3 && <Family skill={skill} />}
      {current === 4 && <Accroche skill={skill} />}

      <Tabs
        handleClickPrev={handleClickPrev}
        handleClick={handleClick}
        current={current}
      />
      {/* <button type='submit'>send</button> */}
    </form>
  )
}

export default Form
