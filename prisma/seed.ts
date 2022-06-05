import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import { faker } from '@faker-js/faker'

const posts = Array.from(Array(10).keys()).map((i) => ({
  message: `This is post ${i + 1} from prisma db`,
  author: `Test Name ${i + 1}`,
  published: true,
}))

async function main() {
  await prisma.post.createMany({
    data: posts,
    skipDuplicates: true,
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

export {}
