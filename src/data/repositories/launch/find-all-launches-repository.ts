import { Launch } from '../../../domain/models'
import { FindAllRepository } from '../contracts/repository'

export type FindAllLaunchesParams = {
  search?: string
  limit?: number
  page?: number
}

export interface FindAllLaunchesRepository extends FindAllRepository<Launch> {}
