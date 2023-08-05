import { Express } from 'express'
import { bodyParser, contentType, cors } from '../middlewares'

/** Setup all middlewares of the API */
const setupMiddlewares = (app: Express): void => {
  app.use(bodyParser)
  app.use(cors)
  app.use(contentType)
}

export default setupMiddlewares
