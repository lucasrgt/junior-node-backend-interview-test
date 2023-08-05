import { HttpRequest } from '../contracts/http'

interface ValidateFieldsTypes {
  isValid: boolean
  missingField?: string
}

/** Valida os parâmetros requeridos para a criação de um objeto no sistema */
export const validateFields = <Params>(
  httpRequest: HttpRequest<Params>,
  requiredFields: string[]
): ValidateFieldsTypes => {
  for (const field of requiredFields) {
    const requestFields = httpRequest.body?.[field as keyof Params]

    if (
      requestFields === undefined ||
      requestFields === null ||
      requestFields === ''
    ) {
      return { isValid: false, missingField: field }
    }
  }

  return { isValid: true }
}
