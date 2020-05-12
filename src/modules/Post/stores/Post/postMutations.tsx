import logger from 'use-reducer-logger'

import * as types from './postTypes'
import { 
  PostState, 
  PostAction
} from '../../typings/postTypings'

function postMutations (state: PostState, action: PostAction): any {
  const { type, response } = action

  switch (type) {
    case types.POST_REQUEST:
      return {
        ...state,
        isFetching: true
      }

    case types.POST_SUCCESS:
      return {
        ...state,
        data: response,
        isFetching: false
      }

    case types.POST_ERROR:
      return {
        data: {},
        isFetching: false,
        isError: response
      }
  }
}

export default process.env.NODE_ENV === 'development' ? logger<any>(postMutations) : postMutations
