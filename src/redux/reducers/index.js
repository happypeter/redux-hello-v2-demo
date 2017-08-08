import posts from './post'
import comments from './comment'
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
  posts,
  comments
})

export default rootReducer
