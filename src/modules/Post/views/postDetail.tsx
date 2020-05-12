import React from 'react'
import { 
  Link, 
  useParams 
} from 'react-router-dom'
import Styled from 'styled-components/macro'

import { CommentsDataModel } from '../typings/commentsTypings'
import {
  postInitState,
  postMutations,
  postRequest
} from '../stores/Post'
import { 
  commentsInitState, 
  commentsMutations,
  commentsRequest
} from '../stores/Comments'

import { UsersDataModel } from '@/typings/usersTypings'
import { setTitle } from '@/stores/Common'
import { usersRequest } from '@/stores/Users'

import { 
  useCommonStore,
  useUsersStore
} from '@/utils'

import { 
  RError,
  RLoading 
} from 'atoms'
import { RCard } from 'molecules'

export default function PostDetail () {
  const { postId }: any = useParams()
  const title = 'Detail'

  const { commonDispatch } = useCommonStore()
  
  React.useEffect(() => {
    setTitle(commonDispatch, title)
  }, [commonDispatch, title])

  const { 
    usersState, 
    usersDispatch
  } = useUsersStore()

  function handleUser (userId: number) {
    return usersState.data.find((item: UsersDataModel) => item.id === userId)
  }

  React.useEffect(() => {
    usersRequest(usersDispatch)
  }, [usersDispatch])

  const [
    postState, 
    postDispatch
  ] = React.useReducer(
    postMutations, 
    postInitState
  )

  React.useEffect(() => {
    if (postId) postRequest(postDispatch, postId)
  }, [postId])
  
  const [
    commentsState, 
    commentsDispatch
  ] = React.useReducer(
    commentsMutations, 
    commentsInitState
  )

  React.useEffect(() => {
    if (postId) commentsRequest(commentsDispatch, { postId })
  }, [postId])

  return (
    <StyledPostDetail>
      {postState.isFetching && (
        <RLoading />
      )} 

      {postState.isError && (
        <RError />
      )} 

      {Object.keys(postState.data).length !== 0 && (
        <RCard>
          <h2 className="title">
            {postState.data.title}
          </h2>

          {postState.data.userId && commentsState.data && (
            <div>
              Written by
              <Link
                to={`/author/${postState.data.userId}`}
                className="link"
              >
                {' ' + handleUser(postState.data.userId).name}
              </Link>
            </div>
          )}

          <div className="description">
            {postState.data.body}
          </div>
        </RCard>
      )}

      <h3 className="text-base font-bold my-4">
        Comments
      </h3>

      {commentsState.isFetching && (
        <RLoading />
      )}

      {commentsState.isError && (
        <RError />
      )}

      {commentsState.data.length !== 0 && (
        commentsState.data.map((item: CommentsDataModel) => (
          <RCard
            key={`comment-${item.id}`}
            className="mb-4"
          >
            <h3 className="title">
              {item.name}
            </h3>

            <div className="description">
              {item.body}
            </div>
          </RCard>
        ))
      )}
    </StyledPostDetail>
  )
}

const StyledPostDetail = Styled.div`
  /* your style */
`
