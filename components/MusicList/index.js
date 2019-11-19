import paths from '../../constants/paths'

import R from 'ramda'

class MusicList extends React.Component {
  render() {
    const { name, tracks, player } = this.props
    const musicPath = paths[player].music
    const musicList = tracks ? tracks[musicPath.prefix] : []
    
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