import React, { Component } from 'react'
import './post-body.css'
import { connect } from 'react-redux'

class PostBody extends Component {
  render(){
    return(
      <div className="post-body">
        <div className="comment-no">
          {this.props.comments.length} 评论
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  comments: state
})

export default connect(mapStateToProps)(PostBody)
