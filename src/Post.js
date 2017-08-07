import React, { Component } from 'react'
import PostBody from './PostBody'
import CommentBox from './CommentBox'
import './post.css'

class Post extends Component {
  render(){
    return(
      <div className="post">
        <div className="upper">
          <PostBody />
        </div>
        <div className="bottom">
          <CommentBox />
        </div>
      </div>
    )
  }
}

export default Post
