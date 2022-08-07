import bycrupt from 'bcrypt'
import jwt from 'jsonwebtoken'
import cookie from 'cookie'
import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next/types'
import { randomBgColorGenerator } from 'src/lib/server/helpers'

const prisma = new PrismaClient()

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(400).end()
  }
  const salt = bycrupt.genSaltSync()
  const avatarColor = randomBgColorGenerator([
    'purple',
    'pink',
    'teal',
    'orange',
  ])
  const { email, password } = req.body
  let user

  try {
    user = await prisma.user.create({
      data: {
        email,
        password: bycrupt.hashSync(password, salt),
        avatarColor,
      },
    })
  } catch (error) {
    res.status(401)
    res.json({ message: 'User already exists' })
    return
  }

  const token = jwt.sign(
    {
      email: user.email,
      id: user.id,
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

  console.log(user)

  res.json(user)
}
