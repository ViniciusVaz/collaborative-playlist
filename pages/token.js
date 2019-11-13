import { withRouter } from 'next/router'

class Token extends React.Component {
  render() {
    const { router } = this.props
    const authInfo = router.asPath.split('&')
    return (
      <div>
        {
          authInfo.map(item => {
            return (
              <ul>
                <li>{item}</li>
              </ul>
            )
          })
        }
        <a href="/">Home</a>
      </div>
    )
  }
}

export default withRouter(Token)