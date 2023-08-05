import { MongoHelper } from '../helpers/mongo-helper'
import { FindChartDataRepository } from '../../../../data/repositories/launch'

export class MongoFindChartDataRepository implements FindChartDataRepository {
  async findAll(): Promise<any> {
    const launchesCollection = MongoHelper.getCollection('launches')

    const launches = await launchesCollection.find({}).toArray()

    return launches.map(({ date_utc, cores, rocket }) => ({
      cores,
      date_utc,
      rocket
    }))
  }
}
