import { connect } from "react-redux"

const MovieDetail = (props) => {
  return (
    <div>
      <h1>MovieDetail</h1>
      <h4>{props.movie.title}</h4>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    movie: state.movie,
  }
}
export default connect(mapStateToProps)(MovieDetail)
