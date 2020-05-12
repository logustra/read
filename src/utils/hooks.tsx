import React from 'react'

import { commonContext } from '@/stores/Common'
import { usersContext } from '@/stores/Users'

export function useCommonStore () {
  const { commonState, commonDispatch } = React.useContext<any>(commonContext)

  return { commonState, commonDispatch }
}

export function useUsersStore () {
  const { usersState, usersDispatch } = React.useContext<any>(usersContext)

  return { usersState, usersDispatch }
}
