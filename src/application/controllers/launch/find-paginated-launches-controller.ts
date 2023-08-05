import { Controller } from '../../contracts/controller'
import { HttpRequest, HttpResponse } from '../../contracts/http'
import {
  FindAllLaunchesParams,
  FindAllLaunchesRepository
} from '../../../data/repositories/launch'
import {
  badRequest,
  HttpMessage,
  ok,
  serverError
} from '../../helpers/http-helper'
import { Launch } from '../../../domain/models'
import { inject, injectable } from 'tsyringe'

/** Tipo exclusivo do FindPaginatedLaunchesController para retornar as Launches paginadas */
type PaginatedLaunches = {
  results: Launch[]
  totalDocs: number
  page: number
  totalPages: number
  hasNext: boolean
  hasPrev: boolean
}

/** Retorna um documento paginado com todas as launches*/
@injectable()
export class FindPaginatedLaunchesController
  implements Controller<PaginatedLaunches>
{
  constructor(
    @inject('FindAllLaunchesRepository')
    private readonly findAllLaunchesRepository: FindAllLaunchesRepository
  ) {}
  async handle(
    request: HttpRequest<FindAllLaunchesParams>
  ): Promise<HttpResponse<PaginatedLaunches | HttpMessage>> {
    try {
      const query = request.query || {}
      const { limit, page, search } = query

      console.log('chegou aqui 1')

      const paginatedLaunches = await this.findAllLaunchesRepository.findAll({
        search,
        limit,
        page
      })

      console.log('chegou aqui 2')

      if (!paginatedLaunches) {
        return badRequest('Nenhum lançamento encontrado.')
      }

      return ok(paginatedLaunches)
    } catch (error) {
      return serverError()
    }
  }
}
