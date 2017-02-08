import { connect } from 'react-redux'

export default connect(state => state)(({ name }) => {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
})
