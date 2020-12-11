import React from 'react'
import { Link } from 'react-router-dom'
import Styled from 'styled-components/macro'

import { Props } from './postList.typings'
import { PostsDataModel } from '../../typings/postsTypings'

import {
  RError,
  RLoading
} from 'atoms'
import { RCard } from 'molecules'

export default function PostList ({ withAuthor, users, data }: Props) {
  function handleUser (userId: number): any {
    if (users) return users.data.find(item => item.id === userId)
  }

  return (
    <StyledPostList>
      {data.isFetching && <RLoading />}
      {data.isError && <RError />}
      {data.data.length !== 0 && (
        data.data.map((item: PostsDataModel) => (
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

            {withAuthor && users && users.data.length !== 0 && (
              <div>
                Written by
                <Link
                  to={`/author/${item.userId}`}
                  className="link"
                >
                  {' ' + handleUser(item.userId).name}
                </Link>
              </div>
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
  /* your style */
`
