import * as types from './commonTypes'
import {
  CommonState,
  CommonAction
} from '@/typings/commonTypings'

function commonMutations (state: CommonState, action: CommonAction): any {
  const { type, response } = action

  switch (type) {
    case types.SET_TITLE:
      document.title = response

      return {
        ...state,
        title: response
      }

    case types.SET_OFFLINE:
      return {
        ...state,
        isOffline: response
      }
  }
}

export default commonMutations
