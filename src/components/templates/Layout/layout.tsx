import React from 'react'
import Styled from 'styled-components/macro'

import { Props } from './layout.contracts'

import { rem } from '@/styles'

export default function Layout ({ children }: Props) {
  return (
    <StyledLayout>
      <div className="layout-container">
        {children}
      </div>
    </StyledLayout>
  )
}

const StyledLayout = Styled.div`
  display: flex;
  justify-content: center;

  .layout-container {
    width: ${rem('480px')};
    padding: ${rem('16px')};
  }
`
