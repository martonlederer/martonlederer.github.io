import Nav from '../components/Nav'
import styles from '../styles/home.module.sass'

export default function Home() {
  return (
    <>
      <Nav />
      <div className={styles.intro}>
        <h1>
          <span>Hi</span>
          <span>I'm</span>
          <span>Marton!</span>
        </h1>
        <p>I am a design-oriented front-end developer, many times doing back-end projects too.</p>
      </div>
    </>
  )
}
