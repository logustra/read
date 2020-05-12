import React from 'react'
import Styled from 'styled-components/macro'

import { 
  exampleInitState,
  exampleMutations,
  exampleRequest
} from '../stores'

export default function ExampleIndex () {
  const [
    exampleState, 
    exampleDispatch
  ] = React.useReducer(
    exampleMutations, 
    exampleInitState
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
  /* your style */
`
