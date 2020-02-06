import { withRouter } from 'next/router'
import { addToken } from '../ducks/tokens'
import { connect } from 'react-redux'
import Router from 'next/router'
import { fetchData } from '../ducks/requests'
import Link from 'next/link';
import R from 'ramda'

const regexThirdParty = {
  spotify: /(?<=access_token=).*(?=&token_type)/gm,
  deezer: /(?<=code=).*/gm,
}

class Token extends React.Component {
  render() {
    return (
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
    )
  }
  componentDidMount() {
    const { router, dispatch } = this.props
    const { asPath } = router
    
    const service = /access_token/gm.test(asPath) ? 'spotify' : 'deezer'
    const token = asPath.match(regexThirdParty[service])[0]

    if(service === 'deezer') {
      dispatch(fetchData({url: 'http://localhost:4004/deezer/auth', data: {token}, key: 'deezerAuth', method:'POST' }))
        .then(resp => {
          const accessCode = R.pathOr(null, ['data', 'accessToken'], resp)

          dispatch(addToken({[service]: accessCode}))
          setTimeout( _ => {
            Router.push('/')
          },100)
        })
    } else {
      dispatch(addToken({[service]: token}))
      setTimeout( _ => {
        Router.push('/')
      },100)
    }
    
  }
}

export default connect(null, dispatch => ({dispatch}))(withRouter(Token))