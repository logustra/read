import React from 'react'
import { Link } from 'react-router-dom'
import Styled from 'styled-components/macro'

import {
  Props,
  PostListModel
} from './postList.contracts'

import { rem } from '@/styles'

import { Loading } from 'atoms'
import { Card } from 'molecules'

export default function PostList ({ withAuthor, data }: Props) {
  return (
    <StyledPostList>
      {data.isFetching ? (
        <Loading />
      ) : (
        data.data.map((item: PostListModel) => (
          <div key={`post-${item.id}`}>
            <Card>
              <React.Fragment>
                <Link to={`/post/${item.id}`}>
                  <h3 className="title">{item.title}</h3>
                </Link>

                {withAuthor && item.author ? (
                  <div>
                    Written by
                    <Link to={`/author/${item.userId}`}>
                      {' ' + item.author.name}
                    </Link>
                  </div>
                ) : (
                  ''
                )}

                <div className="description">{item.body}</div>
              </React.Fragment>
            </Card>
          </div>
        ))
      )}
    </StyledPostList>
  )
}

const StyledPostList = Styled.div`
  .card {
    margin-bottom: ${rem('16px')}
  }
`
