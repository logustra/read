import React from 'react'
import progress from 'nprogress'
import 'nprogress/nprogress.css'

import { Props } from './preloader.contracts'

progress.configure({ showSpinner: false })

export default function Preloader ({children}: Props) {
  React.useEffect(() => {
    progress.start()
  })

  React.useEffect(() => {
    progress.done()
  })

  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  )
}
