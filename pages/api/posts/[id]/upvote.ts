/* eslint-disable import/no-anonymous-default-export */
import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next/types'

const prisma = new PrismaClient()

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(400).json({ msg: 'Wrong request method' })
  }
  // const postId: number = parseInt(String(req.query.id))
  const { postId, isUpvote } = req.body
  // console.log('postId', postId)
  // console.log('isUpvote', isUpvote)

  async function main() {
    const voteValue: number = isUpvote ? 1 : -1
    const vote = await prisma.vote.create({
      data: { postId, isUpvote, vote: voteValue },
    })
    return res.status(200).json({ msg: 'Post upvoted successfully', vote })
  }

  main()
    .catch((e) => {
      return res.status(500).json({ msg: `Error upvoting post`, e })
    })
    .finally(async () => {
      await prisma.$disconnect()
    })
}
