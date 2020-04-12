import * as types from './postIndexTypes'
import { 
  API_AUTHOR_LIST, 
  API_POST_LIST 
} from '../../constants/postConstants'
import { 
  AuthorListModel, 
  PostListModel 
} from '../../contracts/postIndexContracts'
import { postService } from '../../services'

export async function authorListRequest (dispatch: Function) {
  dispatch({ type: types.AUTHOR_LIST_REQUEST })

  try {
    const { data } = await postService.get(API_AUTHOR_LIST)

    authorListSuccess(dispatch, data)
  } catch (error) {
    authorListError(dispatch, error)
  }
}

function authorListSuccess (dispatch: Function, response: AuthorListModel) {
  dispatch({
    type: types.AUTHOR_LIST_SUCCESS,
    response
  })
}

function authorListError (dispatch: Function, response: Error) {
  dispatch({
    type: types.AUTHOR_LIST_ERROR,
    response
  })
}

export async function postListRequest (dispatch: Function) {
  dispatch({ type: types.POST_LIST_REQUEST })

  try {
    const { data } = await postService.get(API_POST_LIST)

    postListSuccess(dispatch, data)
  } catch (error) {
    postListError(dispatch, error)
  }
}

function postListSuccess (dispatch: Function, response: PostListModel) {
  dispatch({
    type: types.POST_LIST_SUCCESS,
    response
  })
}

function postListError (dispatch: Function, response: Error) {
  dispatch({
    type: types.POST_LIST_ERROR,
    response
  })
}

