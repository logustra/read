import React from 'react'

import {
  postIndexInitState,
  postIndexMutations,
  authorListRequest,
  postListRequest
} from '../stores/PostIndex'

import { RLoading } from 'atoms'

import { PostList } from '../components'

export default function PostIndex () {
  const [
    postIndexState, 
    postIndexDispatch
  ] = React.useReducer(
    postIndexMutations, 
    postIndexInitState
  )
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
