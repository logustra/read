export interface PostIndexState {
  authorList: {
    data: AuthorListModel[],
    isFetching: boolean,
    isError: Error
  },

  postList: {
    data: PostListModel[],
    isFetching: boolean,
    isError: Error
  }
}

export interface PostListModel {
  userId: number,
  id: number,
  title: string,
  body: string
}

export interface AuthorListModel {
  id: number,
  name: string
}

export interface PostIndexAction {
  type: string,
  response: any
}
