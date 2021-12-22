import Image from 'next/image'
import Link from 'next/link'
import Container from '../container'
import s from './assets/header.module.css'

const Header = () => {
  return (
    <header className={s.header}>
      <Container>
        <div className={s.menu}>
          <div className={s.logo}>
            <Image src="/images/logo/logo.svg" width={250} height={100} />
          </div>

          <div className={s.logo_center}>
            <Image src="/images/logo/logo_filgaro.svg" width={150}
              height={100} />
          </div>

          <div className={s.contact}>
            <div className={s.icons}>
              <Image src="/images/icons/icon_call.svg" width={30} height={30} />
              <Link href=""><a >01 76 21 11 11</a></Link>
            </div>
            <div className={s.icons}>
              <Image src="/images/icons/user.svg" width={30} height={30} />

              <Link href=""><a className={s.call}>Je souhaite être rappelé</a></Link>
            </div>

          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
