import * as types from './postAuthorTypes'
import { 
  PostAuthorState, 
  PostAuthorAction 
} from '../../contracts/postAuthorContracts'

export const postAuthorInitState = {
  authorDetail: {
    data: {
      id: 0,
      name: '',
      email: '',
      website: ''
    },
    isFetching: false,
    isError: {}
  },

  postAuthor: {
    data: [],
    isFetching: false,
    isError: {}
  }
}

export function postAuthorReducer (state: PostAuthorState, action: PostAuthorAction) {
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
          data: postAuthorInitState.authorDetail.data,
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
          data: postAuthorInitState.postAuthor.data,
          isFetching: false,
          isError: response
        }
      }
  }
}
