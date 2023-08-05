import { Request, Response, NextFunction } from 'express'

/** Setup ContentType middleware */
export const contentType = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  res.type('json')
  next()
}
