import { HttpRequest, HttpResponse } from './http'
import { HttpMessage } from '../helpers/http-helper'

export interface Controller<Model> {
  handle(
    httpRequest: HttpRequest<unknown>
  ): Promise<HttpResponse<Model | HttpMessage>>
}
