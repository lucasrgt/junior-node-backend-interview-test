import { ChartData, Launch } from '../../../domain/models'
import { FindAllRepository, FindRepository } from '../contracts/repository'

export interface FindChartDataRepository extends FindAllRepository<ChartData> {}
