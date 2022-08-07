import { NextApiResponse, NextApiRequest } from 'next/types'
import jwt from 'jsonwebtoken'
import cookie from 'cookie'
import bcrypt from 'bcrypt'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body

  const user = await prisma.user.findUnique({ where: { email } })
  if (user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        createdAt: Date.now(),
      },
      'secret',
      { expiresIn: '8h' }
    )

    res.setHeader(
      'Set-Cookie',
      cookie.serialize('NAIMESLESS_ACCESS_TOKEN', token, {
        httpOnly: true,
        maxAge: 8 * 60 * 60,
        path: '/',
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
      })
    )
    res.json(user)
  } else {
    res.status(401)
    res.json({ message: 'Email or password is wrong' })
  }
}
