import { PostsState } from '../../typings/postsTypings'

import { UsersState } from '@/typings/usersTypings'

export interface Props {
  withAuthor?: boolean,
  users?: UsersState,
  data: PostsState
}
