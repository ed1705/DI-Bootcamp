import { connect } from "react-redux"
import { selectedMovie } from "../redux/actions"

const MovieList = (props) => {
  return (
    <>
      <h2>Movie List</h2>
      <div>
        {props.movies.map((item, i) => {
          return (
            <div key={i}>
              <h3>{item.title}</h3>
              <button onClick={() => props.movieDetails(item)}>Details</button>
            </div>
          )
        })}
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    movieDetails: (movie) => dispatch(selectedMovie(movie)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MovieList)
