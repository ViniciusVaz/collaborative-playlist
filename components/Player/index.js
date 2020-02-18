import { connect } from 'react-redux'
import { fetchData } from '../../ducks/requests'
import PlaylistInfo from '../PlaylistInfo'
import R from 'ramda'
import './style.scss'

class Player extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isActive: false,
      idCurrentPlaylist: null
    }
  }
  componentDidMount() {
    const { player, tokens, dispatch } = this.props
    
    const token = R.propOr(false, player, tokens)
    
    token &&
      dispatch(
        fetchData({
          url: `http://localhost:4004/${player}/playlist?token=${token}`, 
          key: `playList${player}`, 
          method: 'GET',
        })
      )
  }
  componentDidUpdate(prevProps) {
    const { model } = this.props
    const playlist = this.props[model]
    
    if(playlist.length !== prevProps[model].length) {
      this.setState({isActive: true})
    }
  }
  selectPlaylist = (id) => (b) => {
    this.setState({idCurrentPlaylist: id})
  }
  backToPlaylist = () => {
    this.setState({idCurrentPlaylist: null})
  }
  render() {
    const { connectUrl, player, model } = this.props
    const playlist = this.props[model]
    const { isActive, idCurrentPlaylist} = this.state
    
    return (
      <div className={`player player--${player} ${isActive ? 'player--active' : ''}`}>
        <h2 className="player__name">{player}</h2>
        {
          idCurrentPlaylist === null ?
            <ul className="playlist">
              {playlist.map((item, i) => {
                return (
                  <li id={item.id} className="playlist__item" onClick={this.selectPlaylist(item.id)}>
                    <img className="playlist__image" src={item.image} />
                    <p className="playlist__title">{item.name}</p>
                  </li>
                )
              })}
            </ul>
          :
          <PlaylistInfo idPlaylist={idCurrentPlaylist} player={player} backToPlaylist={this.backToPlaylist}/>
        } 
        
        <a className={`player__overlay`} href={connectUrl}>
          <h3 className="player__title">Clique para conectar</h3>
        </a>
      </div>
    )
  }
}
const mapStateToProps = ({ tokens, requests }) => {
  const playListdeezer = R.pathOr([], ['playListdeezer', 'data'], requests)
  const playListspotify = R.pathOr([], ['playListspotify', 'data'], requests)

  return { 
    tokens, 
    playListdeezer, 
    playListspotify
  }
}

export default connect(mapStateToProps, dispatch => ({dispatch}) )(Player)