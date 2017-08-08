import React, { Component } from 'react'
import store from './redux/store'
import './comment-box.css'

class CommentBox extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    let comment = this.commentInput.value
    store.dispatch({ type: 'ADD_COMMENT', comment })
    this.commentInput.value = ''
    console.log('handleSubmit', store.getState())
  }

  render(){
    let commentList = store.getState().reverse().map((item, i) => (
      <li key={i}>{item}</li>
    ))

    let commentForm = (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref={value => this.commentInput = value} />
        <button type="submit">提交</button>
      </form>
    )
    return(
      <div className="comment-box">
        <div className="form">
          {commentForm}
        </div>
        <ul className="comment-list">
          {commentList}
        </ul>
      </div>
    )
  }
}

export default CommentBox
