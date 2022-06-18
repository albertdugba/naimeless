import { HTTP_METHODS } from '../shared/types'
import { NextApiRequest, NextApiResponse } from 'next'

export const withHttpMethod = (method: HTTP_METHODS) => (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== method) {
      console.log(
        `HTTP method ${method} is required for this endpoint, received ${req.method} instead)`
      )

      return res.status(400).end()
    }

    return handler(req, res)
  }
}
