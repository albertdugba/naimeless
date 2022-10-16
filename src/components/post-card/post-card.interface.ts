import { Post } from '@/features/post/interface/post'

export interface CardProps {
  post: Post
  toggleCard: boolean
  setToggleCard: (value: boolean) => void
}
