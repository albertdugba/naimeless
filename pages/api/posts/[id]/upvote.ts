import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next/types'

const prisma = new PrismaClient()

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(400).json({ msg: 'Wrong request method' })
  }
  const postId: number = parseInt(String(req.query.id))

  const value = req.query.value
  console.log('vote value', { postId })
  async function main() {
    const vote = await prisma.vote.create({
      data: { postId, isUpvote: true, },
    })
    return res.status(200).json({ msg: 'Post upvoted successfully', vote })
  }

  main()
    .catch((e) => {
      console.log('error upvoting post', e)
      return res.status(500).json({ msg: `Error upvoting post`, e })
    })
    .finally(async () => {
      await prisma.$disconnect()
    })
}
