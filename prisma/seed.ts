import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  log: ['query'],
})

const postData = Array.from(Array(10).keys()).map((i) => ({
  message: `This is post ${i + 1} from prisma db`,
  author: `Test Name ${i + 1}`,
  published: true,
  channelName: `general ${i + 1}`,
}))

const createPost = async (post: any) => {
  const photoData = Array.from(Array(10).keys()).map((i) => {
    const width = (Math.floor(Math.random() * 12) + 3) * 100
    const height = (Math.floor(Math.random() * 12) + 3) * 100
    return {
      caption: 'some image description',
      url: `https://source.unsplash.com/random/${width}x${height}?sig=incrementingIdentifiercloudinaryPublicId:${
        Math.random() * 0.5
      }`,
      width,
      height,
    }
  })
  const postWithPhoto = {
    ...post,
    photos: {
      create: photoData,
    },
  }
  await prisma.post.create({ data: postWithPhoto })
}

async function main() {
  await Promise.all(postData.map((post) => createPost(post)))
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
