import setupFindPaginatedLaunchesRoute from './find-paginated-launches-route'
import setupCreateLaunch from './add-launch-route'
import setupFindChartDataRoute from './stats/find-chart-data-route'
import setupFindResults from './results/find-results-route'
import { Router } from 'express'

/** Export all Launch routes */
export default (router: Router): void => {
  const launchRouter = Router()

  setupFindResults(launchRouter)
  setupFindChartDataRoute(launchRouter)
  setupFindPaginatedLaunchesRoute(launchRouter)
  setupFindResults(launchRouter)
  setupCreateLaunch(launchRouter)

  router.use('/launches', launchRouter)
}
