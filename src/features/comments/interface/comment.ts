import { BaseEntity } from 'src/types'

export interface Comments extends BaseEntity {
  message: string
  postId: number
  id: number
  replies: Reply[]
}

export interface Reply {
  id: number
  commentId: number
  body: string
}
