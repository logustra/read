import React from 'react'
import Styled, { ThemeContext } from 'styled-components/macro'

import { Props } from './rcard.typings'

import { rem } from '@/styles'

export default function RCard ({ children }: Props) {
  const theme = React.useContext(ThemeContext)

  return (
    <StyledRCard 
      theme={theme}
      className="r-card"
    >
      <React.Fragment>
        {children}
      </React.Fragment>
    </StyledRCard>
  )
}

const StyledRCard = Styled.div`
  padding: ${rem('16px')};
  border-radius: ${rem('6px')};
  background-color: ${(props => props.theme.colors.white)};

  > a {
    color: ${(props => props.theme.colors.black)};;
    text-decoration: none;

    ~ div > a {
      text-decoration: none;
    }
  }

  .title {
    margin-top: 0;
    margin-bottom: ${rem('2px')};
    font-weight: 700;
  }

  .description {
    margin-top: ${rem('12px')};
  }
`
