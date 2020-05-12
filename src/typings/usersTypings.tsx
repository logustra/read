export interface UsersState {
  data: UsersDataModel[],
  isFetching: boolean,
  isError: boolean | Error
}

export interface UsersDataModel {
  id: number,
  name: string,
  email: string
}

export interface UsersAction {
  type: string,
  response: any
}
