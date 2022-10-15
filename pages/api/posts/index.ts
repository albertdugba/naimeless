import { NextApiRequest, NextApiResponse } from 'next/types'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default function (req: NextApiRequest, res: NextApiResponse) {
  console.log('feed', req.query.limit)
  async function main() {
    const posts = await prisma.post.findMany({
      orderBy: [{ createdAt: 'desc' }],
      include: {
        vote: { select: { vote: true } },
        comments: {
          orderBy: [{ createdAt: 'desc' }],
          include: { replies: true, user: true },
        },
      },
    })

    return res.status(200).json(posts)
  }

  main()
    .catch((e) => {
      throw e
    })
    .finally(async () => {
      await prisma.$disconnect()
    })
}
