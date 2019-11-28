import paths from '../../constants/paths'

import R from 'ramda'

class MusicList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      musicList: []
    }
  }
  componentDidMount() {
    const { player } = this.props
    const musicPath = paths[player].music

    this.setState({musicPath})
  }
  componentDidUpdate(prevProps){
    const { tracks } = this.props
    const { musicPath } = this.state

    if(prevProps.tracks !== tracks) {
      this.setState({musicList: tracks[musicPath.prefix]})
    }
  }
  render() {
    const { name, player } = this.props
    const { musicList, musicPath } = this.state

    return (
      <section>
        <h3>{name} - {player}</h3>
        <ul>
          {
            musicList.map(item => {
              const name = R.path(musicPath.name.split('.') ,item)
              const image = R.path(musicPath.image.split('.'), item)
              const artists = R.path(musicPath.artists.split('.'), item)
              
              return (
                <li>
                  {/* <img src={image} alt={name}/> */}
                  <span>{name} - {artists}</span>
                </li>
              )
            })
          }
        </ul>
      </section>
    )
  }
}

export default MusicList