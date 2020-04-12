import React from 'react'
import { Link } from 'react-router-dom'
import Styled from 'styled-components/macro'

import {
  Props,
  PostListModel
} from './postList.contracts'

import { rem } from '@/styles'

import { RLoading } from 'atoms'
import { RCard } from 'molecules'

export default function PostList ({ withAuthor, data }: Props) {
  return (
    <StyledPostList>
      {data.isFetching ? (
        <RLoading />
      ) : (
        data.data.map((item: PostListModel) => (
          <div key={`post-${item.id}`}>
            <RCard>
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
            </RCard>
          </div>
        ))
      )}
    </StyledPostList>
  )
}

const StyledPostList = Styled.div`
  .r-card {
    margin-bottom: ${rem('16px')}
  }
`
