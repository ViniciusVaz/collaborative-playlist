import { authEndpoint } from '../../utils/routes'
import { clientIdSpotify, clientIdDeezer } from '../../constants/config'

const redirectUri = "http://localhost:3000/token";
const scopes = [
  "user-read-currently-playing",
  "user-read-playback-state",
];

class Login extends React.Component {
  render() {
    return (
      <div>
        <a
          href={`${authEndpoint}?client_id=${clientIdSpotify}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=false`}
        >
          Login to Spotify
        </a>
        <br/>
        <br/>
        <a
          href={`https://connect.deezer.com/oauth/auth.php?app_id=${clientIdDeezer}&redirect_uri=${redirectUri}&perms=basic_access,email,offline_access,manage_library,manage_community,delete_library,listening_history`}
        >
          Login to Deezer
        </a>
      </div>
    )
  }
}

export default Login