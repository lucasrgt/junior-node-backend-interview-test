import 'reflect-metadata'
import express from 'express'
import setupMiddlewares from './setup-middlewares'
import dotenv from 'dotenv'
import setupRoutes from './routes'
import setupInjectionContainer from '../dependency-injection/di-container'

/** Server initial setup. All configuration functions must be called here.*/
const app = express()

dotenv.config()
setupMiddlewares(app)
setupInjectionContainer()
setupRoutes(app)

export default app
