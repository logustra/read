import React from 'react'

import { authorListRequest, postListRequest } from '../stores/PostIndex/postIndexActions'
import { initStatePost, reducerPost } from '../stores/PostIndex/postIndexReducer'

import { Loading } from 'atoms'

import { PostList } from '../components'

function PostIndex () {
  const [statePost, dispatchPost] = React.useReducer(reducerPost, initStatePost)
  const { postList } = statePost

  React.useEffect(() => {
    authorListRequest(dispatchPost)
    postListRequest(dispatchPost)
  }, [])

  return (
    <div>
      <h2>Read</h2>
      {postList.isFetching
        ? <Loading />
        : <PostList 
            withAuthor={true}
            data={postList} 
          />
      }
    </div>
  )
}

export default PostIndex
