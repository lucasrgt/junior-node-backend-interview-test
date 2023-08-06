import app from './config/app'
import setupDb from './config/setup-db'
import setupCron from './cron/launch-cron'
import { setupFakeData } from './config/setup-fake-data'

const port = process.env.SERVER_PORT || 5000

setupDb()
  .then(() => {
    app.listen(port, () =>
      console.log(`Server running at http://localhost:${port}`)
    )
  })
  .then(setupCron)
  .then(setupFakeData)
