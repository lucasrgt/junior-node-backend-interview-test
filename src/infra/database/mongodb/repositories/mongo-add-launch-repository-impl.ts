import {
  AddLaunchParams,
  AddLaunchRepository
} from '../../../../data/repositories/launch'
import { Launch } from '../../../../domain/models'
import { MongoHelper } from '../helpers/mongo-helper'

export class MongoAddLaunchRepository implements AddLaunchRepository {
  async create(params: AddLaunchParams): Promise<Launch> {
    const { insertedId } = await MongoHelper.getCollection(
      'launches'
    ).insertOne(params)

    const launch = await MongoHelper.getCollection('launches').findOne({
      _id: insertedId
    })

    if (!launch) {
      throw new Error('Launch not created.')
    }

    return MongoHelper.map(launch)
  }
}
