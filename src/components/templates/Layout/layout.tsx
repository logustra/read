import React from 'react'
import Styled from 'styled-components/macro'

import { Props } from './layout.contracts'

import { rem } from '@/styles'

function Layout (props: Props) {
  return (
    <StyledLayout>
      <div className="layout-container">
        {props.children}
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

export default Layout
