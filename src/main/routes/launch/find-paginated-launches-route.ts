import { Router, Request, Response } from 'express'

import { container } from 'tsyringe'
import { FindPaginatedLaunchesController } from '../../../application/controllers/launch'

/** Get all launches route setup */
export default (router: Router) => {
  router.get('/', async (req: Request, res: Response) => {
    const findPaginatedLaunchesController = container.resolve(
      FindPaginatedLaunchesController
    )

    const findLaunchesParams = {
      query: {
        search: req.query.search ? String(req.query.search) : '',
        limit: req.query.limit ? Number(req.query.limit) : 5,
        page: req.query.page ? Number(req.query.page) : 1
      }
    }

    const { body, statusCode } = await findPaginatedLaunchesController.handle(
      findLaunchesParams
    )

    res.status(statusCode).send(body)
  })
}
