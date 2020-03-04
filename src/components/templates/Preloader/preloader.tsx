import React from 'react'
import progress from 'nprogress'
import 'nprogress/nprogress.css'

import { Props } from './preloader.contracts'

progress.configure({ showSpinner: false })

export default function Preloader ({ children }: Props) {
  const [mount, setMount] = React.useState(false)

  if (!mount) progress.start()

  React.useEffect(() => {
    setMount(true)
    progress.done()
  }, [mount])

  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  )
}
