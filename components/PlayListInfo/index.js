import axios from 'axios'
import { connect } from 'react-redux'
import R from 'ramda'

import { playListInfoSpotify } from '../../utils/routes'
import { GetSmsToken } from '../../routes/deezer'
import { fetchData } from '../../ducks/requests'
import MusicList from '../MusicList'

const token = 'BQCXs9y_cGPLUsSLopKuyW8bkKdX7cCAeKvfzY8OQgJGPTlo2x6KCo7aUzmGsFAp_UaPLFwtzIyt2Xn6_t4lLYpuIqwqaSOY05fniyeTkxgl5Lm04b1_UgGqvBa168aTrUuWKrBWkOLD9_wxSg4COu8Z'

class PlayListInfo extends React.Component {
  render() {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    
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

    const dataDeezer = {"playlist_id":"6853097204","start":"0","nb":"500"}
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'


    // fetch(baseUrlDeezer, {method: 'POST', body: JSON.stringify(dataDeezer),  mode: 'no-cors' }).then(r => console.log(r))
    // dispatch(fetchData({url: `${proxyUrl}${baseUrlDeezer}&method=playlist.getSongs`, key: 'playListDeezer', data: dataDeezer, method:'POST', mapper: (value) => value.results.data  }))
    dispatch(fetchData({url: `${playListInfoSpotify}`, key: 'playListSpotify'}))
  }
}

export default connect(({requests}) => requests, dispatch => ({dispatch}))(PlayListInfo)