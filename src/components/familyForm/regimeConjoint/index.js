import React from 'react'
import s from '@/src/components/form/assets/form.module.css'

const RegimeConjoint = () => {
  return (
    <div className={s.content}>
      <h3>🏢 Régime de votre conjoint ?</h3>

      {/* RADIO */}
      <div className="over-hide z-bigger">
        <input className="checkbox-tools" type="radio" name="regimeonjoint" id="regimeonjoint-1" checked />
        <label className="for-checkbox-tools" htmlFor="regimeonjoint-1">
          Régime générale
        </label>
        <input className="checkbox-tools" type="radio" name="regimeonjoint" id="regimeonjoint-2" checked />
        <label className="for-checkbox-tools" htmlFor="regimeonjoint-2">
          Régime TNS
        </label>

        <input className="checkbox-tools" type="radio" name="regimeonjoint" id="regimeonjoint-3" checked />
        <label className="for-checkbox-tools" htmlFor="regimeonjoint-3">
          Régime agricole
        </label>

        <input className="checkbox-tools" type="radio" name="regimeonjoint" id="regimeonjoint-4" checked />
        <label className="for-checkbox-tools" htmlFor="regimeonjoint-4">
          Alsace moselle
        </label>
      </div>
      {/* RADIO */}
    </div>
  )
}

export default RegimeConjoint
