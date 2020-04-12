import React from 'react'
import { useParams } from 'react-router-dom'
import Styled from 'styled-components/macro'
import { rem } from 'polished'

import {
  postAuthorInitState,
  postAuthorMutations,
  authorDetailRequest,
  postAuthorRequest
} from '../stores/PostAuthor'

import { 
  StoresContext,
  setTitle
} from '@/stores'

import { PostList } from '../components'

import { RLoading } from 'atoms'
import { RCard } from 'molecules'

export default function PostAuthor () {
  const { userId }: any = useParams()
  const { commonDispatch } = React.useContext<any>(StoresContext)
  const title = 'Author'
  
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

  React.useEffect(() => {
    authorDetailRequest(postAuthorDispatch, userId)
  }, [userId])

  React.useEffect(() => {
    postAuthorRequest(postAuthorDispatch)
  }, [])

  React.useEffect(() => {
    setTitle(commonDispatch, title)
  }, [commonDispatch, title])

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
