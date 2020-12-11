import React from 'react'
import Styled from 'styled-components/macro'

import {
  postsInitState,
  postsMutations,
  postsRequest
} from '../stores/Posts'

import { usersRequest } from '@/stores/Users'

import { useUsersStore } from '@/utils'

import { PostList } from '../components'

export default function PostIndex () {
  const {
    usersState,
    usersDispatch
  } = useUsersStore()

  React.useEffect(() => {
    usersRequest(usersDispatch)
  }, [usersDispatch])

  const [
    postsState,
    postsDispatch
  ] = React.useReducer(
    postsMutations,
    postsInitState
  )

  React.useEffect(() => {
    postsRequest(postsDispatch)
  }, [])

  return (
    <StyledPostIndex>
      <h2 className="text-xl font-bold mb-5">
        Read
      </h2>

      <PostList
        withAuthor={true}
        users={usersState}
        data={postsState}
      />
    </StyledPostIndex>
  )
}

const StyledPostIndex = Styled.div`
  /* your style */
`
