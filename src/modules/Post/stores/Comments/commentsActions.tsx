import * as types from './commentsTypes'
import { API_COMMENTS } from '../../constants'
import { CommentsDataModel } from '../../typings/commentsTypings'
import { postService } from '../../services'

export async function commentsRequest (dispatch: Function, params?: {}) {
  dispatch({ type: types.COMMENTS_REQUEST })

  try {
    const { data } = await postService.get(API_COMMENTS, params)

    commentsSuccess(dispatch, data)
  } catch (error) {
    commentsError(dispatch, error)
  }
}

function commentsSuccess (dispatch: Function, response: CommentsDataModel[]) {
  dispatch({
    type: types.COMMENTS_SUCCESS,
    response
  })
}

function commentsError (dispatch: Function, response: Error) {
  dispatch({
    type: types.COMMENTS_ERROR,
    response
  })
}

