import React from 'react'
import { Link } from 'react-router-dom'
import Styled from 'styled-components/macro'

import { PostCommentModel, PostDetailProps } from '../contracts/postDetailContracts'
import { postDetailRequest, postCommentListRequest } from '../stores/PostDetail/postDetailActions'
import { postDetailInitState, postDetailReducer } from '../stores/PostDetail/postDetailReducer'

import { Loading } from 'atoms'
import { Card } from 'templates'

import { rem } from '@/styles'

function PostDetail (props: PostDetailProps) {
  const [postDetailState, postDetailDispatch] = React.useReducer(postDetailReducer, postDetailInitState)
  const { postDetail, postCommentList } = postDetailState

  React.useEffect(() => {
    postDetailRequest(postDetailDispatch, props.match.params.id)
    postCommentListRequest(postDetailDispatch)
  }, [props.match.params.id])

  function renderPostDetail () {
    return (
      <Card>
        <h2 className="title">
          {postDetail.data.title}
        </h2>
        <div>
          Written by
          <Link to="/">
            {/* {authorDetail.data.name} */}
            {` ` + 'bla'}
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

export default PostDetail
