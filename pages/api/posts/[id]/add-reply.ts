/* eslint-disable import/no-anonymous-default-export */
import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next/types'

const prisma = new PrismaClient()

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(400).end()
  }
  const { body, commentId } = req.body
  const data = req.body

  console.log('comment payload', data)

  async function main() {
    if (!body) {
      return res.status(400).json({ message: 'All fields are required!' })
    }
    const reply = await prisma.reply.create({
      data: { body, commentId },
    })
    return res.status(200).json({ message: 'New reply added!', reply })
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
