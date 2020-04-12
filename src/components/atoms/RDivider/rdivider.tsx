import React from 'react'
import Styled from 'styled-components/macro'
import tw from 'tailwind.macro'

export default function RDivider () {
  return (
    <StyledRDivider className="r-divider" />
  )
}

const StyledRDivider = Styled.hr`
  ${tw`
    border-black
    my-2
  `}
`
