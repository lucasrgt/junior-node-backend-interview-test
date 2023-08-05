import { Controller } from '../../contracts/controller'
import { HttpResponse } from '../../contracts/http'
import { ChartData } from '../../../domain/models'
import { FindChartDataRepository } from '../../../data/repositories/launch'
import { HttpMessage, ok, serverError } from '../../helpers/http-helper'
import { inject, injectable } from 'tsyringe'

/** Retorna os dados que serão utilizados nos gráficos */
@injectable()
export class FindChartDataController implements Controller<ChartData> {
  constructor(
    @inject('FindChartDataRepository')
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
