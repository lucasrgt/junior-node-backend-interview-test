import { Router, Request, Response } from 'express'

import { container } from 'tsyringe'
import { AddLaunchController } from '../../../application/controllers/launch'

/** Create launch route setup */
export default (router: Router) => {
  router.post('/', async (req: Request, res: Response) => {
    const addLaunchController = container.resolve(AddLaunchController)

    const { body, statusCode } = await addLaunchController.handle({
      body: req.body
    })

    res.status(statusCode).send(body)
  })
}
