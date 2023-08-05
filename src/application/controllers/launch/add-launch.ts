import { Controller } from '../../contracts/controller'
import { HttpRequest, HttpResponse } from '../../contracts/http'
import { Launch } from '../../../domain/models'
import {
  AddLaunchParams,
  AddLaunchRepository
} from '../../../data/repositories/launch'
import {
  badRequest,
  HttpMessage,
  ok,
  serverError
} from '../../helpers/http-helper'
import { validateFields } from '../../helpers/validate-fields-helper'

export class AddLaunchController implements Controller {
  constructor(private readonly addLaunchRepository: AddLaunchRepository) {}
  async handle(
    httpRequest: HttpRequest<AddLaunchParams>
  ): Promise<HttpResponse<Launch | HttpMessage>> {
    try {
      const requiredFields = [
        'flight_number',
        'name',
        'date_utc',
        'date_unix',
        'date_local',
        'date_precision',
        'upcoming'
      ]

      const { isValid, missingField } = validateFields<AddLaunchParams>(
        httpRequest,
        requiredFields
      )

      if (!isValid) {
        return badRequest(`Você esqueceu um parâmetro: ${missingField}`)
      }

      const launch = await this.addLaunchRepository.create(httpRequest.body!)

      return ok(launch)
    } catch (error) {
      return serverError()
    }
  }
}
