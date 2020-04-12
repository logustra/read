import React from 'react'
import { useParams } from 'react-router-dom'
import Styled from 'styled-components/macro'

import {
  postAuthorInitState,
  postAuthorMutations,
  authorDetailRequest,
  postAuthorRequest
} from '../stores/PostAuthor'

import { 
  commonInitState, 
  commonMutations, 
  setTitle
} from '@/stores'

import { PostList } from '../components'

import { RLoading } from 'atoms'
import { RCard } from 'molecules'

import { rem } from '@/styles'

export default function PostAuthor () {
  const { userId }: any = useParams()
  
  const [
    postAuthorState, 
    postAuthorDispatch
  ] = React.useReducer(
    postAuthorMutations, 
    postAuthorInitState
  )
  const { 
    authorDetail, 
    postAuthor 
  } = postAuthorState

  const [
    commonState, 
    commonDispatch
  ] = React.useReducer(
    commonMutations, 
    commonInitState
  )
  const title = authorDetail.data.name ? authorDetail.data.name : commonState.title

  React.useEffect(() => {
    authorDetailRequest(postAuthorDispatch, userId)
  }, [userId])

  React.useEffect(() => {
    postAuthorRequest(postAuthorDispatch)
  }, [])

  React.useEffect(() => {
    setTitle(commonDispatch, title)
  }, [title])

  return (
    <StyledPostAuthor>
      {authorDetail.isFetching ? (
        <RLoading />
      ) : (
        <RCard>
          <h2 className="title">
            {authorDetail.data.name}
          </h2>
          <hr />
          <div>
            Email: {authorDetail.data.email} <br />
            Website: {authorDetail.data.website}
          </div>
        </RCard>
      )}

      <h3>Posted Article</h3>
      {postAuthor.isFetching ? (
        <RLoading />
      ) : (
        <PostList
          withAuthor={false}
          data={postAuthor}
        />
      )}
    </StyledPostAuthor>
  )
}

const StyledPostAuthor = Styled.div`
  .r-card {
    margin-bottom: ${rem('16px')};
  }
`
