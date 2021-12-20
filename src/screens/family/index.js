import React from 'react'
import s from './assets/family.module.css'
import Image from 'next/image'
import WhoDoYouWantToInsure from '@/src/components/familyForm/WhoDoYouWantToInsure'
import RegimeConjoint from '@/src/components/familyForm/regimeConjoint'
import NumberChildren from '@/src/components/familyForm/numberChildren'
import DateFirstChild from '@/src/components/familyForm/dateFirstChild'
import DateSecondChild from '@/src/components/familyForm/dateSecondChild'
import NumberAnimalCompagne from '@/src/components/familyForm/numberAnimalCompagne'
const Family = () => {
  return (
    <React.Fragment>
      <h2 className={s.title}>3. VOTRE FAMILLE</h2>
      <Image src="/images/widthStepProfile.svg" width={250} height={20} />
      <h2 className={s.title}>Dites-nous plus sur votre famille</h2>

      <WhoDoYouWantToInsure />
      <RegimeConjoint />
      <NumberChildren />
      <DateFirstChild />
      <DateSecondChild />
      <NumberAnimalCompagne />
    </React.Fragment>
  )
}

export default Family
