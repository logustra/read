import React from 'react'
import Styled from 'styled-components/macro'
import tw from 'tailwind.macro'
import { rem } from 'polished'

import { Props } from './rlayout.typings'

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
  ${tw`
    flex
    justify-center
  `}

  > .container {
    width: ${rem('480px')};
    padding: ${rem('16px')};
  }
`
