import logger from 'use-reducer-logger'

import * as types from './postIndexTypes'
import { 
  PostIndexState, 
  PostListModel, 
  PostIndexAction 
} from '../../contracts/postIndexContracts'

function postIndexMutations (state: PostIndexState, action: PostIndexAction): any {
  const { type, response } = action
  const { authorList, postList } = state

  switch (type) {
    case types.AUTHOR_LIST_REQUEST:
      return {
        ...state,
        authorList: {
          ...authorList,
          isFetching: true
        }
      }

    case types.AUTHOR_LIST_SUCCESS:
      return {
        ...state,
        authorList: {
          ...authorList,
          data: response,
          isFetching: false
        }
      }

    case types.AUTHOR_LIST_ERROR:
      return {
        ...state,
        authorList: {
          data: [],
          isFetching: false,
          isError: response
        }
      }

    case types.POST_LIST_REQUEST:
      return {
        ...state,
        postList: {
          ...postList,
          isFetching: true
        }
      }

    case types.POST_LIST_SUCCESS:
      return {
        ...state,
        postList: {
          ...postList,
          data: response.map((item: PostListModel) => ({
            ...item,
            author: authorList.data.find(author => author.id === item.userId)
          })),
          isFetching: false
        }
      }

    case types.POST_LIST_ERROR:
      return {
        ...state,
        postList: {
          data: [],
          isFetching: false,
          isError: response
        }
      }
  }
}

export default __DEV__ ? logger<any>(postIndexMutations) : postIndexMutations
