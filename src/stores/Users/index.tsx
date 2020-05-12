import React from 'react'

import usersInitState from './usersState'
import usersMutations from './usersMutations'
import { usersRequest } from './usersActions'

const usersContext = React.createContext({})

export {
  usersContext,
  usersInitState,
  usersMutations,
  usersRequest
}
