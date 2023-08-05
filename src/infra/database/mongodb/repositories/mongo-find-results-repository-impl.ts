import { MongoHelper } from '../helpers/mongo-helper'
import { FindResultsRepository } from '../../../../data/repositories/launch'

export class MongoFindResultsRepository implements FindResultsRepository {
  async findAll(): Promise<{ success: number; failure: number }> {
    const launchesCollection = MongoHelper.getCollection('launches')

    const totalSuccesses = await launchesCollection.countDocuments({
      success: true
    })
    const totalFailures = await launchesCollection.countDocuments({
      success: false
    })

    return {
      success: totalSuccesses,
      failure: totalFailures
    }
  }
}
