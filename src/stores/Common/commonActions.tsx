import * as types from './commonTypes'

export function setTitle (dispatch: Function, response: string) {
  dispatch({
    type: types.SET_TITLE,
    response
  })
}

export function setOffline (dispatch: Function, response: boolean) {
  dispatch({
    type: types.SET_OFFLINE,
    response
  })
}
