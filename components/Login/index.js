import { authEndpoint } from '../../utils/routes'

const clientId = "16590add91e2488aba6ad0ac24d9f096";
const redirectUri = "http://localhost:3000/token";
const scopes = [
  "user-read-currently-playing",
  "user-read-playback-state",
];

const clientIdDeezer = "380564"

class Login extends React.Component {
  render() {
    return (
      <div>
        <a
          href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=false`}
        >
          Login to Spotify
        </a>
        <br/>
        <br/>
      </div>
    )
  }
}

export default Login