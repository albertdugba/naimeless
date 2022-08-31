import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next/types'
const prisma = new PrismaClient()

export default function showPostDetails(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id: number = parseInt(String(req.query.id))

  async function main() {
    const data = await prisma.post.findUnique({
      where: { id },
      include: { photos: true },
    })
    return res.status(200).json({ msg: 'Successfully fetched post', data })
  }

  return main()
    .catch((e) => {
      console.log(`---------------- error retrieving post: `, e)
      return res.status(500).end()
    })
    .finally(async () => {
      await prisma.$disconnect()
    })
}
