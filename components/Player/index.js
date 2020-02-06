import { connect } from 'react-redux'
import { fetchData } from '../../ducks/requests'
import R from 'ramda'
import './style.scss'

class Player extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    const { player, tokens, dispatch } = this.props
    
    const token = R.propOr(false, player, tokens)

    token &&
      dispatch(
        fetchData({
          url: `http://localhost:4004/${player}/playlist`, 
          key: `playList${player}`, 
          method: 'POST', 
          data: {token},
        })
      )
  }
  render() {
    const { connectUrl, player } = this.props
    
    return (
      <div className={`player player--${player}`}>
        <a className="player__overlay" href={connectUrl}>
          <h3 className="player__title">Clique para conectar</h3>
        </a>
      </div>
    )
  }
}

export default connect(({ tokens }) => ({tokens}), dispatch => ({dispatch}) )(Player)