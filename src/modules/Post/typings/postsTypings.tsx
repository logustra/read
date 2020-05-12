export interface PostsState {
  data: PostsDataModel[],
  isFetching: boolean,
  isError: boolean | Error
}

export interface PostsDataModel {
  userId: number,
  id: number,
  title: string,
  body: string
}

export interface PostsAction {
  type: string,
  response: any
}
