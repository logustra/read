import { FunctionComponent } from 'react'

export interface RoutesModel {
  path: string,
  exact: boolean,
  component: FunctionComponent
}
