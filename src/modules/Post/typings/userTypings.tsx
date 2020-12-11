export interface UserState {
  data: UserDataModel,
  isFetching: boolean,
  isError: boolean | Error
}

export interface UserDataModel {
  name: string,
  email: string,
  website: string
}

export interface UserAction {
  type: string,
  response: any
}
