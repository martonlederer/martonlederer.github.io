import styles from '../styles/components/nav.module.sass'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [navHeight, setNavHeight] = useState(),
    nav = useRef(null)

  useEffect(() => {
    setNavHeight(nav.current.clientHeight)
  })

  return (
    <>
      <div className={styles.nav} ref={nav}>
        <Link href="/">
          <a className={styles.title}>Marton Lederer</a>
        </Link>
        <div className={styles.menu}>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
        </div>
      </div>
      <div style={{ height: `${navHeight}px` }}></div>
    </>
  )
}
