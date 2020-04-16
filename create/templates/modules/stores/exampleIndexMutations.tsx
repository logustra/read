
import logger from 'use-reducer-logger'

import * as types from './exampleIndexTypes'
import { 
  ExampleIndexState,
  ExampleIndexAction 
} from '../typings/exampleIndexTypings'

function exampleIndexMutations (state: ExampleIndexState, action: ExampleIndexAction) {
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

export default process.env.NODE_ENV === 'development' ? logger<any>(exampleIndexMutations) : exampleIndexMutations
