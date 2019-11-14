import { authEndpoint } from '../../utils/routes'

const clientId = "";
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
          href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=false`}
        >
          Login to Spotify
        </a>
      </div>
    )
  }
}

export default Login