import React from 'react'
import Styled from 'styled-components/macro'
import tw from 'tailwind.macro'
import { rgba } from 'polished'

import { Props } from './ralert.typings'

import { 
  colors,
  opacity
} from '@/styles'

export default function RAlert ({ children, className }: Props) {
  return (
    <StyledRAlert className={`r-alert ${className}`}>
      {children}
    </StyledRAlert>
  )
}

const StyledRAlert = Styled.div`
  background-color: ${rgba(colors.black, Number(opacity[50]))};
  ${tw`
    fixed
    top-0
    left-0
    w-screen
    p-2
    text-center
    text-white
  `}
`
