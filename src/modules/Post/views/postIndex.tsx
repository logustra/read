import React from 'react'

import { authorListRequest, postListRequest } from '../stores/PostIndex/postIndexActions'
import { postInitState, postReducer } from '../stores/PostIndex/postIndexReducer'

import { Loading } from 'atoms'

import { PostList } from '../components'

function PostIndex () {
  const [postState, postDispatch] = React.useReducer(postReducer, postInitState)
  const { postList } = postState

  React.useEffect(() => {
    authorListRequest(postDispatch)
    postListRequest(postDispatch)
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
