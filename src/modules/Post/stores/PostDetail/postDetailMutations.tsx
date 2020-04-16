import logger from 'use-reducer-logger'

import * as types from './postDetailTypes'
import { 
  PostDetailState, 
  PostDetailAction 
} from '../../typings/postDetailTypings'

function postDetailMutations (state: PostDetailState, action: PostDetailAction): any {
  const { type, response } = action
  const { postDetail, postCommentList } = state

  switch (type) {
    case types.POST_DETAIL_REQUEST:
      return {
        ...state,
        postDetail: {
          ...postDetail,
          isFetching: true
        }
      }

    case types.POST_DETAIL_SUCCESS:
      return {
        ...state,
        postDetail: {
          ...postDetail,
          data: response,
          isFetching: false
        }
      }

    case types.POST_DETAIL_ERROR:
      return {
        ...state,
        authorList: {
          data: [],
          isFetching: false,
          isError: response
        }
      }

    case types.POST_COMMENT_LIST_REQUEST:
      return {
        ...state,
        postCommentList: {
          ...postCommentList,
          isFetching: true
        }
      }

    case types.POST_COMMENT_LIST_SUCCESS:
      return {
        ...state,
        postCommentList: {
          ...postCommentList,
          data: response,
          isFetching: false
        }
      }

    case types.POST_COMMENT_LIST_ERROR:
      return {
        ...state,
        postCommentList: {
          data: [],
          isFetching: false,
          isError: response
        }
      }
  }
}

export default process.env.NODE_ENV === 'development' ? logger<any>(postDetailMutations) : postDetailMutations
