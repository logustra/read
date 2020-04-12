import React from 'react'
import Styled from 'styled-components/macro'

import { Props } from './rlayout.contracts'

import { rem } from '@/styles'

export default function RLayout ({ children }: Props) {
  return (
    <StyledRLayout className="r-layout">
      <div className="container">
        {children}
      </div>
    </StyledRLayout>
  )
}

const StyledRLayout = Styled.div`
  display: flex;
  justify-content: center;

  > .container {
    width: ${rem('480px')};
    padding: ${rem('16px')};
  }
`
