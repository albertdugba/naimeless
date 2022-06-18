import { prisma } from '../prismaClientInstance'

export const withPrismaClient = (handler) => {
  return async (req, res) => {
    try {
      req.prisma = prisma
      return handler(req, res)
    } catch (error) {
      res.status(500).end()
    }
  }
}
