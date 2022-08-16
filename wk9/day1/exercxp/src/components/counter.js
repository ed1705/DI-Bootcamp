import React, { Component } from "react"
import { Button } from "semantic-ui-react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { increaseCount, decreaseCount } from "../Actions/Counter"

class Counter extends Component {
  render() {
    const { increaseCount, decreaseCount } = this.props

    return (
      <div>
        <Button onClick={increaseCount}>+</Button>
        <span>{this.props.count}</span>
        <Button onClick={decreaseCount}>-</Button>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    count: state.count,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    myHandleChange: () => dispatch(increaseCount, decreaseCount),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(counter)
