import React from 'react'

import { Props } from '@/typings/storeTypings'
import {
  commonContext as CommonStore,
  commonInitState,
  commonMutations
} from '@/stores/Common'
import {
  usersContext as UsersStore,
  usersInitState,
  usersMutations
} from '@/stores/Users'

export default function Store ({ children }: Props) {
  const [
    commonState,
    commonDispatch
  ] = React.useReducer(
    commonMutations,
    commonInitState
  )

  const [
    usersState,
    usersDispatch
  ] = React.useReducer(
    usersMutations,
    usersInitState
  )

  return (
    <CommonStore.Provider value={{ commonState, commonDispatch }}>
      <UsersStore.Provider value={{ usersState, usersDispatch }}>
        {children}
      </UsersStore.Provider>
    </CommonStore.Provider>
  )
}
