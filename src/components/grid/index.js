//ASSETS
import s from './assets/grid.module.css'

const Grid = ({ children }) => {
  return (
    <div className={s.grid}>
      {children}
    </div>
  )
}

export default Grid
