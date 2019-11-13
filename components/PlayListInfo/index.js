import axios from 'axios'
import { playListInfo } from '../../utils/routes'

const token = 'BQDNboDDO1HoSY4GclX_F0TMzpmWo96DsDZI2XT1zJUfanorW_8skYAmD83Zy3ulqgHDrmpm1T--FJ0LjVlf468J5dduce9gggvugLKMJOgurS3obNFIBWoS8G69POlEp8StgpgulxrKxchMiJIopTto'
const spotifyPlaylist = '34iESXuSY8PzrCDS7pFkLu'

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