import { Controller } from '../../contracts/controller'
import { HttpResponse } from '../../contracts/http'
import { ChartData } from '../../../domain/models'
import { FindChartDataRepository } from '../../../data/repositories/launch'
import { HttpMessage, ok, serverError } from '../../helpers/http-helper'

export class FindChartDataController implements Controller {
  constructor(
    private readonly findChartDataRepository: FindChartDataRepository
  ) {}
  async handle(): Promise<HttpResponse<ChartData | HttpMessage>> {
    try {
      const chartData = await this.findChartDataRepository.findAll()
      return ok(chartData)
    } catch (error) {
      return serverError()
    }
  }
}
