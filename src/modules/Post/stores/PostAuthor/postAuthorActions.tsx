import * as types from './postAuthorTypes'
import { 
  API_AUTHOR_DETAIL, 
  API_POST_LIST 
} from '../../constants/postConstants'
import { 
  AuthorDetailModel, 
  PostListModel 
} from '../../typings/postAuthorTypings'
import { postService } from '../../services'

export async function authorDetailRequest (dispatch: Function, id: string) {
  dispatch({ type: types.AUTHOR_DETAIL_REQUEST })

  try {
    const { data } = await postService.get(API_AUTHOR_DETAIL + id)

    authorDetailSuccess(dispatch, data)
  } catch (error) {
    authorDetailError(dispatch, error)
  }
}

function authorDetailSuccess (dispatch: Function, response: AuthorDetailModel) {
  dispatch({
    type: types.AUTHOR_DETAIL_SUCCESS,
    response
  })
}

function authorDetailError (dispatch: Function, response: Error) {
  dispatch({
    type: types.AUTHOR_DETAIL_ERROR,
    response
  })
}

export async function postAuthorRequest (dispatch: Function) {
  dispatch({ type: types.POST_AUTHOR_REQUEST })

  try {
    const { data } = await postService.get(API_POST_LIST)

    postAuthorSuccess(dispatch, data)
  } catch (error) {
    postAuthorError(dispatch, error)
  }
}

function postAuthorSuccess (dispatch: Function, response: PostListModel) {
  dispatch({
    type: types.POST_AUTHOR_SUCCESS,
    response
  })
}

function postAuthorError (dispatch: Function, response: Error) {
  dispatch({
    type: types.POST_AUTHOR_ERROR,
    response
  })
}
