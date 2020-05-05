import React from 'react'
import Styled from 'styled-components/macro'

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
    <StyledPostIndex>
      <h2 className="text-xl font-bold mb-5">
        Read
      </h2>

      {postList.isFetching ? (
        <RLoading />
      ) : (
        <PostList
          withAuthor={true}
          data={postList}
        />
      )}
    </StyledPostIndex>
  )
}

const StyledPostIndex = Styled.div`
  /* your style */
`
