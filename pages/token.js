import { withRouter } from 'next/router'
import { addToken } from '../ducks/tokens'
import { connect } from 'react-redux'
import Router from 'next/router'
import Link from 'next/link';

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
    const token = asPath.match(/(?<=access_token=|code=).*(?=&token_type|$)/gm)[0]

    const service = /access_token/gm.test(asPath) ? 'spotify' : 'deezer'
    
    dispatch(addToken({[service]: token}))
    setTimeout( _ => {
      Router.push('/')
    },100)
  }
}

export default connect(null, dispatch => ({dispatch}))(withRouter(Token))