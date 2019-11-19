import axios from 'axios'
import { connect } from 'react-redux'
import R from 'ramda'

import { playListInfo } from '../../utils/routes'
import { fetchData } from '../../ducks/requests'
import MusicList from '../MusicList'

const token = 'BQCC7PCp_9QgLnmwtX1qYLaU1pKJ4Xfb1P_7o0XndJaRfAc9PrHrswztu-TO-9OOUYxiDXJ62C46PdnjS3MSc7RD2rxb1jchFnECx0-RLA3N6kaR3-tpvl6Wppr8Df1r1JeCzEm3celxhB57kqqT2hM9'
const spotifyPlaylist = '7mqbR7yHdisOwfKsaJtdLi'

class PlayListInfo extends React.Component {
  render() {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    const name = R.pathOr('', ['playList', 'data', 'name'], this.props)
    const tracks = R.pathOr(null, ['playList', 'data', 'tracks'], this.props)
    
    return (
      <div>
        <h1>PlayList</h1>
        <MusicList name={name} tracks={tracks} player="spotify"/>
      </div>
    )
  }
  
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchData({url: `${playListInfo}${spotifyPlaylist}`, key: 'playList'}))
  }
}

export default connect(({requests}) => requests, dispatch => ({dispatch}))(PlayListInfo)