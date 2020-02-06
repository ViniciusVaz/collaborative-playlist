import Login from '../components/Login'
import Player from '../components/Player'
import { authSpotify, authDeezer } from '../utils/routes'

import './home.scss'

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Player connectUrl={authSpotify} player="spotify" model="playListspotify"/>
        <Player connectUrl={authDeezer} player="deezer" model="playListdeezer"/>
      </div>
    )
  }
}

export default Home

