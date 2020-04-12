import * as types from './commonTypes'
import { SITE_TITLE } from '@/constants/commonContants'
import { 
  CommonState, 
  CommonAction 
} from '@/contracts/commonContracts'

export const commonInitState = {
  title: SITE_TITLE
}

export function commonReducer (state: CommonState, action: CommonAction): any {
  const { type, response } = action

  switch (type) {
    case types.SET_TITLE:
      document.title = response
      
      return {
        ...state,
        title: response
      }
  }
}
