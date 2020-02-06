import axios from 'axios'
import { connect } from 'react-redux'
import R from 'ramda'

import { fetchData } from '../../ducks/requests'
import MusicList from '../MusicList'

class PlayListInfo extends React.Component {
  render() {
  
    const name = R.pathOr('', ['playListSpotify', 'data', 'name'], this.props)
    const tracks = R.pathOr(null, ['playListSpotify', 'data', 'tracks'], this.props)
    
    return (
      <div>
        <h1>PlayList</h1>
        <MusicList name={name} tracks={tracks} player="spotify"/>
        {/* <MusicList name={name} tracks={tracks} player="deezer"/> */}
      </div>
    )
  }
  componentDidMount() {
    const { dispatch } = this.props


    // fetch(baseUrlDeezer, {method: 'POST', body: JSON.stringify(dataDeezer),  mode: 'no-cors' }).then(r => console.log(r))
    // dispatch(fetchData({url: `${proxyUrl}${baseUrlDeezer}&method=playlist.getSongs`, key: 'playListDeezer', data: dataDeezer, method:'POST', mapper: (value) => value.results.data  }))
    // dispatch(fetchData({url: `${playListInfoSpotify}`, key: 'playListSpotify'}))
  }
}

export default connect(({requests}) => requests, dispatch => ({dispatch}))(PlayListInfo)