import React from 'react'

import { Props } from '@/typings/storeTypings'
import {
  StoresContext as Stores,
  commonInitState,
  commonMutations
} from '@/stores'

export default function Store ({ children }: Props) {
  const [
    commonState, 
    commonDispatch
  ] = React.useReducer(
    commonMutations, 
    commonInitState
  )

  return (
    <Stores.Provider value={{ commonState, commonDispatch }}>
      {children}
    </Stores.Provider>
  )
}
