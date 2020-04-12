import React from 'react'
import Styled from 'styled-components/macro'

import { 
  exampleIndexInitState,
  exampleIndexMutations,
  exampleRequest
} from '../stores'

export default function ExampleIndex () {
  const [
    exampleState, 
    exampleDispatch
  ] = React.useReducer(
    exampleIndexMutations, 
    exampleIndexInitState
  )

  React.useEffect(() => {
    exampleRequest(exampleDispatch)
  }, [])

  return (
    <StyledRExample>
      <div>Bismillah, Hello World!</div>
    </StyledRExample>
  )
}

const StyledRExample = Styled.div`

`
