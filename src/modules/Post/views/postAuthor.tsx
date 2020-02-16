import React from 'react'
import Styled from 'styled-components/macro'

import { PostAuthorProps } from '../contracts/postAuthorContracts'
import {
  authorDetailRequest,
  postAuthorRequest,
  postAuthorInitState,
  postAuthorReducer 
} from '../stores/PostAuthor'

import { setTitle, commonInitState, commonReducer } from '@/stores/Common'

import { PostList } from '../components'

import { Loading } from 'atoms'
import { Card } from 'templates'

import { rem } from '@/styles'

function PostAuthor (props: PostAuthorProps) {
  const [postAuthorState, postAuthorDispatch] = React.useReducer(postAuthorReducer, postAuthorInitState)
  const [commonState, commonDispatch] = React.useReducer(commonReducer, commonInitState)
  const { authorDetail, postAuthor } = postAuthorState
  const title = authorDetail.data.name ? authorDetail.data.name : commonState.title

  React.useEffect(() => {
    authorDetailRequest(postAuthorDispatch, props.match.params.id)
    postAuthorRequest(postAuthorDispatch)
    setTitle(commonDispatch, title)
  }, [props.match.params.id, title])

  function renderAuthorDetail () {
    return (
      <Card>
        <h2 className="title">
          {authorDetail.data.name}
        </h2>
        <hr />
        <div>
          Email: {authorDetail.data.email} <br />
          Website: {authorDetail.data.website}
        </div>
      </Card>
    )
  }

  return (
    <StyledPostAuthor>
      {authorDetail.isFetching
        ? <Loading />
        : renderAuthorDetail()
      }

      <h3>Posted Article</h3>
      {postAuthor.isFetching
        ? <Loading />
        : <PostList 
            withAuthor={false}
            data={postAuthor}
          />
      }
    </StyledPostAuthor>
  )
}

const StyledPostAuthor = Styled.div`
  .card {
    margin-bottom: ${rem('16px')};
  }
`

export default PostAuthor
