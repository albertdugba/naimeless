import { BaseEntity } from 'src/types'

export interface Comments extends BaseEntity {
  message: string
  postId: number
  id: number
}
