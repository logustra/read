import * as types from './exampleTypes'
import { API_EXAMPLE } from '../../constants/exampleConstants'
import { ExampleDataModel } from '../../typings/exampleTypings'
import { exampleService } from '../../services'

export async function exampleRequest (dispatch: Function) {
  dispatch({ type: types.EXAMPLE_REQUEST })

  try {
    const { data } = await exampleService.get(API_EXAMPLE) 

    exampleSuccess(dispatch, data)
  } catch (error) {
    exampleError(dispatch, error)
  }
}

function exampleSuccess (dispatch: Function, response: ExampleDataModel) {
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
