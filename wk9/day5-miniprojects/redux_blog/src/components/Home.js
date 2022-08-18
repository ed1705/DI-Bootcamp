import React from "react"
import ReactDOM from "react-dom/client"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import BlogImg from "../blog.png"

class Home extends React.Component {
  // constructor(props) {
  //   super(props)

  render() {
    console.log(this.props)
    const { posts } = this.props
    const postList = posts.length ? (
      posts.map((post) => {
        return (
          <div className="post card" key={post.id}>
            <img src={BlogImg} alt="A Blog" />
            <div className="card-content">
              <Link to={"/" + post.id}>
                <span className="card-title red-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No posts to show</div>
    )

    return (
      <div>
        <> {postList}</>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  }
}

export default connect(mapStateToProps)(Home)
