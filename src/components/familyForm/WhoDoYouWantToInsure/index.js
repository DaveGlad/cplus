import React from 'react'
import s from '@/src/components/form/assets/form.module.css'

const WhoDoYouWantToInsure = ({ dispatch }) => {

  return (
    <div className={s.content}>
      <h3>qui souhaitez vous assurer ?</h3>

      <div className="over-hide z-bigger">
        <input
          onClick={() => dispatch({ type: 'vous' })}
          className="checkbox-tools" type="radio" name="insure" id="insure-1" />
        <label className="for-checkbox-tools" htmlFor="insure-1">
          Vous
        </label>
        <input
          onClick={() => dispatch({ type: 'vousEtVotreConjoint' })}
          className="checkbox-tools" type="radio" name="insure" id="insure-2" />
        <label className="for-checkbox-tools" htmlFor="insure-2">
          Vous <span><br /> et</span> votre conjoint
        </label>

        <input
          onClick={() => dispatch({ type: 'youAndChildren' })}
          className="checkbox-tools" type="radio" name="insure" id="insure-3" />
        <label className="for-checkbox-tools" htmlFor="insure-3">
          Vous et vos enfants
        </label>
        <input
          onClick={() => dispatch({ type: 'family' })}
          className="checkbox-tools" type="radio" name="insure" id="insure-4" />
        <label className="for-checkbox-tools" htmlFor="insure-4">
          Vous, votre conjoint et vos enfants
        </label>
      </div>
      {/* RADIO */}
    </div>
  )
}

export default WhoDoYouWantToInsure
