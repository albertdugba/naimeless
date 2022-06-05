import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const posts = Array.from(Array(10).keys()).map((i) => ({
  message: 'Some post',
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
