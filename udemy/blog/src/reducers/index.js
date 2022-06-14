import { combineReducers } from 'redux'
import postsReducer from './postsReducer'
import usersReducer from './usersReducer'

export default combineReducers({
  placeHolder : () => 'hold your places',
  posts: postsReducer,
  users: usersReducer
})