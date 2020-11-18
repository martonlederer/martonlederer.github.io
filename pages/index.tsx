import styles from '../styles/home.module.sass'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Marton Lederer</title>
      </Head>
      <div className={styles.intro}>
        <h1 className={styles.name}>Marton Lederer</h1>
      </div>
    </>
  )
}
