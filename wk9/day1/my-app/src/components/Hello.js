import { connect } from "react-redux"

const Hello = (props) => {
  return (
    <>
      <p>property one from App.js send it with {props.prop_one_from_app}</p>
      <p>
        property one from reducer ... connect hello comp to store
        {props.prop_one_from_redux}
      </p>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    prop_one_from_redux: state.prop_one,
  }
}
export default connect(mapStateToProps, null)(Hello)
