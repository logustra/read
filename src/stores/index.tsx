import React from 'react'

import commonInitState from './commonState'
import commonMutations from './commonMutations'
import { 
  setTitle,
  setOffline
} from './commonActions'

const StoresContext = React.createContext({})

export {
  StoresContext,
  commonInitState,
  commonMutations,
  setTitle,
  setOffline
}
