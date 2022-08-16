export const selectedMovie = (movie) => {
  return {
    type: "MOVIE_SELECTED",
    payload: movie,
  }
}
