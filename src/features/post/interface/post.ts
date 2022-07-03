import { BaseEntity } from 'src/types'

export interface Post extends BaseEntity {
  id: number
  message: string
  published: boolean
  author: string
  channelName: string
  photos: Photo[]
  vote: Vote[]
}

interface Vote extends BaseEntity {
  id: number
  isUpvote: boolean
  postId: number
  value: string
}
interface Photo extends BaseEntity {
  id: number
  cloudinaryPublicId: string
  width: number
  height: number
  postId: number
  url: string
}
