import { Launch } from '../../../domain/models'
import { FindAllRepository } from '../contracts/repository'

export type FindAllLaunchesParams = {
  name?: string
  details?: string
  success?: boolean
  limit?: number
  page?: number
}

export interface FindAllLaunchesRepository extends FindAllRepository<Launch> {}
