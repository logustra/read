import React from 'react'

import {
  authorListRequest,
  postListRequest,
  postIndexInitState,
  postIndexReducer 
} from '../stores/PostIndex'

import { Loading } from 'atoms'

import { PostList } from '../components'

function PostIndex () {
  const [postIndexState, postIndexDispatch] = React.useReducer(postIndexReducer, postIndexInitState)
  const { postList } = postIndexState

  React.useEffect(() => {
    authorListRequest(postIndexDispatch)
    postListRequest(postIndexDispatch)
  }, [])

  return (
    <div>
      <h2>Read</h2>
      {postList.isFetching
        ? <Loading />
        : <PostList 
            withAuthor={true}
            data={postList} 
          />
      }
    </div>
  )
}

export default PostIndex
