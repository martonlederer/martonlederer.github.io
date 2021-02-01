import { Github, Twitter, Instagram } from '@geist-ui/react-icons'
import Discord from '../components/Discord'
import Telegram from '../components/Telegram'
import copy from 'copy-to-clipboard'
import { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import styles from '../styles/home.module.sass'
import Head from 'next/head'
import Projects from '../components/Projects'

export default function Home() {
  const [visibleNot, setVisibleNot] = useState(false)

  useEffect(() => {}, [])

  function copyDiscord() {
    copy('Marton#6513')
    setVisibleNot(true)
    setTimeout(() => setVisibleNot(false), 5000)
  }

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
              <Telegram />
            </a>
            <a className={styles.social} onClick={copyDiscord}>
              <Discord />
            </a>
          </p>
        </div>
      </div>
      <Projects />
      <CSSTransition in={visibleNot} timeout={230} classNames="fade-transition">
        <div className={styles.Notification} onClick={() => setVisibleNot(false)}>
          Copied discord tag!
        </div>
      </CSSTransition>
    </>
  )
}
