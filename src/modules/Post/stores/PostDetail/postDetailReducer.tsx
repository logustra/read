import * as types from './postDetailTypes'
import { 
  PostDetailState, 
  PostDetailAction 
} from '../../contracts/postDetailContracts'

export const postDetailInitState = {
  postDetail: {
    data: [],
    isFetching: false,
    isError: {}
  },

  postCommentList: {
    data: [],
    isFetching: false,
    isError: {}
  }
}

export function postDetailReducer (state: PostDetailState, action: PostDetailAction): any {
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
          data: postDetailInitState.postDetail.data,
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
          data: postDetailInitState.postCommentList.data,
          isFetching: false,
          isError: response
        }
      }
  }
}
