import React from 'react'
import { Link } from 'react-router-dom'
import Styled from 'styled-components/macro'

import {
  Props,
  PostListModel
} from './postList.typings'

import { RLoading } from 'atoms'
import { RCard } from 'molecules'

export default function PostList ({ withAuthor, data }: Props) {
  return (
    <StyledPostList>
      {data.isFetching ? (
        <RLoading />
      ) : (
        data.data.map((item: PostListModel) => (
          <RCard 
            key={`post-${item.id}`}
            className="mb-4"
          >
            <Link 
              to={`/post/${item.id}`}
              className="title"
            >
              {item.title}
            </Link>

            {withAuthor && item.author ? (
              <div>
                Written by
                <Link
                  to={`/author/${item.userId}`}
                  className="link"
                >
                  {' ' + item.author.name}
                </Link>
              </div>
            ) : (
              null
            )}

            <div className="description">
              {item.body}
            </div>
          </RCard>
        ))
      )}
    </StyledPostList>
  )
}

const StyledPostList = Styled.div`

`
