import * as types from './userTypes'
import {
  UserState,
  UserAction
} from '../../typings/userTypings'

function userMutations (state: UserState, action: UserAction): any {
  const { type, response } = action

  switch (type) {
    case types.USER_REQUEST:
      return {
        ...state,
        isFetching: true
      }

    case types.USER_SUCCESS:
      return {
        ...state,
        data: response,
        isFetching: false
      }

    case types.USER_ERROR:
      return {
        data: {},
        isFetching: false,
        isError: response
      }
  }
}

export default userMutations
