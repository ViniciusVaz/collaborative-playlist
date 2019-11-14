import { Provider } from 'react-redux'

const RootComponent = ({ store, children }) => (
  <Provider store={store}>{children}</Provider>
)

export default RootComponent
