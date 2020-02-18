import { connect } from 'react-redux'
import embedUrls from '../../constants/embedUrls.js'
import R from 'ramda'

class PlayListInfo extends React.Component {
  render() {
    const idPlaylist = R.prop('idPlaylist', this.props)
    const player = R.prop('player', this.props)
    const backToPlaylist = R.prop('backToPlaylist', this.props)

    return (
      <>
        <h2>{idPlaylist}</h2>
        <div onClick={backToPlaylist}>Voltar</div>
        { embedUrls(player, idPlaylist) }
      </>
    )
  }
}

export default connect(({requests}) => requests, dispatch => ({dispatch}))(PlayListInfo)