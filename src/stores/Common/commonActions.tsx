import * as types from './commonTypes'
import { CommonState } from '@/contracts/commonContracts'

export function setTitle (dispatch: Function, response: CommonState) {
  dispatch({
    type: types.SET_TITLE,
    response
  })
}
