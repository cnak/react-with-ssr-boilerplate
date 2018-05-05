import { Router } from 'express'

const getRoutes = () => {
  return Router()
  // fill me with a route please, example below
    /* .use('/messages', async (req, res, next) => {
      const thread = await fetchFirstThread()
      const { storeInitiaState } = res || {}
      res.storeInitiaState = { ...storeInitiaState, thread }
      next()
    }) */
}

export default getRoutes
