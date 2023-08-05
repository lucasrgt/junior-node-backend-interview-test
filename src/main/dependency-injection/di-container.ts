import 'reflect-metadata'
import { container } from 'tsyringe'
import {
  AddLaunchRepository,
  FindAllLaunchesRepository,
  FindChartDataRepository,
  FindResultsRepository
} from '../../data/repositories/launch'
import { MongoAddLaunchRepository } from '../../infra/database/mongodb/repositories/mongo-add-launch-repository-impl'
import { MongoFindAllLaunchesRepository } from '../../infra/database/mongodb/repositories/mongo-find-all-launches-repository'
import { MongoFindChartDataRepository } from '../../infra/database/mongodb/repositories/mongo-find-chart-data-repository-impl'
import { MongoFindResultsRepository } from '../../infra/database/mongodb/repositories/mongo-find-results-repository-impl'

/** Set up the Dependency Injection container and registers all needed singletons */
export default () => {
  _registerLaunch()
}

const _registerLaunch = () => {
  container.registerSingleton<FindAllLaunchesRepository>(
    'FindAllLaunchesRepository',
    MongoFindAllLaunchesRepository
  )
  container.registerSingleton<AddLaunchRepository>(
    'AddLaunchRepository',
    MongoAddLaunchRepository
  )
  container.registerSingleton<FindChartDataRepository>(
    'FindChartDataRepository',
    MongoFindChartDataRepository
  )
  container.registerSingleton<FindResultsRepository>(
    'FindResultsRepository',
    MongoFindResultsRepository
  )
}
