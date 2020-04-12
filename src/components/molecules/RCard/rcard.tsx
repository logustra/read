import React from 'react'
import Styled from 'styled-components/macro'
import { rem } from 'polished'

import { Props } from './rcard.typings'

import { colors } from '@/styles'

export default function RCard ({ children }: Props) {
  return (
    <StyledRCard className="r-card">
      <React.Fragment>
        {children}
      </React.Fragment>
    </StyledRCard>
  )
}

const StyledRCard = Styled.div`
  padding: ${rem('16px')};
  border-radius: ${rem('6px')};
  background-color: ${colors.white};

  > a {
    color: ${colors.black};
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
