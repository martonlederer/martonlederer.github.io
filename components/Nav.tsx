import styles from '../styles/components/nav.module.sass'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import profilePicture from '../assets/profile.png'

export default function Nav() {
  const [navHeight, setNavHeight] = useState(),
    [scrolled, setScrolled] = useState(false),
    nav = useRef(null)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    setNavHeight(nav.current.clientHeight)

    return () => window.removeEventListener('scroll', handleScroll)
  })

  function handleScroll() {
    if (window.scrollY > 65) setScrolled(true)
    else setScrolled(false)
  }

  return (
    <>
      <div className={styles.nav + (scrolled ? ` ${styles.scrolled}` : '')} ref={nav}>
        <Link href="/">
          <h1 className={styles.title + (scrolled ? ` ${styles.scrolledTitle}` : '')}>
            <img src={profilePicture} alt="profile-picture" className={styles.profilePicture} />
            <span>Marton Lederer</span>
          </h1>
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
