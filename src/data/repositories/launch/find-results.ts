import { Launch, Result } from '../../../domain/models'
import { FindAllRepository, FindRepository } from '../contracts/repository'

export interface FindResultsRepository extends FindAllRepository<Result> {}
