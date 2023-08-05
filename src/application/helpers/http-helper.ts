import { HttpResponse } from '../contracts/http'

export type HttpMessage = {
  message: string
}
export const badRequest = (message: string): HttpResponse<HttpMessage> => ({
  statusCode: 400,
  body: { message: message }
})

export const serverError = (): HttpResponse<HttpMessage> => ({
  statusCode: 500,
  body: {
    message:
      'Ops! Ocorreu algum erro do nosso lado. Poderia tentar novamente em alguns instantes?'
  }
})

export const ok = (data: any): HttpResponse<any> => ({
  statusCode: 200,
  body: data
})

export const noContent = (): HttpResponse<any> => ({
  statusCode: 204,
  body: null
})
