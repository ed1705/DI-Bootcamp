import ReactDOM from "react-dom/client"
import React, { Component } from "react"
import { connect } from "react-redux"

class Post extends React.Component {
  //   constructor(props) {
  //     super(props)
  //     this.state = {
  //       brand: "Ford",
  //       model: "Mustang",
  //       color: "red",
  //       year: 1964,
  //     }
  //   }
  render() {
    return (
      <div>
        <h1>My Title</h1>
        <p>Paragraph</p>
        <img src="./blog.png" />
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id
  return {
    post: state.posts.find((post) => post.id === id),
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     deletePost: (id) => dispatch(deletePost(id)),
//   }
// }

export default connect(mapStateToProps)(Post)
