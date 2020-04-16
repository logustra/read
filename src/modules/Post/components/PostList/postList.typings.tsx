export interface Props {
  withAuthor?: boolean,
  data: {
    data: PostListModel[],
    isFetching: boolean,
    isError: Error
  }
}

export interface PostListModel {
  userId: number,
  id: number,
  title: string,
  body: string,
  author?: AuthorListModel
}

export interface AuthorListModel {
  id: number,
  name: string
}
