import Image from 'next/image'
import React from 'react'
import styles from '../styles/Banner.module.css'


const Banner = ({background}) => {
  return (
    <div className={styles.banner}>
        <Image width={1920} height={1024} src={background} alt="Ilustration promotions" layout='responsive' />
    </div>
  )
}

export default Banner