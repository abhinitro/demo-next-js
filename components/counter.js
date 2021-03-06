import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { incrementCount, decrementCount, resetCount } from '../redux/actions'

class Counter extends Component {
  increment = async () => {
    const { incrementCount } = this.props
    await incrementCount()
  }

  decrement = () => {
    const { decrementCount } = this.props
    decrementCount()
  }

  reset = () => {
    const { resetCount } = this.props
    resetCount()
  }

  render () {
    const { count } = this.props
    return (
      <div className="add-on">
        <h1>
          Count: <span>{count}</span>
        </h1>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    )
  }
}

function mapStateToProps (state) {
  const { count } = state
  return { count }
}
const mapDispatchToProps = dispatch =>
  bindActionCreators({ incrementCount, decrementCount, resetCount }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)