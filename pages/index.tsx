import { useTheme } from 'next-themes'
import Nav from '../components/Nav'

export default function Home() {
  const { theme, setTheme } = useTheme()

  return (
    <>
      <Nav />
      <h1>Marton Lederer</h1>
      <div className="test">
        The current theme is: {theme}
        <button onClick={() => setTheme('light')}>Light Mode</button>
        <button onClick={() => setTheme('dark')}>Dark Mode</button>
      </div>
    </>
  )
}
