const clientIdDeezer = '392864'	
const clientIdSpotify = '16590add91e2488aba6ad0ac24d9f096'
const redirectUri = "http://localhost:3000/token"
const scopes = [
  "user-read-currently-playing",
  "user-read-playback-state",
  "playlist-read-collaborative",
  "playlist-modify-public",
  "playlist-modify-private"
]

export const authSpotify = `https://accounts.spotify.com/authorize?client_id=${clientIdSpotify}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=false`
export const authDeezer = `https://connect.deezer.com/oauth/auth.php?app_id=${clientIdDeezer}&redirect_uri=${redirectUri}&perms=basic_access,email,offline_access,manage_library,manage_community,delete_library,listening_history`