import App from 'next/app'
import RootComponent from '../components/RootComponent'
import configureStore from '../utils/configureStore'

const store = configureStore(),
  rootComponentProps = { store }


class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <RootComponent {...rootComponentProps}>
        <Component {...pageProps} />
      </RootComponent>
    )
  }
}

export default MyApp