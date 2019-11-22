import axios from 'axios'
import { connect } from 'react-redux'
import R from 'ramda'

import { playListInfoSpotify, playListInfoDeezer } from '../../utils/routes'
import { fetchData } from '../../ducks/requests'
import MusicList from '../MusicList'

const token = 'BQDg1CLpKWUHdCSCd6ACgCBMxjaTw3RtKgEkgm8V_NkYHrTWzl-mNd-rM7JX3YnI5Thdi_w4Z5d5OBYOmf2byEXaY6Gou5rWYGUtvqImrF0vAJOXkjX-nfypaDYDWDnEgmgUyeKOf9LW61oIUzjc_Rp3'

class PlayListInfo extends React.Component {
  render() {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = `Bearer ${token}`;
    
    const name = R.pathOr('', ['playListSpotify', 'data', 'name'], this.props)
    const tracks = R.pathOr(null, ['playListSpotify', 'data', 'tracks'], this.props)
    
    return (
      <div>
        <h1>PlayList</h1>
        <MusicList name={name} tracks={tracks} player="spotify"/>
        <MusicList name={name} tracks={tracks} player="spotify"/>
      </div>
    )
  }
  
  componentDidMount() {
    const { dispatch } = this.props

    const dataDeezer = {"playlist_id":"6853097204","start":"0","nb":"500"}
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    //     targetUrl = playListInfoDeezer
    // fetch(proxyUrl + targetUrl, {method: 'POST', body: JSON.stringify(dataDeezer)})
    //   .then(blob => blob.json())
    //   .then(data => {
    //     console.table(data);
    //     return data;
    //   })
    //   .catch(e => {
    //     console.log(e);
    //     return e;
    //   });


    // fetch(playListInfoDeezer, {method: 'POST', body: JSON.stringify(dataDeezer),  mode: 'no-cors' }).then(r => console.log(r))
    dispatch(fetchData({url: `${proxyUrl}${playListInfoDeezer}`, key: 'playListDeezer', data: dataDeezer, method:'POST'}))
    // dispatch(fetchData({url: `${playListInfoSpotify}`, key: 'playListSpotify'}))
  }
}

export default connect(({requests}) => requests, dispatch => ({dispatch}))(PlayListInfo)