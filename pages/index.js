import Layout from '../components/layout'
import Favorite from '../components/favorite'
import { Provider } from 'react-redux'
import { reducer, initStore } from '../store'

export default class Index extends React.Component {
  static getInitialProps ({ req }) {
    const isServer = !!req
    const store = initStore(reducer, null, isServer)
    // store.dispatch({ type: 'CHANGE_FAVORITE', value: 'persian', name: 'Siam Shorthair' })
    return { initialState: store.getState(), isServer }
  }

  constructor (props) {
    super(props)
    this.store = initStore(reducer, props.initialState, props.isServer)
  }

  render () {
    return (
      <Provider store={this.store}>
        <Layout title='Home' pathname={ this.props.url.pathname }>
          <h2>Welcome Home!</h2>
          <Favorite />
        </Layout>
      </Provider>
    )
  }
}
