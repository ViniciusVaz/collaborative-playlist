import axios from 'axios'
import { playListInfo } from '../../utils/routes'
import { fetchData } from '../../ducks/requests'
import { connect } from 'react-redux'

const token = ''
const spotifyPlaylist = ''

class PlayListInfo extends React.Component {
  render() {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    return (
      <h1>PlayList</h1>
    )
  }
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchData({url: `${playListInfo}${spotifyPlaylist}`, key: 'playList'}))
  }
}

export default connect(null, dispatch => ({dispatch}))(PlayListInfo)