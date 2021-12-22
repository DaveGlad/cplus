import React from 'react'
import s from './assets/childe.module.css'

const DateChild = ({ form, setForm }) => {

  const onChange = (index, event) => {
    event.preventDefault()
    setForm(prev => {
      prev.map((item, i) => {
        if (i !== index) {
          return item
        }
        return {
          ...item,
          [event.target.name]: event.target.value
        }
      })
    })
  }

  return (
    <React.Fragment>
      {
        form?.map((item, index) => (
          <div className={s.content} key={index}>
            <h3>🗓 DATE DE NAISSANCE DE VOTRE {index + 1}E ENFANT ?</h3>
            <div className={s.row}>
              <div className={s.input}>
                <input type="number" name="" id="" placeholder='jour' />
              </div>
              <div className={s.input}>
                <input type="number" name="" id="" placeholder='mois' />
              </div>
              <div className={s.input}>
                <input type="number" name="" id="" placeholder='année' />
              </div>
            </div>
          </div>
        ))
      }
    </React.Fragment>
  )
}

export default DateChild