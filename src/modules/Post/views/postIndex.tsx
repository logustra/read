import React from 'react'

import {
  authorListRequest,
  postListRequest,
  postIndexInitState,
  postIndexReducer 
} from '../stores/PostIndex'

import { RLoading } from 'atoms'

import { PostList } from '../components'

export default function PostIndex () {
  const [postIndexState, postIndexDispatch] = React.useReducer(postIndexReducer, postIndexInitState)
  const { postList } = postIndexState

  React.useEffect(() => {
    authorListRequest(postIndexDispatch)
  }, [])

  React.useEffect(() => {
    postListRequest(postIndexDispatch)
  }, [])

  return (
    <div>
      <h2>Read</h2>
      {postList.isFetching ? (
        <RLoading />
      ) : (
        <PostList
          withAuthor={true}
          data={postList}
        />
      )}
    </div>
  )
}
