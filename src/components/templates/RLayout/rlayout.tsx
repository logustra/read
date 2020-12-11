import React from 'react'
import Styled from 'styled-components/macro'
import tw from 'tailwind.macro'
import { rem } from 'polished'

import { Props } from './rlayout.typings'

import { setOffline } from '@/stores/Common'

import { useCommonStore } from '@/utils'

export default function RLayout ({ children }: Props) {
  const {
    commonState,
    commonDispatch
  } = useCommonStore()

  function handleOffline () {
    setOffline(commonDispatch, !window.navigator.onLine)
  }

  React.useEffect(() => {
    window.addEventListener('online', handleOffline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOffline)
      window.removeEventListener('offline', handleOffline)
    }
  }, []) // eslint-disable-line

  return (
    <StyledRLayout className="r-layout">
      {commonState.isOffline && (
        <div className="offline">
          {'You\'re Offline'}
        </div>
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

  > .offline {
    ${tw`
      fixed 
      bg-red-500 
      text-white 
      text-center 
      p-1 
      w-full 
      left-0 
      z-20
    `};
  }

  > .container {
    ${tw`p-4`};
    width: ${rem('480px')};
  }
`
