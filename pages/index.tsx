import Nav from '../components/Nav'
import styles from '../styles/home.module.sass'
import Head from 'next/head'
import { Button } from '@geist-ui/react'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Marton Lederer</title>
        <meta name="description" content="Web developer" />
        <meta name="theme-color" content="#0070f3" />

        <meta property="og:title" content="Marton Ledere" />
        <meta property="og:description" content="Web developer" />
        <meta property="og:image" content="https://marton.lederer.hu/favicon.png" />

        <meta name="twitter:title" content="Marton Ledere" />
        <meta name="twitter:description" content="Web developer" />
        <meta name="twitter:image" content="https://marton.lederer.hu/favicon.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Nav />
      <div className={styles.intro}>
        <h1>
          <span>Hi</span>
          <span>I'm</span>
          <span>Marton!</span>
        </h1>
        <div className={styles.buttons}>
          <Link href="/about">
            <a>
              <Button type="success" size="medium">
                About me
              </Button>
            </a>
          </Link>
          <Link href="/projects">
            <a>
              <Button type="success" size="medium" ghost>
                Projects
              </Button>
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}
