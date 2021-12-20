import React from 'react'
import s from '@/src/components/form/assets/form.module.css'

const WhoDoYouWantToInsure = () => {
  return (
    <div className={s.content}>
      <h3>qui souhaitez vous assurer ?</h3>

      {/* RADIO */}
      <div className="over-hide z-bigger">
        <input className="checkbox-tools" type="radio" name="insure" id="insure-1" checked />
        <label className="for-checkbox-tools" htmlFor="insure-1">
          Vous
        </label>
        <input className="checkbox-tools" type="radio" name="insure" id="insure-2" checked />
        <label className="for-checkbox-tools" htmlFor="insure-2">
          Vous <span><br /> et</span> votre conjoint
        </label>

        <input className="checkbox-tools" type="radio" name="insure" id="insure-3" checked />
        <label className="for-checkbox-tools" htmlFor="insure-3">
          Vous et vos enfants
        </label>
        <input className="checkbox-tools" type="radio" name="insure" id="insure-4" checked />
        <label className="for-checkbox-tools" htmlFor="insure-4">
          Vous, votre conjoint et vos enfants
        </label>
      </div>
      {/* RADIO */}
    </div>
  )
}

export default WhoDoYouWantToInsure
