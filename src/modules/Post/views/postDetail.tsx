import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Styled from 'styled-components/macro'

import { PostCommentModel } from '../contracts/postDetailContracts'
import {
  postDetailRequest,
  postCommentListRequest,
  postDetailInitState,
  postDetailReducer 
} from '../stores/PostDetail'
import { authorDetailRequest, postAuthorInitState, postAuthorReducer } from '../stores/PostAuthor'

import { setTitle, commonInitState, commonReducer } from '@/stores/Common'

import { Loading } from 'atoms'
import { Card } from 'templates'

import { rem } from '@/styles'

export default function PostDetail () {
  const [postDetailState, postDetailDispatch] = React.useReducer(postDetailReducer, postDetailInitState)
  const [postAuthorState, postAuthorDispatch] = React.useReducer(postAuthorReducer, postAuthorInitState)
  const [commonState, commonDispatch] = React.useReducer(commonReducer, commonInitState)
  const { postId }: {[key: string]: string} = useParams()
  const { postDetail, postCommentList } = postDetailState
  const { authorDetail } = postAuthorState
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

  function renderPostDetail () {
    return (
      <Card>
        <h2 className="title">
          {postDetail.data.title}
        </h2>
        <div>
          Written by
          <Link to={`/author/${postDetail.data.userId}`}>
            {` ` + authorDetail.data.name}
          </Link>
        </div>

        <div className="description">
          {postDetail.data.body}
        </div>
      </Card>
    )
  }

  function renderPostCommentList () {
    return postCommentList.data.map((item: PostCommentModel) => (
      <Card key={`comment-${item.id}`}>
        <h3 className="title">
          {item.name}
        </h3>

        <div className="description">
          {item.body}
        </div>
      </Card>
    ))
  }

  return (
    <StyledPostDetail>
      {postDetail.isFetching
        ? <Loading />
        : renderPostDetail()
      }

      <div className="comment">
        <h3>Comments</h3>

        {postCommentList.isFetching
          ? <Loading />
          : renderPostCommentList()
        }
      </div>
    </StyledPostDetail>
  )
}

const StyledPostDetail = Styled.div`
  .card {
    margin-bottom: ${rem('16px')};

    a {
      text-decoration: none;
    }
  }
`
