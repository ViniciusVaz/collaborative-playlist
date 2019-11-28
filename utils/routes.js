const baseURL = 'https://api.spotify.com/v1/'
const spotifyPlaylist = '7mqbR7yHdisOwfKsaJtdLi'

export const authEndpoint = `https://accounts.spotify.com/authorize`;
export const playListInfoSpotify = `${baseURL}playlists/${spotifyPlaylist}`

// Request Deezer
const api_key = `ZAIVAHCEISOHWAICUQUEXAEPICENGUAFAEZAIPHAELEEVAHPHUCUFONGUAPASUAY`
const tokenDeezer = 'fr7301f8eb428df995bb6191dd7411eaf7ed8853'

export const baseUrlDeezer = `https://api.deezer.com/1.0/gateway.php?api_key=${api_key}&output=3&input=3&sid=${tokenDeezer}&lang=br`
