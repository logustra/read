import logger from 'use-reducer-logger'

import * as types from './postsTypes'
import {
  PostsState,
  PostsAction
} from '../../typings/postsTypings'

function postsMutations (state: PostsState, action: PostsAction): any {
  const { type, response } = action

  switch (type) {
    case types.POSTS_REQUEST:
      return {
        ...state,
        isFetching: true
      }

    case types.POSTS_SUCCESS:
      return {
        ...state,
        data: response,
        isFetching: false
      }

    case types.POSTS_ERROR:
      return {
        data: [],
        isFetching: false,
        isError: response
      }
  }
}

export default process.env.NODE_ENV === 'development' ? logger<any>(postsMutations) : postsMutations
