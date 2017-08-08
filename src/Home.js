import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './home.css'
import { connect } from 'react-redux'

class Home extends Component {


  render(){
    let postList = this.props.posts.map(item => (
      <Link key={item._id} className="post-item" to={`/post/${item._id}`}>
        {item.title}
      </Link>
    ))
    return(
      <div className="home">
        {postList}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts
})

export default connect(mapStateToProps)(Home)
