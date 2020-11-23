import { Github, Twitter, MessageSquare, Instagram } from '@geist-ui/react-icons'
import styles from '../styles/home.module.sass'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Marton Lederer</title>
      </Head>
      <div className={styles.intro}>
        <div className={styles.middle}>
          <h1 className={styles.name}>Marton Lederer</h1>
          <p>
            <a href="https://nextjs.org" target="_blank" rel="noopener noreferer">
              React
            </a>{' '}
            ·{' '}
            <a href="https://svelte.dev" target="_blank" rel="noopener noreferer">
              Svelte
            </a>{' '}
            ·{' '}
            <a href="https://vuejs.org" target="_blank" rel="noopener noreferer">
              Vue
            </a>{' '}
            · <a>TypeScript</a> · <a>PHP</a>
          </p>
          <p>
            <a
              href="https://github.com/martonlederer"
              className={styles.social}
              target="_blank"
              rel="noopener noreferer"
            >
              <Github />
            </a>
            <a
              href="https://twitter.com/martonlederer"
              className={styles.social}
              target="_blank"
              rel="noopener noreferer"
            >
              <Twitter />
            </a>
            <a
              href="https://instagram.com/martonlederer"
              className={styles.social}
              target="_blank"
              rel="noopener noreferer"
            >
              <Instagram />
            </a>
            <a
              href="https://t.me/martonlederer"
              className={styles.social}
              target="_blank"
              rel="noopener noreferer"
            >
              <MessageSquare />
            </a>
          </p>
        </div>
      </div>
    </>
  )
}
