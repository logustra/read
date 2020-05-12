import * as types from './postsTypes'
import { API_POSTS } from '../../constants'
import { PostsDataModel } from '../../typings/postsTypings'
import { postService } from '../../services'

export async function postsRequest (dispatch: Function, params?: {}) {
  dispatch({ type: types.POSTS_REQUEST })

  try {
    const { data } = await postService.get(API_POSTS, params)

    postsSuccess(dispatch, data)
  } catch (error) {
    postsError(dispatch, error)
  }
}

function postsSuccess (dispatch: Function, response: PostsDataModel[]) {
  dispatch({
    type: types.POSTS_SUCCESS,
    response
  })
}

function postsError (dispatch: Function, response: Error) {
  dispatch({
    type: types.POSTS_ERROR,
    response
  })
}

