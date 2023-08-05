import { FindAllLaunchesRepository } from '../../../../data/repositories/launch'
import { Launch } from '../../../../domain/models'
import { MongoHelper } from '../helpers/mongo-helper'

export interface FindAllLaunchesParams {
  name?: string
  details?: string
  limit?: number
  page?: number
}

export interface PaginatedResponse<T> {
  results: T
  totalDocs: number
  page: number
  totalPages: number
  hasNext: boolean
  hasPrev: boolean
}

export class MongoFindAllLaunchesRepository
  implements FindAllLaunchesRepository
{
  async findAll(
    params: FindAllLaunchesParams
  ): Promise<PaginatedResponse<Launch[]>> {
    const {
      name: searchName,
      details: searchDetails,
      limit = 5,
      page = 1
    } = params

    const query: any = {}

    if (searchName) query.name = { $regex: searchName, $options: 'i' }
    if (searchDetails) query.details = { $regex: searchDetails, $options: 'i' }

    const launchesCollection = MongoHelper.getCollection('launches')

    const launches = await launchesCollection
      .find(query)
      .skip((page - 1) * limit)
      .limit(limit)
      .toArray()

    const totalDocs = await launchesCollection.countDocuments(query)
    const totalPages = Math.ceil(totalDocs / limit)

    return {
      results: launches.map(MongoHelper.map),
      totalDocs,
      page,
      totalPages,
      hasNext: page < totalPages,
      hasPrev: page > 1
    }
  }
}
