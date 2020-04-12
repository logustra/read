import React from 'react'
import { 
  Link, 
  useParams 
} from 'react-router-dom'
import Styled from 'styled-components/macro'

import { PostCommentModel } from '../contracts/postDetailContracts'
import {
  postDetailInitState,
  postDetailMutations,
  postDetailRequest,
  postCommentListRequest
} from '../stores/PostDetail'
import { 
  postAuthorInitState, 
  postAuthorMutations,
  authorDetailRequest
} from '../stores/PostAuthor'

import { 
  commonInitState, 
  commonMutations,
  setTitle
} from '@/stores'

import { RLoading } from 'atoms'
import { RCard } from 'molecules'

import { rem } from '@/styles'

export default function PostDetail () {
  const { postId }: any = useParams()
  
  const [
    postDetailState, 
    postDetailDispatch
  ] = React.useReducer(
    postDetailMutations, 
    postDetailInitState
  )
  const { 
    postDetail, 
    postCommentList 
  } = postDetailState

  const [
    postAuthorState, 
    postAuthorDispatch
  ] = React.useReducer(
    postAuthorMutations, 
    postAuthorInitState
  )
  const { authorDetail } = postAuthorState

  const [
    commonState, 
    commonDispatch
  ] = React.useReducer(
    commonMutations, 
    commonInitState
  )
  const title = postDetail.data.title ? postDetail.data.title : commonState.title

  React.useEffect(() => {
    postDetailRequest(postDetailDispatch, postId)
  }, [postId])

  React.useEffect(() => {
    authorDetailRequest(postAuthorDispatch, postDetail.data.userId)
  }, [postDetail.data.userId])
  
  React.useEffect(() => {
    setTitle(commonDispatch, title)
  }, [title])

  React.useEffect(() => {
    postCommentListRequest(postDetailDispatch)
  }, [])

  return (
    <StyledPostDetail>
      {postDetail.isFetching ? (
        <RLoading />
      ) : (
        <RCard>
          <h2 className="title">
            {postDetail.data.title}
          </h2>
          <div>
            Written by
            <Link to={`/author/${postDetail.data.userId}`}>
              {' ' + authorDetail.data.name}
            </Link>
          </div>

          <div className="description">
            {postDetail.data.body}
          </div>
        </RCard>
      )}

      <div className="comment">
        <h3>Comments</h3>

        {postCommentList.isFetching ? (
          <RLoading />
        ) : (
          postCommentList.data.map((item: PostCommentModel) => (
            <RCard key={`comment-${item.id}`}>
              <h3 className="title">
                {item.name}
              </h3>

              <div className="description">
                {item.body}
              </div>
            </RCard>
          ))
        )}
      </div>
    </StyledPostDetail>
  )
}

const StyledPostDetail = Styled.div`
  .r-card {
    margin-bottom: ${rem('16px')};

    a {
      text-decoration: none;
    }
  }
`
