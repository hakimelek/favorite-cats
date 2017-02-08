import { connect } from 'react-redux'

export default connect(state => state)(({ value }) => {
  return (
    <div>
      <select value={value} onChange={this.handleChange}>
        {
          cats.map((cat) =>
            <option value={ cat.value }>{ cat.name }</option>
          )
        }
      </select>
    </div>
  )
})
