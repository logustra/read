
import * as types from './exampleTypes'
import { 
  ExampleState,
  ExampleAction 
} from '../../typings/exampleTypings'

function exampleMutations (state: ExampleState, action: ExampleAction) {
  const { type, response } = action

  switch(type) {
    case types.EXAMPLE_REQUEST:
      return {
        ...state,
        isFetching: true
      }

    case types.EXAMPLE_SUCCESS:
      return {
        ...state,
        data: response,
        isFetching: false
      }

    case types.EXAMPLE_ERROR:
      return {
        data: [],
        isFetching: false,
        isError: response
      }
  }
}

export default exampleMutations
