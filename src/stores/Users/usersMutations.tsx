import * as types from './usersTypes'
import {
  UsersState,
  UsersAction
} from '@/typings/usersTypings'

function usersMutations (state: UsersState, action: UsersAction): any {
  const { type, response } = action

  switch (type) {
    case types.USERS_REQUEST:
      return {
        ...state,
        isFetching: true
      }

    case types.USERS_SUCCESS:
      return {
        ...state,
        data: response,
        isFetching: false
      }

    case types.USERS_ERROR:
      return {
        response: [],
        isFetching: false,
        isError: response
      }
  }
}

export default usersMutations
