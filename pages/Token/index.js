import { withRouter } from 'next/router'
import { addToken } from '../../ducks/tokens'
import { connect } from 'react-redux'

class Token extends React.Component {
  render() {
    return (
      <div>
        <a href="/">Home</a>
      </div>
    )
  }
  componentDidMount() {
    const { router, dispatch } = this.props
    const token = router.asPath.match(/(?<=access_token=).*(?=&token_type)/gm)[0]
    
    dispatch(addToken({spotify: token}))
    router.push('/')
  }
}

export default connect(null, dispatch => ({dispatch}))(withRouter(Token))