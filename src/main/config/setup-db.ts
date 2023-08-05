import { MongoHelper } from '../../infra/database/mongodb/helpers/mongo-helper'

const setupDb = async () => {
  await MongoHelper.connect(
    process.env.MONGO_URL || 'mongodb://localhost:27017/spacex-api'
  )
}

export default setupDb
