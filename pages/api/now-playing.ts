import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import btoa from 'btoa'

// how i got the tokens: https://github.com/codeSTACKr/spotify-now-playing/blob/master/SetUp.md
// or README

export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    const token = await getAccessToken(),
      nowPlaying = await axios({
        url: 'https://api.spotify.com/v1/me/player/currently-playing?market=HU',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      })

    if (nowPlaying.status === 200) {
      const formattedNowPlaying: INowPlaying = {
        song: nowPlaying.data.item.name,
        artists: nowPlaying.data.item.artists.map((artist) => artist.name).join(', '),
        thumb: nowPlaying.data.item.album.images[0],
        length: nowPlaying.data.item.duration_ms,
        progress: nowPlaying.data.progress_ms
      }

      return res.status(200).json(formattedNowPlaying)
    } else return res.status(203).send('Not playing anything')
  } catch (e) {
    return res.status(500).send(e)
  }
}

async function getAccessToken(): Promise<string> {
  try {
    const { data } = await axios({
      method: 'POST',
      url: 'https://accounts.spotify.com/api/token',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${btoa(
          `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
        )}`
      },
      params: {
        grant_type: 'refresh_token',
        refresh_token: process.env.SPOTIFY_REFRESH_TOKEN
      }
    })

    return data.access_token
  } catch (e) {
    console.log(e)

    throw new Error('Could not get access token')
  }
}

export interface INowPlaying {
  song: string
  artists: string
  thumb: {
    height: number
    width: number
    url: string
  }
  length: number
  progress: number
}
