import React from 'react'
import Styled from 'styled-components/macro'

import { Props } from './rexample.typings'

export default function RExample ({ children, className }: Props) {
  return (
    <StyledRExample className={`r-example ${className}`}>
      {children}
    </StyledRExample>
  )
}

const StyledRExample = Styled.div`

`
