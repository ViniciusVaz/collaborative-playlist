import axios from 'axios'
import { connect } from 'react-redux'
import R from 'ramda'

import { playListInfoSpotify } from '../../utils/routes'
import { GetSmsToken } from '../../routes/deezer'
import { fetchData } from '../../ducks/requests'
import MusicList from '../MusicList'

const token = 'BQB6CvCxvfv5fMwpCtFlU1TWJWUzp0iqdoP1-ZsgXzHxGClsN8tv3nQ4i1F1KGUgo2nWpmvFvL5yCKCq07vW5eHfAcD7-NZRYRrKqbtRqe_6UHyayFQSzuoBJC-7JstWEXO5ksug9e-_feYo7YeqN01R'

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