import { BaseEntity } from 'src/types'

export interface Post extends BaseEntity {
  id: number
  message: string
  published: boolean
  author: string
  channelName: string
  photos: Photo[]
}

interface Photo extends BaseEntity {
  id: number
  cloudinaryPublicId: string
  width: number
  height: number
  postId: number
  url: string
}
