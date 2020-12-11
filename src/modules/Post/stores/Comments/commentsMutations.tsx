import logger from 'use-reducer-logger'

import * as types from './commentsTypes'
import {
  CommentsState,
  CommentsAction
} from '../../typings/commentsTypings'

function commentsMutations (state: CommentsState, action: CommentsAction): any {
  const { type, response } = action

  switch (type) {
    case types.COMMENTS_REQUEST:
      return {
        ...state,
        isFetching: true
      }

    case types.COMMENTS_SUCCESS:
      return {
        ...state,
        data: response,
        isFetching: false
      }

    case types.COMMENTS_ERROR:
      return {
        data: [],
        isFetching: false,
        isError: response
      }
  }
}

export default process.env.NODE_ENV === 'development' ? logger<any>(commentsMutations) : commentsMutations
