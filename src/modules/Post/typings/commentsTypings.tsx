export interface CommentsState {
  data: CommentsDataModel[],
  isFetching: boolean,
  isError: boolean | Error
}

export interface CommentsDataModel {
  postId: number,
  id: number,
  name: string,
  body: string
}

export interface CommentsAction {
  type: string,
  response: any
}
