import { BaseEntity } from 'src/types'

export interface Comments extends BaseEntity {
  message: string
  postId: number
  id: number
  replies: Reply[]
}

export interface Reply extends BaseEntity {
  id: number
  commentId: number
  body: string
}
