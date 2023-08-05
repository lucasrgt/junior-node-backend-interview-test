import { AddRepository } from '../contracts/repository'
import { Launch } from '../../../domain/models'

export interface AddLaunchRepository
  extends AddRepository<AddLaunchParams, Launch> {}

export type AddLaunchParams = Omit<Launch, 'id'>
