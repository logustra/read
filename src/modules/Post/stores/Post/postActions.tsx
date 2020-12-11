import * as types from './postTypes'
import { API_POST } from '../../constants'
import { PostDataModel } from '../../typings/postTypings'
import { postService } from '../../services'

export async function postRequest (dispatch: Function, id: number) {
  dispatch({ type: types.POST_REQUEST })

  try {
    const { data } = await postService.get(API_POST + id)

    postSuccess(dispatch, data)
  } catch (error) {
    postError(dispatch, error)
  }
}

function postSuccess (dispatch: Function, response: PostDataModel[]) {
  dispatch({
    type: types.POST_SUCCESS,
    response
  })
}

function postError (dispatch: Function, response: Error) {
  dispatch({
    type: types.POST_ERROR,
    response
  })
}
