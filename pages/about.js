import Layout from '../components/layout'
import { Provider } from 'react-redux'
import { reducer, initStore } from '../store'

export default class About extends React.Component {
  static getInitialProps ({ req }) {
    const isServer = !!req
    const store = initStore(reducer, null, isServer)
    return { initialState: store.getState(), isServer }
  }

  constructor (props) {
    super(props)
    this.store = initStore(reducer, props.initialState, props.isServer)
  }

  render () {
    return (
      <Provider store={this.store}>
        <Layout title='About us' pathname={ this.props.url.pathname }>
          <div>
            <p>
              CooperCooper.com :: Listing ID #11AA.cc29; Access 1000s of Unique Listings Online; APARTMENT FEATURES: Dishwasher, Central A/C, Wood Floors; BUILDING AMENITIES: Rental, Post-War, Hi-Rise, Doorman, Concierge, Elevator, Gym, Swimming Pool, Laundry Room, Pets Allowed, Children's Playroom, Garage; CONTACT US: For more information or to schedule a viewing, call Cooper & Cooper at 212-864-4555 or email: zumper@coopercooper.com; HELPFUL LINKS: Find A C&C Associate - CooperCooper.com/Associates; Search 1000s Of Apartments - CooperCooper.com/SearchRentals; Attend Our Next Buying Seminar - CooperCooper.com/BuyingSeminar; Read Reviews - CooperCooper.com/Testimonials
            </p>
          </div>
        </Layout>
      </Provider>
    )
  }
}
