import * as types from './postDetailTypes'
import { 
  API_POST_DETAIL, 
  API_COMMENT_LIST 
} from '../../constants/postConstants'
import { 
  PostDetailModel, 
  PostCommentModel 
} from '../../contracts/postDetailContracts'
import { postService } from '../../services'

export async function postDetailRequest (dispatch: Function, id: string) {
  dispatch({ type: types.POST_DETAIL_REQUEST })

  try {
    const { data } = await postService.get(API_POST_DETAIL + id)

    postDetailSuccess(dispatch, data)
  } catch (error) {
    postDetailError(dispatch, error)
  }
}

function postDetailSuccess (dispatch: Function, response: PostDetailModel) {
  dispatch({
    type: types.POST_DETAIL_SUCCESS,
    response
  })
}

function postDetailError (dispatch: Function, response: Error) {
  dispatch({
    type: types.POST_DETAIL_ERROR,
    response
  })
}

export async function postCommentListRequest (dispatch: Function) {
  dispatch({ type: types.POST_COMMENT_LIST_REQUEST })

  try {
    const { data } = await postService.get(API_COMMENT_LIST)

    postCommentListSuccess(dispatch, data)
  } catch (error) {
    postCommentListError(dispatch, error)
  }
}

function postCommentListSuccess (dispatch: Function, response: PostCommentModel) {
  dispatch({
    type: types.POST_COMMENT_LIST_SUCCESS,
    response
  })
}

function postCommentListError (dispatch: Function, response: Error) {
  dispatch({
    type: types.POST_COMMENT_LIST_ERROR,
    response
  })
}

