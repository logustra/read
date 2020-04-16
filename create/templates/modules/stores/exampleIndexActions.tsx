import * as types from './exampleIndexTypes'
import { API_EXAMPLE } from '../constants/exampleConstants'
import { ExampleIndexModel } from '../typings/exampleIndexTypings'
import { exampleService } from '../services'

export async function exampleRequest (dispatch: Function) {
  dispatch({ type: types.EXAMPLE_REQUEST })

  try {
    const { data } = await exampleService.get(API_EXAMPLE) 

    exampleSuccess(dispatch, data)
  } catch (error) {
    exampleError(dispatch, error)
  }
}

function exampleSuccess (dispatch: Function, response: ExampleIndexModel) {
  dispatch({ 
    type: types.EXAMPLE_SUCCESS,
    response
  })
}

function exampleError (dispatch: Function, response: boolean) {
  dispatch({ 
    type: types.EXAMPLE_ERROR,
    response
  })
}
