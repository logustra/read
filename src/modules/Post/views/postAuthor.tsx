import React from 'react'
import { useParams } from 'react-router-dom'
import Styled from 'styled-components/macro'

import {
  authorDetailRequest,
  postAuthorRequest,
  postAuthorInitState,
  postAuthorReducer 
} from '../stores/PostAuthor'

import { 
  setTitle, 
  commonInitState, 
  commonReducer 
} from '@/stores/Common'

import { PostList } from '../components'

import { RLoading } from 'atoms'
import { RCard } from 'molecules'

import { rem } from '@/styles'

export default function PostAuthor () {
  const { userId }: { [key: string]: string } = useParams()
  
  const [postAuthorState, postAuthorDispatch] = React.useReducer(postAuthorReducer, postAuthorInitState)
  const [commonState, commonDispatch] = React.useReducer(commonReducer, commonInitState)
  const { authorDetail, postAuthor } = postAuthorState
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
