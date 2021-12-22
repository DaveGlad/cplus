import Card from '../card'
import Grid from '../grid'
import s from './assets/assurances.module.css'
const Assuarnce = ({ current }) => {
  return (
    <div className={s.assurance}>
      <div className={s.content}>
        <div className={s.text}>
          <h2>Assurance santé</h2>
          {current !== 4 && <h3>Votre avenir bien assuré</h3>}
          {current === 4 && <h3 className={s.title__accroche}>ACCROCHE ACCROCHE ACCROCHE</h3>}
        </div>

        {current === 1 && (
          <div className={s.border}>
            <Grid>
              <Card />
            </Grid>
          </div>
        )}

      </div>
    </div>
  )
}

export default Assuarnce
