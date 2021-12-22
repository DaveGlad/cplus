import React, { useState, useReducer } from 'react'
import s from './assets/family.module.css'
import Image from 'next/image'
import WhoDoYouWantToInsure from '@/src/components/familyForm/WhoDoYouWantToInsure'
import RegimeConjoint from '@/src/components/familyForm/regimeConjoint'
import NumberChildren from '@/src/components/familyForm/numberChildren'
import NumberAnimalCompagne from '@/src/components/familyForm/numberAnimalCompagne'
import FaqAnimalCompagne from '@/src/components/familyForm/faqAnimalCompagnie'
import DateChild from '@/src/components/familyForm/dateFirstChild'
import SkillBar from '@/src/components/skillBar'

const initialState = {
  vous: false,
  vousEtVotreConjoint: false,
  youAndChildren: false,
  family: false,
  enfant: false,
  faqAnimalDeCompagne: false,
  faqAnimalDeCompagneFalse: false,
  increment: + 1,
  decrement: -1,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'vous':
      return {
        ...state,
        vous: true,
        vousEtVotreConjoint: false,
        enfant: false,
      }
    case 'vousEtVotreConjoint':
      return {
        ...state,
        vousEtVotreConjoint: true,
        vous: false,
        enfant: false,
      }
    case 'youAndChildren':
      return {
        ...state,
        youAndChildren: true,
        vousEtVotreConjoint: false,
        enfant: true,
      }
    case 'family':
      return {
        ...state,
        family: true,
        vousEtVotreConjoint: true,
      }
    case 'enfant':
      return {
        ...state,
        enfant: true,
        vous: false,
        youAndChildren: true,
      }
    case 'faqAnimalDeCompagne':
      return {
        ...state,
        faqAnimalDeCompagne: true,
      }
    case 'faqAnimalDeCompagneFalse':
      return {
        ...state,
        faqAnimalDeCompagne: false,
      }
    case 'increment':
      if (state?.increment >= 5) {
        return state?.increment
      }
      return state + 1
    case 'decrement':
      if (state?.decrement <= 0) {
        return 0
      }
      return state?.decrement - 1;
    default:
      return state;
  }
}

const Family = ({ skill }) => {
  const [form, setForm] = useState([])
  const handleAddLink = (e) => {
    const childrenState = {
      t: "",
      a: ""
    }

    setForm(prev => [...prev, childrenState])
  }

  //Remove Filed
  const handleRemoveField = (index) => {
    setForm(prev => prev.filter((item) => {
      return item !== prev[index]
    }))
  }

  //reducer
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <React.Fragment>
      <h2 className={s.title}>3. VOTRE FAMILLE</h2>
      <SkillBar skill={skill} />
      <h2 className={s.title}>Dites-nous plus sur votre famille</h2>

      <WhoDoYouWantToInsure dispatch={dispatch} />
      {state?.vousEtVotreConjoint && <RegimeConjoint />}
      {state?.enfant && <NumberChildren
        handleAddLink={handleAddLink}
        handleRemoveField={handleRemoveField}

      />}
      {state?.enfant && <DateChild
        form={form}
        setForm={setForm}
        handleRemoveField={handleRemoveField}
      />}
      <FaqAnimalCompagne dispatch={dispatch} />
      {state?.faqAnimalDeCompagne && <NumberAnimalCompagne />}
    </React.Fragment>
  )
}

export default Family
