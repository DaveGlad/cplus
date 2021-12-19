import React from 'react'
import s from './assets/formContainer.module.css'

const FormContainer = ({ children }) => {
  return (
    <section className={`
    ${s.formContainer}`}>
      {children}
    </section>
  )
}

export default FormContainer
