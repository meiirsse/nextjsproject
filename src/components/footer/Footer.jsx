import React from 'react'
import styles from "./footer.module.css";
import Image from "next/image"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>©2023 SSNEA. All rights reserved.</div>
      <div>
        <Image src="/11.png"width={15} height={15}  className={styles.icon} alt="ssemeii" />
        <Image src="/22.png"width={15} height={15}  className={styles.icon} alt="ssemeii" />
        <Image src="/33.png"width={15} height={15}  className={styles.icon} alt="ssemeii" />
      </div>
    </div>
  )
}

export default Footer