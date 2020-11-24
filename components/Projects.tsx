import styles from '../styles/projects.module.sass'

export default function Projects() {
  return (
    <div className={styles.Projects}>
      <a
        className={styles.project}
        href="https://github.com/useverto"
        target="_blank"
        rel="noopopener noreferer"
      >
        <h1>Verto</h1>
        <p>A decentralized token exchange protocol on Arweave</p>
      </a>
      <a
        className={styles.project}
        href="https://github.com/nestdotland"
        target="_blank"
        rel="noopopener noreferer"
      >
        <h1>Nest</h1>
        <p>An immutable, blockweave powered module registry for Deno</p>
      </a>
      <a
        className={styles.project}
        href="https://covid.marton.lederer.hu/"
        target="_blank"
        rel="noopopener noreferer"
      >
        <h1>COVID-19 Stats Hungary</h1>
        <p>Stats, analytics and updates about the COVID-19 pandemic in Hungary</p>
      </a>
      <a
        className={styles.project}
        href="https://github.com/th8ta"
        target="_blank"
        rel="noopopener noreferer"
      >
        <h1>Th8ta</h1>
        <p>Quality software from enthusiastic developers</p>
      </a>
      <a className={styles.project} href="https://agrigo.farm/" target="_blank" rel="noopopener noreferer">
        <h1>Agrigo Farm</h1>
        <p>Farm monitoring. Simple.</p>
      </a>
      <a
        className={styles.project}
        href="https://github.com/Evolution-X"
        target="_blank"
        rel="noopopener noreferer"
      >
        <h1>Evolution X</h1>
        <p>A flashable Custom ROM to bring a true Pixel feel to your Android Device</p>
      </a>
    </div>
  )
}
