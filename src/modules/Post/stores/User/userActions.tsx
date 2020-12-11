import * as types from './userTypes'
import { API_USER } from '../../constants'
import { UserDataModel } from '../../typings/userTypings'
import { postService } from '../../services'

export async function userRequest (dispatch: Function, id: number) {
  dispatch({ type: types.USER_REQUEST })

  try {
    const { data } = await postService.get(API_USER + id)

    userSuccess(dispatch, data)
  } catch (error) {
    userError(dispatch, error)
  }
}

function userSuccess (dispatch: Function, response: UserDataModel[]) {
  dispatch({
    type: types.USER_SUCCESS,
    response
  })
}

function userError (dispatch: Function, response: Error) {
  dispatch({
    type: types.USER_ERROR,
    response
  })
}
