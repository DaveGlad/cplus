import React from 'react'
import s from './assets/faq.module.css'


const FaqAnimalCompagne = ({ dispatch }) => {
  console.log(dispatch)
  return (
    <div className={s.content}>
      <h3>🐶🐱 Avez-vous un animal de <br /> compaGNIE ?</h3>
      <div className={s.count}>
        <div className={s.row}>
          <button onClick={() => dispatch({ type: 'faqAnimalDeCompagne' })}>OUI</button>

          <button onClick={() => dispatch({ type: 'faqAnimalDeCompagneFalse' })}>NON</button>
        </div>
      </div>
    </div>
  )
}

export default FaqAnimalCompagne
