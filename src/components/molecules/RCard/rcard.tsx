import React from 'react'
import Styled from 'styled-components/macro'
import tw from 'tailwind.macro'

import { Props } from './rcard.typings'

export default function RCard ({ children, className }: Props) {
  return (
    <StyledRCard className={`r-card ${className}`}>
      <React.Fragment>
        {children}
      </React.Fragment>
    </StyledRCard>
  )
}

const StyledRCard = Styled.div`
  ${tw`
    p-4
    rounded
    bg-white
  `};

  .title {
    ${tw`
      mt-0
      font-bold
      text-base
      text-black
      no-underline
    `};
  }

  .link {
    ${tw`
      text-blue-500
      no-underline
    `};
  }

  .description {
    ${tw`mt-3`};
  }
`
