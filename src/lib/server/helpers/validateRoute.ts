import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next/types'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

export const validateRoute = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.cookies.NAIMESLESS_ACCESS_TOKEN
    if (token) {
      let user
      try {
        const { id } = jwt.verify(token, 'secret')
        user = await prisma.user.findUnique({ where: { id } })

        if (!user) {
          throw new Error('Not authenticated')
        }
      } catch (error) {
        res.status(401)
        res.json({ message: 'Not authorized' })
        return
      }
      return handler(req, res, user)
    }

    res.status(401)
    res.json({ message: 'Not authorized' })
  }
}
