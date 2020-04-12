import React from 'react'
import Styled from 'styled-components/macro'
import tw from 'tailwind.macro'

export default function RDivider () {
  return (
    <StyledDivider className="r-divider" />
  )
}

const StyledDivider = Styled.hr`
  ${tw`
    border-black
    my-2
  `}
`
