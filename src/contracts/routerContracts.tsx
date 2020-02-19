import { FunctionComponent } from 'react'

export interface RouterType {
  path: string,
  exact: boolean,
  component: FunctionComponent
}
