import { Router, Request, Response } from 'express'
import { container } from 'tsyringe'
import { FindResultsController } from '../../../../application/controllers/launch'

/** Get all launches route setup */
export default (router: Router) => {
  router.get('/results', async (req: Request, res: Response) => {
    const findResultsController = container.resolve(FindResultsController)

    const { body, statusCode } = await findResultsController.handle()

    res.status(statusCode).send(body)
  })
}
