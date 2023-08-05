import app from './config/app'
import setupDb from './config/setup-db'
import setupCron from './cron/launch-cron'

const port = process.env.SERVER_PORT || 5000

setupDb()
  .then(() => {
    app.listen(port, () =>
      console.log(`Server running at http://localhost:${port}`)
    )
  })
  .then(setupCron)
