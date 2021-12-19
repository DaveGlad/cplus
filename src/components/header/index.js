import Image from 'next/image'
import Container from '../container'
import s from './assets/header.module.css'

const Header = () => {
  return (
    <header className={s.header}>
      <Container>

        <div className={s.menu}>
          <div className={s.logo}>
            <Image src="/images/logo/logo.svg" width={80} height={40} />
          </div>

          <div className={s.logo_center}>
            <Image src="/images/logo/logo_filgaro.svg" width={60} height={30} />
          </div>

          <div className={s.contact}>
            <div className={s.icons}>
              <Image src="/images/icons/icon_call.svg" width={25} height={25} />
            </div>
            <div className={s.icons__users}>
              <div className={s.icons}>
                <Image src="/images/icons/user.svg" width={25} height={25} />
              </div>
            </div>
          </div>

        </div>
      </Container>
    </header>
  )
}

export default Header
