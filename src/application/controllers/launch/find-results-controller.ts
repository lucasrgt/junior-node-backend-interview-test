import { Controller } from '../../contracts/controller'
import { HttpResponse } from '../../contracts/http'
import { FindResultsRepository } from '../../../data/repositories/launch'
import { HttpMessage, ok, serverError } from '../../helpers/http-helper'
import { Result } from '../../../domain/models'
import { inject, injectable } from 'tsyringe'

/** Encontra os resultados de lançamento, nesse caso sucessos e falhas */
@injectable()
export class FindResultsController implements Controller<Result> {
  constructor(
    @inject('FindResultsRepository')
    private readonly findResultsRepository: FindResultsRepository
  ) {}
  async handle(): Promise<HttpResponse<Result | HttpMessage>> {
    try {
      const result: Result = await this.findResultsRepository.findAll()
      return ok(result)
    } catch (error) {
      return serverError()
    }
  }
}
