import jsonPlaceholder from "../apis/jsonPlaceholder"
import lodash from 'lodash'
import { getSpaceUntilMaxLength } from "@testing-library/user-event/dist/utils"
import _ from "lodash"

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts())
  
  // const userIds = _.uniq(_.map(getState().posts, 'userId'))
  // userIds.forEach(id => dispatch(fetchUser(id)))
  
  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value()
}

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts')

  dispatch({ type: 'FETCH_POSTS', payload: response.data })
}

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`)

  dispatch({ type: 'FETCH_USER', payload: response.data })
}

// export const fetchUser = function(id) {
//   return async function(dispatch) {
//     const response = await jsonPlaceholder.get(`/users/${id}`)
  
//     dispatch({ type: 'FETCH_USER', payload: response.data })
//   }
// }

// export const fetchUser = id => dispatch => {
//   _fetchUser(id, dispatch)
// }

// const _fetchUser = lodash.memoize( async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`)

//   dispatch({ type: 'FETCH_USER', payload: response.data })
// })

// export const fetchPosts = () => {
//   return async (dispatch) => {
//     const response = jsonPlaceholder.get('/posts')

//     dispatch({
//       type: 'FETCH_POSTS',
//       payload: response
//     })
//   }
// }