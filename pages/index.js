import Login from '../components/Login'
import Player from '../components/Player'
import { authSpotify, authDeezer } from '../utils/routes'

import './home.scss'

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Player connectUrl={authSpotify} player="spotify"/>
        <Player connectUrl={authDeezer} player="deezer"/>
      </div>
    )
  }
}

export default Home

