import React, { useReducer } from 'react'
import s from './assets/family.module.css'
import Image from 'next/image'
import WhoDoYouWantToInsure from '@/src/components/familyForm/WhoDoYouWantToInsure'
import RegimeConjoint from '@/src/components/familyForm/regimeConjoint'
import NumberChildren from '@/src/components/familyForm/numberChildren'
import DateFirstChild from '@/src/components/familyForm/dateFirstChild'
import DateSecondChild from '@/src/components/familyForm/dateSecondChild'
import NumberAnimalCompagne from '@/src/components/familyForm/numberAnimalCompagne'
import FaqAnimalCompagne from '@/src/components/familyForm/faqAnimalCompagnie'

const initialState = {
  vous: false,
  vousEtVotreConjoint: false,
  youAndChildren: false,
  family: false,
  enfant: false,
  faqAnimalDeCompagne: false,
  faqAnimalDeCompagneFalse: false,
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
    default:
      return state;
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
      {state?.vousEtVotreConjoint && <RegimeConjoint />}
      {state?.enfant && <NumberChildren />}
      {state?.enfant && <DateFirstChild />}
      {/* <DateSecondChild /> */}
      <FaqAnimalCompagne dispatch={dispatch} />
      {state?.faqAnimalDeCompagne && <NumberAnimalCompagne />}
    </React.Fragment>
  )
}

export default Family
