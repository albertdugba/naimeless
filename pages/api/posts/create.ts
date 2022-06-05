import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(400).end()
  }
  const { message, author } = req.body

  async function main() {
    const post = await prisma.post.create({
      data: { message, author, published: true },
    })
    return res.status(200).json({ message: 'New post added!', post })
  }

  return main()
    .catch((e) => {
      console.log('error creating post', e)
      return res.status(500).end()
    })
    .finally(async () => {
      await prisma.$disconnect()
    })
}
