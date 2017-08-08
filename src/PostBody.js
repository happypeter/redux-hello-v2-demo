import React, { Component } from 'react'
import './post-body.css'
import { connect } from 'react-redux'

class PostBody extends Component {
  like = () => {
    this.props.dispatch({ type: 'LIKE', postId: this.props.postId })
  }
  render(){
    let thisComments = this.props.comments.filter(item => (
      item.post === this.props.postId
    ))

    let thisPost = this.props.posts.find(item => (
      item._id === this.props.postId
    ))
    return(
      <div className="post-body">
        <div className="no-wrap">
          <div onClick={this.like}
            className="like-no">
            {thisPost.like} 赞
          </div>
          <div className="comment-no">
            {thisComments.length} 评论
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  comments: state.comments,
  posts: state.posts
})

export default connect(mapStateToProps)(PostBody)
