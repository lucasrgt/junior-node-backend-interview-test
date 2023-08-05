import cron from 'node-cron'
import fetchLaunchFromSpaceX from './launch-script'

/** This is a CRON setup for inserting latest launches from the official SpaceX API into our database. */
const setupCron = async (): Promise<void> => {
  try {
    console.log('CRON was setup. Awaiting schedule to perform a fetch.')

    /** Schedule to run daily at midnight (0:00 AM). */
    cron.schedule('0 0 * * *', async () => {
      console.log('\n[CRON] Running fetchSpaceXData at 0:00 AM every day.')
      try {
        await fetchLaunchFromSpaceX().then(() =>
          console.log('\n[CRON] Data fetched and saved successfully.')
        )
      } catch (error) {
        console.error('[CRON] An error occurred executing:', error)
        throw new Error('[CRON] Error executing CRON.')
      }
    })
  } catch (error) {
    console.log('[CRON] Could not setup CRON.')
    throw new Error()
  }
}

export default setupCron
