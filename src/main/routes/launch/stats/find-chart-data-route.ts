import { Router, Request, Response } from 'express'
import { container } from 'tsyringe'
import { FindChartDataController } from '../../../../application/controllers/launch'

/** Get all launches route setup */
export default (router: Router) => {
  router.get('/stats', async (req: Request, res: Response) => {
    const findLaunchChartDataController = container.resolve(
      FindChartDataController
    )

    const { body, statusCode } = await findLaunchChartDataController.handle()

    res.status(statusCode).send(body)
  })
}
