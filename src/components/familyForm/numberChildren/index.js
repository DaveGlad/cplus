import React, { useReducer } from 'react'
import s from '@/src/components/form/assets/form.module.css'
import { motion } from 'framer-motion'

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
const NumberChildren = ({ handleAddLink, handleRemoveField }) => {

  const [count, dispatch] = useReducer(reducer, initialState,)
  const handlClickAdd = () => {
    dispatch('increment')
    handleAddLink()
  }
  const removeField = (index) => {
    dispatch('decrement')
    handleRemoveField(index)
  }
  return (
    <div className={s.content}>
      <h3>Nombre d’enfants à assurer ?</h3>
      <div className={s.count}>
        <div className={s.row}>
          <motion.button
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            onClick={removeField}>
            -
          </motion.button>
          <button>{count}</button>
          <motion.button
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlClickAdd}>
            +
          </motion.button>
        </div>
      </div>
    </div>
  )
}

export default NumberChildren
