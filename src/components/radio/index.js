import React from 'react'

const Radio = () => {
  return (
    <div className="over-hide z-bigger">
      <input className="checkbox-tools" type="radio" name="tools" id="tool-1" checked />
      <label className="for-checkbox-tools" htmlFor="tool-1">
        Economique
      </label>
      <input className="checkbox-tools" type="radio" name="tools" id="tool-2" checked />
      <label className="for-checkbox-tools" htmlFor="tool-2">
        Intermédiaire
      </label>

      <input className="checkbox-tools" type="radio" name="tools" id="tool-3" checked />
      <label className="for-checkbox-tools" htmlFor="tool-3">
        Optimum
      </label>
    </div>
  )
}

export default Radio
