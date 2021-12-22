import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import s from './assets/card.module.css'
const Card = () => {
  return (
    <React.Fragment>
      <motion.div
        whileHover={{ scale: 1.1 }}
        className={s.card}>
        <Image src="/images/icons/devis.svg"
          width={40} height={40}
        />
        <h3>+50 Devis à comparer gratuitement</h3>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.1 }}
        className={s.card}>
        <Image src="/images/icons/cash.svg" width={40} height={40} />
        <h3>+250€ d&rsquo;économie <br /> <span>par an</span></h3>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.1 }}
        className={s.card}>
        <Image src="/images/icons/personne.svg" width={40} height={40} />
        <h3>+50 experts dédiés <br /> à votre service</h3>
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.1 }}
        className={s.card}>
        <Image src="/images/icons/suivi.svg" width={40} height={40} />
        <h3><span>Un</span> accompagnement <br /> <span>et</span> suivi personnalisés</h3>
      </motion.div>
    </React.Fragment>

  )
}

export default Card
