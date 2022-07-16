import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next/types'

const prisma = new PrismaClient()
// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'DELETE') {
    return res.status(400).end()
  }

  const id = Number(req.query.id)

  async function main() {
    const json = await prisma.post.delete({ where: { id } })
    return res.status(200).json(json)
  }
  return main()
    .catch((e) => {
      console.log(`---------------- error deleting post: `, e)
      return res.status(500).end()
    })
    .finally(async () => {
      await prisma.$disconnect()
    })
}
