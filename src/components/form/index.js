import React from 'react'
import Radio from '../radio'
import s from './assets/form.module.css'

const Form = () => {
  return (
    <form action="" className={s.form}>
      <div className={s.content}>
        <h3> 🏥 SOINS Médicaux</h3>
        <Radio />
      </div>
      <div className={s.content}>
        <h3>🤒 HOSPITALISATION</h3>
        <Radio />
      </div>
      <div className={s.content}>
        <h3>👓 OPTIQUE</h3>
        <Radio />
      </div>
      <div className={s.content}>
        <h3> 🏥 DENTAIRE</h3>
        <Radio />
      </div>
    </form>
  )
}

export default Form
