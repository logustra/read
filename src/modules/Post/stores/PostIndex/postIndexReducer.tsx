import * as types from './postIndexTypes'
import { PostListState, PostListModel, PostListAction } from '../../contracts/postListContracts'

export const initStatePost = {
  authorList: {
    data: [],
    isFetching: false,
    isError: {}
  },

  postList: {
    data: [],
    isFetching: false,
    isError: {}
  }
}

export function reducerPost (state: PostListState, action: PostListAction) {
  const { type, response } = action
  const { authorList, postList } = state

  switch (type) {
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
          data: initStatePost.authorList.data,
          isFetching: false,
          isError: response
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
          data: initStatePost.postList.data,
          isFetching: false,
          isError: response
        }
      }
  }
}
