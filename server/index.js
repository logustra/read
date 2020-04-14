const express = require('express')
const path = require('path')
const app = express()
const helmet = require('helmet')
const shrinkRay = require('shrink-ray-current')

const ROOT = process.cwd()
const DIST_PATH = path.join(ROOT, 'dist')
const PORT = process.env.PORT || 9900
const HOST = process.env.HOST || '0.0.0.0'

app.use(helmet())

app.use(shrinkRay({
  level: 9,
  brorli: {
    quality: 11
  }
}))

app.use(express.static(DIST_PATH, {
  etag: false,
  setHeaders: function (response) {
    response.set('Cache-Control', 'must-revalidate, public, max-age=31557600')
  }
}))

app.use('*', (_, response) => {
  return response.sendFile(path.join(DIST_PATH, 'index.html'))
})

app.listen(PORT, HOST)
console.log(`[App] running http://${HOST}:${PORT}`)
