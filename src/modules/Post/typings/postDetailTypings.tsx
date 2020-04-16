export interface PostDetailState {
  postDetail: {
    data: PostDetailModel[],
    isFetching: boolean,
    isError: Error
  },

  postCommentList: {
    data: PostCommentModel[],
    isFetching: boolean,
    isError: Error
  }
}

export interface PostDetailModel {
  userId: number,
  id: number,
  title: string,
  body: string
}

export interface PostCommentModel {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string
}

export interface PostDetailAction {
  type: string,
  response: any
}

