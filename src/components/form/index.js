import Image from 'next/image'
import React from 'react'
import Radio from '../radio'
import s from './assets/form.module.css'

const Form = () => {
  return (
    <form action="" className={s.form}>
      <h2 className={s.form__title}>VOS BESOINS</h2>
      <Image src="/images/Frame 620.svg" width={250} height={20} />
      <h2 className={s.form__title}>Quel est le niveau de remboursement souhaité ?</h2>
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
