import fg from 'fast-glob'
import { Express, Router } from 'express'

/**
 * Dynamically import all routes inside "/routes" folder that ends with routes.ts extension.
 */
const setupRoutes = (app: Express): void => {
  const router = Router()
  app.use('/', router)

  fg.sync('**/src/main/routes/**/**routes.ts').map(async (file) => {
    const route = (await import(`../../../${file}`)).default
    route(router)
  })
}

export default setupRoutes
