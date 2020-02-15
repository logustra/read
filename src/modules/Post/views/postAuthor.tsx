import React from 'react'
import Styled from 'styled-components/macro'

import { PostAuthorProps } from '../contracts/postAuthorContracts'
import { authorDetailRequest, postAuthorRequest } from '../stores/PostAuthor/postAuthorActions'
import { postAuthorInitState, postAuthorReducer } from '../stores/PostAuthor/postAuthorReducer'

import { PostList } from '../components'

import { Loading } from 'atoms'
import { Card } from 'templates'

import { rem } from '@/styles'

function PostAuthor (props: PostAuthorProps) {
  const [postAuthorState, postAuthorDispatch] = React.useReducer(postAuthorReducer, postAuthorInitState)
  const { authorDetail, postAuthor } = postAuthorState

  React.useEffect(() => {
    authorDetailRequest(postAuthorDispatch, props.match.params.id)
    postAuthorRequest(postAuthorDispatch)
  }, [props.match.params.id])

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
