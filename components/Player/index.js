import './style.scss'

class Player extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
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

export default Player