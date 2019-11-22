const baseURL = 'https://api.spotify.com/v1/'
const spotifyPlaylist = '7mqbR7yHdisOwfKsaJtdLi'

export const authEndpoint = `https://accounts.spotify.com/authorize`;
export const playListInfoSpotify = `${baseURL}playlists/${spotifyPlaylist}`

// Request Deezer
const api_key = `ZAIVAHCEISOHWAICUQUEXAEPICENGUAFAEZAIPHAELEEVAHPHUCUFONGUAPASUAY`
const version = `8.1.0`

export const playListInfoDeezer = `https://api.deezer.com/1.0/gateway.php?version=${version}&api_key=${api_key}&output=3&buildId=ios11_universal&screenHeight=480&input=3&sid=frc43e3403521e32bc1325f9f0344c28da4d3de1&lang=br&network=d4a5fab109aa1b498dec92d4e3a85e69d36cc6e995be9e1c48523e9c98aa611e&mobile_tracking=eyJidW5kbGVfaWQiOiJjb20uZGVlemVyLkRlZXplciIsImlkZmEiOiJDNzVCMzkzMS0zM0I0LTQxMkUtQjUzMi1BODRDQjA2NjdEM0YiLCJhZGlkIjoiOWIzODBmM2NiMWJiZTZlODUwMjQxN2EyZjA0ZDM4MWMifQ==&screenWidth=320&method=playlist.getSongs`
