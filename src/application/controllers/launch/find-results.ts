import { Controller } from '../../contracts/controller'
import { HttpResponse } from '../../contracts/http'
import { FindResultsRepository } from '../../../data/repositories/launch'
import { HttpMessage, ok, serverError } from '../../helpers/http-helper'
import { Result } from '../../../domain/models'

export class FindResultsController implements Controller {
  constructor(private readonly findResultsRepository: FindResultsRepository) {}
  async handle(): Promise<HttpResponse<Result | HttpMessage>> {
    try {
      const chartData = await this.findResultsRepository.findAll()
      return ok(chartData)
    } catch (error) {
      return serverError()
    }
  }
}
