import React from 'react'
import { Link } from 'react-router-dom'
import Styled from 'styled-components/macro'

import { Props } from './postList.contracts'

import { rem } from '@/styles'

import { Loading } from 'atoms'
import { Card } from 'templates'

function PostList (props: Props) {
  function renderPostAuthor (item: any) {
    return (
      <div>
        Written by 
        <Link to="/">
          {item.author.name}
        </Link>
      </div>
    )
  }
  
  function renderPostList () {
    return props.data.data.map((item: any) => {
      <div key={`post-${item.id}`}>
        <Card>
          <Link to="/">
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
    })
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
