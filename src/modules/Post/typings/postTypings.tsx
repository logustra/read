export interface PostState {
  data: PostDataModel[],
  isFetching: boolean,
  isError: boolean | Error
}

export interface PostDataModel {
  userId: number,
  id: number,
  title: string,
  body: string
}

export interface PostAction {
  type: string,
  response: any
}
