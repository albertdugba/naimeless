import { NextApiRequest, NextApiResponse } from 'next/types'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default function (_: NextApiRequest, res: NextApiResponse) {
  async function main() {
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

  main()
    .catch((e) => {
      throw e
    })
    .finally(async () => {
      await prisma.$disconnect()
    })
}
