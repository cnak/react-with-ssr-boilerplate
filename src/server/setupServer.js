import express from 'express'
import helmet from 'helmet'
import verifyJWT from 'express-jwt'
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken'

import getRoutes from './routes'
import reactApp from './app'

const TOKEN = '__session'

const setupServer = ({ middlewares = [] } = {}) => {
  const server = express()
  middlewares.map(middleware => server.use(middleware))

  server.use(getRoutes())
  server.use(cookieParser())
  server.use(helmet())
  server.use(reactApp())

  return server
}

export default setupServer
