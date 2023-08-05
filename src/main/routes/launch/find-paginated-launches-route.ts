import { Router, Request, Response } from 'express'

import { container } from 'tsyringe'
import { FindPaginatedLaunchesController } from '../../../application/controllers/launch'
import { FindAllLaunchesParams } from '../../../data/repositories/launch'
import { HttpRequest } from '../../../application/contracts/http'

/** Get all launches route setup */
export default (router: Router) => {
  router.get('/', async (req: Request, res: Response) => {
    const findPaginatedLaunchesController = container.resolve(
      FindPaginatedLaunchesController
    )

    const findLaunchesParams: HttpRequest<FindAllLaunchesParams> = {
      query: {
        search: req.query.search ? String(req.query.search) : undefined,
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
