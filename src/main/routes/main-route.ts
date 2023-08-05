import { Router, Request, Response } from 'express'

export default (router: Router): void => {
  /**
   * Returns the default success message for SpaceX API challenge
   */
  const defaultMessage = {
    message: 'Fullstack Challenge 🏅 - Space X API'
  }
  router.get('/', (req: Request, res: Response) => res.send(defaultMessage))
}
