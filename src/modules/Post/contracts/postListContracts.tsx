export interface PostListState {
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

export interface PostListAction {
  type: string,
  response: any
}

export interface PostListModel {
  userId: number,
  id: number,
  title: string,
  body: string,
  author: AuthorListModel
}

export interface AuthorListModel {
  id: number,
  name: string
}
