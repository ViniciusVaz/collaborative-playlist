import axios from 'axios'
import { playListInfo } from '../../utils/routes'

const token = 'token'
const spotifyPlaylist = 'spotifyPlaylist'

class PlayListInfo extends React.Component {
  render() {
    axios.defaults.baseURL = 'https://api.spotify.com/v1/';
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    axios.get(`${playListInfo}${spotifyPlaylist}`)

    return (
      <h1>PlayList</h1>
    )
  }
}

export default PlayListInfo