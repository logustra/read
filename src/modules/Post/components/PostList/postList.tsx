import React from 'react'
import { Link } from 'react-router-dom'
import Styled from 'styled-components/macro'

import { PostListModel, PostListProps } from '../../contracts/postListContracts'

import { rem } from '@/styles'

import { Loading } from 'atoms'
import { Card } from 'templates'

function PostList (props: PostListProps) {
  function renderPostAuthor (item: any) {
    return (
      <div>
        Written by 
        <Link to={`/author/${item.userId}`}>
          {` ` + item.author.name}
        </Link>
      </div>
    )
  }
  
  function renderPostList () {
    return props.data.data.map((item: PostListModel) => (
      <div key={`post-${item.id}`}>
        <Card>
          <Link to={`/post/${item.id}`}>
            <h3 className="title">
              {item.title}
            </h3>
          </Link>

          {props.withAuthor && item.author 
            ? renderPostAuthor(item)
            : ''
          }

          <div className="description">
            {item.body}
          </div>
        </Card>
      </div>
    ))
  }

  return (
    <StyledPostList>
      {props.data.isFetching
        ? <Loading />
        : renderPostList()
      }
    </StyledPostList>
  ) 
}

const StyledPostList = Styled.div`
  .card {
    margin-bottom: ${rem('16px')};
  }
`

export default PostList
