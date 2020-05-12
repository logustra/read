import * as types from './usersTypes'
import { API_USERS } from '@/constants'
import { UsersDataModel } from '@/typings/usersTypings'
import { httpService } from '@/services'

export async function usersRequest (dispatch: Function) {
  dispatch({ type: types.USERS_REQUEST })

  try {
    const { data } = await httpService.get(API_USERS)

    usersSuccess(dispatch, data)
  } catch (error) {
    usersError(dispatch, error)
  }
}

function usersSuccess (dispatch: Function, response: UsersDataModel[]) {
  dispatch({
    type: types.USERS_SUCCESS,
    response
  })
}

function usersError (dispatch: Function, response: Error) {
  dispatch({
    type: types.USERS_ERROR,
    response
  })
}
