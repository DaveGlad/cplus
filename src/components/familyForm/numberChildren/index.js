import React, { useReducer } from 'react'
import s from '@/src/components/form/assets/form.module.css'

const initialState = 0

const reducer = (current, action) => {
  switch (action) {
    case 'increment':
      if (current >= 15) {
        return current
      }
      return current + 1
    case 'decrement':
      if (current <= 0) {
        return initialState
      }
      return current - 1;
    default:
      break;
  }
}
const NumberChildren = ({ handleAddLink }) => {

  const [count, dispatch] = useReducer(reducer, initialState,)
  const handlClickAdd = () => {
    dispatch('increment')
    handleAddLink()
  }
  return (
    <div className={s.content}>
      <h3>Nombre d’enfants à assurer ?</h3>
      <div className={s.count}>
        <div className={s.row}>
          <button onClick={() => dispatch('decrement')}>-</button>
          <button>{count}</button>
          <button onClick={handlClickAdd}>+</button>
        </div>
      </div>
    </div>
  )
}

export default NumberChildren
