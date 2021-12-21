import React, { useState, useReducer } from 'react'
import s from './assets/family.module.css'
import Image from 'next/image'
import WhoDoYouWantToInsure from '@/src/components/familyForm/WhoDoYouWantToInsure'
import RegimeConjoint from '@/src/components/familyForm/regimeConjoint'
import NumberChildren from '@/src/components/familyForm/numberChildren'
import DateFirstChild from '@/src/components/familyForm/dateFirstChild'
import DateSecondChild from '@/src/components/familyForm/dateSecondChild'
import NumberAnimalCompagne from '@/src/components/familyForm/numberAnimalCompagne'

const initialState = false

const reducer = (state, action) => {
  switch (action) {
    case 'checked':
      return true
    case 'disabled':
      return false
    default:
      break;
  }
}

const Family = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <React.Fragment>
      <h2 className={s.title}>3. VOTRE FAMILLE</h2>
      <Image src="/images/widthStepProfile.svg" width={250} height={20} />
      <h2 className={s.title}>Dites-nous plus sur votre famille</h2>

      <WhoDoYouWantToInsure dispatch={dispatch} />
      <RegimeConjoint />
      <NumberChildren />
      <DateFirstChild />
      <DateSecondChild />
      {state && <NumberAnimalCompagne />}
    </React.Fragment>
  )
}

export default Family
