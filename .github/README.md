# portfolio

This is my portfolio, deployed at [marton.lederer.hu](https://marton.lederer.hu)

## Setup spotify 
- Create a [Spotify Application](https://developer.spotify.com/dashboard/applications)
- Redirect URIs: `http://localhost/callback/`

### Refresh token
- Go here: https://accounts.spotify.com/authorize?client_id=SPOTIFY_CLIENT_ID&response_type=code&scope=user-read-currently-playing,user-read-recently-played&redirect_uri=http://localhost/callback/
- Copy the `CODE` param from the returned URL
- Create a string combining `SPOTIFY_CLIENT_ID:SPOTIFY_CLIENT_SECRET` and encode into base64
- Run: 
```sh
curl -X POST -H "Content-Type: application/x-www-form-urlencoded" -H "Authorization: Basic BASE64_HERE" -d "grant_type=authorization_code&redirect_uri=http://localhost/callback/&code=CODE_HERE" https://accounts.spotify.com/api/token
```
- Save the refresh token
- Add the required environment variables