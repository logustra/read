export interface PostAuthorState {
  authorDetail: {
    data: AuthorDetailModel,
    isFetching: boolean,
    isError: Error
  },

  postAuthor: {
    data: PostListModel[],
    isFetching: boolean,
    isError: Error
  }
}

export interface AuthorDetailModel {
  id: number,
  name: string,
  email: string,
  website: string
}

export interface PostListModel {
  userId: number,
  id: number,
  title: string,
  body: string
}

export interface PostAuthorAction {
  type: string,
  response: any
}

