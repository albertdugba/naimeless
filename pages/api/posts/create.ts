/* eslint-disable import/no-anonymous-default-export */
import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next/types'

const prisma = new PrismaClient()

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(400).end()
  }
  const { message, author, channelName } = req.body

  async function main() {
    if (!message || !author || !channelName) {
      return res.status(400).json({ message: 'All fields are required!' })
    }
    const post = await prisma.post.create({
      data: { message, author, channelName, published: true },
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
