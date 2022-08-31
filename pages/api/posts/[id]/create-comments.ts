/* eslint-disable import/no-anonymous-default-export */
import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next/types'
import { validateRoute } from 'src/lib/server'

const prisma = new PrismaClient()

export default validateRoute(
  (req: NextApiRequest, res: NextApiResponse, user) => {
    if (req.method !== 'POST') {
      return res.status(400).end()
    }
    const { message, postId } = req.body
    const data = req.body

    console.log('comment payload', data)

    async function main() {
      if (!message) {
        return res.status(400).json({ message: 'All fields are required!' })
      }
      const comment = await prisma.comment.create({
        data: { message, postId, userId: user.id },
      })
      return res.status(200).json({ message: 'New comment added!', comment })
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
)
