import React from 'react'
import Layout from '../components/layout'
import SelectFavorite from '../components/selectFavorite'
import Favorite from '../components/favorite'
import { Provider } from 'react-redux'
import { reducer, initStore, changeFavorite } from '../store'

const cats = [
  { value: "british-shorthair", name: "British Shorthair"},
  { value: "siamese", name: "Siamese cat"},
  { value: "persian", name: "Persian Shorthair"},
  { value: "ragdoll", name: "Ragdoll"},
];

export default class Favorites extends React.Component {
  static getInitialProps ({ req }) {
    const isServer = !!req
    const store = initStore(reducer, null, isServer)
    store.dispatch({ type: 'CHANGE_FAVORITE', value: 'persian', name: 'Persian Shorthair' })
    console.log(store.getState());
    return { initialState: store.getState(), isServer }
  }

  constructor(props) {
    super(props)
    this.store = initStore(reducer, props.initialState, props.isServer)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const val = event.target.value
    var favorite = cats.filter((cat) => cat.value === val )
    this.store.dispatch(changeFavorite(favorite[0]))
  }

  render () {
    return (
      <Provider store={ this.store }>
        <Layout title='Favorites' pathname={ this.props.url.pathname }>
          <h2>
            Favorites
          </h2>
          <div>
            <select onChange={this.handleChange}>
            {
              cats.map((cat) =>
                <option value={ cat.value }>{ cat.name }</option>
              )
            }
            </select>
          </div>
          <Favorite />
        </Layout>
      </Provider>
    )
  }
}
