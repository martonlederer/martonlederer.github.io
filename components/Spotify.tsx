import { useEffect, useState } from 'react'
import { INowPlaying } from '../pages/api/now-playing'
import axios from 'axios'
import styles from '../styles/spotify.module.sass'

export default function Spotify() {
  const [nowPlaying, setNowPlaying] = useState<INowPlaying>()

  useEffect(() => {
    updateSpotify()
    const progressInterval = setInterval(updateProgress, 1000)

    return function cleanup() {
      clearInterval(progressInterval)
    }
  }, [])

  useEffect(() => {
    if (nowPlaying && nowPlaying.progress >= nowPlaying.length + 2000) updateSpotify()
  }, [nowPlaying])

  async function updateSpotify() {
    try {
      const { data } = await axios.get('/api/now-playing')

      if (typeof data === 'string') return setNowPlaying(undefined)
      setNowPlaying(data)
    } catch {}
  }

  function truncate(string: string, from: number = 15) {
    return string.length > from ? string.substr(0, from - 1) + '...' : string
  }

  function updateProgress() {
    setNowPlaying((val) => (val ? { ...val, progress: val.progress + 1000 } : val))
  }

  return (
    <>
      {nowPlaying && (
        <a
          href="https://spoti.fi/3pDq193"
          target="_blank"
          rel="noopener noreferer"
          className={styles.Spotify}
        >
          <img src={nowPlaying.thumb.url} alt="spotify-song-thumb" />
          <div>
            <h1>Now playing: {truncate(nowPlaying.song)}</h1>
            <h2>{truncate(nowPlaying.artists, 33)}</h2>
            <div className={styles.Timeline}>
              <div
                className={styles.Progress}
                style={{ width: `${(nowPlaying.progress / nowPlaying.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </a>
      )}
    </>
  )
}
