import { Response } from 'express'

const generalResponse = (
  response: Response,
  data: any = [],
  message: string = '',
  response_type: string = 'success',
  toast: boolean = false,
  statusCode: number = 200,
) => {
  response.status(statusCode).send({
    data: data,
    message: message,
    toast: toast,
    response_type: response_type,
  })
}

export default generalResponse
