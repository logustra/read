import React from 'react'
import { 
  Link, 
  useParams 
} from 'react-router-dom'
import Styled from 'styled-components/macro'

import { PostCommentModel } from '../typings/postDetailTypings'
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
  StoresContext,
  setTitle
} from 'stores'

import { RLoading } from 'atoms'
import { RCard } from 'molecules'

export default function PostDetail () {
  const { postId }: any = useParams()
  const { commonDispatch } = React.useContext<any>(StoresContext)
  const title = 'Detail'
  
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

  React.useEffect(() => {
    postDetailRequest(postDetailDispatch, postId)
  }, [postId])

  React.useEffect(() => {
    authorDetailRequest(postAuthorDispatch, postDetail.data.userId)
  }, [postDetail.data.userId])
  
  React.useEffect(() => {
    setTitle(commonDispatch, title)
  }, [commonDispatch, title])

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
            <Link 
              to={`/author/${postDetail.data.userId}`}
              className="link"
            >
              {' ' + authorDetail.data.name}
            </Link>
          </div>

          <div className="description">
            {postDetail.data.body}
          </div>
        </RCard>
      )}

      <h3 className="text-base font-bold my-4">
        Comments
      </h3>

      {postCommentList.isFetching ? (
        <RLoading />
      ) : (
        postCommentList.data.map((item: PostCommentModel) => (
          <RCard 
            key={`comment-${item.id}`}
            className="mb-4"
          >
            <h3 className="title">
              {item.name}
            </h3>

            <div className="description">
              {item.body}
            </div>
          </RCard>
        ))
      )}
    </StyledPostDetail>
  )
}

const StyledPostDetail = Styled.div`
  /* your style */
`
