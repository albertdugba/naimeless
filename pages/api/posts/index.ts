import { NextApiRequest, NextApiResponse } from 'next/types'
import { PrismaClient } from '@prisma/client'
import { validateRoute } from 'src/lib/server'

const prisma = new PrismaClient()

export default validateRoute(
  async (_: NextApiRequest, res: NextApiResponse, user) => {
    console.log('adsf', user)
    const posts = await prisma.post.findMany({
      orderBy: [{ createdAt: 'desc' }],
      include: {
        vote: { select: { vote: true } },
        user: {
          select: { id: true, avatarColor: true },
        },
        comments: {
          include: { replies: true },
        },
      },
    })

    return res.status(200).json(posts)
  }
)
