import {
  FindAllLaunchesParams,
  FindAllLaunchesRepository
} from '../../../../data/repositories/launch'
import { Launch } from '../../../../domain/models'
import { MongoHelper } from '../helpers/mongo-helper'
import { parseBoolean } from '../helpers/parse-boolean'

export type PaginatedResponse<T> = {
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
  ): Promise<PaginatedResponse<Launch[]> | any> {
    const { search, limit = 5, page = 1 } = params

    const query: any = {}

    if (search) {
      const successSearch = parseBoolean(search)

      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { details: { $regex: search, $options: 'i' } },
        { success: { $regex: successSearch } }
      ]
    }

    console.log('Query:', query)

    const launchesCollection = MongoHelper.getCollection('launches')

    const launches = await launchesCollection
      .find(query)
      .skip((page - 1) * limit)
      .limit(limit)
      .toArray()

    if (launches.length === 0) {
      return { message: 'Não foi possível encontrar nenhum lançamento.' }
    }

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
