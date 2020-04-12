import logger from 'use-reducer-logger'

import * as types from './postAuthorTypes'
import { 
  PostAuthorState, 
  PostAuthorAction 
} from '../../contracts/postAuthorContracts'

function postAuthorMutations (state: PostAuthorState, action: PostAuthorAction): any {
  const { type, response } = action
  const { authorDetail, postAuthor } = state

  switch (type) {
    case types.AUTHOR_DETAIL_REQUEST:
      return {
        ...state,
        authorDetail: {
          ...authorDetail,
          isFetching: true
        }
      }

    case types.AUTHOR_DETAIL_SUCCESS:
      return {
        ...state,
        authorDetail: {
          ...authorDetail,
          data: response,
          isFetching: false
        }
      }

    case types.AUTHOR_DETAIL_ERROR:
      return {
        ...state,
        authorDetail: {
          data: [],
          isFetching: false,
          isError: response
        }
      }

    case types.POST_AUTHOR_REQUEST:
      return {
        ...state,
        postAuthor: {
          ...postAuthor,
          isFetching: true
        }
      }

    case types.POST_AUTHOR_SUCCESS:
      return {
        ...state,
        postAuthor: {
          ...postAuthor,
          data: response,
          isFetching: false
        }
      }

    case types.POST_AUTHOR_ERROR:
      return {
        ...state,
        postAuthor: {
          data: [],
          isFetching: false,
          isError: response
        }
      }
  }
}

export default __DEV__ ? logger<any>(postAuthorMutations) : postAuthorMutations
