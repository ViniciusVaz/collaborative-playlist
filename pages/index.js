import Login from '../components/Login'
import PlayListInfo from '../components/PlayListInfo'

class Home extends React.Component {
  render() {
    return (
      <>
        <Login />
        <PlayListInfo />
      </>
    )
  }
}

export default Home