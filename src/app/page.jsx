import Image from 'next/image'
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        
        <h1 className={styles.title}>Better design for your digital products.</h1>
        <p className={styles.describe}>
          Turning your Idea into Reality. We bring together the teams from the 
          global tech industry.
        </p>
        <button className={styles.button}>See Our works</button>
      </div>
      <div className={styles.item}>
      <Image width={700} height={700}  src="/hero.jpg" alt="ssemeii" className={styles.img}/>
      </div>
    </div>
  )
}
