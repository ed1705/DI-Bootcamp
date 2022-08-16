import { connect } from "react-redux"
import { increase, decrease } from "../actions"

const Counter = (props) => {
  return (
    <>
      <div>
        {" "}
        <h2>Counter</h2>
        <button onClick={props.d}>-</button>
        <div>
          {props.c}
          {props.b}
        </div>
        <button onClick={props.i}>+</button>{" "}
      </div>
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    c: state.reducer_increase.count,
    b: state.reducer_decrease.count,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    i: () => dispatch(increase()),
    d: () => dispatch(decrease()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
