import React from 'react'
import Styled from 'styled-components/macro'
import tw from 'tailwind.macro'
import { rem } from 'polished'

import { Props } from './rlayout.typings'

import { 
  StoresContext,
  setOffline
} from '@/stores'

import { RAlert } from 'molecules'

export default function RLayout ({ children }: Props) {
  const { 
    commonState, 
    commonDispatch 
  } = React.useContext<any>(StoresContext)

  function handleSetOffline () {
    setOffline(commonDispatch, !window.navigator.onLine)
  }

  React.useEffect(() => {
    window.addEventListener('online', handleSetOffline)
    window.addEventListener('offline', handleSetOffline)

    return () => {
      window.removeEventListener('online', handleSetOffline)
      window.removeEventListener('offline', handleSetOffline)
    }
  }, []) // eslint-disable-line

  return (
    <StyledRLayout className="r-layout">
      {commonState.isOffline ? (
        <RAlert>
          {'You\'re Offline'}
        </RAlert>
      ) : (
        null
      )}

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
    ${tw`p-4`}
  }
`
