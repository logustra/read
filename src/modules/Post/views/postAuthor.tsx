import React from 'react'
import { useParams } from 'react-router-dom'
import Styled from 'styled-components/macro'

import {
  userInitState,
  userMutations,
  userRequest
} from '../stores/User'
import {
  postsInitState,
  postsMutations,
  postsRequest
} from '../stores/Posts'

import { setTitle } from '@/stores/Common'

import { useCommonStore } from '@/utils'

import { PostList } from '../components'

import { 
  RDivider,
  RError,
  RLoading 
} from 'atoms'
import { RCard } from 'molecules'

export default function PostAuthor () {
  const { userId }: any = useParams()
  const title = 'Author'

  const { commonDispatch } = useCommonStore()
  
  React.useEffect(() => {
    setTitle(commonDispatch, title)
  }, [commonDispatch, title])

  const [
    userState,
    userDispatch
  ] = React.useReducer(
    userMutations,
    userInitState
  )

  React.useEffect(() => {
    if (userId) userRequest(userDispatch, userId)
  }, [userId])

  const [
    postsState, 
    postsDispatch
  ] = React.useReducer(
    postsMutations, 
    postsInitState
  )

  React.useEffect(() => {
    if (userId) postsRequest(postsDispatch, { userId })
  }, [userId])

  return (
    <StyledPostAuthor>
      {userState.isFetching && (
        <RLoading />
      )}

      {userState.isError && (
        <RError />
      )}
      
      {Object.keys(userState.data).length !== 0 && (
        <RCard>
          <h2 className="title">
            {userState.data.name}
          </h2>

          <RDivider />

          <div>
            Email: {userState.data.email} <br />
            Website: {userState.data.website}
          </div>
        </RCard>
      )}

      <h3 className="text-base font-bold my-4">
        Posted Article
      </h3>

      <PostList
        withAuthor={false}
        data={postsState}
      />
    </StyledPostAuthor>
  )
}

const StyledPostAuthor = Styled.div`
  /* your style */
`
